<template>
	<div class="register absolute">
		<div class="shading">
			<div class="pictrue acea-row row-center-wrapper">
				<image src="/static/images/logo2.png" />
			</div>
		</div>
		<div class="whiteBg">
			<div class="title">Lấy lại mật khẩu</div>
			<div class="list">
				<div class="item">
					<div class="acea-row row-middle">
						<image src="/static/images/phone_1.png"></image>
						<input type="text" placeholder="Nhập số điện thoại di động" v-model="account" />
					</div>
				</div>
				<div class="item">

					<div class="acea-row row-middle">
						<image src="/static/images/code_2.png"></image>
						<input type="text" placeholder="Điền vào mã xác minh" class="codeIput" v-model="captcha" />
						<button class="code" :disabled="disabled" :class="disabled === true ? 'on' : ''" @click="code">
							{{ text }}
						</button>
					</div>
				</div>
				<div class="item">
					<div class="acea-row row-middle">
						<image src="/static/images/code_2.png"></image>
						<input type="password" placeholder="Điền vào mật khẩu mới" v-model="password" />
					</div>
				</div>
				<div class="item" v-if="isShowCode">
					<div class="align-left">
						<input type="text" placeholder="Điền vào mã xác minh" class="codeIput" v-model="codeVal" />
						<div class="code" @click="again"><img :src="codeUrl" /></div>
					</div>
				</div>
			</div>
			<div class="logon" @click="registerReset">Xác nhận</div>
			<div class="tip">
				<span class="font-color-red" @click="back">Lập tức đăng nhập</span>
			</div>
		</div>
		<div class="bottom"></div>
	</div>
</template>

<script>
	import sendVerifyCode from "@/mixins/SendVerifyCode";
	import {
		registerVerify,
		registerReset,
		getCodeApi
	} from "@/api/user";
	// import { validatorDefaultCatch } from "@/utils/dialog";
	// import attrs, { required, alpha_num, chs_phone } from "@utils/validate";
	// import { VUE_APP_API_URL } from "@utils";

	export default {
		name: "RetrievePassword",
		data: function() {
			return {
				account: "",
				password: "",
				captcha: "",
				keyCode: "",
				codeUrl: "",
				codeVal: "",
				isShowCode: false
			};
		},
		mixins: [sendVerifyCode],
		mounted: function() {
			this.getCode();
		},
		methods: {
			back() {
				uni.navigateBack();
			},
			again() {
				this.codeUrl =
					VUE_APP_API_URL + "/captcha?" + this.keyCode + Date.parse(new Date());
				console.log(this.codeUrl);
			},
			getCode() {
				getCodeApi()
					.then(res => {
						this.keyCode = res.data.key;
					})
					.catch(res => {
						this.$dialog.error(res.msg);
					});
			},
			async registerReset() {
				var that = this;
				if (!that.account) return that.$util.Tips({
					title: 'Xin vui lòng điền vào số điện thoại di động'
				});
				// if (!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(that.account)) return that.$util.Tips({
				// 	title: 'Xin vui lòng điền vào số điện thoại di động'
				// });
				if (!that.captcha) return that.$util.Tips({
					title: 'Hãy điền vào captcha'
				});
				registerReset({
						account: that.account,
						captcha: that.captcha,
						password: that.password,
						code: that.codeVal
					})
					.then(res => {
						that.$util.Tips({
							title: res.msg
						}, {
							tab: 3
						})
					})
					.catch(res => {
						that.$util.Tips({
							title: res
						})
					});
			},
			async code() {
				let that = this;
				if (!that.account) return that.$util.Tips({
					title: 'Xin vui lòng điền vào số điện thoại di động'
				});
				// if (!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(that.account)) return that.$util.Tips({
				// 	title: 'Vui lòng nhập đúng số điện thoại'
				// });
				if (that.formItem == 2) that.type = "register";
				await registerVerify({
						phone: that.account,
						type: that.type,
						key: that.keyCode,
						code: that.codeVal
					})
					.then(res => {
						that.$dialog.success(res.msg);
						that.sendCode();
					})
					.catch(res => {
						console.log(res, 'res')
						// if (res.data.status === 402) {
						// 	that.codeUrl = `${VUE_APP_API_URL}/sms_captcha?key=${that.keyCode}`;
						// 	that.isShowCode = true;
						// }
						that.$util.Tips({
							title: res
						});
					});
			},
		}
	};
</script>
<style scoped>
	.code img {
		width: 100%;
		height: 100%;
	}
</style>

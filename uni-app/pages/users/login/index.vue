<template>
	<div class="register absolute">
		<div class="shading">
			<div class="pictrue acea-row row-center-wrapper">
				<image :src="logoUrl" v-if="logoUrl" />
				<image src="/static/images/logo2.png" v-else />
			</div>
		</div>
		<div class="whiteBg" v-if="formItem === 1">
			<div class="title acea-row row-center-wrapper">
				<div class="item" :class="current === index ? 'on' : ''" v-for="(item, index) in navList" @click="navTap(index)"
				 :key="index">
					{{ item }}
				</div>
			</div>
			<div class="list" :hidden="false">
				<form @submit.prevent="submit">
					<div class="item">
						<div class="acea-row row-middle">
							<image src="/static/images/phone_1.png"></image>
							<input type="text" placeholder="Nhập số điện thoại di động" v-model="account" required />
						</div>
					</div>
					<div class="item">
						<div class="acea-row row-middle">
							<image src="/static/images/code_2.png"></image>
							<input type="password" placeholder="Điền vào mật khẩu đăng nhập" v-model="password" required />
						</div>
					</div>
				</form>
			<!-- 	<navigator class="forgetPwd" hover-class="none" url="/pages/customer_list/index">
					<span class="iconfont icon-wenti"></span>Trả lời
				</navigator> -->
			</div>
			<div class="list" :hidden="true">
				<div class="item">
					<div class="acea-row row-middle">
						<image src="/static/images/phone_1.png"></image>
						<input type="text" placeholder="Nhập số điện thoại di động" v-model="account" />
					</div>
				</div>
				<div class="item"  v-if="false">
					<div class="acea-row row-middle">
						<image src="/static/images/code_2.png"></image>
						<input type="text" placeholder="Điền vào mã xác minh" class="codeIput" v-model="captcha" />
						<button class="code" :disabled="disabled" :class="disabled === true ? 'on' : ''" @click="code">
							{{ text }}
						</button>
					</div>
				</div>
				<div class="item" v-if="false">
					<div class="acea-row row-middle">
						<image src="/static/images/code_2.png"></image>
						<input type="text" placeholder="填写验证码" class="codeIput" v-model="codeVal" />
						<div class="code" @click="again"><img :src="codeUrl" /></div>
					</div>
				</div>
			</div>
			<div class="logon" @click="loginMobile" :hidden="current !== 1">Đăng nhập</div>
			<div class="logon" @click="submit" :hidden="current === 1">Đăng nhập</div>
			<div class="tip">
				Không có tài khoản?
				<span @click="formItem = 2" class="font-color-red">Đăng ký ngay lập tức</span>
			</div>
		</div>
		<div class="whiteBg" v-else>
			<div class="title">Đăng ký tài khoản</div>
			<div class="list">
				<div class="item">
					<div class="acea-row row-middle">
						<image src="/static/images/phone_1.png"></image>
						<input type="text" placeholder="Nhập số điện thoại di động" v-model="account" />
					</div>
				</div>
				<div class="item" v-if='false'>
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
						<image src="/static/images/code_1.png"></image>
						<input type="password" placeholder="Mật khẩu đăng nhập" v-model="password" />
					</div>
				</div>
				<div class="item" v-if="false">
					<div class="acea-row row-middle">
						<image src="/static/images/code_2.png"></image>
						<input type="text" placeholder="Điền vào mã xác minh" class="codeIput" v-model="codeVal" />
						<div class="code" @click="again"><img :src="codeUrl" /></div>
					</div>
				</div>
			</div>
			<div class="logon" @click="register">Đăng ký</div>
			<div class="tip">
				Tài khoản có sẵn?
				<span @click="formItem = 1" class="font-color-red">Lập tức đăng nhập</span>
			</div>
		</div>
		<div class="bottom"></div>
	</div>
</template>
<script>
	import dayjs from "@/plugin/dayjs/dayjs.min.js";
	import sendVerifyCode from "@/mixins/SendVerifyCode";
	import {
		loginH5,
		loginMobile,
		registerVerify,
		register,
		getCodeApi,
		getUserInfo
	} from "@/api/user";
	import attrs, {
		required,
		alpha_num,
		chs_phone
	} from "@/utils/validate";
	import {
		validatorDefaultCatch
	} from "@/utils/dialog";
	import {
		getLogo
	} from "@/api/public";
	// import cookie from "@/utils/store/cookie";
	import {
		VUE_APP_API_URL
	} from "@/utils";

	const BACK_URL = "login_back_url";

	export default {
		name: "Login",
		mixins: [sendVerifyCode],
		data: function() {
			return {
				navList: ["Đăng nhập tài khoản"],
				current: 1,
				account: "",
				password: "",
				captcha: "",
				formItem: 1,
				type: "login",
				logoUrl: "",
				keyCode: "",
				codeUrl: "",
				codeVal: "",
				isShowCode: false
			};
		},
		watch:{
			formItem:function(nval,oVal){
				if(nval == 1){
					this.type = 'login'
				}else{
					this.type = 'register'
				}
			}
		},
		mounted: function() {
			this.getCode();
			this.getLogoImage();
		},
		methods: {
			again() {
				this.codeUrl =
					VUE_APP_API_URL +
					"/sms_captcha?" +
					"key=" +
					this.keyCode +
					Date.parse(new Date());
			},
			getCode() {
				let that = this
				getCodeApi()
					.then(res => {
						that.keyCode = res.data.key;
					})
					.catch(res => {
						that.$util.Tips({
							title: res
						});
					});
			},
			async getLogoImage() {
				let that = this;
				getLogo(2).then(res => {
					that.logoUrl = res.data.logo_url;
				});
			},
			async loginMobile() {
				let that = this;
				if (!that.account) return that.$util.Tips({
					title: 'Xin vui lòng điền vào số điện thoại di động'
				});
				// if (!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(that.account)) return that.$util.Tips({
				// 	title: 'Vui lòng nhập đúng số điện thoại'
				// });
				// if (!that.captcha) return that.$util.Tips({
				// 	title: '请填写验证码'
				// });
				// if (!/^[\w\d]+$/i.test(that.captcha)) return that.$util.Tips({
				// 	title: '请输入正确的验证码'
				// });
				loginMobile({
						phone: that.account,
						captcha: that.captcha,
						spread: that.$Cache.get("spread")
					})
					.then(res => {
						let data = res.data;
						let newTime = Math.round(new Date() / 1000);
						that.$store.commit("LOGIN", {
							'token': data.token,
							'time': dayjs(data.expires_time) - newTime
						});
						const backUrl = that.$Cache.get(BACK_URL) || "/pages/index/index";
						that.$Cache.clear(BACK_URL);
						getUserInfo().then(res => {
							that.$store.commit("SETUID", res.data.uid);
							if (backUrl === '/pages/index/index' || backUrl === '/pages/order_addcart/order_addcart' || backUrl ===
								'/pages/user/index') {

								uni.switchTab({
									url: backUrl
								});

							} else {
								uni.switchTab({
									url: '/pages/index/index'
								});
							}
						})
					})
					.catch(res => {
						that.$util.Tips({
							title: res
						});
					});
			},
			async register() {
				let that = this;
				if (!that.account) return that.$util.Tips({
					title: 'Xin vui lòng điền vào số điện thoại di động'
				});
				// if (!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(that.account)) return that.$util.Tips({
				// 	title: 'Vui lòng nhập đúng số điện thoại'
				// });
				// if (!that.captcha) return that.$util.Tips({
				// 	title: '请填写验证码'
				// });
				// if (!/^[\w\d]+$/i.test(that.captcha)) return that.$util.Tips({
				// 	title: '请输入正确的验证码'
				// });
				if (!that.password) return that.$util.Tips({
					title: 'Xin vui lòng điền vào mật khẩu'
				});
				// if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/i.test(that.password)) return that.$util.Tips({
				// 	title: '您输入的密码过于简单'
				// });
				register({
						account: that.account,
						captcha: that.captcha,
						password: that.password,
						spread: that.$Cache.get("spread")
					})
					.then(res => {
						that.$util.Tips({
							title: res
						});
						that.formItem = 1;
					})
					.catch(res => {
						that.$util.Tips({
							title: res
						});
					});
			},
			async code() {
				let that = this;
				if (!that.account) return that.$util.Tips({
					title: 'Xin vui lòng điền vào mật khẩu'
				});
				// if (!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(that.account)) return that.$util.Tips({
				// 	title: 'Vui lòng nhập đúng số điện thoại'
				// });
				if (that.formItem == 2) that.type = "register";
				
				await registerVerify({
						phone: that.account,
						type: that.type,
						// key: that.keyCode,
						// code: that.codeVal
					})
					.then(res => {
						that.$util.Tips({title:res.msg});
						that.sendCode();
					})
					.catch(res => {
						console.log(res,'res')
						// if (res.data.status === 402) {
						// 	that.codeUrl = `${VUE_APP_API_URL}/sms_captcha?key=${that.keyCode}`;
						// 	that.isShowCode = true;
						// }
						that.$util.Tips({title:res});
					});
			},
			navTap: function(index) {
				this.current = index;
			},
			async submit() {
				let that = this;
				if (!that.account) return that.$util.Tips({
					title: 'Xin vui lòng điền vào tài khoản'
				});
				if (!/^[\w\d]{5,16}$/i.test(that.account)) return that.$util.Tips({
					title: 'Vui lòng nhập đúng tài khoản'
				});
				if (!that.password) return that.$util.Tips({
					title: 'Xin vui lòng điền vào mật khẩu'
				});
				loginH5({
						account: that.account,
						password: that.password
					})
					.then(({
						data
					}) => {
						let newTime = Math.round(new Date() / 1000);
						that.$store.commit("LOGIN", {
							'token': data.token,
							'time': dayjs(data.expires_time) - newTime
						});
						const backUrl = that.$Cache.get(BACK_URL) || "/pages/index/index";
						that.$Cache.clear(BACK_URL);
						getUserInfo().then(res => {
							that.$store.commit("SETUID", res.data.uid);
							if (backUrl === '/pages/index/index' || backUrl === '/pages/order_addcart/order_addcart' || backUrl ==='/pages/user/index') {
								uni.switchTab({
									url: backUrl
								});
							} else {
								uni.switchTab({
									url: '/pages/index/index'
								});
							}
						})
					})
					.catch(e => {
						that.$util.Tips({
							title: e
						});
					});
			}
		}
	};
</script>
<style lang="scss">
	.code img {
		width: 100%;
		height: 100%;
	}

	.acea-row.row-middle {
		input {
			margin-left: 20rpx;
		}
	}
</style>

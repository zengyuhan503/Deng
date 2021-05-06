<template>
	<view>
		<form @submit="editPwd" report-submit='true'>
			<view class="ChangePassword">
				<view class="list">
					<view class="item">
						<input type='number' placeholder='Số điện thoại di động' placeholder-class='placeholder' v-model="phone"></input>
					</view>
					<view class="item acea-row row-between-wrapper">
						<input type='number' placeholder='Điền vào mã xác minh' placeholder-class='placeholder' class="codeIput" v-model="captcha"></input>
						<button class="code font-color" :class="disabled === true ? 'on' : ''" :disabled='disabled' @click="code">
							{{ text }}
						</button>
					</view>
				</view>
				<button form-type="submit" class="confirmBnt bg-color">Xác nhận ràng buộc</button>
			</view>
		</form>
		<!-- #ifdef MP -->
		<authorize @onLoadFun="onLoadFun" :isAuto="isAuto" :isShowAuth="isShowAuth" @authColse="authColse"></authorize>
		<!-- #endif -->
	</view>
</template>

<script>
	import sendVerifyCode from "@/mixins/SendVerifyCode";
	import {
		registerVerify,
		bindingPhone,
		verifyCode
	} from '@/api/api.js';
	import {
		toLogin
	} from '@/libs/login.js';
	import {
		mapGetters
	} from "vuex";
	// #ifdef MP
	import authorize from '@/components/Authorize';
	// #endif
	export default {
		mixins: [sendVerifyCode],
		components: {
			// #ifdef MP
			authorize
			// #endif
		},
		data() {
			return {
				phone:'',
				captcha:'',
				isAuto: false, //没有授权的不会自动授权
				isShowAuth: false, //是否隐藏授权
				key: ''
			};
		},
		computed: mapGetters(['isLogin']),
		onLoad() {
			if (this.isLogin) {
				verifyCode().then(res=>{
					this.$set(this, 'key', res.data.key)
				});
			} else {
				// #ifdef H5 || APP-PLUS
				toLogin();
				// #endif 
				// #ifdef MP
				this.isAuto = true;
				this.$set(this, 'isShowAuth', true)
				// #endif
			}
		},
		methods: {
			onLoadFun:function(){},
			// 授权关闭
			authColse: function(e) {
				this.isShowAuth = e
			},
			editPwd: function() {
				let that = this;
				if (!that.phone) return that.$util.Tips({
					title: 'Xin vui lòng điền vào số điện thoại di động！'
				});
				if (!(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(that.phone))) return that.$util.Tips({
					title: 'Vui lòng nhập đúng số điện thoại！'
				});
				if (!that.captcha) return that.$util.Tips({
					title: 'Hãy điền vào captcha'
				});
				bindingPhone({
					phone: that.phone,
					captcha: that.captcha
				}).then(res => {
					if (res.data !== undefined && res.data.is_bind) {
						uni.showModal({
							title: 'Ràng buộc tài khoản',
							content: res.msg,
							confirmText: 'trị',
							success(res) {
								if (res.confirm) {
									bindingPhone({
										phone: that.phone,
										captcha: that.captcha,
										step: 1
									}).then(res => {
										return that.$util.Tips({
											title: res.msg,
											icon: 'success'
										}, {
											tab: 5,
											url: '/pages/user_info/index'
										});
									}).catch(err => {
										return that.$util.Tips({
											title: err
										});
									})
								} else if (res.cancel) {
									return that.$util.Tips({
										title: 'Bạn đã hủy bỏ ràng buộc！'
									}, {
										tab: 5,
										url: '/pages/user_info/index'
									});
								}
							}
						});
					} else
						return that.$util.Tips({
							title: 'Ràng buộc thành công！',
							icon: 'success'
						}, {
							tab: 5,
							url: '/pages/user_info/index'
						});
				}).catch(err => {
					return that.$util.Tips({
						title: err
					});
				})
			},
			/**
			 * 发送验证码
			 * 
			 */
			async code() {
				let that = this;
				if (!that.phone) return that.$util.Tips({
					title: 'Xin vui lòng điền vào số điện thoại di động！'
				});
				if (!(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(that.phone))) return that.$util.Tips({
					title: 'Vui lòng nhập đúng số điện thoại！'
				});
				await registerVerify(that.phone, 'reset', that.key, that.captcha).then(res => {
					that.$util.Tips({
						title: res.msg
					});
					that.sendCode();
				}).catch(err => {
					return that.$util.Tips({
						title: err
					});
				});
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fff !important;
	}

	.ChangePassword .phone {
		font-size: 32rpx;
		font-weight: bold;
		text-align: center;
		margin-top: 55rpx;
	}

	.ChangePassword .list {
		width: 580rpx;
		margin: 53rpx auto 0 auto;
	}

	.ChangePassword .list .item {
		width: 100%;
		height: 110rpx;
		border-bottom: 2rpx solid #f0f0f0;
	}

	.ChangePassword .list .item input {
		width: 100%;
		height: 100%;
		font-size: 32rpx;
	}

	.ChangePassword .list .item .placeholder {
		color: #b9b9bc;
	}

	.ChangePassword .list .item input.codeIput {
		width: 340rpx;
	}

	.ChangePassword .list .item .code {
		font-size: 32rpx;
		background-color: #fff;
	}

	.ChangePassword .list .item .code.on {
		color: #b9b9bc !important;
	}

	.ChangePassword .confirmBnt {
		font-size: 32rpx;
		width: 580rpx;
		height: 90rpx;
		border-radius: 45rpx;
		color: #fff;
		margin: 92rpx auto 0 auto;
		text-align: center;
		line-height: 90rpx;
	}
</style>

<template>
	<view>
		<view class="payment" :class="pay_close ? 'on' : ''">
			<view class="title acea-row row-center-wrapper">
				Chọn phương thức thanh toán<text class="iconfont icon-guanbi" @click='close'></text>
			</view>
			<view class="item acea-row row-between-wrapper" @click="item.value=='vnpays'?'':goPay(item.number || 0 , item.value)" v-for="(item,index) in payMode"
			 :key="index">
				<view class="left acea-row row-between-wrapper">
					<view class="iconfont" :class="item.icon"></view>
					<view class="text">
						<view class="name">{{item.name}}</view>
						<view class="info" v-if="item.number">
							{{item.title}} <span class="money">₫{{ item.number }}</span>
						</view>
						<view class="info" v-else>{{item.title}}</view>
					</view>
				</view>
				<view class="iconfont icon-xiangyou"></view>
				<view class="vnpayConfig" v-if="item.value=='vnpays'" >
						  <view class="uni-list" >
								<view class="" style="height: 30px;line-height: 30px;">
									Hãy chọn phương thức thanh toán trực tuyến：
								</view>
										 <radio-group :value='vnpay' @change="radioChange">
												 <label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
														 <view>
																 <radio :value="item.value" :checked="item.checked === vnpay" />
														 </view>
														 <view>{{item.name}}</view>
												 </label>
										 </radio-group>
								 </view>
				</view>
			</view>
		</view>
		<view class="mask" @click='close' v-if="pay_close"></view>
	</view>
</template>

<script>
	import {
		orderPay
	} from '@/api/order.js';
	export default {
		props: {
			payMode: {
				type: Array,
				default: function() {
					return [];
				}
			},
			pay_close: {
				type: Boolean,
				default: false,
			},
			order_id: {
				type: String,
				default: ''
			},
			totalPrice: {
				type: String,
				default: '0'
			}
		},
		data() {
			return {
				
					vnplayInfo:{},
					vnpayActive:false,
					vnpay:"",
					items: [{
											value: 'zalo',
											name: 'ZALO Trả tiền'
									},
									{
											value: 'momo',
											name: 'MOMO Trả tiền',
									},
									{
											value: 'vietcombank',
											name: 'VietCombank Trả tiền'
									},
									{
											value: 'vietinbankipay',
											name: 'VietInbankiPay Trả tiền'
									},
									{
											value: 'vtpay',
											name: 'VTpay Trả tiền'
									},
									{
											value: 'tpbank',
											name: 'TPBANK Trả tiền'
									},
									{
											value: 'acbbank',
											name: 'ACBbank Trả tiền'
									}
							],
			};
		},
		methods: {
			radioChange(e){
				this.vnpay=e.detail.value
				this.goPay(0,'vnpay')
			},
			close: function() {
				this.$emit('onChangeFun', {
					action: 'payClose'
				});
			},
			goPay: function(number, paytype) {
				console.log(number, paytype)
				let that = this;
				if(paytype=='vnpays') {
					 that.$util.Tips({
						title: 'Hãy chọn cách thanh toán trực tuyến'
					});
					return false;
				}
				if (!that.order_id) return that.$util.Tips({
					title: 'Hãy chọn đơn đặt hàng cần thanh toán'
				});
				if (paytype == 'yue' && parseFloat(number) < parseFloat(that.totalPrice)) return that.$util.Tips({
					title: 'Số dư là không đủ！'
				});
				uni.showLoading({
					title: 'Trong các khoản thanh toán'
				});
				var params={
					uni: that.order_id,
					paytype: paytype,
					// #ifdef MP 
					'from': 'routine',
					// #endif
					// #ifdef H5 || APP-PLUS
					'from': this.$wechat.isWeixin() ? 'weixin' : 'weixinh5',
					// #endif
				}
				if(paytype=='vnpay'){
					params.type=this.vnpay
				}
				orderPay(params).then(res => {
					switch (paytype) {
						case 'weixin':
							if (res.data.result === undefined) return that.$util.Tips({
								title: 'Thiếu thông số thanh toán'
							});
							// #ifdef MP || APP-PLUS
							let jsConfig = res.data.result.jsConfig;
							uni.requestPayment({
								timeStamp: jsConfig.timestamp,
								nonceStr: jsConfig.nonceStr,
								package: jsConfig.package,
								signType: jsConfig.signType,
								paySign: jsConfig.paySign,
								success: function(res) {
									uni.hideLoading();
									return that.$util.Tips({
										title: res.msg,
										icon: 'success'
									}, () => {
										that.$emit('onChangeFun', {
											action: 'pay_complete'
										});
									});
								},
								fail: function(e) {
									uni.hideLoading();
									return that.$util.Tips({
										title: 'Thiếu số thanh toán hủy bỏ thanh toán'
									}, () => {
										that.$emit('onChangeFun', {
											action: 'pay_fail'
										});
									});
								},
								complete: function(e) {
									uni.hideLoading();
									if (e.errMsg == 'requestPayment:cancel') return that.$util.Tips({
										title: 'Thiếu số thanh toán hủy bỏ thanh toán'
									}, () => {
										that.$emit('onChangeFun', {
											action: 'pay_fail'
										});
									});
								},
							});
							// #endif
							// #ifdef H5
							let data = res.data;
							if (data.status == "WECHAT_H5_PAY") {
								uni.hideLoading();
								location.replace(data.result.jsConfig.mweb_url);
								return that.$util.Tips({
									title: "Thanh toán thành công",
									icon: 'success'
								}, () => {
									that.$emit('onChangeFun', {
										action: 'pay_complete'
									});
								});
							} else {
								that.$wechat.pay(data.result.jsConfig)
									.finally(() => {
										return that.$util.Tips({
											title: "Thanh toán thành công",
											icon: 'success'
										}, () => {
											that.$emit('onChangeFun', {
												action: 'pay_complete'
											});
										});
									})
									.catch(function() {
										return that.$util.Tips({
											title: 'Thanh toán thất bại'
										});
									});
							}
							// #endif
							break;
						case 'yue':
							uni.hideLoading();
							return that.$util.Tips({
								title: res.msg,
								icon: 'success'
							}, () => {
								that.$emit('onChangeFun', {
									action: 'pay_complete'
								});
							});
							break;
						case 'offline':
							uni.hideLoading();
							return that.$util.Tips({
								title: res.msg,
								icon: 'success'
							}, () => {
								that.$emit('onChangeFun', {
									action: 'pay_complete'
								});
							});
							break;
						case "vnpay":
								uni.hideLoading();
								var vnPay=res.data.pay_info;
								console.log(vnPay)
							 vnPay=JSON.parse(vnPay)
								var vnPayUrl=vnPay.pageurl
								location.href =vnPayUrl
								this.vnplayInfo=vnPay
								this.vnpayActive=true;
								break;
					}
				}).catch(err => {
					uni.hideLoading();
					return that.$util.Tips({
						title: err
					}, () => {
						that.$emit('onChangeFun', {
							action: 'pay_fail'
						});
					});
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.payment {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		border-radius: 16rpx 16rpx 0 0;
		background-color: #fff;
		padding-bottom: 60rpx;
		z-index: 99;
		transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
		transform: translate3d(0, 100%, 0);
		height: 450px;
	}

	.payment.on {
		transform: translate3d(0, 0, 0);
	}

	.payment .title {
		text-align: center;
		height: 123rpx;
		font-size: 32rpx;
		color: #282828;
		font-weight: bold;
		padding-right: 30rpx;
		margin-left: 30rpx;
		position: relative;
		border-bottom: 1rpx solid #eee;
	}

	.payment .title .iconfont {
		position: absolute;
		right: 30rpx;
		top: 50%;
		transform: translateY(-50%);
		font-size: 43rpx;
		color: #8a8a8a;
		font-weight: normal;
	}

	.payment .item {
		border-bottom: 1rpx solid #eee;
		height: 130rpx;
		margin-left: 30rpx;
		padding-right: 30rpx;
	}

	.payment .item .left {
		width: 610rpx;
	}

	.payment .item .left .text {
		width: 540rpx;
	}

	.payment .item .left .text .name {
		font-size: 32rpx;
		color: #282828;
	}

	.payment .item .left .text .info {
		font-size: 24rpx;
		color: #999;
	}

	.payment .item .left .text .info .money {
		color: #ff9900;
	}

	.payment .item .left .iconfont {
		font-size: 45rpx;
		color: #09bb07;
	}

	.payment .item .left .iconfont.icon-zhifubao {
		color: #00aaea;
	}

	.payment .item .left .iconfont.icon-yuezhifu {
		color: #ff9900;
	}

	.payment .item .left .iconfont.icon-yuezhifu1 {
		color: #eb6623;
	}

	.payment .item .iconfont {
		font-size: 0.3rpx;
		color: #999;
	}
</style>


<style>
	.vnpayConfig{
		background: #fff;
		width: 100%;
		    
		    padding: 9px;
		    box-sizing: border-box;
	}
	.vnpayConfig .uni-list>uni-radio-group{
		display: flex;
		width: 100%;
		flex-wrap: wrap;
	}
	.vnpayConfig .uni-label-pointer{
		display: flex;
		width: 50%;
    height: 32px;
		justify-content: start;
		align-items: center;
	}
	.vnPayModal{
		width: 100%;
		height: 100%;
		background: #0000008a;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 100;
	}
	.Modalbody{
		width: 300px;
		height: 300px;
		border-radius: 10px;
		box-shadow: 0px 0px 1px #DDDDDD;
		background: #fff;
		position: relative;
		}
		.modalBody_title{
			height: 40px;
			background: #DF2D0A;
			color: #FFFFFF;
			text-align: center;
			font-size: 18px;
			line-height: 40px;
			position: relative;
		}
		.modal_close{
			width: 30px;
			height: 30px;
			text-align: center;
			line-height: 30px;
			border-radius: 50%;
			position: absolute;
			right: 0;
			top: 0;
		}
		.Orderinfo{
			padding: 30px;
			box-sizing: border-box;
		}
		.Orderinfo .infotxt{
			height: 30px;
			line-height: 30px;
		}
		.orderBtn{
			padding: 15px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: absolute;
			    bottom: 0;
			    width: 100%;
		}
		.orderBtn .clear button{
			background: #FFFFFF;
			color: #000000;
			border: 1px solid #000;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 120px;
			height: 40px;
		}
		.orderBtn .payResult button{
			background: #df2d0a;
			color: #fff;
			border: 1px solid #df2d0a;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 120px;
			height: 40px;
		}
</style>
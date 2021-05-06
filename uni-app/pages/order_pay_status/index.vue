<template>
	<view>
		<view class='payment-status'>
			<!--失败时： 用icon-iconfontguanbi fail替换icon-duihao2 bg-color-->
			<view class='iconfont icon-duihao2 bg-color' v-if="order_pay_info.paid || order_pay_info.pay_type == 'offline'"></view>
			<view class='iconfont icon-iconfontguanbi bg-color' v-else></view>
			<!-- 失败时：订单支付失败 -->
			<view class='status' v-if="order_pay_info.pay_type != 'offline'">{{order_pay_info.paid ? 'Thứ tự thanh toán thành công':'Thứ tự thanh toán thất bại'}}</view>
			<view class='status' v-else>Đơn đặt hàng thành công</view>
			<view class='wrapper'>
				<view class='item acea-row row-between-wrapper'>
					<view>Số thứ tự</view>
					<view class='itemCom'>{{orderId}}</view>
				</view>
				<view class='item acea-row row-between-wrapper'>
					<view>Thời gian duy nhất</view>
					<view class='itemCom'>{{order_pay_info._pay_time}}</view>
				</view>
				<view class='item acea-row row-between-wrapper'>
					<view>Phương thức thanh toán</view>
					<view class='itemCom'>{{order_pay_info._status._payType}}</view>
				</view>
				<view class='item acea-row row-between-wrapper'>
					<view>Số tiền thanh toán</view>
					<view class='itemCom'>{{order_pay_info.pay_price}}</view>
				</view>
				<!--失败时加上这个  -->
				<view class='item acea-row row-between-wrapper' v-if="order_pay_info.paid==0 && order_pay_info.pay_type != 'offline'">
					<view>Nguyên nhân thất bại</view>
					<view class='itemCom'>{{status==2 ? 'Hủy bỏ thanh toán':msg}}</view>
				</view>
			</view>
			<!--失败时： 重新购买 -->
			<view @tap="goOrderDetails" v-if="status==0">
				<button formType="submit" class='returnBnt bg-color' hover-class='none'>Xem đơn đặt hàng</button>
			</view>
			<view @tap="goOrderDetails" v-if="order_pay_info.paid==0 && status==1">
				<button class='returnBnt bg-color' hover-class='none'>Mua lại</button>
			</view>
			<view @tap="goOrderDetails" v-if="order_pay_info.paid==0 && status==2">
				<button class='returnBnt bg-color' hover-class='none'>Thanh toán lại</button>
			</view>
			<button @click="goPink(order_pay_info.pink_id)" class='returnBnt cart-color' formType="submit" hover-class='none' v-if="order_pay_info.pink_id && order_pay_info.paid!=0 && status!=2 && status!=1">Mời bạn bè tham gia nhóm</button>
			<button @click="goIndex" class='returnBnt cart-color' formType="submit" hover-class='none' v-else>Trở về trang chủ</button>
			</view>
		<!-- #ifdef MP -->
		<authorize @onLoadFun="onLoadFun" :isAuto="isAuto" :isShowAuth="isShowAuth" @authColse="authColse"></authorize>
		<!-- #endif -->
	</view>
</template>

<script>
	import {
		getOrderDetail
	} from '@/api/order.js';
	import {
		openOrderSubscribe
	} from '@/utils/SubscribeMessage.js';
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
		components: {
			// #ifdef MP
			authorize
			// #endif
		},
		data() {
			return {
				orderId: '',
				order_pay_info: {
					paid: 1,
					_status: {}
				},
				isAuto: false, //没有授权的不会自动授权
				isShowAuth: false ,//是否隐藏授权
				status:0,
				msg:''
			};
		},
		computed: mapGetters(['isLogin']),
		onLoad: function(options) {
			if (!options.order_id) return this.$util.Tips({
				title: '缺少参数无法查看订单支付状态'
			}, {
				tab: 3,
				url: 1
			});
			this.orderId = options.order_id;
			this.status = options.status || 0;
			this.msg = options.msg || '';
			if (this.isLogin) {
				this.getOrderPayInfo();
			} else {
				// #ifdef H5 || APP-PLUS
				toLogin();
				// #endif 
				// #ifdef MP
				this.isAuto = true;
				this.$set(this, 'isShowAuth', true);
				// #endif
			}
		},
		methods: {
			onLoadFun: function() {
				this.getOrderPayInfo();
			},
			/**
			 * 
			 * 支付完成查询支付状态
			 * 
			 */
			getOrderPayInfo: function() {
				let that = this;
				uni.showLoading({
					title: 'Đang tải'
				});
				getOrderDetail(that.orderId).then(res => {
					uni.hideLoading();
					that.$set(that, 'order_pay_info', res.data);
					uni.setNavigationBarTitle({
						title: res.data.paid ? 'Thanh toán thành công' : 'Thanh toán thất bại'
					});
				}).catch(err => {
					uni.hideLoading();
				});
			},
			/**
			 * 去首页关闭当前所有页面
			 */
			goIndex: function(e) {
				uni.switchTab({
					url: '/pages/index/index'
				});
			},
			// 去参团页面；
            goPink:function(id){
				uni.navigateTo({
					url: '/pages/activity/goods_combination_status/index?id='+id
				});
			},
			/**
			 * 
			 * 去订单详情页面
			 */
			goOrderDetails: function(e) {
				let that = this;
				// #ifdef MP
				uni.showLoading({
					title: 'Đang tải',
				})
				openOrderSubscribe().then(res => {
					uni.hideLoading();
					uni.navigateTo({
						url: '/pages/order_details/index?order_id=' + that.orderId
					});
				}).catch(() => {
					nui.hideLoading();
				});
				// #endif
				// #ifndef MP
				uni.navigateTo({
					url: '/pages/order_details/index?order_id=' + that.orderId
				})
				// #endif
			}

		}
	}
</script>

<style>
	.payment-status {
		background-color: #fff;
		margin: 195rpx 30rpx 0 30rpx;
		border-radius: 10rpx;
		padding: 1rpx 0 28rpx 0;
	}

	.payment-status .iconfont {
		font-size: 70rpx;
		width: 140rpx;
		height: 140rpx;
		border-radius: 50%;
		color: #fff;
		text-align: center;
		line-height: 140rpx;
		text-shadow: 0px 4px 0px #df1e14;
		border: 6rpx solid #f5f5f5;
		margin: -76rpx auto 0 auto;
		background-color: #999;
	}

	.payment-status .iconfont.fail {
		text-shadow: 0px 4px 0px #7a7a7a;
	}

	.payment-status .status {
		font-size: 32rpx;
		font-weight: bold;
		text-align: center;
		margin: 25rpx 0 37rpx 0;
	}

	.payment-status .wrapper {
		border: 1rpx solid #eee;
		margin: 0 30rpx 47rpx 30rpx;
		padding: 35rpx 0;
		border-left: 0;
		border-right: 0;
	}

	.payment-status .wrapper .item {
		font-size: 28rpx;
		color: #282828;
	}

	.payment-status .wrapper .item~.item {
		margin-top: 20rpx;
	}

	.payment-status .wrapper .item .itemCom {
		color: #666;
	}

	.payment-status .returnBnt {
		width: 630rpx;
		height: 86rpx;
		border-radius: 50rpx;
		color: #fff;
		font-size: 30rpx;
		text-align: center;
		line-height: 86rpx;
		margin: 0 auto 20rpx auto;
	}
</style>

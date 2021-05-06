<template>
	<view>
		<view class='my-order'>
			<view class='header bg-color'>
				<view class='picTxt acea-row row-between-wrapper'>
					<view class='text'>
						<view class='name'>Thông tin đơn đặt hàng</view>
						<view>Tiêu thụ đơn đặt hàng：{{orderData.order_count || 0}} Tổng số tiêu thụ：₫{{orderData.sum_price || 0}}</view>
					</view>
					<view class='pictrue'>
						<image src='../../../static/images/orderTime.png'></image>
					</view>
				</view>
			</view>
			<view class='nav acea-row row-around'>
				<view class='item' :class='orderStatus==0 ? "on": ""' @click="statusClick(0)">
					<view>Để thanh toán</view>
					<view class='num'>{{orderData.unpaid_count || 0}}</view>
				</view>
				<view class='item' :class='orderStatus==1 ? "on": ""' @click="statusClick(1)">
					<view>Sẵn sàng để phát hành</view>
					<view class='num'>{{orderData.unshipped_count || 0}}</view>
				</view>
				<view class='item' :class='orderStatus==2 ? "on": ""' @click="statusClick(2)">
					<view>Nhận được</view>
					<view class='num '>{{orderData.received_count || 0}}</view>
				</view>
				<view class='item' :class='orderStatus==3 ? "on": ""' @click="statusClick(3)">
					<view>Để đánh giá</view>
					<view class='num'>{{orderData.evaluated_count || 0}}</view>
				</view>
				<view class='item' :class='orderStatus==4 ? "on": ""' @click="statusClick(4)">
					<view>Đã hoàn thành</view>
					<view class='num'>{{orderData.complete_count || 0}}</view>
				</view>
			</view>
			<view class='list'>
				<view class='item' v-for="(item,index) in orderList" :key="index">
					<view @click='goOrderDetails(item.order_id)'>
						<view class='title acea-row row-between-wrapper'>
							<view class="acea-row row-middle">
								<text class="sign cart-color acea-row row-center-wrapper" v-if="item.bargain_id != 0">KanJia</text>
								<text class="sign cart-color acea-row row-center-wrapper" v-else-if="item.combination_id != 0">Đánh vần</text>
								<text class="sign cart-color acea-row row-center-wrapper" v-else-if="item.seckill_id != 0">Giây giết</text>
								<view>{{item._add_time}}</view>
							</view>
							<view v-if="item._status._type == 0" class='font-color'>Để thanh toán</view>
							<view v-else-if="item._status._type == 1&& item.shipping_type==1" class='font-color'>Sẵn sàng để phát hành</view>
							<view v-else-if="item._status._type == 2 && item.shipping_type==1" class='font-color'>Nhận được</view>
							<view v-else-if="item._status._type == 3 && item.shipping_type==1" class='font-color'>Để đánh giá</view>
							<view v-else-if="item._status._type == 4 && item.shipping_type==1" class='font-color'>Đã hoàn thành</view>
							<view v-else-if="item.shipping_type==2" class='font-color'>Để được viết ra</view>
						</view>
						<view class='item-info acea-row row-between row-top' v-for="(item,index) in item.cartInfo" :key="index">
							<view class='pictrue'>
								<image :src='item.productInfo.image'></image>
							</view>
							<view class='text acea-row row-between'>
								<view class='name line2'>{{item.productInfo.store_name}}</view>
								<view class='money'>
									<view v-if="item.productInfo.attrInfo">₫{{item.productInfo.attrInfo.price}}</view>
									<view v-else>₫{{item.productInfo.price}}</view>
									<view>x{{item.cart_num}}</view>
								</view>
							</view>
						</view>
						<view class='totalPrice'>共{{item.cartInfo.length || 0}}hàng hóa, tổng số tiền
							<text class='money font-color'>₫{{item.pay_price}}</text>
						</view>
					</view>
					<view class='bottom acea-row row-right row-middle'>
						<view class='bnt cancelBnt' v-if="item._status._type==0 || item._status._type == 9" @click='cancelOrder(index,item.order_id)'>Hủy bỏ đơn đặt hàng</view>
						<view class='bnt bg-color' v-if="item._status._type == 0" @click='goPay(item.pay_price,item.order_id)'>Thanh toán ngay lập tức</view>
						<view class='bnt bg-color' v-else-if="item._status._type == 1 || item._status._type == 9" @click='goOrderDetails(item.order_id)'>Xem chi tiết</view>
						<view class='bnt bg-color' v-else-if="item._status._type == 2 && item.delivery_type" @click='goOrderDetails(item.order_id)'>Xem chi tiết</view>
						<view class='bnt bg-color' v-else-if="item._status._type == 3" @click='goOrderDetails(item.order_id)'>Để đánh giá</view>
						<view class='bnt bg-color' v-else-if="item.seckill_id < 1 && item.bargain_id < 1 && item.combination_id < 1 && item._status._type == 4"
						 @click='goOrderDetails(item.order_id)'>Mua lại</view>
						<view class='bnt cancelBnt' v-if="item._status._type == 4" @click='delOrder(item.order_id,index)'>Loại bỏ đơn đặt hàng</view>
					</view>
				</view>
			</view>
			<view class='loadingicon acea-row row-center-wrapper' v-if="orderList.length>0">
				<text class='loading iconfont icon-jiazai' :hidden='loading==false'></text>{{loadTitle}}
			</view>
			<view v-if="orderList.length == 0">
				<emptyPage title="Không có đơn đặt hàng~"></emptyPage>
			</view>
		</view>
		<view class='noCart' v-if="orderList.length == 0 && page > 1">
			<view class='pictrue'>
				<image src='/images/noOrder.png'></image>
			</view>
		</view>
		<!-- #ifdef MP -->
		<authorize @onLoadFun="onLoadFun" :isAuto="isAuto" :isShowAuth="isShowAuth" @authColse="authColse"></authorize>
		<!-- #endif -->
		<home></home>
		<payment :payMode='payMode' :pay_close="pay_close" @onChangeFun='onChangeFun' :order_id="pay_order_id" :totalPrice='totalPrice'></payment>
	</view>
</template>

<script>
	import {
		getOrderList,
		orderData,
		orderCancel,
		orderDel,
		orderPay
	} from '@/api/order.js';
	import {
		getUserInfo
	} from '@/api/user.js';
	import {
		openOrderSubscribe
	} from '@/utils/SubscribeMessage.js';
	import home from '@/components/home';
	import payment from '@/components/payment';
	import {
		toLogin
	} from '@/libs/login.js';
	import {
		mapGetters
	} from "vuex";
	// #ifdef MP
	import authorize from '@/components/Authorize';
	// #endif
	import emptyPage from '@/components/emptyPage.vue'
	export default {
		components: {
			payment,
			home,
			emptyPage,
			// #ifdef MP
			authorize
			// #endif
		},
		data() {
			return {
				loading: false, //是否加载中
				loadend: false, //是否加载完毕
				loadTitle: '加载更多', //提示语
				orderList: [], //订单数组
				orderData: {}, //订单详细统计
				orderStatus: 0, //订单状态
				page: 1,
				limit: 20,
				payMode: [
					{
						name: "Vi-thanh toán",
						icon: "icon-weixinzhifu",
						value: 'weixin',
						title: 'Ứng dụng thanh toán nhanh'
					},
					{
						name: "Thanh toán cân bằng",
						icon: "icon-yuezhifu",
						value: 'yue',
						title: 'Số dư có sẵn:',
						number: 0
					},
					{
						"name": "Thanh toán trực tuyến",
						"icon": "icon-yinhangqia",
						value: 'vnpays',
						title: 'Thanh toán trực tuyến',
					},
				],
				pay_close: false,
				pay_order_id: '',
				totalPrice: '0',
				isAuto: false, //没有授权的不会自动授权
				isShowAuth: false //是否隐藏授权
			};
		},
		computed: mapGetters(['isLogin']),
		onShow() {
			if (this.isLogin) {
				this.getOrderData();
				this.getOrderList();
				this.getUserInfo();
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
			onLoadFun() {
				this.getOrderData();
				this.getOrderList();
				this.getUserInfo();
			},
			// 授权关闭
			authColse: function(e) {
				this.isShowAuth = e
			},
			/**
			 * 事件回调
			 * 
			 */
			onChangeFun: function(e) {
				let opt = e;
				let action = opt.action || null;
				let value = opt.value != undefined ? opt.value : null;
				(action && this[action]) && this[action](value);
			},
			/**
			 * 获取用户信息
			 * 
			 */
			getUserInfo: function() {
				let that = this;
				getUserInfo().then(res => {
					that.payMode[1].number = res.data.now_money;
					that.$set(that, 'payMode', that.payMode);
				});
			},
			/**
			 * 关闭支付组件
			 * 
			 */
			payClose: function() {
				this.pay_close = false;
			},
			/**
			 * 生命周期函数--监听页面加载
			 */
			onLoad: function(options) {
				if (options.status) this.orderStatus = options.status;
			},
			/**
			 * 获取订单统计数据
			 * 
			 */
			getOrderData: function() {
				let that = this;
				orderData().then(res => {
					that.$set(that, 'orderData', res.data);
				})
			},
			/**
			 * 取消订单
			 * 
			 */
			cancelOrder: function(index, order_id) {
				let that = this;
				if (!order_id) return that.$util.Tips({
					title: 'Thiếu số thứ tự không thể hủy bỏ đơn đặt hàng'
				});
				orderCancel(order_id).then(res => {
					return that.$util.Tips({
						title: res.msg,
						icon: 'success'
					}, function() {
						that.orderList.splice(index, 1);
						that.$set(that, 'orderList', that.orderList);
						that.$set(that.orderData, 'unpaid_count', that.orderData.unpaid_count - 1);
						that.getOrderData();
					});
				}).catch(err => {
					return that.$util.Tips({
						title: err
					});
				});
			},
			/**
			 * 打开支付组件
			 * 
			 */
			goPay: function(pay_price, order_id) {
				this.$set(this, 'pay_close', true);
				this.$set(this, 'pay_order_id', order_id);
				this.$set(this, 'totalPrice', pay_price);
			},
			/**
			 * 支付成功回调
			 * 
			 */
			pay_complete: function() {
				this.loadend = false;
				this.page = 1;
				this.$set(this, 'orderList', []);
				this.pay_close = false;
				this.pay_order_id = '';
				this.getOrderData();
				this.getOrderList();
			},
			/**
			 * 支付失败回调
			 * 
			 */
			pay_fail: function() {
				this.pay_close = false;
				this.pay_order_id = '';
			},
			/**
			 * 去订单详情
			 */
			goOrderDetails: function(order_id) {
				if (!order_id) return that.$util.Tips({
					title: 'Thiếu số thứ tự không thể xem chi tiết đơn đặt hàng'
				});
				// #ifdef MP
				uni.showLoading({
					title: 'Đang tải',
				})
				openOrderSubscribe().then(() => {
					uni.hideLoading();
					uni.navigateTo({
						url: '/pages/order_details/index?order_id=' + order_id
					})
				}).catch(() => {
					uni.hideLoading();
				})
				// #endif  
				// #ifndef MP
				uni.navigateTo({
					url: '/pages/order_details/index?order_id=' + order_id
				})
				// #endif
			},
			/**
			 * 切换类型
			 */
			statusClick: function(status) {
				if (status == this.orderStatus) return;
				this.orderStatus = status;
				this.loadend = false;
				this.page = 1;
				this.$set(this, 'orderList', []);
				this.getOrderList();
			},
			/**
			 * 获取订单列表
			 */
			getOrderList: function() {
				let that = this;
				if (that.loadend) return;
				if (that.loading) return;
				that.loading = true;
				that.loadTitle = "Đang tải";
				getOrderList({
					type: that.orderStatus,
					page: that.page,
					limit: that.limit,
				}).then(res => {
					let list = res.data || [];
					let loadend = list.length < that.limit;
					that.orderList = that.$util.SplitArray(list, that.orderList);
					that.$set(that, 'orderList', that.orderList);
					that.loadend = loadend;
					that.loading = false;
					that.loadTitle = loadend ? "Tôi cũng có giới hạn" : 'Đang tải';
					that.page = that.page + 1;
				}).catch(err => {
					that.loading = false;
					that.loadTitle = "Đang tải";
				})
			},

			/**
			 * 删除订单
			 */
			delOrder: function(order_id, index) {
				let that = this;
				orderDel(order_id).then(res => {
					that.orderList.splice(index, 1);
					that.$set(that, 'orderList', that.orderList);
					that.$set(that.orderData, 'unpaid_count', that.orderData.unpaid_count - 1);
					that.getOrderData();
					return that.$util.Tips({
						title: 'Loại bỏ thành công',
						icon: 'success'
					});
				}).catch(err => {
					return that.$util.Tips({
						title: err
					});
				})
			},
		},
		onReachBottom: function() {
			this.getOrderList();
		}
	}
</script>

<style scoped lang="scss">
	.my-order .header {
		height: 260rpx;
		padding: 0 30rpx;
	}

	.my-order .header .picTxt {
		height: 190rpx;
	}

	.my-order .header .picTxt .text {
		color: rgba(255, 255, 255, 0.8);
		font-size: 26rpx;
		font-family: 'Guildford Pro';
	}

	.my-order .header .picTxt .text .name {
		font-size: 34rpx;
		font-weight: bold;
		color: #fff;
		margin-bottom: 20rpx;
	}

	.my-order .header .picTxt .pictrue {
		width: 122rpx;
		height: 109rpx;
	}

	.my-order .header .picTxt .pictrue image {
		width: 100%;
		height: 100%;
	}

	.my-order .nav {
		background-color: #fff;
		width: 690rpx;
		height: 140rpx;
		border-radius: 6rpx;
		margin: -73rpx auto 0 auto;
	}

	.my-order .nav .item {
		text-align: center;
		font-size: 26rpx;
		color: #282828;
		padding: 29rpx 0;
	}

	.my-order .nav .item.on {
		font-weight: bold;
		border-bottom: 5rpx solid #e93323;
	}

	.my-order .nav .item .num {
		margin-top: 18rpx;
	}

	.my-order .list {
		width: 690rpx;
		margin: 14rpx auto 0 auto;
	}

	.my-order .list .item {
		background-color: #fff;
		border-radius: 6rpx;
		margin-bottom: 14rpx;
	}

	.my-order .list .item .title {
		height: 84rpx;
		padding: 0 30rpx;
		border-bottom: 1rpx solid #eee;
		font-size: 28rpx;
		color: #282828;
	}

	.my-order .list .item .title .sign {
		font-size: 24rpx;
		padding: 0 7rpx;
		height: 36rpx;
		margin-right: 15rpx;
	}

	.my-order .list .item .item-info {
		padding: 0 30rpx;
		margin-top: 22rpx;
	}

	.my-order .list .item .item-info .pictrue {
		width: 120rpx;
		height: 120rpx;
	}

	.my-order .list .item .item-info .pictrue image {
		width: 100%;
		height: 100%;
		border-radius: 6rpx;
	}

	.my-order .list .item .item-info .text {
		width: 486rpx;
		font-size: 28rpx;
		color: #999;
		margin-top: 6rpx;
	}

	.my-order .list .item .item-info .text .name {
		width: 306rpx;
		color: #282828;
	}

	.my-order .list .item .item-info .text .money {
		text-align: right;
	}

	.my-order .list .item .totalPrice {
		font-size: 26rpx;
		color: #282828;
		text-align: right;
		margin: 27rpx 0 0 30rpx;
		padding: 0 30rpx 30rpx 0;
		border-bottom: 1rpx solid #eee;
	}

	.my-order .list .item .totalPrice .money {
		font-size: 28rpx;
		font-weight: bold;
	}

	.my-order .list .item .bottom {
		height: 107rpx;
		padding: 0 30rpx;
	}

	.my-order .list .item .bottom .bnt {
		width: 176rpx;
		height: 60rpx;
		text-align: center;
		line-height: 60rpx;
		color: #fff;
		border-radius: 50rpx;
		font-size: 27rpx;
	}

	.my-order .list .item .bottom .bnt.cancelBnt {
		border: 1rpx solid #ddd;
		color: #aaa;
	}

	.my-order .list .item .bottom .bnt~.bnt {
		margin-left: 17rpx;
	}

	.noCart {
		margin-top: 171rpx;
		padding-top: 0.1rpx;
	}

	.noCart .pictrue {
		width: 414rpx;
		height: 336rpx;
		margin: 78rpx auto 56rpx auto;
	}

	.noCart .pictrue image {
		width: 100%;
		height: 100%;
	}
</style>

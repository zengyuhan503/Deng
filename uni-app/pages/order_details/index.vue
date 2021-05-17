<template>
	<view>
		<view class='order-details'>
			<!-- 给header上与data上加on为退款订单-->
			<view class='header bg-color acea-row row-middle' :class='isGoodsReturn ? "on":""'>
				<view class='pictrue' v-if="isGoodsReturn==false">
					<image :src="orderInfo.status_pic"></image>
				</view>
				<view class='data' :class='isGoodsReturn ? "on":""'>
					<view class='state'>{{orderInfo._status._msg}}</view>
					<view>{{orderInfo.add_time_y}}<text class='time'>{{orderInfo.add_time_h}}</text></view>
				</view>
			</view>
			<view v-if="isGoodsReturn==false">
				<view class='nav'>
					<view class='navCon acea-row row-between-wrapper'>
						<view :class="status.type == 0 || status.type == -9 ? 'on':''">Để thanh toán</view>
						<view :class="status.type == 1 ? 'on':''">{{orderInfo.shipping_type==1 ? 'Để thanh toán':'Để được viết ra'}}</view>
						<view :class="status.type == 2 ? 'on':''" v-if="orderInfo.shipping_type == 1">Nhận được</view>
						<view :class="status.type == 3 ? 'on':''">Để đánh giá</view>
						<view :class="status.type == 4 ? 'on':''">Đã hoàn thành</view>
					</view>
					<view class='progress acea-row row-between-wrapper'>
						<view class='iconfont' :class='(status.type == 0 || status.type == -9  ? "icon-webicon318":"icon-yuandianxiao") + " " + (status.type >= 0 ? "font-color":"")'></view>
						<view class='line' :class='status.type > 0 ? "bg-color":""'></view>
						<view class='iconfont' :class='(status.type == 1 ? "icon-webicon318":"icon-yuandianxiao") + " " + (status.type >= 1 ? "font-color":"")'></view>
						<view class='line' :class='status.type > 1 ? "bg-color":""' v-if="orderInfo.shipping_type == 1"></view>
						<view class='iconfont' :class='(status.type == 2 ? "icon-webicon318":"icon-yuandianxiao") + " " +(status.type >= 2 ? "font-color":"")'
						 v-if="orderInfo.shipping_type == 1"></view>
						<view class='line' :class='status.type > 2 ? "bg-color":""'></view>
						<view class='iconfont' :class='(status.type == 3 ? "icon-webicon318":"icon-yuandianxiao") + " " + (status.type >= 3 ? "font-color":"")'></view>
						<view class='line' :class='status.type > 3 ? "bg-color":""'></view>
						<view class='iconfont' :class='(status.type == 4 ? "icon-webicon318":"icon-yuandianxiao") + " " + (status.type >= 4 ? "font-color":"")'></view>
					</view>
				</view>
				<!-- 拒绝退款 -->
				<view class="refund" v-if="orderInfo.refund_reason">
					<view class="title">
						<image src="/static/images/shuoming.png" mode=""></image>
						Các doanh nghiệp từ chối hoàn lại tiền
					</view>
					<view class="con">Lý do từ chối：{{orderInfo.refund_reason}}</view>
				</view>
				<view class="writeOff" v-if="orderInfo.shipping_type == 2 && orderInfo.paid">
					<view class="title">Thông tin thanh toán</view>
					<view class="grayBg">
						<view class="pictrue">
							<image :src="orderInfo.code"></image>
						</view>
					</view>
					<view class="gear">
						<image src="../../static/images/writeOff.jpg"></image>
					</view>
					<view class="num">{{orderInfo._verify_code}}</view>
					<view class="rules">
						<view class="item">
							<view class="rulesTitle acea-row row-middle">
								<text class="iconfont icon-shijian"></text>Thời gian thanh toán
							</view>
							<view class="info">
								Mỗi ngày：<text class="time">{{orderInfo.system_store.day_time}}</text>
							</view>
						</view>
						<view class="item">
							<view class="rulesTitle acea-row row-middle">
								<text class="iconfont icon-shuoming1"></text>Hướng dẫn sử dụng
							</view>
							<view class="info">Có thể hiển thị mã qr cho người bán hàng quét hoặc cung cấp mã pin kỹ thuật số</view>
						</view>
					</view>
				</view>
				<view class="map acea-row row-between-wrapper" v-if="orderInfo.shipping_type == 2">
					<view>Thông tin địa chỉ tự đề cập</view>
					<view class="place cart-color acea-row row-center-wrapper" @tap="showMaoLocation">
						<text class="iconfont icon-weizhi"></text>Xem vị trí
					</view>
				</view>
				<!-- <view class='address' v-if="orderInfo.shipping_type === 1">
					<view class='name'>{{orderInfo.real_name}}<text class='phone'>{{orderInfo.user_phone}}</text></view>
					<view>{{orderInfo.user_address}}</view>
				</view>
				<view class='address' v-else style="margin-top:0;">
					<view class='name' @tap="makePhone">{{orderInfo.system_store.name}}<text class='phone'>{{orderInfo.system_store.phone}}</text><text
						 class="iconfont icon-tonghua font-color"></text></view>
					<view>{{orderInfo.system_store._detailed_address}}</view>
				</view> -->
				<view class='line' v-if="orderInfo.shipping_type === 1">
					<image src='../../static/images/line.jpg'></image>
				</view>
			</view>
			<orderGoods :evaluate='evaluate' :orderId="order_id" :cartInfo="cartInfo" :jump="true"></orderGoods>
			
			<view class='wrapper'>
				<view class='item acea-row row-between'>
					<view>Số thứ tự：</view>
					<view class='conter acea-row row-middle row-right'>{{orderInfo.order_id}}
						<!-- #ifndef H5 -->
						<text class='copy' @tap='copy'>SAO chép</text>
						<!-- #endif -->
						<!-- #ifdef H5 -->
						<text class='copy copy-data' :data-clipboard-text="orderInfo.order_id">SAO chép</text>
						<!-- #endif -->
					</view>
				</view>
				<view class='item acea-row row-between'>
					<view>Thời gian duy nhất：</view>
					<view class='conter'>{{(orderInfo.add_time_y || '') +' '+(orderInfo.add_time_h || 0)}}</view>
				</view>
				<view class='item acea-row row-between'>
					<view>Tình trạng thanh toán：</view>
					<view class='conter' v-if="orderInfo.paid">Đã được thanh toán</view>
					<view class='conter' v-else>Không được thanh toán</view>
				</view>
				<view class='item acea-row row-between'>
					<view>Phương thức thanh toán：</view>
					<view class='conter'>{{orderInfo._status._payType}}</view>
				</view>
				<view class='item acea-row row-between' v-if="orderInfo.mark">
					<view>Người mua tin nhắn：</view>
					<view class='conter'>{{orderInfo.mark}}</view>
				</view>
			</view>
			<!-- 退款订单详情 -->
			<view class='wrapper' v-if="isGoodsReturn">
				<view class='item acea-row row-between'>
					<view>Người nhận hàng：</view>
					<view class='conter'>{{orderInfo.real_name}}</view>
				</view>
				<view class='item acea-row row-between'>
					<view>Số liên lạc：</view>
					<view class='conter'>{{orderInfo.user_phone}}</view>
				</view>
				<view class='item acea-row row-between'>
					<view>Địa chỉ giao hàng：</view>
					<view class='conter'>{{orderInfo.user_address}}</view>
				</view>
			</view>
			<view v-if="orderInfo.status!=0">
				<view class='wrapper' v-if='orderInfo.delivery_type=="express"'>
					<view class='item acea-row row-between'>
						<view>Phương pháp phân phối：</view>
						<view class='conter'>Ngày cyber</view>
					</view>
					<view class='item acea-row row-between'>
						<view>Công ty chuyển phát nhanh：</view>
						<view class='conter'>{{orderInfo.delivery_name || ''}}</view>
					</view>
					<view class='item acea-row row-between'>
						<view>Nhận số：</view>
						<view class='conter'>{{orderInfo.delivery_id || ''}}</view>
					</view>
				</view>
				<view class='wrapper' v-else-if='orderInfo.delivery_type=="send"'>
					<view class='item acea-row row-between'>
						<view>Phương pháp phân phối：：</view>
						<view class='conter'>送货</view>
					</view>
					<view class='item acea-row row-between'>
						<view>	Phân phối tên：</view>
						<view class='conter'>{{orderInfo.delivery_name || ''}}</view>
					</view>
					<view class='item acea-row row-between'>
						<view>Số liên lạc：</view>
						<view class='conter acea-row row-middle row-right'>{{orderInfo.delivery_id || ''}}<text class='copy' @tap='goTel'>gọi</text></view>
					</view>
				</view>
				<view class='wrapper' v-else-if='orderInfo.delivery_type=="fictitious"'>
					<view class='item acea-row row-between'>
						<view>Vận chuyển ảo：</view>
						<view class='conter'>Đã được vận chuyển, xin vui lòng kiểm tra</view>
					</view>
				</view>
			</view>
			<view class='wrapper'>
				<view class='item acea-row row-between'>
					<view>Số tiền thanh toán：</view>
					<view class='conter'>₫{{orderInfo.total_price}}</view>
				</view>
				<view class='item acea-row row-between' v-if='orderInfo.coupon_id'>
					<view>Giảm giá phiếu giảm giá：</view>
					<view class='conter'>-₫{{orderInfo.coupon_price}}</view>
				</view>
				<view class='item acea-row row-between' v-if="orderInfo.use_integral > 0">
					<view>	Tích hợp khấu trừ：</view>
					<view class='conter'>-₫{{orderInfo.deduction_price}}</view>
				</view>
				<view class='item acea-row row-between' v-if="orderInfo.pay_postage > 0">
					<view>Chưa kể：</view>
					<view class='conter'>₫{{orderInfo.pay_postage}}</view>
				</view>
				<view class='actualPay acea-row row-right'>实付款：<text class='money font-color'>₫{{orderInfo.pay_price}}</text></view>
			</view>
			<view style='height:120rpx;'></view>
			<view class='footer acea-row row-right row-middle' v-if="isGoodsReturn==false || status.type == 9">
				<view class="qs-btn" v-if="status.type == 0 || status.type == -9" @click.stop="cancelOrder">Hủy bỏ đơn đặt hàng</view>
				<view class='bnt bg-color' v-if="status.type==0" @tap='pay_open(orderInfo.order_id)'>Thanh toán ngay lập tức</view>
				<!-- #ifdef MP -->
				<view @tap="openSubcribe('/pages/users/goods_return/index?orderId='+orderInfo.order_id)" class='bnt cancel'
				 v-else-if="orderInfo.paid === 1 && orderInfo.refund_status === 0">Áp dụng cho một khoản hoàn lại</view>
				<!-- #endif -->
				<!-- #ifndef MP -->
				<navigator hover-class="none" :url="'/pages/users/goods_return/index?orderId='+orderInfo.order_id" class='bnt cancel'
				 v-else-if="orderInfo.paid === 1 && orderInfo.refund_status === 0">Áp dụng cho một khoản hoàn lại</navigator>
				<!-- #endif -->
				<view class='bnt bg-color' v-if="status.class_status==1" @tap='goJoinPink'>Xem chính tả</view>
				<navigator class='bnt cancel' v-if="orderInfo.delivery_type == 'express' && status.class_status==3 && status.type==2"
				 hover-class='none' :url="'/pages/users/goods_logistics/index?orderId='+ orderInfo.order_id">Xem hậu cần</navigator>
				<view class='bnt bg-color' v-if="status.class_status==3" @tap='confirmOrder'>Xác nhận nhận được</view>
				<view class='bnt cancel' v-if="status.type==4" @tap='delOrder'>Loại bỏ đơn đặt hàng</view>
				<view class='bnt bg-color' v-if="status.class_status==5" @tap='goOrderConfirm'>Mua lại</view>
			</view>
		</view>
		<home></home>
		<!-- #ifdef MP -->
		<authorize @onLoadFun="onLoadFun" :isAuto="isAuto" :isShowAuth="isShowAuth" @authColse="authColse"></authorize>
		<!-- #endif -->
		<payment :payMode='payMode' :pay_close="pay_close" @onChangeFun='onChangeFun' :order_id="pay_order_id" :totalPrice='totalPrice'></payment>
	</view>
</template>
<style scoped lang="scss">
	.goodCall {
		color: #e93323;
		text-align: center;
		width: 100%;
		height: 86rpx;
		padding: 0 30rpx;
		border-bottom: 1rpx solid #eee;
		font-size: 30rpx;
		line-height: 86rpx;
		background: #fff;

		.icon-kefu {
			font-size: 36rpx;
			margin-right: 15rpx;
		}

		/* #ifdef MP */
		button {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 86rpx;
			font-size: 30rpx;
			color: #e93323;
		}

		/* #endif */
	}

	.order-details .header {
		padding: 0 30rpx;
		height: 150rpx;
	}

	.order-details .header.on {
		background-color: #666 !important;
	}

	.order-details .header .pictrue {
		width: 110rpx;
		height: 110rpx;
	}

	.order-details .header .pictrue image {
		width: 100%;
		height: 100%;
	}

	.order-details .header .data {
		color: rgba(255, 255, 255, 0.8);
		font-size: 24rpx;
		margin-left: 27rpx;
	}

	.order-details .header .data.on {
		margin-left: 0;
	}

	.order-details .header .data .state {
		font-size: 30rpx;
		font-weight: bold;
		color: #fff;
		margin-bottom: 7rpx;
	}

	.order-details .header .data .time {
		margin-left: 20rpx;
	}

	.order-details .nav {
		background-color: #fff;
		font-size: 26rpx;
		color: #282828;
		padding: 25rpx 0;
	}

	.order-details .nav .navCon {
		padding: 0 40rpx;
	}

	.order-details .nav .on {
		color: #e93323;
	}

	.order-details .nav .progress {
		padding: 0 65rpx;
		margin-top: 10rpx;
	}

	.order-details .nav .progress .line {
		width: 100rpx;
		height: 2rpx;
		background-color: #939390;
	}

	.order-details .nav .progress .iconfont {
		font-size: 25rpx;
		color: #939390;
		margin-top: -2rpx;
	}

	.order-details .address {
		font-size: 26rpx;
		color: #868686;
		background-color: #fff;
		margin-top: 13rpx;
		padding: 35rpx 30rpx;
	}

	.order-details .address .name {
		font-size: 30rpx;
		color: #282828;
		margin-bottom: 15rpx;
	}

	.order-details .address .name .phone {
		margin-left: 40rpx;
	}

	.order-details .line {
		width: 100%;
		height: 3rpx;
	}

	.order-details .line image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.order-details .wrapper {
		background-color: #fff;
		margin-top: 12rpx;
		padding: 30rpx;
	}

	.order-details .wrapper .item {
		font-size: 28rpx;
		color: #282828;
	}

	.order-details .wrapper .item~.item {
		margin-top: 20rpx;
	}

	.order-details .wrapper .item .conter {
		color: #868686;
		// width: 460rpx;
		text-align: right;
	}

	.order-details .wrapper .item .conter .copy {
		font-size: 20rpx;
		color: #333;
		border-radius: 3rpx;
		border: 1rpx solid #666;
		padding: 3rpx 15rpx;
		margin-left: 24rpx;
	}

	.order-details .wrapper .actualPay {
		border-top: 1rpx solid #eee;
		margin-top: 30rpx;
		padding-top: 30rpx;
	}

	.order-details .wrapper .actualPay .money {
		font-weight: bold;
		font-size: 30rpx;
	}

	.order-details .footer {
		width: 100%;
		height: 100rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: #fff;
		padding: 0 30rpx;
		box-sizing: border-box;
	}

	.order-details .footer .bnt {
		width: 176rpx;
		height: 60rpx;
		text-align: center;
		line-height: 60rpx;
		border-radius: 50rpx;
		color: #fff;
		font-size: 27rpx;
	}

	.order-details .footer .bnt.cancel {
		color: #aaa;
		border: 1rpx solid #ddd;
	}

	.order-details .footer .bnt~.bnt {
		margin-left: 18rpx;
	}

	.order-details .writeOff {
		background-color: #fff;
		margin-top: 13rpx;
		padding-bottom: 30rpx;
	}

	.order-details .writeOff .title {
		font-size: 30rpx;
		color: #282828;
		height: 87rpx;
		border-bottom: 1px solid #f0f0f0;
		padding: 0 30rpx;
		line-height: 87rpx;
	}

	.order-details .writeOff .grayBg {
		background-color: #f2f5f7;
		width: 590rpx;
		height: 384rpx;
		border-radius: 20rpx 20rpx 0 0;
		margin: 50rpx auto 0 auto;
		padding-top: 55rpx;
	}

	.order-details .writeOff .grayBg .pictrue {
		width: 290rpx;
		height: 290rpx;
		margin: 0 auto;
	}

	.order-details .writeOff .grayBg .pictrue image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.order-details .writeOff .gear {
		width: 590rpx;
		height: 30rpx;
		margin: 0 auto;
	}

	.order-details .writeOff .gear image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.order-details .writeOff .num {
		background-color: #f0c34c;
		width: 590rpx;
		height: 84rpx;
		color: #282828;
		font-size: 48rpx;
		margin: 0 auto;
		border-radius: 0 0 20rpx 20rpx;
		text-align: center;
		padding-top: 4rpx;
	}

	.order-details .writeOff .rules {
		margin: 46rpx 30rpx 0 30rpx;
		border-top: 1px solid #f0f0f0;
		padding-top: 10rpx;
	}

	.order-details .writeOff .rules .item {
		margin-top: 20rpx;
	}

	.order-details .writeOff .rules .item .rulesTitle {
		font-size: 28rpx;
		color: #282828;
	}

	.order-details .writeOff .rules .item .rulesTitle .iconfont {
		font-size: 30rpx;
		color: #333;
		margin-right: 8rpx;
		margin-top: 5rpx;
	}

	.order-details .writeOff .rules .item .info {
		font-size: 28rpx;
		color: #999;
		margin-top: 7rpx;
	}

	.order-details .writeOff .rules .item .info .time {
		margin-left: 20rpx;
	}

	.order-details .map {
		height: 86rpx;
		font-size: 30rpx;
		color: #282828;
		line-height: 86rpx;
		border-bottom: 1px solid #f0f0f0;
		margin-top: 13rpx;
		background-color: #fff;
		padding: 0 30rpx;
	}

	.order-details .map .place {
		font-size: 26rpx;
		width: 176rpx;
		height: 50rpx;
		border-radius: 25rpx;
		line-height: 50rpx;
		text-align: center;
	}

	.order-details .map .place .iconfont {
		font-size: 27rpx;
		height: 27rpx;
		line-height: 27rpx;
		margin: 2rpx 3rpx 0 0;
	}

	.order-details .address .name .iconfont {
		font-size: 34rpx;
		margin-left: 10rpx;
	}

	.refund {
		padding: 0 30rpx 30rpx;
		margin-top: 24rpx;
		background-color: #fff;

		.title {
			display: flex;
			align-items: center;
			font-size: 30rpx;
			color: #333;
			height: 86rpx;
			border-bottom: 1px solid #f5f5f5;

			image {
				width: 32rpx;
				height: 32rpx;
				margin-right: 10rpx;
			}
		}

		.con {
			padding-top: 25rpx;
			font-size: 28rpx;
			color: #868686;
		}
	}
</style>

<script>
	import {
		getOrderDetail,
		orderAgain,
		orderTake,
		orderDel,
		orderCancel
	} from '@/api/order.js';
	import {
		openOrderRefundSubscribe
	} from '@/utils/SubscribeMessage.js';
	import {
		getUserInfo
	} from '@/api/user.js';
	import home from '@/components/home';
	import payment from '@/components/payment';
	import orderGoods from "@/components/orderGoods";
	import ClipboardJS from "@/plugin/clipboard/clipboard.js";
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
			payment,
			home,
			orderGoods,
			// #ifdef MP
			authorize
			// #endif
		},
		data() {
			return {
				order_id: '',
				evaluate: 0,
				cartInfo: [], //购物车产品
				orderInfo: {
					system_store: {},
					_status: {}
				}, //订单详情
				system_store: {},
				isGoodsReturn: false, //是否为退款订单
				status: {}, //订单底部按钮状态
				isClose: false,
				payMode: [
					// {
					// 	name: "Vi-thanh toán",
					// 	icon: "icon-weixinzhifu",
					// 	value: 'weixin',
					// 	title: 'Vi-thanh toán'
					// },
					// {
					// 	name: "Thanh toán cân bằng",
					// 	icon: "icon-yuezhifu",
					// 	value: 'yue',
					// 	title: 'Số dư có sẵn:',
					// 	number: 0
					// },
					
					{
						"name": "Thanh toán thẻ ngân hàng",
						"icon": "icon-yinhangqia",
						value: 'bankpay',
						title: 'Thanh toán thẻ ngân hàng',
						payStatus: 1,
					},
					// {
					// 	"name": "Thanh toán trực tuyến",
					// 	"icon": "icon-yinhangqia",
					// 	value: 'vnpays',
					// 	title: 'Thanh toán trực tuyến',
					// },
				],
				pay_close: false,
				pay_order_id: '',
				totalPrice: '0',
				isAuto: false, //没有授权的不会自动授权
				isShowAuth: false //是否隐藏授权
			};
		},
		computed: mapGetters(['isLogin']),
		onLoad: function(options) {
			if (options.order_id) {
				this.$set(this, 'order_id', options.order_id);
			}
		},
		onShow() {
			if (this.isLogin) {
				this.getOrderInfo();
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
		onHide: function() {
			this.isClose = true;
		},
		onReady: function() {
			// #ifdef H5
			this.$nextTick(function() {
				const clipboard = new ClipboardJS(".copy-data");
				clipboard.on("success", () => {
					this.$util.Tips({
						title: 'SAO chép thành công'
					});
				});
			});
			// #endif
		},
		methods: {
			goGoodCall() {
				let self = this
				uni.navigateTo({
					url: `/pages/customer_list/index?orderId=${self.order_id}`
				})
			},
			openSubcribe: function(e) {
				let page = e;
				uni.showLoading({
					title: 'Đang tải',
				})
				openOrderRefundSubscribe().then(res => {
					uni.hideLoading();
					uni.navigateTo({
						url: page,
					});
				}).catch(() => {
					uni.hideLoading();
				});
			},
			/**
			 * 事Một điều回调
			 * 
			 */
			onChangeFun: function(e) {
				let opt = e;
				let action = opt.action || null;
				let value = opt.value != undefined ? opt.value : null;
				(action && this[action]) && this[action](value);
			},
			/**
			 * 拨打电话
			 */
			makePhone: function() {
				uni.makePhoneCall({
					phoneNumber: this.system_store.phone
				})
			},
			/**
			 * 打开地图
			 * 
			 */
			showMaoLocation: function() {
				if (!this.system_store.latitude || !this.system_store.longitude) return this.$util.Tips({
					title: '缺少经纬度信息无法查看地图！'
				});
				uni.openLocation({
					latitude: parseFloat(this.system_store.latitude),
					longitude: parseFloat(this.system_store.longitude),
					scale: 8,
					name: this.system_store.name,
					address: this.system_store.address + this.system_store.detailed_address,
					success: function() {

					},
				});
			},
			/**
			 * 关闭支付组Một điều
			 * 
			 */
			payClose: function() {
				this.pay_close = false;
			},
			/**
			 * 打开支付组Một điều
			 * 
			 */
			pay_open: function() {
				this.pay_close = true;
				this.pay_order_id = this.orderInfo.order_id;
				this.totalPrice = this.orderInfo.pay_price;
			},
			/**
			 * 支付成功回调
			 * 
			 */
			pay_complete: function() {
				this.pay_close = false;
				this.pay_order_id = '';
				this.getOrderInfo();
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
			 * 登录授权回调
			 * 
			 */
			onLoadFun: function() {
				this.getOrderInfo();
				this.getUserInfo();
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
				})
			},
			/**
			 * 获取订单详细信息
			 * 
			 */
			getOrderInfo: function() {
				let that = this;
				uni.showLoading({
					title: "Đang tải"
				});
				getOrderDetail(this.order_id).then(res => {
					let _type = res.data._status._type;
					uni.hideLoading();
					that.$set(that, 'orderInfo', res.data);
					that.$set(that, 'cartInfo', res.data.cartInfo);
					that.$set(that, 'evaluate', _type == 3 ? 3 : 0);
					that.$set(that, 'system_store', res.data.system_store);
					if (this.orderInfo.refund_status != 0) {
						this.isGoodsReturn = true;
					}
					that.getOrderStatus();
				}).catch(err => {
					uni.hideLoading();
					that.$util.Tips({
						title: err
					}, '/pages/users/order_list/index');
				});
			},
			/**
			 * 
			 * 剪切订单号
			 */
			// #ifndef H5
			copy: function() {
				let that = this;
				uni.setClipboardData({
					data: this.orderInfo.order_id
				});
			},
			// #endif
			/**
			 * 打电话
			 */
			goTel: function() {
				uni.makePhoneCall({
					phoneNumber: this.orderInfo.delivery_id
				})
			},
			/**
			 * 设置底部按钮
			 * 
			 */
			getOrderStatus: function() {
				let orderInfo = this.orderInfo || {},
					_status = orderInfo._status || {
						_type: 0
					},
					status = {};
				let type = parseInt(_status._type),
					delivery_type = orderInfo.delivery_type,
					seckill_id = orderInfo.seckill_id ? parseInt(orderInfo.seckill_id) : 0,
					bargain_id = orderInfo.bargain_id ? parseInt(orderInfo.bargain_id) : 0,
					combination_id = orderInfo.combination_id ? parseInt(orderInfo.combination_id) : 0;
				status = {
					type: type == 9 ? -9 : type,
					class_status: 0
				};
				if (type == 1 && combination_id > 0) status.class_status = 1; //查看拼团
				if (type == 2 && delivery_type == 'express') status.class_status = 2; //查看物流
				if (type == 2) status.class_status = 3; //确认收货
				if (type == 4 || type == 0) status.class_status = 4; //删除订单
				if (!seckill_id && !bargain_id && !combination_id && (type == 3 || type == 4)) status.class_status = 5; //再次购买
				this.$set(this, 'status', status);
			},
			/**
			 * 去拼团详情
			 * 
			 */
			goJoinPink: function() {
				uni.navigateTo({
					url: '/pages/activity/goods_combination_status/index?id=' + this.orderInfo.pink_id,
				});
			},
			/**
			 * 再此购买
			 * 
			 */
			goOrderConfirm: function() {
				let that = this;
				orderAgain(that.orderInfo.order_id).then(res => {
					return uni.navigateTo({
						url: '/pages/users/order_confirm/index?cartId=' + res.data.cateId
					});
				});
			},
			confirmOrder: function() {
				let that = this;
				uni.showModal({
					title: 'Xác nhận nhận được',
					content: 'Để bảo vệ quyền lợi, sau khi nhận được xác nhận của hàng hoá, sau đó xác nhận nhận được',
					success: function(res) {
						if (res.confirm) {
							orderTake(that.order_id).then(res => {
								return that.$util.Tips({
									title: 'Hoạt động thành công',
									icon: 'success'
								}, function() {
									that.getOrderInfo();
								});
							}).catch(err => {
								return that.$util.Tips({
									title: err
								});
							})
						}
					}
				})
			},
			/**
			 * 
			 * 删除订单
			 */
			delOrder: function() {
				let that = this;
				orderDel(this.order_id).then(res => {
					return that.$util.Tips({
						title: 'Thành công',
						icon: 'success'
					}, {
						tab: 3,
						url: 1
					});
				}).catch(err => {
					return that.$util.Tips({
						title: err
					});
				});
			},
			cancelOrder() {
				let self = this
				uni.showModal({
					title: 'Gợi ý',
					content: 'Xác nhận lệnh hủy bỏ?',
					success: function(res) {
						if (res.confirm) {
							orderCancel(self.orderInfo.order_id)
								.then((data) => {
									console.log(data)
									self.$util.Tips({
										title: data.msg
									}, {
										tab: 3
									})
								})
								.catch(() => {
									self.getDetail();
								});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
		}
	}
</script>

<style>
	.qs-btn {
		width: auto;
		height: 60rpx;
		text-align: center;
		line-height: 60rpx;
		border-radius: 50rpx;
		color: #fff;
		font-size: 27rpx;
		padding: 0 3%;
		color: #aaa;
		border: 1px solid #ddd;
		margin-right: 20rpx;
	}
</style>

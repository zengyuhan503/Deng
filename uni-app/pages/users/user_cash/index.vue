<template>
	<view>
		<view class='cash-withdrawal'>
			<view class='nav acea-row'>
				<view v-for="(item,index) in navList" :key="index" class='item font-color' @click="swichNav(index)">
					<view class='line bg-color' :class='currentTab==index ? "on":""'></view>
					<view class='iconfont' :class='item.icon+" "+(currentTab==index ? "on":"")'></view>
					<view>{{item.name}}</view>
				</view>
			</view>
			<view class='wrapper'>
				<view :hidden='currentTab != 0' class='list'>
					<form @submit="subCash" report-submit='true'>
						<view class='item acea-row row-between-wrapper'>
							<view class='name'>Người giữ thẻ</view>
							<view class='input'><input placeholder='Xin nhập tên của người giữ thẻ' placeholder-class='placeholder' name="name"></input></view>
						</view>
						<view class='item acea-row row-between-wrapper'>
							<view class='name'>số</view>
							<view class='input'><input type='number' placeholder='Xin vui lòng điền số thẻ' placeholder-class='placeholder' name="cardnum"></input></view>
						</view>
						<view class='item acea-row row-between-wrapper'>
							<view class='name'>Ngân hàng</view>
							<view class='input'>
								<picker @change="bindPickerChange" :value="index" :range="array">
									<text class='Bank'>{{array[index]}}</text>
									<text class='iconfont icon-qiepian38'></text>
								</picker>
							</view>
						</view>
						<view class='item acea-row row-between-wrapper'>
							<view class='name'>DiXian</view>
							<view class='input'><input :placeholder='"Số tiền rút tiền tối thiểu"+minPrice' placeholder-class='placeholder' name="money" type='digit'></input></view>
						</view>
						<view class='tip'>
							Số tiền rút tiền hiện tại: <text class="price">￥{{userInfo.commissionCount}},</text>Đóng băng tiền hoa hồng：￥{{userInfo.broken_commission}}
						</view>
						<view class='tip'>
						Ghi chú: thời gian đóng băng của mỗi khoản hoa hồng{{userInfo.broken_day}}Chúa ơi，Và rút tiền khi hết hạn
						</view>
						<button formType="submit" class='bnt bg-color'>DiXian</button>
					</form>
				</view>
				<view :hidden='currentTab != 1' class='list'>
					<form @submit="subCash" report-submit='true'>
						<view class='item acea-row row-between-wrapper'>
							<view class='name'>Tài khoản</view>
							<view class='input'><input placeholder='Xin vui lòng điền vào tài khoản ứng dụng của bạn' placeholder-class='placeholder' name="name"></input></view>
						</view>
						<view class='item acea-row row-between-wrapper'>
							<view class='name'>DiXian</view>
							<view class='input'><input :placeholder='"DiXian"+minPrice' placeholder-class='placeholder' name="money" type='digit'></input></view>
						</view>
						<view class='tip'>
							Số tiền rút tiền hiện tại: <text class="price">￥{{userInfo.commissionCount}},</text>冻结佣金：￥{{userInfo.broken_commission}}
						</view>
						<view class='tip'>
						Ghi chú: thời gian đóng băng của mỗi khoản hoa hồng{{userInfo.broken_day}}Chúa ơi，Và rút tiền khi hết hạn
						</view>
						<button formType="submit" class='bnt bg-color'>DiXian</button>
					</form>
				</view>
				<view :hidden='currentTab != 2' class='list'>
					<form @submit="subCash" report-submit='true'>
						<view class='item acea-row row-between-wrapper'>
							<view class='name'>Tài khoản</view>
							<view class='input'><input placeholder='Xin vui lòng điền vào tài khoản paypal của bạn' placeholder-class='placeholder' name="name"></input></view>
						</view>
						<view class='item acea-row row-between-wrapper'>
							<view class='name'>DiXian</view>
							<view class='input'><input :placeholder='"DiXian"+minPrice' placeholder-class='placeholder' name="money" type='digit'></input></view>
						</view>
						<view class='tip'>
						Ghi chú: thời gian đóng băng của mỗi khoản hoa hồng{{userInfo.broken_day}}Chúa ơi，Và rút tiền khi hết hạn
						</view>
						<view class='tip'>
						Ghi chú: thời gian đóng băng của mỗi khoản hoa hồng{{userInfo.broken_day}}Chúa ơi，Và rút tiền khi hết hạn
						</view>
						<button formType="submit" class='bnt bg-color'>DiXian</button>
					</form>
				</view>
			</view>
		</view>
		<!-- #ifdef MP -->
		<authorize @onLoadFun="onLoadFun" :isAuto="isAuto" :isShowAuth="isShowAuth" @authColse="authColse"></authorize>
		<!-- #endif -->
	</view>
</template>

<script>
	import {
		extractCash,
		extractBank,
		getUserInfo
	} from '@/api/user.js';
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
				navList: [{
						'name': 'Thẻ ngân hàng',
						'icon': 'icon-yinhangqia'
					},
					{
						'name': 'Vi bức thư',
						'icon': 'icon-weixin2'
					},
					{
						'name': 'alipay',
						'icon': 'icon-icon34'
					}
				],
				currentTab: 0,
				index: 0,
				array: [], //提现银行
				minPrice: 0.00, //最低提现金额
				userInfo: [],
				isClone: false,
				isAuto: false, //没有授权的不会自动授权
				isShowAuth: false //是否隐藏授权
			};
		},
		computed: mapGetters(['isLogin']),
		onLoad() {
			if (this.isLogin) {
				this.getUserInfo();
				this.getUserExtractBank();
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
				this.getUserInfo();
				this.getUserExtractBank();
			},
			// 授权关闭
			authColse: function(e) {
				this.isShowAuth = e
			},
			getUserExtractBank: function() {
				let that = this;
				extractBank().then(res => {
					let array = res.data.extractBank;
					array.unshift("Xin vui lòng chọn ngân hàng");
					that.$set(that, 'array', array);
					that.minPrice = res.data.minPrice;
				});
			},
			/**
			 * 获取个人用户信息
			 */
			getUserInfo: function() {
				let that = this;
				getUserInfo().then(res => {
					that.userInfo = res.data;
				});
			},
			swichNav: function(current) {
				this.currentTab = current;
			},
			bindPickerChange: function(e) {
				this.index = e.detail.value;
			},
			subCash: function(e) {
				let that = this,
					value = e.detail.value;
				if (that.currentTab == 0) { //银行卡
					if (value.name.length == 0) return this.$util.Tips({
						title: 'Xin điền tên người giữ thẻ'
					});
					if (value.cardnum.length == 0) return this.$util.Tips({
						title: 'Xin vui lòng điền số thẻ'
					});
					if (that.index == 0) return this.$util.Tips({
						title: "Xin vui lòng chọn ngân hàng"
					});
					value.extract_type = 'bank';
					value.bankname = that.array[that.index];
				} else if (that.currentTab == 1) { //微信
					value.extract_type = 'weixin';
					if (value.name.length == 0) return this.$util.Tips({
						title: 'Xin vui lòng điền vào micro-tín hiệu'
					});
					value.weixin = value.name;
				} else if (that.currentTab == 2) { //支付宝
					value.extract_type = 'alipay';
					if (value.name.length == 0) return this.$util.Tips({
						title: 'Xin vui lòng điền vào tài khoản'
					});
					value.alipay_code = value.name;
				}
				if (value.money.length == 0) return this.$util.Tips({
					title: 'Xin vui lòng điền vào số tiền rút tiền'
				});
				if (value.money < that.minPrice) return this.$util.Tips({
					title: 'Không thể rút tiền ít hơn' + that.minPrice
				});
				extractCash(value).then(res => {
					that.getUserInfo();
					return this.$util.Tips({
						title: res.msg,
						icon: 'success'
					});
				}).catch(err => {
					return this.$util.Tips({
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

	.cash-withdrawal .nav {
		height: 130rpx;
		box-shadow: 0 10rpx 10rpx #f8f8f8;
	}

	.cash-withdrawal .nav .item {
		font-size: 26rpx;
		flex: 1;
		text-align: center;
	}

	.cash-withdrawal .nav .item~.item {
		border-left: 1px solid #f0f0f0;
	}

	.cash-withdrawal .nav .item .iconfont {
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
		border: 2rpx solid #e93323;
		text-align: center;
		line-height: 37rpx;
		margin: 0 auto 6rpx auto;
		font-size: 22rpx;
		box-sizing: border-box;
	}

	.cash-withdrawal .nav .item .iconfont.on {
		background-color: #e93323;
		color: #fff;
		border-color: #e93323;
	}

	.cash-withdrawal .nav .item .line {
		width: 2rpx;
		height: 20rpx;
		margin: 0 auto;
		transition: height 0.3s;
	}

	.cash-withdrawal .nav .item .line.on {
		height: 39rpx;
	}

	.cash-withdrawal .wrapper .list {
		padding: 0 30rpx;
	}

	.cash-withdrawal .wrapper .list .item {
		border-bottom: 1rpx solid #eee;
		height: 107rpx;
		font-size: 30rpx;
		color: #333;
	}

	.cash-withdrawal .wrapper .list .item .name {
		width: 130rpx;
	}

	.cash-withdrawal .wrapper .list .item .input {
		width: 505rpx;
	}

	.cash-withdrawal .wrapper .list .item .input .placeholder {
		color: #bbb;
	}

	.cash-withdrawal .wrapper .list .tip {
		font-size: 26rpx;
		color: #999;
		margin-top: 25rpx;
	}

	.cash-withdrawal .wrapper .list .bnt {
		font-size: 32rpx;
		color: #fff;
		width: 690rpx;
		height: 90rpx;
		text-align: center;
		border-radius: 50rpx;
		line-height: 90rpx;
		margin: 64rpx auto;
	}

	.cash-withdrawal .wrapper .list .tip2 {
		font-size: 26rpx;
		color: #999;
		text-align: center;
		margin: 44rpx 0 20rpx 0;
	}

	.cash-withdrawal .wrapper .list .value {
		height: 135rpx;
		line-height: 135rpx;
		border-bottom: 1rpx solid #eee;
		width: 690rpx;
		margin: 0 auto;
	}

	.cash-withdrawal .wrapper .list .value input {
		font-size: 80rpx;
		color: #282828;
		height: 135rpx;
		text-align: center;
	}

	.cash-withdrawal .wrapper .list .value .placeholder2 {
		color: #bbb;
	}

	.price {
		color: $theme-color;
	}
</style>

<template>
	<view class="guideBaner">
		<view class="bannerClose" @click="tohome">
			<text v-if="timeout > 1">{{ timeout }}s</text>
			<text v-else>关闭</text>
		</view>
		<view class="bannerimage">
			<!-- url("https://public.skyworthxr.com/test/CJF1ncFF0S300NMdwvkI") -->
			<image src="../../static/images/barg002.png" mode=""></image>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			timeout: 10,
			timeit: null
		};
	},
	mounted() {},
	onLoad: function() {
		var _this = this;
		console.log(111);
		this.timeit = setInterval(function() {
			_this.timeout--;
			if (_this.timeout == 0) {
				clearInterval(_this.timeit);
			}
		}, 1000);
	},
	methods: {
		tohome() {
			if (this.timeout == 0) {
				uni.switchTab({
					url: '/pages/index/index'
				});
			}
		}
	}
};
</script>

<style lang="less">
.guideBaner {
	position: relative;
	.bannerClose {
		position: absolute;
		right: 10px;
		width: 40px;
		height: 40px;
		border: 1px solid #fff;
		border-radius: 50%;
		z-index: 999;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		top: 10px;
		box-shadow: 0px 0px 18px #827a7a;
		font-size: 11px;
	}
	.bannerimage {
		position: absolute;
		width: 100%;
		height: 100vh;
		image {
			width: 100%;
			height: 100%;
		}
	}
}
</style>

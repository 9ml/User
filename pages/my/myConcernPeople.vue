<!-- 我关注的主播 -->
<template>
	<view>
		<view class="info" v-for="value in 4">
			<image src="../../static/img_avatar_wd.png"></image>
			<text>张三</text>
			<view>取消关注</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.info{
		width: 100%;
		height: 125rpx;
		display: flex;
		align-items: center;
		background-color: white;
		border-top: 1px solid #f6f6f6;
		image{
			width: 80rpx;
			height: 80rpx;
			margin-left: 30rpx;
		}
		text{
			font-size: 30rpx;
			margin-left: 30rpx;
		}
		view{
			position: absolute;
			float: right;
			right: 30rpx;
			width: 140rpx;
			height: 55rpx;
			color: white;
			font-size: 28rpx;
			text-align: center;
			line-height: 55rpx;
			border-radius: 15rpx;
			background-color: #7d7d7d;
		}
	}
</style>
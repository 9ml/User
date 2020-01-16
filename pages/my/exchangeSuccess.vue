<!-- 兑换成功 -->
<template>
	<view>
		<view class="info">
			<image src="/static/icon_yiyuehuan_dhcg.png"></image>
			<view>已兑换</view>
		</view>
		<view class="submit" @tap="back">继续兑换商品</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			back(){
				uni.redirectTo({
					url:'myPoints'
				})
			}
		}
	}
</script>

<style lang="scss">
	.info{
		width: 100%;
		height: 535rpx;
		display: flex;
		font-size: 34rpx;
		color: gray;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background-color: white;
		border-top: 1px solid #f6f6f6;
		image{
			width: 180rpx;
			height: 180rpx;
			margin-bottom: 20rpx;
		}
	}
	.submit{
		margin-top: 160rpx;
		margin-left: 50rpx;
		color: white;
		width: 640rpx;
		height: 90rpx;
		font-size: 32rpx;
		text-align: center;
		line-height: 90rpx;
		border-radius: 60rpx;
		background-color: #f88312;
	}
</style>

<!-- 我的收藏 -->
<template>
	<view>
		<view class="info" @tap="tapsp">
			<text>商品收藏</text>
			<text class="right">〉</text>
		</view>
		
		<view class="info" @tap="tapdp">
			<text>店铺收藏</text>
			<text class="right">〉</text>
		</view>
		
		<view class="info" @tap="tapxsp">
			<text>小视频收藏</text>
			<text class="right">〉</text>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			tapxsp(){
				uni.navigateTo({
					url:'videoCollection'
				})
			},
			tapdp(){
				uni.navigateTo({
					url:'storeCollection'
				})
			},
			tapsp(){
				uni.navigateTo({
					url:'commodityCollection'
				})
			}
		}
	}
</script>

<style lang="scss">
	.info{
		width: 100%;
		height: 90rpx;
		font-size: 30rpx;
		display: flex;
		align-items: center;
		background-color: white;
		border-top: 1px solid #f6f6f6;
		text{
			margin-left: 30rpx;
		}
		.right{
			position: absolute;
			float: right;
			right: 20rpx;
			font-size: 30rpx;
			color: gray;
		}
	}
</style>

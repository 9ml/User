<!-- 我的关注 -->
<template>
	<view>
		<view class="info" @tap="tapshop">
			<text>我关注的店铺</text>
			<text class="right">〉</text>
		</view>
		
		<view class="info" @tap="tapzb">
			<text>我关注的主播</text>
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
			tapzb(){
				uni.navigateTo({
					url:'myConcernPeople'
				})
			},
			tapshop(){
				uni.navigateTo({
					url:'myConcernShop'
				})
			}
		}
	}
</script>

<style lang="scss">
	.info{
		width: 100%;
		height: 90rpx;
		display: flex;
		align-items: center;
		font-size: 30rpx;
		background-color: white;
		border-top: 1px solid #f6f6f6;
		text{
			margin-left: 30rpx;
		}
		.right{
			position: absolute;
			float: right;
			right: 10rpx;
			color: gray;
		}
	}
</style>

<!-- 评论 -->
<template>
	<view>
		<view class="top">
			<image src="../../static/img_1_xjz.png"></image>
			描述相符<uni-rate :value="4" :margin="5" />
		</view>
		<view class="info">
			<textarea placeholder="亲,本次服务还满意吗？说点什么吧..."></textarea>
			<image src="../../static/icon_tjtp_pl.png"></image>
		</view>
		
		<view class="pingjia">
			<view><image src="../../static/icon_dp_dpsc.png"></image>店铺评价：</view>
			<view class="pj_v">
				描述相符：<uni-rate :value="4" :margin="5" />
			</view>
			<view class="pj_v">
				服务态度：<uni-rate :value="4" :margin="5" />
			</view>
		</view>
		
		<view class="submit">发布</view>
	</view>
</template>

<script>
	import uniRate from '@/components/uni-rate/uni-rate.vue'
	export default{
		components:{
			uniRate
		}
	}
</script>

<style lang="scss">
	.top{
		width: 100%;
		height: 90rpx;
		display: flex;
		font-size: 30rpx;
		align-items: center;
		background-color: white;
		border-top: 1px solid #f6f6f6;
		image{
			width: 70rpx;
			height: 70rpx;
			margin-left: 30rpx;
			margin-right: 20rpx;
		}
	}
	.info{
		height: 300rpx;
		padding: 30rpx;
		font-size: 30rpx;
		background-color: white;
		border-top: 1px solid #f6f6f6;
		border-bottom: 1px solid #f6f6f6;
		textarea{
			width: 660rpx;
			height: 145rpx;
		}
		image{
			width: 120rpx;
			height: 120rpx;
		}
	}
	.pingjia{
		padding: 20rpx;
		font-size: 28rpx;
		background-color: white;
		image{
			width: 30rpx;
			height: 30rpx;
			margin-right: 5rpx;
		}
		.pj_v{
			margin-left: 60rpx;
			display: flex;
			align-items: center;
		}
	}
	.submit{
		color: white;
		width: 560rpx;
		height: 70rpx;
		margin-top: 120rpx;
		margin-left: 100rpx;
		text-align: center;
		line-height: 70rpx;
		font-size: 32rpx;
		border-radius: 60rpx;
		background-color: #fe6505;
	}
	
</style>


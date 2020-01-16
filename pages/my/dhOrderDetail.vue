<!-- 兑换商品详情 -->
<template>
	<view>
		<!-- 轮播图 -->
		<swiper autoplay="true" indicator-dots="true" indicator-color="rgba(247,247,247)" indicator-active-color="rgba(247,48,67)"
		 interval="2000" circular="true">
			<swiper-item v-for="(value,index) in banners" :key="index">
				<image :src="value.src"></image>
			</swiper-item>
		</swiper>
		
		<!-- 商品描述 -->
		<view class="con">
			<view>苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果</view>
			<view class="jifen">3000积分</view>
			<view class="num">8.2万已兑换</view>
		</view>
		
		<!-- 商品详情 -->
		<view class="goodxq">
			<view class="title">
				<text class="line"></text>
				<text class="text">商品详情</text>
				<text class="line"></text>
			</view>
			<image src="../../static/img_spxqtp_jf.png"></image>
		</view>
		
		<!-- 有效时间 -->
		<view class="time">
			<text>有效时间</text>
			<text class="right">2019.09.10 10:30</text>
		</view>
		<view class="dhsy">
			<text>兑换使用</text>
			<text class="text">内容内容内容内容内容内容内容内容内容内容</text>
		</view>
		
		<view class="foot">
			<view class="left">
				<view>支付：<text>120积分</text></view>
				<view>余额：<text>3000积分</text></view>
			</view>
			<view class="duihuan">兑换</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				banners: [{
						src: '../../static/img_1_xjz.png'
					},
					{
						src: '../../static/img_1_xjz.png'
					}
				],
			}
		}
	}
</script>

<style lang="scss">
	swiper {
		width: 100%;
		height: 490rpx;
		swiper-item image {
			width: 100%;
			height: 100%;
		}
	}
	.con{
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-size: 30rpx;
		background-color: white;
		view{
			margin-left: 30rpx;
			margin-right: 30rpx;
		}
		.jifen{
			margin-top: 10rpx;
			font-size: 36rpx;
			color: #fa7274;
		}
		.num{
			color: gray;
			font-size: 28rpx;
		}
	}
	.goodxq{
		width: 100%;
		margin-top: 20rpx;
		background-color: white;
		image{
			width: 100%;
			height: 1460rpx;
		}
		.title {
			width: 100%;
			height: 100rpx;
			display: flex;
			align-items: center;
			justify-content: center;
		
			.line {
				display: inline-block;
				width: 100px;
				border-top: 1px solid #cccccc;
				vertical-align: 5px;
			}
		
			.text {
				margin-left: 20rpx;
				margin-right: 20rpx;
				font-size: 30rpx;
				color: #fa7274;
			}
		}
	}
	.time{
		margin-top: 20rpx;
		width: 100%;
		height: 90rpx;
		display: flex;
		align-items: center;
		font-size: 30rpx;
		background-color: white;
		border-bottom: 1px solid #f6f6f6;
		text{
			margin-left: 30rpx;
		}
		.right{
			position: absolute;
			right: 30rpx;
			color: gray;
		}
	}
	.dhsy{
		width: 100%;
		height: 170rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-size: 30rpx;
		background-color: white;
		text{
			margin-left: 30rpx;
		}
		.text{
			color: gray;
		}
	}
	.foot{
		margin-top: 20rpx;
		width: 100%;
		height: 150rpx;
		font-size: 30rpx;
		display: flex;
		align-items: center;
		background-color: white;
		.left{
			margin-left: 30rpx;
			width: 260rpx;
			height: 150rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			text{
				color: #fa7274;
			}
		}
		.duihuan{
			position: absolute;
			right: 30rpx;
			color: white;
			width: 200rpx;
			height: 70rpx;
			text-align: center;
			line-height: 70rpx;
			border-radius: 60rpx;
			background-color: #fb8b1b;
		}
	}
</style>

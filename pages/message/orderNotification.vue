<!-- 订单通知 -->
<template>
	<view>
		<view class="info" v-for="(value,index) in infoArr" :key='index'>
			<view class="title">{{value.title}}</view>
			<view class="con">
				<image :src="value.src"></image>
				<view class="right">{{value.con}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				infoArr:[
					{title:'您的订单已完成',src:'../../static/img_1_xjz.png',con:'订单(苹果)已配送完成，期待您的评价'},
					{title:'您的订单已完成',src:'../../static/img_1_xjz.png',con:'订单(苹果)已配送完成，期待您的评价'},
					{title:'您的订单已完成',src:'../../static/img_1_xjz.png',con:'订单(苹果)已配送完成，期待您的评价'},
					{title:'您的订单已完成',src:'../../static/img_1_xjz.png',con:'订单(苹果)已配送完成，期待您的评价'},
					
				]
			}
		}
	}
</script>

<style lang="scss">
	.info{
		margin: 20rpx;
		padding: 20rpx;
		width: 690rpx;
		height: 240rpx;
		border-radius: 15rpx;
		background-color: white;
		.title{
			font-size: 31rpx;
			margin-bottom: 20rpx;
		}
		.con{
			display: flex;
			align-items: center;
			image{
				width: 170rpx;
				height: 170rpx;
			}
			.right{
				padding-left: 20rpx;
				padding-right: 20rpx;
				color: gray;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 500rpx;
				height: 170rpx;
				font-size: 28rpx;
				background-color: #f7f7f7;
			}
		}
	}
</style>

<!-- 分销中心 -->
<template>
	<view>
		<view class="top">
			<view class="left">
				<view class="title">余额账户（元）</view>
				<view class="num">300.00</view>
			</view>
			<view class="right">提现</view>
			<view class="foot">
				<text>2019.09.12 10:00</text>
				<text class="foot_r">累计收入(元):3000.00</text>
			</view>
		</view>
		
		<view class="list" @tap="tapyj">
			<image src="../../static/icon_yjjl_gxzx.png"></image>
			<text>佣金记录</text>
			<text class="right">〉</text>
		</view>
		
		<view class="list" @tap="taptd">
			<image src="../../static/icon_wdtd_fxzx.png"></image>
			<text>我的团队(10)</text>
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
			taptd(){
				uni.navigateTo({
					url:'myTeam'
				})
			},
			tapyj(){
				uni.navigateTo({
					url:'commissionRecord'
				})
			}
		}
	}
</script>

<style lang="scss">
	.top{
		width: 100%;
		height: 360rpx;
		color: white;
		background-color: #5190f7;
		.left{
			position: absolute;
			margin-top: 90rpx;
			margin-left: 30rpx;
			width: 490rpx;
			height: 160rpx;
			.title{
				font-size: 32rpx;
			}
			.num{
				font-size: 80rpx;
			}
		}
		.right{
			position: absolute;
			margin-left: 520rpx;
			margin-top: 150rpx;
			color: white;
			width: 180rpx;
			height: 60rpx;
			font-size: 30rpx;
			text-align: center;
			line-height: 60rpx;
			border-radius: 10rpx;
			background-color: #f88312;
		}
		.foot{
			position: absolute;
			margin-top: 295rpx;
			width: 100%;
			height: 65rpx;
			display: flex;
			align-items: center;
			font-size: 30rpx;
			background-color: rgba(0, 0, 0, 0.3);
			text{
				margin-left: 30rpx;
			}
			.foot_r{
				position: absolute;
				right: 30rpx;
			}
		}
	}
	.list{
		width: 100%;
		height: 90rpx;
		display: flex;
		font-size: 30rpx;
		align-items: center;
		background-color: white;
		border-top: 1px solid #f6f6f6;
		image{
			margin-left: 30rpx;
			margin-right: 20rpx;
			width: 45rpx;
			height: 50rpx;
		}
		.right{
			position: absolute;
			right: 20rpx;
			color: gray;
		}
	}
</style>

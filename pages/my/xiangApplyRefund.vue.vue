<!-- 乡村产品申请退款 -->
<template>
	<view>
		<view class="con">
			<view class="row1"><text>订单编号</text><text class="num">123456789</text></view>
			<view class="row1"><image src="../../static/icon_dp_dpsc.png"></image><text>张三旗舰店</text></view>
			<view class="row2">
				<image src="../../static/img_1_xjz.png"></image>
				<view class="right">
					<view class="title">苹果苹果苹果苹果苹果苹果苹果<text>￥13.8</text></view>
					<view class="name">苹果</view>
					<view class="num">x1</view>
				</view>
			</view>
		</view>
		<view class="info">
			<text>订单金额</text>
			<text class="right">￥33.00</text>
		</view>
		<view class="info">
			<text>退款方式</text>
			<text class="right">支付宝</text>
		</view>
		<view class="input">
			<text>退款原因</text>
			<textarea placeholder="请输入您的退款原因"></textarea>
		</view>
		
		<view class="tuikuan" @tap="sqbtn">申请退款</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			sqbtn(){
				uni.navigateTo({
					url:'xcRefundDetails'
				})
			}
		}
	}
</script>

<style lang="scss">
	.con{
		padding-bottom: 20rpx;
		margin: 25rpx;
		width: 700rpx;
		font-size: 30rpx;
		border-radius: 15rpx;
		background-color: white;
		.row1{
			width: 100%;
			height: 90rpx;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #f6f6f6;
			text{
				margin-left: 30rpx;
			}
			.num{
				color: gray;
			}
			image{
				width: 35rpx;
				height: 35rpx;
				margin-left: 30rpx;
				margin-right: -20rpx;
			}
		}
		.row2{
			margin-left: 10rpx;
			margin-top: 20rpx;
			width: 690rpx;
			height: 100rpx;
			display: flex;
			align-items: center;
			image{
				width: 100rpx;
				height: 100rpx;
			}
			.right{
				margin-left: 10rpx;
				width: 565rpx;
				height: 100rpx;
				.title{
					font-size: 28rpx;
					text{
						position: absolute;
						right: 40rpx;
					}
				}
				.name{
					font-size: 26rpx;
					color: gray;
				}
				.num{
					font-size: 26rpx;
					color: gray;
				}
			}
		}

	}
	.info{
		width: 100%;
		height: 95rpx;
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
			right: 30rpx;
			color: gray;
		}
	}
	.input{
		padding-top: 10rpx;
		width: 100%;
		height: 350rpx;
		display: flex;
		font-size: 30rpx;
		flex-direction: column;
		justify-content: center;
		background-color: white;
		border-top: 1px solid #f6f6f6;
		text{
			margin-left: 30rpx;
		}
		textarea{
			margin: 25rpx;
			padding: 10rpx;
			width: 680rpx;
			height: 240rpx;
			border: 1px solid gray;
			border-radius: 15rpx;
		}
	}
	.tuikuan{
		margin: 50rpx;
		width: 640rpx;
		height: 90rpx;
		color: white;
		line-height: 90rpx;
		text-align: center;
		font-size: 30rpx;
		border-radius: 60rpx;
		background-color: #fb8b1b;
	}
</style>
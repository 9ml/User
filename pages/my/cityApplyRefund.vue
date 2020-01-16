<!-- 同城买菜申请退款 -->
<template>
	<view>
		<view class="info">
			<text>订单编号</text>
			<text class="right">1234567890</text>
		</view>
		<view class="info">
			<text>店铺名称</text>
			<text class="right">张三旗舰店</text>
		</view>
		<view class="info">
			<text>订单详情</text>
			<text class="right">蔬菜</text>
		</view>
		<view class="info">
			<text>订单金额</text>
			<text class="right">￥33.00</text>
		</view>
		<view class="info">
			<text>付款方式</text>
			<text class="right">支付宝</text>
		</view>
		<view class="con">
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
					url:'refundDetails'
				})
			}
		}
	}
</script>

<style lang="scss">
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
	.con{
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

<!-- 同城买菜退款详情 -->
<template>
	<view>
		<view class="top">
			<view class="title">退款成功</view>
			<view class="time">2017年10月31日 14:20</view>
		</view>
		<view class="row">
			<text>退款总金额</text>
			<text class="right">￥59.00</text>
		</view>
		<view class="row">
			<text>退款账户</text>
			<text class="right">原支付账户</text>
		</view>
		
		<view class="jindu">
			<uni-steps :options="list" :active="active" direction="row" />
		</view>
		
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
		<view class="info">
			<text>退款原因</text>
			<text class="right">不想要了</text>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				active: 1,
				list: [{
					title: '买家退款',
					desc: '2020-07-08 18:31'
				}, {
					title: '银行受理',
					desc: '2020-07-08 18:31'
				}, {
					title: '退款成功',
					desc: '2020-07-08 18:31'
				}]
			}
		}
	}
</script>

<style lang="scss">
	.top{
		width: 100%;
		height: 180rpx;
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: #fc8e1d;
		.title{
			font-size: 30rpx;
			font-weight: 500;
			margin-left:75rpx ;
		}
		.time{
			font-size: 26rpx;
			margin-left:75rpx ;
		}
	}
	.row{
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
			right: 20rpx;
			color: gray;
		}
	}
	.jindu{
		width: 100%;
		height: 225rpx;
		display: flex;
		align-items: center;
		background-color: white;
	}
	.con{
		margin: 15rpx;
		width: 720rpx;
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
			padding-bottom: 20rpx;
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
</style>

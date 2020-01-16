<!-- 乡村产品退款详情 -->
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
		<view class="row">
			<text>退回信息</text>
		</view>
		<view class="con">
			<view class="row1">
				<image src="../../static/img_1_xjz.png"></image>
				<view class="right">
					<view class="title">苹果苹果苹果苹果苹果苹果苹果</view>
					<view class="num">x1</view>
					<view class="name">苹果</view>
				</view>
			</view>
			<view class="row2">
				<view>退款原因：多拍/拍错/不想要</view>
				<view>退款金额：￥168.00</view>
				<view>申请件数：1件</view>
				<view>申请时间：2017-05-25 18:30</view>
				<view>退款编号：123456789564</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
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

	.con{
		width: 100%;
		font-size: 30rpx;
		border-radius: 15rpx;
		background-color: white;
		padding-bottom: 20rpx;
		.row1{
			
			width: 100%;
			height: 225rpx;
			display: flex;
			align-items: center;
			background-color: #f2f2f2;
			image{
				margin-left: 20rpx;
				width: 195rpx;
				height: 195rpx;
			}
			.right{
				margin-left: 15rpx;
				width: 565rpx;
				height: 100rpx;
				.title{
					font-size: 28rpx;
				}
				.name{
					margin-top: 40rpx;
					font-size: 26rpx;
					color: gray;
				}
				.num{
					position: absolute;
					right: 30rpx;
					font-size: 26rpx;
				}
			}
		}
		.row2{
			width: 100%;
			color: gray;
			font-size: 28rpx;
			view{
				margin-top: 10rpx;
				width: 500rpx;
				height: 30rpx;
				margin-left: 20rpx;
			}
		}
	}
	
</style>

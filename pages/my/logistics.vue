<!-- 物流 -->
<template>
	<view>
		<view class="top">
			<image src="../../static/img_1_wl.png"></image>
			<view class="right">
				<view class="title">中通快递</view>
				<view class="num">运单号：1234567990</view>
			</view>
		</view>
		
		<view class="info">
			<uni-steps :options="list" :active="active" direction="column" />
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				active: 1,
				list: [{
					title: '订单已提交',
					desc: '8月20日 18:31'
				}, {
					title: '订单成功',
					desc: '8月20日 18:31'
				}, {
					title: '商家已接单',
					desc: '8月20日 18:31'
				}, {
					title: '骑手已接单',
					desc: '8月20日 18:31'
				},{
					title: '骑手已到店',
					desc: '8月20日 18:31'
				},{
					title: '骑手已取货',
					desc: '8月20日 18:31'
				},
				{
					title: '骑手已送达',
					desc: '8月20日 18:31'
				},
				{
					title: '订单已完成',
					desc: '8月20日 18:31'
				}]
			}
		}
	}
</script>

<style lang="scss">
	.top{
		width: 100%;
		height: 145rpx;
		display: flex;
		align-items: center;
		background-color: white;
		border-top: 1px solid #f6f6f6;
		image{
			width: 100rpx;
			height: 100rpx;
			margin-left: 30rpx;
		}
		.right{
			margin-left: 20rpx;
			width: 550rpx;
			height: 100rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			font-size: 30rpx;
			.title{
				font-size: 32rpx;
			}
			.num{
				font-size: 28rpx;
			}
		}
	}
	.info{
		margin-top: 20rpx;
		background-color: white;
	}
</style>

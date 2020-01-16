<!-- 兑换记录 -->
<template>
	<view>
		<view class="list" v-for="(value,index) in infoArr" :key='index'>
			<view class="row2">
				<image src="../../static/img_1_xjz.png"></image>
				<view class="right">
					<view class="con">{{value.con}}</view>
					<view class="time">时间：{{value.time}}</view>
					<view class="jifen">积分：{{value.jifen}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				infoArr: [{
						src: '../../static/img_1_xjz.png',
						con: '水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖',
						time: '2019.02.01 10:30',
						jifen: '30.00'
					},
					{
						src: '../../static/img_1_xjz.png',
						con: '水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖',
						time: '2019.02.01 10:30',
						jifen: '30.00'
					}
				]
			}
		}
	}
</script>

<style lang="scss">
	.list {
		padding-bottom: 10rpx;
		margin-top: 20rpx;
		width: 100%;
		background-color: white;
		.row2 {
			margin-left: 30rpx;
			padding-top: 10rpx;
			padding-bottom: 10rpx;
			width: 670rpx;
			display: flex;
			align-items: center;
	
			image {
				width: 195rpx;
				height: 195rpx;
			}
	
			.right {
				margin-left: 20rpx;
				width: 460rpx;
	
				.con {
					font-size: 28rpx;
					margin-bottom: 10rpx;
				}
	
				.time {
					font-size: 26rpx;
					color: gray;
				}
	
				.jifen {
					color: #fc726f;
					font-size: 30rpx;
				}
			}
		}
	}
</style>

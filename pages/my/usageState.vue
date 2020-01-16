<!-- 使用状态 -->
<template>
	<view>
		<view class="cat">
			<view :class="current==index?'cur':''" v-for="(value,index) in catArr" :key='index' @tap="tapcat(index)">
				{{value.name}}
			</view>
		</view>
		
		<view class="list" v-for="(value,index) in infoArr" :key='index'>
			<view class="row2">
				<image src="../../static/img_1_xjz.png"></image>
				<view class="right">
					<view class="con">{{value.con}}</view>
					<view class="time">时间：{{value.time}}</view>
					<view class="dhbtn" v-if="current==1">使用</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				current: 0,
				catArr: [{
						name: '已使用'
					},
					{
						name: '未使用'
					}
				],
				infoArr: [{
						src: '../../static/img_1_xjz.png',
						con: '水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖',
						time: '2019.02.01 10:30'
					},
					{
						src: '../../static/img_1_xjz.png',
						con: '水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖',
						time: '2019.02.01 10:30'
					}
				]
			}
		},
		methods:{
			tapcat(e) {
				this.current = e
			}
		}
	}
</script>

<style lang="scss">
	.cat {
		width: 100%;
		height: 90rpx;
		display: flex;
		font-size: 30rpx;
		align-items: center;
		justify-content: space-around;
		background-color: white;
		border-top: 1px solid #f6f6f6;
		view {
			height: 90rpx;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	
		.cur {
			color: #fb8615;
			border-bottom: 2px solid #fb8615;
		}
	}
	.list {
		padding-bottom: 10rpx;
		margin: 20rpx;
		width: 710rpx;
		height: 240rpx;
		display: flex;
		align-items: center;
		border-radius: 15rpx;
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
				.dhbtn{
					margin-left: 260rpx;
					margin-top: 10rpx;
					color: white;
					width: 180rpx;
					height: 60rpx;
					text-align: center;
					line-height: 60rpx;
					font-size: 30rpx;
					border-radius: 60rpx;
					background-color: #f98413;
				}
			}
		}
	}
</style>

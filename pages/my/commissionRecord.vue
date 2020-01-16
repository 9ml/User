<!-- 佣金记录 -->
<template>
	<view>
		<view class="list" v-for="value in 5">
			<view class="left">
				<view class="name">李先生</view>
				<view class="time">2019.08.03 10:30</view>
			</view>
			<view class="right">+150</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.list{
		width: 100%;
		height: 100rpx;
		display: flex;
		align-items: center;
		background-color: white;
		border-top: 1px solid #f6f6f6;
		.left{
			margin-left: 30rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			.name{
				font-size: 30rpx;
			}
			.time{
				font-size: 28rpx;
				color: gray;
			}
		}
		.right{
			position: absolute;
			right: 30rpx;
			color: #fa8615;
		}
	}
</style>

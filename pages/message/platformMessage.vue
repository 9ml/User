<!-- 平台消息 -->
<template>
	<view>
		<view class="info" v-for="(value,index) in infoArr" :key='index'>
			<view>
				<text class="title">{{value.title}}</text>
				<text class="time">{{value.time}}</text>
			</view>
			<view class="con">{{value.con}}</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				infoArr:[
					{title:'您的订单已签收',con:'您购买的苹果水果新鲜已签收',time:'11.24'},
					{title:'您的订单已签收',con:'您购买的苹果水果新鲜已签收',time:'11.24'}
				]
			}
		},
		methods:{
		
		}
	}
</script>

<style lang="scss">
	.info{
		width: 100%;
		height: 155rpx;
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		background-color: white;
		border-top: 1px solid #e5e5e5;
		view{
			margin-left: 30rpx;
			.title{
				font-size: 32rpx;
				font-weight: 500;
			}
			.time{
				position: absolute;
				float: right;
				right: 30rpx;
				font-size: 24rpx;
				color: gray;
			}
		}
		.con{
			color: gray;
			font-size: 30rpx;
		}
		
		
	}
</style>

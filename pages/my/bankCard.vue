<!-- 银行卡 -->
<template>
	<view class="content">
		<view class="list" v-for="(value,index) in bankArr" :key='index'>
			<view class="title">{{value.title}}</view>
			<view class="name">储蓄卡 | {{value.name}}</view>
			<view class="num">{{value.num}}</view>
		</view>
		
		<view class="add" @tap="add">
			<image src="../../static/icon_tjyhk_yhk.png"></image>
			添加银行卡
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				bankArr:[
					{title:'招商银行',name:'王**',num:'**** **** **** 8888'},
					{title:'招商银行',name:'王**',num:'**** **** **** 8888'},
					{title:'招商银行',name:'王**',num:'**** **** **** 8888'}
				]
			}
		},
		methods:{
			add(){
				uni.navigateTo({
					url:'addBankCard'
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: white;
	}
	.content{
		border-top: 1px solid #f6f6f6;
		background-color: white;
		.list{
			padding-left: 30rpx;
			margin-left: 30rpx;
			margin-top: 30rpx;
			width: 660rpx;
			height: 210rpx;
			color: white;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			border-radius: 15rpx;
			background-image: url(../../static/img_3_yhk.png);
			background-size: 100% 100%;
			.title{
				font-size: 32rpx;
				font-weight: bold;
			}
			.name{
				font-size: 24rpx;
			}
			.num{
				font-size: 26rpx;
			}
		}
		.add{
			margin-top: 30rpx;
			width: 100%;
			height: 35rpx;
			color: #ff7d3f;
			font-size: 30rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			image{
				width: 35rpx;
				height: 35rpx;
				margin-right: 10rpx;
			}
		}
	}
	
</style>

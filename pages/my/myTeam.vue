<!-- 我的团队 -->
<template>
	<view>
		<view class="top">
			<view :class="current==index?'cur':''" v-for="(value,index) in catArr" :key='index' @tap="tapcat(index)">
				{{value.name}}
			</view>
		</view>
		<view class="title">
			<text>成员信息</text>
			<text class="right">他(她)的成员</text>
		</view>
		<view class="list" v-for="value in 5">
			<image src="../../static/img_avatar_wd.png"></image>
			<view class="left">
				<view class="name">李先生</view>
				<view class="time">2019.08.03 10:30</view>
			</view>
			<view class="right">0个成员</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				current:'',
				catArr:[
					{name:'一级'},
					{name:'二级'},
					{name:'三级'}
				]
			}
		},
		methods:{
			tapcat(e){
				this.current = e
			}
		}
	}
</script>

<style lang="scss">
	.top{
		width: 100%;
		height: 90rpx;
		display: flex;
		font-size: 30rpx;
		align-items: center;
		justify-content: space-around;
		background-color: white;
		border-top: 1px solid #f6f6f6;
		.cur{
			height: 90rpx;
			color: #fa8816;
			display: flex;
			align-items: center;
			border-bottom: 2px solid #fa8816;
		}
	}
	.title{
		width: 100%;
		height: 70rpx;
		display: flex;
		align-items: center;
		font-size: 30rpx;
		text{
			margin-left: 30rpx;
		}
		.right{
			position: absolute;
			right: 30rpx;
		}
	}
	.list{
		width: 100%;
		height: 135rpx;
		display: flex;
		align-items: center;
		background-color: white;
		border-top: 1px solid #f6f6f6;
		image{
			margin-left: 30rpx;
			width: 90rpx;
			height: 90rpx;
		}
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
			font-size: 30rpx;
		}
	}
</style>

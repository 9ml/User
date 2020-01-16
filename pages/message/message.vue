<!-- 消息 -->
<template>
	<view>
		<view class="top">
			<view v-for="(value,index) in catArr" :key='index' @tap="taptop(index)">
				<image :src="value.src"></image>
				{{value.name}}
			</view>
		</view>
		<!-- 消息列表 -->
		<view class="list" v-for="(value,index) in xxArr" :key='index' @tap="taplist(index)">
			<image :src="value.src"></image>
			<view class="right">
				<view class="title">
					{{value.name}}
					<text>{{value.time}}</text>
				</view>
				<view class="info">{{value.info}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				catArr:[
					{name:'订单通知',src:'../../static/icon_ddtz_xx.png'},
					{name:'平台消息',src:'../../static/icon_ptxx_xx.png'},
					{name:'开播提醒',src:'../../static/icon_kbtx_xx.png'}
				],
				xxArr:[
					{name:'张三',src:'../../static/img_avatar_wd.png',time:'11.24',info:'请问有什么可以帮到您的？'},
					{name:'张三',src:'../../static/img_avatar_wd.png',time:'11.24',info:'请问有什么可以帮到您的？'},
					{name:'张三',src:'../../static/img_avatar_wd.png',time:'11.24',info:'请问有什么可以帮到您的？'},
					{name:'张三',src:'../../static/img_avatar_wd.png',time:'11.24',info:'请问有什么可以帮到您的？'}
				]
			}
		},
		methods:{
			taptop(e){
				if(e == 0){
					uni.navigateTo({
						url:'orderNotification'
					})
				}else if(e == 1){
					uni.navigateTo({
						url:'platformMessage'
					})
				}else{
					uni.navigateTo({
						url:'broadcastReminder'
					})
				}
			},
			taplist(e){
				uni.navigateTo({
					url:'../my/customerService'
				})
			}
		}
	}
</script>

<style lang="scss">
	.top{
		width: 100%;
		height: 230rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;
		background-color: white;
		border-top: 1px solid #f6f6f6;
		view{
			width: 120rpx;
			height: 155rpx;
			text-align: center;
			font-size: 30rpx;
			image{
				width: 100rpx;
				height: 100rpx;
			}
		}
	}
	.list{
		width: 100%;
		height: 145rpx;
		display: flex;
		align-items: center;
		background-color: white;
		border-top: 1px solid #f6f6f6;
		image{
			margin-left: 30rpx;
			width: 100rpx;
			height: 100rpx;
		}
		.right{
			margin-left: 30rpx;
			width: 540rpx;
			height: 90rpx;
			display: flex;
			justify-content: space-between;
			flex-direction: column;
			.title{
				font-size: 30rpx;
				font-weight: 500;
				text{
					position: absolute;
					float: right;
					right: 30rpx;
					color: gray;
				}
			}
			.info{
				color: gray;
				font-size: 28rpx;
			}
		}
	}
</style>

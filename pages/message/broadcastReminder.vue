<!-- 开播提醒 -->
<template>
	<view>
		<!-- 消息列表 -->
		<view class="list" v-for="(value,index) in xxArr" :key='index'>
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
				xxArr:[
					{name:'张三',src:'../../static/img_avatar_wd.png',time:'11.24',info:'请问有什么可以帮到您的？'},
					{name:'张三',src:'../../static/img_avatar_wd.png',time:'11.24',info:'请问有什么可以帮到您的？'},
					{name:'张三',src:'../../static/img_avatar_wd.png',time:'11.24',info:'请问有什么可以帮到您的？'},
					{name:'张三',src:'../../static/img_avatar_wd.png',time:'11.24',info:'请问有什么可以帮到您的？'}
				]
			}
		}
	}
</script>

<style lang="scss">
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

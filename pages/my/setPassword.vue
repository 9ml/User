<!-- 密码设置 -->
<template>
	<view>
		<view class="list" @tap="login">
			<text>修改登录密码</text>
			<text class="right">〉</text>
		</view>
		
		<view class="list" @tap="pay">
			<text>修改支付密码</text>
			<text class="right">〉</text>
		</view>
		
		<view class="list" @tap="wangji">
			<text>忘记支付密码</text>
			<text class="right">〉</text>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			wangji(){
				uni.navigateTo({
					url:'forgetPassword'
				})
			},
			pay(){
				uni.navigateTo({
					url:'updataPayPass'
				})
			},
			login(){
				uni.navigateTo({
					url:'updataLoginPass'
				})
			}
		}
	}
</script>

<style lang="scss">
	.list{
		width: 100%;
		height: 100rpx;
		font-size: 30rpx;
		display: flex;
		align-items: center;
		background-color: white;
		border-top: 1px solid #f6f6f6;
		text{
			margin-left: 30rpx;
		}
		.right{
			position: absolute;
			float: right;
			right: 20rpx;
		}
	}
</style>

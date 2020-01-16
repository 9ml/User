<!-- 修改登录密码 -->
<template>
	<view>
		<view class="form">
			<text>旧密码</text>
			<input placeholder="请输入旧密码" />
		</view>
		
		<view class="form">
			<text>新密码</text>
			<input placeholder="请输入新密码" />
		</view>
		
		<view class="form">
			<text>确认密码</text>
			<input placeholder="请再次输入密码" />
		</view>
		
		<view class="submit">确定</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.form{
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
		input{
			position: absolute;
			float: right;
			right: 30rpx;
			text-align: right;
		}
	}
	.submit{
		margin-top: 160rpx;
		margin-left: 50rpx;
		color: white;
		width: 640rpx;
		height: 90rpx;
		font-size: 34rpx;
		text-align: center;
		line-height: 90rpx;
		border-radius: 60rpx;
		background-color: #f88312;
	}
</style>

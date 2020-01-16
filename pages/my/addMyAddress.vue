<!-- 添加收货地址 -->
<template>
	<view>
		<view class="content">
			<view><text>联系人</text><input placeholder="请输入姓名" /></view>
			<view><text>手机号</text><input placeholder="请输入手机号码" /></view>
			<view><text>收货地址</text><input placeholder="请输入收货地址" /></view>
			<view class="moren"><text>设为默认地址</text><switch color="#4CD964"/></view>
		</view>
		
	</view>
</template>

<script>
</script>

<style lang="scss">
	.content {
		width: 100%;
		view {
			width: 100%;
			height: 110rpx;
			font-size: 32rpx;
			display: flex;
			align-items: center;
			background-color: white;
			border-top: 1px solid #f6f6f6;
			text{
				margin-left: 30rpx;
			}
			input {
				position: absolute;
				float: right;
				right: 30rpx;
				width: 520rpx;
				text-align: right;
			}
			switch{
				margin-left: 400rpx;
				transform: scale(0.7);
			}
		}
		.moren{
			margin-top: 10rpx;
			border-top: none;
		}
	}
</style>

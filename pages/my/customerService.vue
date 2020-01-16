<!-- 客服 -->
<template>
	<view>
		<view class="chatMs">
			<!-- 时间 -->
			<view class="cm-time">
				下午3:20
			</view>
			<!-- 左 -->
			<view class="cm-main">
				<view class="cl-user">
					<view class="cu-header">
						<image src="../../static/img_avatar_wd.png" mode=""></image>
					</view>
					<view class="cu-name hiddenFontsA">
						故里
					</view>
				</view>
				<view class="cl-body">
					<view class="cb-ms">
						亲爱的店长，你好。
					</view>
				</view>
			</view>
			<!-- 右 -->
			<view class="cm-main">
				<view class="cl-user cr-user">
					<view class="cu-name hiddenFontsA">
						故里
					</view>
					<view class="cu-header">
						<image src="../../static/img_avatar_wd.png" mode=""></image>
					</view>
				</view>
				<view class="cl-body cr-body">
					<view class="cb-ms cb-msr">
						你好，请问有什么可以帮你的吗？
					</view>
				</view>
			</view>
		</view>
		<view class="bomMs">
			<view class="bm-main">
				<view class="bm-input">
					<input type="text" placeholder="请输入内容" />
				</view>
				<view class="bm-btn" hover-class="hoverStyleA">
					发送
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ok:false,
			}
		},

		methods: {
			quxiao(){
				this.ok = false
			}
		}
	}
</script>

<style lang="scss">
	.zhezhao {
		z-index: 100;
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		.phone_v{
			position: fixed;
			margin-left: 50rpx;
			bottom: 0;
			width: 650rpx;
			height: 230rpx;
			font-size: 30rpx;
			border-radius: 15rpx 15rpx 0 0;
			background-color: white;
			view{
				width: 100%;
				height: 75rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				border-bottom: 1px solid #f6f6f6;
			}
		}
	}
	
	.chatMs{
		width: 90%;
		margin: 0 auto;
		.cm-time{
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
			font-size: 24rpx;
			color: #888888;
		}
		.cm-main{
			margin-bottom: 40rpx;
			.cl-user{
				width: 70%;
				display: flex;
				.cu-header{
					image{
						width: 80rpx;
						height: 80rpx;
						border-radius: 50%;
					}
				}
				.cu-name{
					height: 80rpx;
					font-size: 24rpx;
					margin-left: 16rpx;
					color: #888888;
					line-height: 80rpx;
				}
			}
			.cr-user{
				width: 100%;
				justify-content: flex-end;
				.cu-name{
					margin-right: 20rpx;
				}
			}
			.cl-body{
				width: 70%;
				display: flex;
				.cb-ms{
					background-color: #FFFFFF;
					padding: 16rpx 16rpx 16rpx 16rpx;
					border-radius: 18rpx;
					font-size: 26rpx;
					margin-left: 40rpx;
				}
			}
			.cr-body{
				margin-left: 30%;
				display: flex;
				justify-content: flex-end;
				.cb-msr{
					margin-left: 0;
					margin-right: 40rpx;
				}
			}
		}
	}
	.bomMs{
		width: 100%;
		background-color: #FFFFFF;
		border-top: 1rpx solid #E3E3E3;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 9;
		.bm-main{
			width: 90%;
			height: 100rpx;
			margin: 0 auto;
			display: flex;
			align-items: center;
			.bm-input{
				width: 80%;
				height: 70rpx;
				border-radius: 6rpx;
				border: 1rpx solid #AEAEAE;
				input{
					width: 100%;
					height: 100%;
					font-size: 26rpx;
					padding-left: 10rpx;
				}
			}
			.bm-btn{
				width: 120rpx;
				height: 60rpx;
				border-radius: 6rpx;
				background-color: #F77F0C;
				text-align: center;
				line-height: 60rpx;
				font-size: 24rpx;
				color: #FFFFFF;
				margin-left: 30rpx;
			}
		}
	}
</style>

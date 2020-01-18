<!-- 设置 -->
<template>
	<view>
		<view class="list" @tap="pass"><text>密码设置</text><text class="right">〉</text></view>
		<view class="list" @tap="xieyi"><text>平台协议</text><text class="right">〉</text></view>
		<view class="list" @tap="fankui"><text>问题反馈</text><text class="right">〉</text></view>
		<view class="list" @tap="logout"><text>退出</text><text class="right">〉</text></view>
		
		<!-- 确认退出 -->
		<view class="zhezhao" v-if="ok" @touchmove.stop.prevent>
			<view class="con4">
				<view class="title">是否退出</view>
				<view class="con4_v">
					<view @tap="quxiao">取消</view>
					<view style="color: #fa8615;border-right: none;" @tap="queding">确定</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				ok:false
			}
		},
		methods:{
			queding(){
				uni.removeStorage({
					key:"token",
					success: (res) => {
						uni.reLaunch({
							url: "../user/login"
						})
					}
				})
			},
			pass(){
				uni.navigateTo({
					url:'setPassword'
				})
			},
			xieyi(){
				uni.navigateTo({
					url:'platformProtocol'
				})
			},
			fankui(){
				uni.navigateTo({
					url:'feedback'
				})
			},
			logout(){
				this.ok = true
			},
			quxiao() {
				this.ok = false
			},
		}
	}
</script>

<style lang="scss">
	.list{
		width: 100%;
		height: 100rpx;
		display: flex;
		align-items: center;
		font-size: 30rpx;
		background-color: white;
		border-top: 1px solid #f6f6f6;
		text{
			margin-left: 30rpx;
		}
		.right{
			position: absolute;
			right: 20rpx;
			color: gray;
		}
	}
	.zhezhao {
		z-index: 1000;
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		.phone_v{
			position: fixed;
			bottom: 0;
			width: 100%;
			height: 230rpx;
			font-size: 30rpx;
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
		.con4 {
			margin-top: 380rpx;
			margin-left: 115rpx;
			width: 525rpx;
			height: 240rpx;
			border-radius: 15rpx;
			font-size: 30rpx;
			background-color: white;
	
			.title {
				width: 100%;
				height: 150rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				border-bottom: 1px solid #f6f6f6;
			}
	
			.con4_v {
				width: 100%;
				height: 90rpx;
				display: flex;
	
				view {
					width: 50%;
					height: 90rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					border-right: 1px solid #f6f6f6;
				}
			}
		}
	}
</style>

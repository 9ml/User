<!-- 编辑收货地址 -->
<template>
	<view>
		<view class="content">
			<view><text>联系人</text><input value="张三"/></view>
			<view><text>手机号</text><input value="15698012345"/></view>
			<view><text>收货地址</text><input value="山东省济南市历下区华能路汇能大厦29楼" /></view>
			<view class="moren"><text>设为默认地址</text><switch color="#4CD964"/></view>
			<view class="del" @tap="del"><text>删除该收货地址</text></view>
		</view>
		
		<!-- 确认删除 -->
		<view class="zhezhao" v-if="ok" @touchmove.stop.prevent>
			<view class="con4">
				<view class="title">是否删除地址</view>
				<view class="con4_v">
					<view @tap="quxiao">取消</view>
					<view style="color: #fa8615;border-right: none;">确定</view>
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
			del(){
				this.ok = true
			},
			quxiao() {
				this.ok = false
			},
		}
	}
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
		.del{
			color: #fc8c1c;
			margin-top: 10rpx;
			border-top: none;
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

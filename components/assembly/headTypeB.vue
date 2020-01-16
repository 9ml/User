<template name="headTypeB">
	<view>
		<view class="topMs">
			<view class="tmSpace"></view>
			<view class="tmMs">
				<view class="tm-back" @tap="myTools.navBack()" v-if="isShowBack">
					<image src="/static/icon/nav_back_zb.png" mode=""></image>
				</view>
				<view class="tm-adress">
					<view class="ta-icon">
						<image src="/static/icon/icon_dz_sy.png" mode=""></image>
					</view>
					<view class="ta-info hiddenFonts">
						{{adress}}
					</view>
				</view>
				<view class="tm-search" @tap="myTools.navTo('index/home/search')">
					<view class="ts-icon">
						<image src="/static/icon/icon_ss_sy.png" mode=""></image>
					</view>
					<view class="ts-inp">
						<input type="text" placeholder="请输入搜索内容" placeholder-style="color:#FFFFFF" />
					</view>
				</view>
			</view>
		</view>
		<view class="topSpace"></view>
	</view>
</template>

<script>
	export default {
		name : "headTypeB",
		props : {
			adress : {
				type : String,
				default : function(){
					return ""
				}
			},
			isShowBack : {
				type : Boolean
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.topMs{
		width: 100%;
		height: 130rpx;
		background-color: #FA8B1A;
		position: fixed;
		top: 0;
		z-index: 9999;
		.tmSpace{
			height: 40rpx;
		}
		.tmMs{
			width: 96%;
			margin: 0 auto;
			display: flex;
			align-items: center;
			.tm-back{
				width: 6%;
				height: 90rpx;
				text-align: center;
				image{
					width: 20rpx;
					height: 36rpx;
					margin-top: 27rpx;
				}
			}
			.tm-adress{
				width: 20%;
				display: flex;
				.ta-icon{
					width: 30%;
					height: 90rpx;
					text-align: center;
					image{
						width: 30rpx;
						height: 38rpx;
						margin-top: 26rpx;
					}
				}
				.ta-info{
					width: 70%;
					height: 90rpx;
					line-height: 90rpx;
					text-align: center;
					font-size: 26rpx;
					color: #FFFFFF;
				}
			}
			.tm-search{
				width: 66%;
				margin-left: 10rpx;
				background-color: #FCC58A;
				border-radius: 30rpx;
				display: flex;
				align-items: center;
				.ts-icon{
					width: 14%;
					height: 60rpx;
					text-align: center;
					image{
						width: 30rpx;
						height: 29rpx;
						margin-top: 15rpx;
					}
				}
				.ts-inp{
					width: 86%;
					height: 60rpx;
					input{
						width: 100%;
						height: 100%;
						font-size: 26rpx;
						color: #FFFFFF;
					}
				}
			}
		}
	}
	.topSpace{
		height: 130rpx;
	}
</style>

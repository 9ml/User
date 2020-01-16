<template name="headTypeA">
	<view>
		<view class="htaMs" :class="{'htaBgW' : isWhite}">
			<view class="hm-space"></view>
			<view class="hm-all">
				<view class="ha-left" @tap="myTools.navBack()">
					<image v-if="isWhite" src="/static/icon/nav_back_ss.png" mode=""></image>
					<image v-else src="/static/icon/nav_back_zb.png" mode=""></image>
				</view>
				<view class="ha-name" :class="{'blackFonts' : isWhite}">
					{{title}}
				</view>
				<view class="ha-right"></view>
			</view>
		</view>
		<view v-if="isHaveSpace" class="headSpace"></view>
	</view>
</template>

<script>
	export default {
		name : "headTypeA",
		props : {
			title : {
				type : String,
				default : function(){
					return ""
				}
			},
			isWhite : {
				type : Boolean
			},
			isHaveSpace : {
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
	.htaMs{
		width: 100%;
		height: 120rpx;
		background-color: #FA8A17;
		position: fixed;
		top: 0;
		z-index: 99;
		.hm-space{
			height: 30rpx;
		}
		.hm-all{
			display: flex;
			align-items: center;
			.ha-left{
				width: 10%;
				height: 90rpx;
				text-align: center;
				image{
					width: 20rpx;
					height: 36rpx;
					margin-top: 30rpx;
				}
			}
			.ha-name{
				width: 80%;
				height: 90rpx;
				text-align: center;
				font-size: 30rpx;
				color: #FFFFFF;
				line-height: 100rpx;
			}
			.blackFonts{
				color: #000000;
			}
			.ha-right{
				width: 10%;
			}
		}
	}
	.htaBgW{
		background-color: #FFFFFF;
	}
	.headSpace{
		height: 120rpx;
	}
</style>

<template>
	<view>
		<headTypeA :title="title" :isWhite="isWhite" :isHaveSpace="isHaveSpace"></headTypeA>
		<view class="storeMs">
			<view class="sm-left">
				<view class="sl-header">
					<image src="/static/images/img_avatar_dpxq.png" mode=""></image>
				</view>
				<view class="sl-name hiddenFonts">
					果园外旗舰店
				</view>
			</view>
			<view class="sm-right">
				<view class="sr-ms">
					<view class="sr-icon">
						<image src="/static/icon/icon_tj_dp.png" mode=""></image>
					</view>
					<view class="sr-fonts">
						关注
					</view>
				</view>
			</view>
		</view>
		<view class="storeItems">
			<view class="si-ms">
				<view class="sm-title">
					店铺名称
				</view>
				<view class="sm-answer">
					果园外旗舰店
				</view>
			</view>
		</view>
		<view class="storeDesc">
			<view class="sd-ms">
				<view class="sm-name">
					店铺简介
				</view>
				<view class="sm-desc">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quis ducimus delectus neque nostrum quisquam voluptate eius illum aperiam veritatis commodi eligendi fugiat veniam beatae aliquid distinctio deleniti pariatur libero.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quis ducimus delectus neque nostrum quisquam voluptate eius illum aperiam veritatis commodi eligendi fugiat veniam beatae aliquid distinctio deleniti pariatur libero.
				</view>
			</view>
		</view>
		<view class="storeItems">
			<view class="si-ms">
				<view class="sm-title">
					营业时间
				</view>
				<view class="sm-answer">
					2019-09-04 10:30
				</view>
			</view>
		</view>
		<view class="storeItems">
			<view class="si-ms">
				<view class="sm-title">
					地址
				</view>
				<view class="sm-answer">
					江苏省徐州市
				</view>
			</view>
		</view>
		<view class="storeItems">
			<view class="si-ms">
				<view class="sm-title">
					联系我们
				</view>
				<view class="sm-answer">
					12345678910
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title : '店铺详情',
				isWhite : true,
				isHaveSpace : true
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F6F6F6;
	}
	.storeMs{
		height: 120rpx;
		background-color: #FFFFFF;
		margin: 2rpx 0 10rpx 0;
		display: flex;
		align-items: center;
		.sm-left{
			width: 70%;
			height: 100rpx;
			display: flex;
			align-items: center;
			.sl-header{
				width: 30%;
				height: 100rpx;
				text-align: center;
				image{
					width: 100rpx;
					height: 100rpx;
				}
			}
			.sl-name{
				width: 70%;
				height: 100rpx;
				line-height: 100rpx;
				font-size: 28rpx;
			}
		}
		.sm-right{
			width: 30%;
			.sr-ms{
				width: 160rpx;
				height: 60rpx;
				border-radius: 30rpx;
				margin: 0 auto;
				background-color: #F8820F;
				display: flex;
				align-items: center;
				font-size: 28rpx;
				text-align: center;
				line-height: 60rpx;
				color: #FFFFFF;
				.sr-icon{
					width: 36%;
					height: 60rpx;
					text-align: right;
					image{
						width: 24rpx;
						height: 24rpx;
						margin-top: 18rpx;
					}
				}
				.sr-fonts{
					margin-left: 10rpx;
				}
			}
		}
	}
	.storeItems{
		background-color: #FFFFFF;
		margin-bottom: 1rpx;
		.si-ms{
			width: 92%;
			height: 90rpx;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.sm-title{
				font-size: 28rpx;
			}
			.sm-answer{
				font-size: 26rpx;
				color: #666666;
			}
		}
	}
	.storeDesc{
		background-color: #FFFFFF;
		margin-bottom: 1rpx;
		.sd-ms{
			width: 92%;
			margin: 0 auto;
			.sm-name{
				font-size: 28rpx;
				height: 60rpx;
				line-height: 60rpx;
			}
			.sm-desc{
				padding: 10rpx 0 10rpx 0;
				font-size: 26rpx;
				color: #666666;
			}
		}
	}
</style>

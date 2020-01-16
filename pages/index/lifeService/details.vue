<template>
	<view>
		<headTypeA :title="title" :isWhite="isWhite" :isHaveSpace="isHaveSpace"></headTypeA>
		<view class="postMs">
			<view class="postDetails">
				<view class="pd-poster">
					<view class="pp-header">
						<image src="/static/images/img_avatar_sy.png" mode=""></image>
					</view>
					<view class="pp-user">
						<view class="pu-name">
							<view class="pn-name">
								时光艾诺
							</view>
							<view class="pn-top">
								置顶
							</view>
						</view>
						<view class="pu-time">
							2020-01-01
						</view>
					</view>
				</view>
				<view class="pd-fonts">
					电子商务电子商电子商务电子商务电子商务电子商务电子商电子商务电子商务电子商务电子商务电子商电子商务电子商务电子商务电子商务电子商电子商务电子商务电子商务电子商务电子商电子商务电子商务电子商务电子商务电子商电子商务电子商务电子商务电子商务电子商电子商务电子商务电子商务电子商务电子商电子商务电子商务电子商务电子商务电子商电子商务电子商务电子商务电子商务电子商电子商务电子商务电子商务电子商务电子商电子商务电子商务电子商务电子商务电子商电子商务电子商务电子商务电子商务电子商电子商务电子商务电子商务
				</view>
				<view class="pd-picture">
					<view class="pp-item" v-for="(d,d_idx) in 9" :key="d_idx">
						<image src="/static/images/img_1_xjz.png" mode=""></image>
					</view>
				</view>
				<view class="pd-browse">
					<view class="pd-left">
						66人浏览
					</view>
					<view class="pd-tight">
						<view class="pt-thumbs-up">
							<image src="/static/icons/icon_zan_tcxx.png" mode=""></image>
						</view>
						<view class="pt-thumbs-up">
							<image src="/static/icons/icon_xx_tcxx.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="pd-up-info">
					<view class="pui-user">
						<view class="pu-item" v-for="(e,e_idx) in 10" :key="e_idx">
							<image src="/static/images/img_avatar_sy.png" mode=""></image>
						</view>
					</view>
					<view class="pui-nums">
						等20人点赞
					</view>
				</view>
			</view>
		</view>
		<!-- 评论 -->
		<view class="commentTiNus">
			<view class="ctn">
				全部评论
			</view>
		</view>
		<!-- 评论信息 -->
		<view class="comments">
			<view class="c-main">
				<view class="cm-user">
					<view class="cu-header">
						<image src="/static/images/img_avatar_1_sjgl.png" mode=""></image>
					</view>
					<view class="cu-info">
						<view class="ci-name">
							时光艾诺
						</view>
						<view class="ci-time">
							2020-01-01
						</view>
					</view>
				</view>
				<view class="cm-desc">
					您好，朋友！
				</view>
			</view>
		</view>
		<!-- 显示所有评论 -->
		<view class="lookAllComments">
			<view class="lac-fonts">
				显示所有评论
			</view>
			<view class="lac-icon">
				<image src="/static/icons/icon_xl_sy.png" mode=""></image>
			</view>
		</view>
		<view class="bomSpace"></view>
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
	var _self;
	export default {
		data() {
			return {
				title : '详情',
				isWhite : true,
				isHaveSpace : true
			}
		},
		onLoad() {
			_self = this;
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.postMs{
		border-top: 1rpx solid #F6F6F6;
		border-bottom: 8rpx solid #F6F6F6;
		.postDetails{
			width: 92%;
			margin: 0 auto;
			.pd-poster{
				height: 100rpx;
				display: flex;
				align-items: center;
				.pp-header{
					height: 70rpx;
					image{
						width: 66rpx;
						height: 66rpx;
						margin-top: 2rpx;
					}
				}
				.pp-user{
					margin-left: 20rpx;
					.pu-name{
						height: 40rpx;
						display: flex;
						align-items: center;
						.pn-name{
							font-size: 24rpx;
							color: #444444;
						}
						.pn-top{
							height: 30rpx;
							padding: 0 10rpx 0 10rpx;
							background-color: #F77F0C;
							font-size: 24rpx;
							color: #FFFFFF;
							border-radius: 4rpx;
							margin-left: 20rpx;
							line-height: 30rpx;
						}
					}
					.pu-time{
						height: 30rpx;
						font-size: 22rpx;
						color: #888888;
					}
				}
			}
			.pd-fonts{
				font-size: 26rpx;
				margin-bottom: 20rpx;
			}
			.pd-picture{
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				.pp-item{
					width: 33%;
					height: 220rpx;
					text-align: center;
					margin-bottom: 10rpx;
					image{
						width: 220rpx;
						height: 220rpx;
						border-radius: 10rpx;
					}
				}
			}
			.pd-browse{
				height: 70rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1rpx solid #F6F6F6;
				.pd-left{
					font-size: 26rpx;
					color: #555555;
				}
				.pd-tight{
					height: 50rpx;
					display: flex;
					align-items: center;
					.pt-thumbs-up{
						margin-right: 40rpx;
						image{
							width: 38rpx;
							height: 40rpx;
							margin-top: 5rpx;
						}
					}
				}
			}
			.pd-up-info{
				height: 80rpx;
				display: flex;
				align-items: center;
				.pui-user{
					width: 80%;
					height: 80rpx;
					display: flex;
					align-items: center;
					overflow: auto;
					.pu-item{
						margin-right: 20rpx;
						image{
							width: 50rpx;
							height: 50rpx;
							margin-top: 15rpx;
							border-radius: 50%;
						}
					}
				}
				.pui-nums{
					width: 20%;
					font-size: 24rpx;
					color: #888888;
					text-align: right;
				}
			}
		}
	}
	.commentTiNus{
		border-bottom: 1rpx solid #F6F6F6;
		.ctn{
			width: 92%;
			height: 80rpx;
			font-size: 26rpx;
			line-height: 80rpx;
			margin: 0 auto;
			text{
				color: #777777;
			}
		}
	}
	.comments{
		padding: 20rpx 0 20rpx 0;
		border-bottom: 1rpx solid #F6F6F6;
		.c-main{
			width: 92%;
			margin: 0 auto;
			.cm-user{
				height: 80rpx;
				display: flex;
				align-items: center;
				.cu-header{
					width: 66rpx;
					height: 66rpx;
					border-radius: 50%;
					overflow: hidden;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.cu-info{
					margin-left: 20rpx;
					height: 66rpx;
					.ci-name{
						height: 36rpx;
						line-height: 36rpx;
						font-size: 26rpx;
						color: #797979;
					}
					.ci-time{
						height: 30rpx;
						line-height: 30rpx;
						font-size: 20rpx;
						color: #808080;
					}
				}
				
			}
			.cm-desc{
				width: 80%;
				margin: 20rpx auto 20rpx;
				font-size: 26rpx;
			}
		}
	}
	.lookAllComments{
		height: 60rpx;
		border-bottom: 10rpx solid #F6F6F6;
		display: flex;
		align-items: center;
		justify-content: center;
		.lac-fonts{
			height: 60rpx;
			font-size: 26rpx;
			line-height: 60rpx;
			margin-right: 10rpx;
			color: #555555;
		}
		.lac-icon{
			height: 60rpx;
			image{
				width: 30rpx;
				height: 15rpx;
			}
		}
	}
	.bomSpace{
		height: 100rpx;
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
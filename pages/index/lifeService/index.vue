<template>
	<view>
		<headTypeA :title="title" :isWhite="isWhite" :isHaveSpace="isHaveSpace"></headTypeA>
		<view class="banner">
			<swiper class="swiper" indicator-dots="true" autoplay="true" indicator-color="rgba(0,0,0,.6)" indicator-active-color="#F88C1B" interval="3000" duration="500" circular="true">
				<swiper-item v-for="(b,b_idx) in 5" :key="b_idx">
					<view class="images">
						<image src="/static/images/banner.png" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="classiTypeA">
			<swiper class="swiper" indicator-dots="true" indicator-color="#7E7E7E" indicator-active-color="#F29028">
				<swiper-item>
					<view class="ctMs">
						<view class="cm-item" v-for="(a,a_idx) in classiList.itemA" :key="a_idx">
							<view class="ci-icon">
								<image :src="a.cIcon" mode=""></image>
							</view>
							<view class="ci-name">
								{{a.cName}}
							</view>
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="ctMs">
						<view class="cm-item" v-for="(b,b_idx) in classiList.itemB" :key="b_idx">
							<view class="ci-icon">
								<image :src="b.cIcon" mode=""></image>
							</view>
							<view class="ci-name">
								{{b.cName}}
							</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="postType">
			<view class="pt-item" v-for="(c,c_idx) in postTypeList" :key="c_idx" :class="[postCurrent === c_idx ? 'pt-ac' : '']" @tap="choseType(c_idx)">
				{{c.name}}
			</view>
		</view>
		<view class="postMs" v-for="(f,f_idx) in 3" :key="f_idx">
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
				<view class="pd-input">
					<input type="text" placeholder="回复" />
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
				title : '生活服务',
				isWhite : true,
				isHaveSpace : true,
				classiList : {
					itemA : [
						{
							cId : 1,
							cIcon : '/static/icons/icon_fwcz_tcxx.png',
							cName : '房屋出租'
						},
						{
							cId : 2,
							cIcon : '/static/icons/icon_qzzp_tcxx.png',
							cName : '求职招聘'
						},
						{
							cId : 3,
							cIcon : '/static/icons/icon_qcjy_tcxx.png',
							cName : '汽车交易'
						},
						{
							cId : 4,
							cIcon : '/static/icons/icon_esxz_tcxx.png',
							cName : '二手闲置'
						},
						{
							cId : 5,
							cIcon : '/static/icons/icon_shfw_tcxx.png',
							cName : '生活服务'
						},
						{
							cId : 6,
							cIcon : '/static/icons/icon_fwjc_tcxx.png',
							cName : '家装建材'
						},
						{
							cId : 7,
							cIcon : '/static/icons/icon_syzr_tcxx.png',
							cName : '生意转让'
						},
						{
							cId : 8,
							cIcon : '/static/icons/icon_wxfw_tcxx.png',
							cName : '维修服务'
						},
						{
							cId : 9,
							cIcon : '/static/icons/icon_yhxx_tcxx.png',
							cName : '优惠信息'
						},
						{
							cId : 10,
							cIcon : '/static/icons/icon_tcpc_tcxx.png',
							cName : '同城拼车'
						}
					],
					itemB : [
						{
							cId : 1,
							cIcon : '/static/icons/icon_fwcz_tcxx.png',
							cName : '房屋出租'
						},
						{
							cId : 2,
							cIcon : '/static/icons/icon_qzzp_tcxx.png',
							cName : '求职招聘'
						},
						{
							cId : 3,
							cIcon : '/static/icons/icon_qcjy_tcxx.png',
							cName : '汽车交易'
						},
						{
							cId : 4,
							cIcon : '/static/icons/icon_esxz_tcxx.png',
							cName : '二手闲置'
						},
						{
							cId : 5,
							cIcon : '/static/icons/icon_shfw_tcxx.png',
							cName : '生活服务'
						},
						{
							cId : 6,
							cIcon : '/static/icons/icon_fwjc_tcxx.png',
							cName : '家装建材'
						},
						{
							cId : 7,
							cIcon : '/static/icons/icon_syzr_tcxx.png',
							cName : '生意转让'
						},
						{
							cId : 8,
							cIcon : '/static/icons/icon_wxfw_tcxx.png',
							cName : '维修服务'
						},
						{
							cId : 9,
							cIcon : '/static/icons/icon_yhxx_tcxx.png',
							cName : '优惠信息'
						},
						{
							cId : 10,
							cIcon : '/static/icons/icon_tcpc_tcxx.png',
							cName : '同城拼车'
						}
					]
				},
				postTypeList : [
					{
						name : '身边'
					},
					{
						name : '热帖'
					}
				],
				postCurrent : 0
			}
		},
		onLoad() {
			_self = this;
		},
		methods: {
			choseType(idx){
				_self.postCurrent = idx
			}
		}
	}
</script>

<style lang="scss">
	.banner{
		height: 350rpx;
		.swiper{
			height: 350rpx;
			swiper-item{
				height: 350rpx;
				.images{
					height: 350rpx;
					image{
						width: 100%;
						height: 350rpx;
					}
				}
			}
		}
	}
	.classiTypeA{
		background-color: #FFFFFF;
		.swiper{
			height: 430rpx;
			.ctMs{
				width: 96%;
				margin: 0 auto;
				display: flex;
				flex-wrap: wrap;
				.cm-item{
					width: 20%;
					.ci-icon{
						height: 130rpx;
						width: 100rpx;
						margin: 0 auto;
						text-align: center;
						image{
							width: 100rpx;
							height: 100rpx;
							margin-top: 30rpx;
						}
					}
					.ci-name{
						height: 70rpx;
						font-size: 26rpx;
						line-height: 70rpx;
						text-align: center;
					}
				}
			}
		}
	}
	.postType{
		border-top: 1rpx solid #F6F6F6;
		border-bottom: 1rpx solid #F6F6F6;
		display: flex;
		.pt-item{
			width: 50%;
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			font-size: 30rpx;
			font-weight: bold;
		}
		.pt-ac{
			color: #F77F0C;
		}
	}
	.postMs{
		border-bottom: 10rpx solid #F6F6F6;
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
			.pd-input{
				height: 70rpx;
				margin: 20rpx auto 20rpx;
				border: 1rpx solid #797979;
				input{
					width: 100%;
					height: 100%;
					font-size: 26rpx;
					padding-left: 10rpx;
				}
			}
		}
	}
</style>
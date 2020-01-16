<template>
	<view>
		<headTypeB :adress="adress" :isShowBack="isShowBack"></headTypeB>
		<view class="banner">
			<swiper class="swiper" indicator-dots="true" autoplay="true" indicator-color="#FFFFFF" indicator-active-color="#F88C1B" interval="3000" duration="500" circular="true">
				<swiper-item v-for="(b,b_idx) in 5" :key="b_idx">
					<view class="images">
						<image src="/static/images/banner_sy.png" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="newMsg">
			<view class="nm-main">
				<view class="nmm-left">
					<view class="nl-icon">
						<image src="/static/icon/icon_zxzc_sy.png" mode=""></image>
					</view>
					<view class="nl-fonts">
						最新筹款
					</view>
				</view>
				<view class="nmm-right">
					<uni-notice-bar :scrollable="true" :single="true" :backgroundColor="bgColor" :color="fontsColor" :text="noticeFonts" />
				</view>
			</view>
		</view>
		<view class="fundingType">
			<view class="ft-item">
				<view class="fi-left">
					<view class="fl-top">
						创业众筹
					</view>
					<view class="fl-bom">
						贫困创业 社会帮扶
					</view>
				</view>
				<view class="fi-right">
					<image src="/static/icon/icon_cjzc_sy.png" mode=""></image>
				</view>
			</view>
			<view class="ft-item">
				<view class="fi-left">
					<view class="fl-top">
						扶贫众筹
					</view>
					<view class="fl-bom">
						社会组织 爱心帮扶
					</view>
				</view>
				<view class="fi-right">
					<image src="/static/icon/icon_fpzc_sy1.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="cf-item-main" v-for="(c,c_idx) in cfList" :key="c_idx">
			<view class="cfTitleMs">
				<view class="ctm-main">
					<view class="cm-left">
						<view class="cl-icon">
							<image :src="c.icon" mode=""></image>
						</view>
						<view class="cl-fonts">
							{{c.name}}
						</view>
					</view>
					<view class="cm-right">
						<image src="/static/icon/btn_enter_spxq_2.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="imageShow">
				<image :src="c.image" mode=""></image>
			</view>
			<view class="infoMs">
				<view class="im-item" v-for="(d,d_idx) in c.item" :key="d_idx">
					<view class="ii-top-user">
						<view class="itu-header">
							<image :src="d.header" mode=""></image>
						</view>
						<view class="itu-name hiddenFontsA">
							{{d.name}}
						</view>
					</view>
					<view class="ii-images">
						<image :src="d.image" mode=""></image>
					</view>
					<view class="ii-info hiddenFontsA">
						{{d.info}}
					</view>
					<view class="ii-progress">
						<progress show-info :percent="d.percent" activeColor="#F77F0C" border-radius="5" backgroundColor="#E1E1E1" active stroke-width="10" />
					</view>
					<view class="ii-details hiddenFontsA">
						已帮扶<text class="id-color">{{d.over}}</text>元&nbsp;&nbsp;距离<text class="id-color">{{d.distance}}</text>km
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var _self;
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue';
	export default {
		components: {
			uniNoticeBar
		},
		data() {
			return {
				adress : '徐州市',
				isShowBack : true,
				noticeFonts : '刘先生成功筹集600000.00元',
				bgColor : '#FFFFFF',
				fontsColor : '#000000',
				cfList : [
					{
						icon : '/static/icon/icon_pkcybf_sy.png',
						name : '贫困创业帮扶',
						image : '/static/img_cf/img_1_sy.png',
						item : [
							{
								header : '/static/images/img_1.png',
								name : '刘女士',
								image : '/static/img_cf/img_2_sy.png',
								info : '年轻的妈妈患白血病，但我们',
								percent : 60,
								over : 6000,
								distance : 5
							},
							{
								header : '/static/images/img_1.png',
								name : '刘女士',
								image : '/static/img_cf/img_2_sy.png',
								info : '年轻的妈妈患白血病，但我们',
								percent : 60,
								over : 6000,
								distance : 5
							},
							{
								header : '/static/images/img_1.png',
								name : '刘女士',
								image : '/static/img_cf/img_2_sy.png',
								info : '年轻的妈妈患白血病，但我们',
								percent : 60,
								over : 6000,
								distance : 5
							}
						]
					},
					{
						icon : '/static/icon/icon_pkjybf_sy.png',
						name : '贫困教育帮扶',
						image : '/static/img_cf/img_1_sy.png',
						item : [
							{
								header : '/static/images/img_1.png',
								name : '刘女士',
								image : '/static/img_cf/img_2_sy.png',
								info : '年轻的妈妈患白血病，但我们',
								percent : 60,
								over : 6000,
								distance : 5
							},
							{
								header : '/static/images/img_1.png',
								name : '刘女士',
								image : '/static/img_cf/img_2_sy.png',
								info : '年轻的妈妈患白血病，但我们',
								percent : 60,
								over : 6000,
								distance : 5
							},
							{
								header : '/static/images/img_1.png',
								name : '刘女士',
								image : '/static/img_cf/img_2_sy.png',
								info : '年轻的妈妈患白血病，但我们',
								percent : 60,
								over : 6000,
								distance : 5
							}
						]
					},
					{
						icon : '/static/icon/icon_pkzfbf_sy.png',
						name : '贫困住房帮扶',
						image : '/static/img_cf/img_1_sy.png',
						item : [
							{
								header : '/static/images/img_1.png',
								name : '刘女士',
								image : '/static/img_cf/img_2_sy.png',
								info : '年轻的妈妈患白血病，但我们',
								percent : 60,
								over : 6000,
								distance : 5
							},
							{
								header : '/static/images/img_1.png',
								name : '刘女士',
								image : '/static/img_cf/img_2_sy.png',
								info : '年轻的妈妈患白血病，但我们',
								percent : 60,
								over : 6000,
								distance : 5
							},
							{
								header : '/static/images/img_1.png',
								name : '刘女士',
								image : '/static/img_cf/img_2_sy.png',
								info : '年轻的妈妈患白血病，但我们',
								percent : 60,
								over : 6000,
								distance : 5
							}
						]
					},
					{
						icon : '/static/icon/icon_pkzfbf_sy.png',
						name : '贫困物品帮扶',
						image : '/static/img_cf/img_1_sy.png',
						item : [
							{
								header : '/static/images/img_1.png',
								name : '刘女士',
								image : '/static/img_cf/img_2_sy.png',
								info : '年轻的妈妈患白血病，但我们',
								percent : 60,
								over : 6000,
								distance : 5
							},
							{
								header : '/static/images/img_1.png',
								name : '刘女士',
								image : '/static/img_cf/img_2_sy.png',
								info : '年轻的妈妈患白血病，但我们',
								percent : 60,
								over : 6000,
								distance : 5
							},
							{
								header : '/static/images/img_1.png',
								name : '刘女士',
								image : '/static/img_cf/img_2_sy.png',
								info : '年轻的妈妈患白血病，但我们',
								percent : 60,
								over : 6000,
								distance : 5
							}
						]
					}
				]
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
	page{
		background-color: #F8F8F8;
	}
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
	.newMsg{
		background-color: #FFFFFF;
		margin: 14rpx 0 14rpx 0;
		.nm-main{
			width: 92%;
			height: 90rpx;
			margin: 0 auto;
			display: flex;
			align-items: center;
			.nmm-left{
				width: 24%;
				height: 80rpx;
				display: flex;
				align-items: center;
				.nl-icon{
					height: 80rpx;
					image{
						width: 34rpx;
						height: 32rpx;
						margin-top: 24rpx;
					}
				}
				.nl-fonts{
					height: 80rpx;
					font-size: 26rpx;
					line-height: 80rpx;
					color: #F77F0C;
					margin-left: 16rpx;
				}
			}
			.nmm-right{
				width: 76%;
				height: 50rpx;
			}
		}
	}
	.fundingType{
		height: 120rpx;
		background-color: #FFFFFF;
		margin-bottom: 14rpx;
		display: flex;
		.ft-item{
			width: 50%;
			height: 120rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			.fi-left{
				height: 90rpx;
				text-align: center;
				margin-right: 10rpx;
				.fl-top{
					height: 50rpx;
					line-height: 50rpx;
					font-size: 28rpx;
				}
				.fl-bom{
					height: 40rpx;
					line-height: 40rpx;
					font-size: 24rpx;
					color: #888888;
				}
			}
			.fi-right{
				height: 80rpx;
				margin-left: 10rpx;
				image{
					width: 66rpx;
					height: 50rpx;
					margin-top: 15rpx;
				}
			}
		}
	}
	.cf-item-main{
		.cfTitleMs{
			margin-bottom: 14rpx;
			background-color: #FFFFFF;
			.ctm-main{
				width: 92%;
				height: 80rpx;
				margin: 0 auto;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.cm-left{
					height: 80rpx;
					display: flex;
					align-items: center;
					.cl-icon{
						height: 80rpx;
						image{
							width: 28rpx;
							height: 30rpx;
							margin-top: 25rpx;
						}
					}
					.cl-fonts{
						font-size: 26rpx;
						color: #F77F0C;
						margin-left: 16rpx;
					}
				}
				.cm-right{
					height: 80rpx;
					image{
						width: 16rpx;
						height: 26rpx;
						margin-top: 27rpx;
					}
				}
			}
		}
		.imageShow{
			height: 300rpx;
			margin-bottom: 14rpx;
			image{
				width: 100%;
				height: 300rpx;
			}
		}
		.infoMs{
			width: 94%;
			margin: 0 auto 20rpx;
			display: flex;
			align-items: center;
			.im-item{
				width: 32%;
				height: 320rpx;
				margin-right: 10rpx;
				background-color: #FFFFFF;
				border-radius: 10rpx;
				&:nth-child(3){
					margin-right: 0;
				}
				.ii-top-user{
					height: 60rpx;
					width: 90%;
					margin: 0 auto;
					display: flex;
					align-items: center;
					.itu-header{
						height: 60rpx;
						image{
							width: 50rpx;
							height: 50rpx;
							border-radius: 50%;
							margin-top: 5rpx;
						}
					}
					.itu-name{
						height: 60rpx;
						line-height: 60rpx;
						font-size: 22rpx;
						margin-left: 16rpx;
					}
				}
				.ii-images{
					width: 90%;
					height: 130rpx;
					margin: 0 auto;
					image{
						width: 100%;
						height: 100%;
						border-radius: 10rpx;
					}
				}
				.ii-info{
					width: 90%;
					margin: 0 auto;
					height: 40rpx;
					line-height: 40rpx;
					font-size: 22rpx;
				}
				.ii-progress{
					width: 90%;
					height: 40rpx;
					margin: 0 auto;
				}
				.ii-details{
					width: 90%;
					height: 40rpx;
					margin: 0 auto;
					line-height: 40rpx;
					font-size: 18rpx;
					.id-color{
						color: #F77F0C;
					}
				}
			}
		}
	}
</style>
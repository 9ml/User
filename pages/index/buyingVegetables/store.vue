<template>
	<view>
		<view class="storeMs">
			<view class="sm-bg">
				<image src="/static/icon/img_bg_zbz.png" mode=""></image>
			</view>
			<view class="sm-top-space"></view>
			<view class="sm-main">
				<view class="sm-back-icon">
					<image src="/static/icon/nav_back_zb.png" mode=""></image>
				</view>
				<view class="sm-store-logo">
					<image src="/static/images/img_avatar_dp.png" mode=""></image>
				</view>
				<view class="sm-store-name hiddenFonts">
					果园外旗舰店
				</view>
				<view class="sm-into-store">
					<image src="/static/icon/btn_enter_dp.png" mode=""></image>
				</view>
				<view class="st-follow">
					<view class="sf-icon">
						<image src="/static/icon/icon_tj_dp.png" mode=""></image>
					</view>
					<view class="sf-fonts">
						关注
					</view>
				</view>
				<view class="st-follow">
					分享
				</view>
			</view>
			<view class="sm-discount">
				<view class="sd-left">
					<view class="sl-item">
						30减5
					</view>
					<view class="sl-item">
						50减5
					</view>
					<view class="sl-item">
						100减10
					</view>
				</view>
				<view class="sd-right">
					直播中...
				</view>
			</view>
		</view>
		<view class="storeMsSpace"></view>
		<view class="topTab">
			<view class="tt-tab">
				<view class="tt-item" v-for="(t,t_idx) in tabList" :key="t_idx" :class="[tabCurrent === t_idx ? 't-ac' : '']" @tap="choseTab(t_idx)">
					{{t.name}}
				</view>
			</view>
			<view class="tt-search" @click="myTools.navTo('index/buyingVegetables/storeSearch')">
				<view class="ts-icon">
					<image src="/static/icon/icon_ss_ss.png" mode=""></image>
				</view>
				<view class="ts-fonts">
					搜索
				</view>
			</view>
		</view>
		<view class="storeMain">
			<view class="sm-left-space"></view>
			<view class="sm-left">
				<view class="sl-item-kinds hiddenFontsA" v-for="(l,l_idx) in leftKindsList" :key="l_idx" :class="[lkCurrent === l_idx ? 'lk-ac' : '']" @tap="choseLK(l_idx)">
					{{l.name}}
				</view>
			</view>
			<view class="sm-right">
				<view class="sr-item" v-for="(g,g_idx) in goodsList" :key="g_idx">
					<view class="si-image">
						<image :src="g.image" mode=""></image>
					</view>
					<view class="si-infos">
						<view class="sii-name hiddenFonts">
							{{g.name}}
						</view>
						<view class="sii-main">
							<view class="sm-left-info">
								<view class="sli-self">
									{{g.nums}}人付款
								</view>
								<view class="sli-price">
									<text class="sp-price">￥{{g.price}}</text>/{{g.weight}}克
								</view>
							</view>
							<view class="sm-right-icon" @tap="showCoupon()">
								<image src="/static/icon/icon_tj_zbz.png" mode=""></image>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<uni-popup ref="coupon" type="bottom" :custom="true">
			<view class="couponMs">
				<view class="cm-title">
					优惠券
				</view>
				<view class="cm-ms">
					<view class="cm-item" v-for="(c,c_idx) in couponList" :key="c_idx">
						<view class="ci-bg">
							<image :src="c.isHave ? '/static/icon/img_bg_ylq.png' : '/static/icon/img_bg_lq.png'" mode=""></image>
						</view>
						<view class="ci-ms">
							<view class="cm-left">
								<view class="cl-top">
									<text class="ct-price">￥{{c.price}}</text>{{c.coupon}}
								</view>
								<view class="cl-type">
									{{c.type}}
								</view>
								<view class="cl-time">
									{{c.time}}
								</view>
							</view>
							<view v-if="c.isHave" class="cm-right cm-have">
								已领取
							</view>
							<view v-else class="cm-right" @tap="receiveCoupon(c_idx)">
								领取
							</view>
						</view>
					</view>
				</view>
				<view class="btnMs">
					确定
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	var _self;
	import uniPopup from "@/components/uni-popup/uni-popup.vue";
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				tabList : [
					{
						name : '主页'
					},
					{
						name : '价格'
					},
					{
						name : '销量'
					}
				],
				tabCurrent : 0,
				leftKindsList : [
					{
						name : '水果拼团'
					},
					{
						name : '新鲜水果'
					},
					{
						name : '特产'
					},
					{
						name : '饮料'
					}
				],
				lkCurrent : 0,
				goodsList : [
					{
						image : '/static/images/img_14_sy.png',
						name : '橙子新鲜脐橙归伦晚夏橙5斤当季水果橙子新鲜脐橙归伦晚夏橙橙子新鲜脐橙归伦晚夏橙',
						nums : 66,
						price : 19,
						weight : 20
					},
					{
						image : '/static/images/img_14_sy.png',
						name : '橙子新鲜脐橙归伦晚夏橙5斤当季水果橙子新鲜脐橙归伦晚夏橙橙子新鲜脐橙归伦晚夏橙',
						nums : 66,
						price : 19,
						weight : 20
					},
					{
						image : '/static/images/img_14_sy.png',
						name : '橙子新鲜脐橙归伦晚夏橙5斤当季水果橙子新鲜脐橙归伦晚夏橙橙子新鲜脐橙归伦晚夏橙',
						nums : 66,
						price : 19,
						weight : 20
					},
					{
						image : '/static/images/img_14_sy.png',
						name : '橙子新鲜脐橙归伦晚夏橙5斤当季水果橙子新鲜脐橙归伦晚夏橙橙子新鲜脐橙归伦晚夏橙',
						nums : 66,
						price : 19,
						weight : 20
					},
					{
						image : '/static/images/img_14_sy.png',
						name : '橙子新鲜脐橙归伦晚夏橙5斤当季水果橙子新鲜脐橙归伦晚夏橙橙子新鲜脐橙归伦晚夏橙',
						nums : 66,
						price : 19,
						weight : 20
					},
					{
						image : '/static/images/img_14_sy.png',
						name : '橙子新鲜脐橙归伦晚夏橙5斤当季水果橙子新鲜脐橙归伦晚夏橙橙子新鲜脐橙归伦晚夏橙',
						nums : 66,
						price : 19,
						weight : 20
					},
					{
						image : '/static/images/img_14_sy.png',
						name : '橙子新鲜脐橙归伦晚夏橙5斤当季水果橙子新鲜脐橙归伦晚夏橙橙子新鲜脐橙归伦晚夏橙',
						nums : 66,
						price : 19,
						weight : 20
					},
					{
						image : '/static/images/img_14_sy.png',
						name : '橙子新鲜脐橙归伦晚夏橙5斤当季水果橙子新鲜脐橙归伦晚夏橙橙子新鲜脐橙归伦晚夏橙',
						nums : 66,
						price : 19,
						weight : 20
					}
				],
				couponList : [
					{
						isHave : true,
						price : 20,
						coupon : '满300减20',
						type : '店铺优惠券',
						time : '2019.8.1 00:00 - 2019.8.1 23:59'
					},
					{
						isHave : false,
						price : 20,
						coupon : '满300减20',
						type : '店铺优惠券',
						time : '2019.8.1 00:00 - 2019.8.1 23:59'
					},
					{
						isHave : false,
						price : 20,
						coupon : '满300减20',
						type : '店铺优惠券',
						time : '2019.8.1 00:00 - 2019.8.1 23:59'
					},
					{
						isHave : false,
						price : 20,
						coupon : '满300减20',
						type : '店铺优惠券',
						time : '2019.8.1 00:00 - 2019.8.1 23:59'
					}
				]
			}
		},
		onLoad() {
			_self = this;
		},
		methods: {
			choseTab(idx){
				_self.tabCurrent = idx
			},
			choseLK(idx){
				_self.lkCurrent = idx
			},
			showCoupon(){
				_self.$refs.coupon.open();
			},
			receiveCoupon(idx){
				_self.couponList[idx].isHave = true
			}
		}
	}
</script>

<style lang="scss">
	.storeMs{
		width: 100%;
		height: 300rpx;
		position: fixed;
		top: 0;
		z-index: 999;
		.sm-bg{
			width: 100%;
			height: 300rpx;
			position: absolute;
			top: 0;
			z-index: -1;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.sm-top-space{
			height: 80rpx;
		}
		.sm-main{
			width: 90%;
			height: 100rpx;
			margin: 0 auto;
			display: flex;
			align-items: center;
			.sm-back-icon{
				image{
					width: 20rpx;
					height: 36rpx;
				}
			}
			.sm-store-logo{
				width: 80rpx;
				height: 100rpx;
				margin-left: 20rpx;
				image{
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
					margin-top: 10rpx;
				}
			}
			.sm-store-name{
				width: 180rpx;
				height: 100rpx;
				margin: 0 10rpx 0 10rpx;
				text-align: center;
				font-size: 28rpx;
				color: #FFFFFF;
				line-height: 100rpx;
			}
			.sm-into-store{
				width: 30rpx;
				height: 100rpx;
				margin-right: 40rpx;
				image{
					width: 30rpx;
					height: 30rpx;
					margin-top: 35rpx;
				}
			}
			.st-follow{
				width: 100rpx;
				height: 40rpx;
				border-radius: 20rpx;
				margin-left: 20rpx;
				font-size: 22rpx;
				background-color: rgba($color: #000000, $alpha: .6);
				color: #FFFFFF;
				text-align: center;
				line-height: 40rpx;
				border: 1rpx solid #CCCCCC;
				display: flex;
				align-items: center;
				justify-content: center;
				.sf-icon{
					width: 30rpx;
					height: 50rpx;
					image{
						width: 24rpx;
						height: 24rpx;
						margin-top: 13rpx;
					}
				}
			}
		}
		.sm-discount{
			width: 80%;
			height: 70rpx;
			margin: 20rpx auto 0;
			display: flex;
			align-items: center;
			.sd-left{
				width: 70%;
				display: flex;
				align-items: center;
				overflow: auto;
				.sl-item{
					height: 30rpx;
					line-height: 30rpx;
					padding: 0 16rpx 0 16rpx;
					background-color: #FFFFFF;
					color: #F23634;
					font-size: 20rpx;
					margin-right: 20rpx;
					border-radius: 6rpx;
				}
			}
			.sd-right{
				width: 120rpx;
				height: 50rpx;
				border-radius: 25rpx;
				background-color: #F23634;
				color: #FFFFFF;
				text-align: center;
				line-height: 50rpx;
				font-size: 22rpx;
			}
		}
	}
	.storeMsSpace{
		height: 384rpx;
	}
	.topTab{
		width: 100%;
		height: 84rpx;
		border-bottom: 1rpx solid #F6F6F6;
		display: flex;
		align-items: center;
		position: fixed;
		left: 0;
		top: 300rpx;
		z-index: 9;
		background-color: #FFFFFF;
		.tt-tab{
			width: 80%;
			display: flex;
			align-items: center;
			.tt-item{
				width: 33.3%;
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
				font-size: 26rpx;
				color: #999999;
				border-bottom: 4rpx solid #FFFFFF;
			}
			.t-ac{
				color: #000000;
				border-bottom: 4rpx solid #FF0000;
			}
		}
		.tt-search{
			width: 120rpx;
			height: 50rpx;
			background-color: #F4F4F4;
			border-radius: 25rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			.ts-icon{
				margin-right: 10rpx;
				image{
					width: 26rpx;
					height: 28rpx;
				}
			}
			.ts-fonts{
				font-size: 24rpx;
				color: #888888;
			}
		}
	}
	.storeMain{
		display: flex;
		margin-top: 6rpx;
		.sm-left-space{
			width: 26%;
		}
		.sm-left{
			width: 26%;
			height: 940rpx;
			background-color: #F5FAFB;
			position: fixed;
			left: 0;
			top: 390rpx;
			overflow: auto;
			.sl-item-kinds{
				height: 100rpx;
				line-height: 100rpx;
				text-align: center;
				font-size: 26rpx;
			}
			.lk-ac{
				background-color: #FFFFFF;
			}
		}
		.sm-right{
			width: 74%;
			.sr-item{
				width: 92%;
				height: 170rpx;
				margin: 10rpx auto 30rpx;
				display: flex;
				align-items: center;
				.si-image{
					width: 36%;
					height: 170rpx;
					image{
						width: 170rpx;
						height: 170rpx;
						border-radius: 10rpx;
					}
				}
				.si-infos{
					width: 64%;
					height: 170rpx;
					.sii-name{
						height: 80rpx;
						line-height: 40rpx;
						font-size: 26rpx;
					}
					.sii-main{
						height: 90rpx;
						display: flex;
						align-items: center;
						.sm-left-info{
							width: 70%;
							.sli-self{
								height: 40rpx;
								line-height: 40rpx;
								font-size: 24rpx;
								color: #999999;
							}
							.sli-price{
								height: 50rpx;
								line-height: 50rpx;
								font-size: 22rpx;
								color: #888888;
								.sp-price{
									font-size: 30rpx;
									color: #FF0000;
									font-weight: bold;
									margin-right: 10rpx;
								}
							}
						}
						.sm-right-icon{
							margin-top: 20rpx;
							image{
								width: 50rpx;
								height: 50rpx;
							}
						}
					}
				}
			}
		}
	}
	.couponMs{
		height: 800rpx;
		background-color: #FFFFFF;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		.cm-title{
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
			font-size: 28rpx;
		}
		.cm-ms{
			width: 90%;
			height: 600rpx;
			margin: 0 auto;
			overflow: auto;
			.cm-item{
				width: 100%;
				height: 180rpx;
				position: relative;
				.ci-bg{
					width: 100%;
					height: 100%;
					position: absolute;
					left: 0;
					top: 0;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.ci-ms{
					width: 92%;
					height: 100%;
					position: absolute;
					top: 0;
					left: 50%;
					margin-left: -46%;
					z-index: 1;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.cm-left{
						height: 130rpx;
						.cl-top{
							height: 50rpx;
							line-height: 50rpx;
							font-size: 26rpx;
							color: #FF0000;
							font-weight: bold;
							.ct-price{
								font-size: 30rpx;
								margin-right: 20rpx;
							}
						}
						.cl-type{
							height: 40rpx;
							font-size: 24rpx;
							line-height: 40rpx;
							color: #777777;
						}
						.cl-time{
							height: 40rpx;
							line-height: 40rpx;
							font-size: 22rpx;
							color: #999999;
						}
					}
					.cm-right{
						width: 110rpx;
						height: 50rpx;
						border-radius: 25rpx;
						background-color: #F77F0C;
						line-height: 50rpx;
						text-align: center;
						color: #FFFFFF;
						font-size: 26rpx;
					}
					.cm-have{
						background-color: #AEAEAE;
					}
				}
			}
		}
		.btnMs{
			width: 90%;
			margin-top: 20rpx;
		}
	}
</style>
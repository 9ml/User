<template>
	<view>
		<view class="storeMs">
			<view class="sm-bg">
				<image src="/static/icon/img_1_bg_dp.png" mode=""></image>
			</view>
			<view class="smSpace"></view>
			<view class="sm-top">
				<view class="st-header">
					<image src="/static/images/img_avatar_dp.png" mode=""></image>
				</view>
				<view class="st-name hiddenFonts">
					果园外旗舰店
				</view>
				<view class="st-goicon">
					<image src="/static/icon/btn_enter_dp.png" mode=""></image>
				</view>
				<view class="st-state">
					直播中...
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
			<view class="sm-tab">
				<view class="st-search" @tap="myTools.navTo('index/buyingVegetables/storeSearch')">
					<view class="ss-icon">
						<image src="/static/icon/icon_ss_sy.png" mode=""></image>
					</view>
					<view class="ss-fonts">
						搜索
					</view>
				</view>
				<view class="st-tabs">
					<view class="st-item" v-for="(t,t_idx) in tabList" :key="t_idx">
						{{t.name}}
					</view>
				</view>
			</view>
		</view>
		<view class="storeSpace"></view>
		<!-- 优惠 -->
		<view class="couponMs">
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
		<!-- 商品列表 -->
		<view class="goodsShow">
			<view class="gsMs">
				<view class="item item-left" v-for="(c,c_idx) in waterA" :key="c_idx" @click="myTools.navTo('index/home/goodsDetails')">
					<view class="il-image">
						<image :src="c.waImage" mode=""></image>
					</view>
					<view class="i-name hiddenFonts">
						{{c.waName}}
					</view>
					<view class="i-price">
						<view class="ip-left">
							￥{{c.waPrice}}
						</view>
						<view class="ip-right">
							{{c.waNums}}人付款
						</view>
					</view>
				</view>
			</view>
			<view class="gsMs">
				<view class="item item-right" v-for="(d,d_idx) in waterB" :key="d_idx" @click="myTools.navTo('index/home/goodsDetails')">
					<view class="ir-image">
						<image :src="d.wbImage" mode=""></image>
					</view>
					<view class="i-name hiddenFonts">
						{{d.wbName}}
					</view>
					<view class="i-price">
						<view class="ip-left">
							￥{{d.wbPrice}}
						</view>
						<view class="ip-right">
							{{d.wbNums}}人付款
						</view>
					</view>
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
				tabList : [
					{
						name : '首页'
					},
					{
						name : '新品'
					},
					{
						name : '销量'
					},
					{
						name : '价格'
					},
					{
						name : '评论'
					}
				],
				waterA : [
					{
						waid : 1,
						waImage : '/static/images/img_13_sy.png',
						waName : '橙子新鲜脐橙归伦晚夏橙5斤当季水果橙子新鲜脐橙归伦晚夏橙橙子新鲜脐橙归伦晚夏橙',
						waPrice : 1900,
						waNums : 200
					},
					{
						waid : 2,
						waImage : '/static/images/img_13_sy.png',
						waName : '橙子新鲜脐橙归伦晚夏橙5斤当季水果',
						waPrice : 1900,
						waNums : 200
					},
					{
						waid : 3,
						waImage : '/static/images/img_13_sy.png',
						waName : '橙子新鲜脐橙归伦晚夏橙5斤当季水果',
						waPrice : 1900,
						waNums : 200
					}
				],
				waterB :[
					{
						wbid : 1,
						wbImage : '/static/images/img_14_sy.png',
						wbName : '正宗无锡阳山水蜜桃新鲜水果15个包邮',
						wbPrice : 1900,
						wbNums : 200
					},
					{
						wbid : 2,
						wbImage : '/static/images/img_14_sy.png',
						wbName : '正宗无锡阳山水蜜桃新鲜水果15个包邮',
						wbPrice : 1900,
						wbNums : 200
					},
					{
						wbid : 3,
						wbImage : '/static/images/img_14_sy.png',
						wbName : '正宗无锡阳山水蜜桃新鲜水果15个包邮',
						wbPrice : 1900,
						wbNums : 200
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
			receiveCoupon(idx){
				_self.couponList[idx].isHave = true
			},
		}
	}
</script>

<style lang="scss">
	@import 'common/css/goodsList.scss';
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
		.smSpace{
			height: 80rpx;
		}
		.sm-top{
			width: 94%;
			height: 100rpx;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.st-header{
				width: 100rpx;
				height: 100rpx;
				image{
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}
			.st-name{
				width: 180rpx;
				height: 100rpx;
				font-size: 30rpx;
				color: #FFFFFF;
				text-align: center;
				line-height: 100rpx;
			}
			.st-goicon{
				width: 50rpx;
				height: 100rpx;
				text-align: center;
				image{
					width: 24rpx;
					height: 24rpx;
					margin-top: 40rpx;
				}
			}
			.st-state{
				width: 120rpx;
				height: 50rpx;
				border-radius: 25rpx;
				background-color: #F23634;
				color: #FFFFFF;
				text-align: center;
				line-height: 50rpx;
				font-size: 22rpx;
			}
			.st-follow{
				width: 100rpx;
				height: 50rpx;
				border-radius: 25rpx;
				font-size: 22rpx;
				background-color: rgba($color: #000000, $alpha: .6);
				color: #FFFFFF;
				text-align: center;
				line-height: 50rpx;
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
		.sm-tab{
			width: 80%;
			height: 90rpx;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.st-search{
				width: 24%;
				height: 60rpx;
				background-color: rgba($color: #CCCCCC, $alpha: .6);
				border-radius: 30rpx;
				display: flex;
				align-items: center;
				.ss-icon{
					width: 44%;
					height: 60rpx;
					text-align: center;
					image{
						width: 30rpx;
						height: 30rpx;
					}
				}
				.ss-fonts{
					width: 56%;
					height: 60rpx;
					font-size: 26rpx;
					line-height: 60rpx;
					color: #FFFFFF;
				}
			}
			.st-tabs{
				width: 72%;
				height: 60rpx;
				display: flex;
				align-items: center;
				.st-item{
					width: 20%;
					height: 60rpx;
					line-height: 60rpx;
					text-align: center;
					font-size: 26rpx;
					text-align: center;
					color: #FFFFFF;
				}
			}
		}
	}
	.storeSpace{
		height: 300rpx;
	}
	.couponMs{
		width: 90%;
		margin: 20rpx auto 10rpx;
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
</style>

<template>
	<view>
		<view class="htaMs">
			<view class="hm-space"></view>
			<view class="hm-all">
				<view class="ha-left" @tap="myTools.navBack()">
					<image src="/static/icon/nav_back_zb.png" mode=""></image>
				</view>
				<view class="ha-name">
					爱心需求详情
				</view>
				<view class="ha-right" @tap="share()">
					<image src="/static/icon/icon_fx_xq.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="headSpace"></view>
		<view class="userMs">
			<view class="um-main">
				<view class="umm-user">
					<view class="ummu-user">
						<image src="/static/images/img_avatar_dpxq.png" mode=""></image>
						<text>刘先生</text>
					</view>
					<view class="ummu-time">
						2019-10-10
					</view>
				</view>
				<view class="umm-info">
					本人因家里无劳动能力，供应两个孩子上学困难
				</view>
				<view class="umm-desc">
					<view class="immi-item">
						<view class="imi-top">
							目标金额
						</view>
						<view class="imi-bom">
							30000元
						</view>
					</view>
					<view class="immi-item">
						<view class="imi-top">
							已帮扶
						</view>
						<view class="imi-bom">
							20000
						</view>
					</view>
					<view class="immi-item">
						<view class="imi-top">
							帮扶次数
						</view>
						<view class="imi-bom">
							10000
						</view>
					</view>
				</view>
				<view class="umm-progress">
					<progress show-info class="ip-main" percent="50" activeColor="#F77F0C" border-radius="10" backgroundColor="#E1E1E1" active stroke-width="20" />
				</view>
				<view class="umm-type">
					帮扶中
				</view>
			</view>
		</view>
		<view class="demandDetails">
			<view class="dd-title">
				<view class="dt-icon">
					<image src="/static/icon/icon_xqxq_xq.png" mode=""></image>
				</view>
				<view class="dt-fonts">
					需求详情
				</view>
				<view class="dt-icon">
					<image src="/static/icon/icon_xqxq_xq.png" mode=""></image>
				</view>
			</view>
			<view class="dd-fonts-main">
				你们好！我叫XXX，生于XXXX年，是XXXX地方的人，由于特殊情况，导致我......
				你们好！我叫XXX，生于XXXX年，是XXXX地方的人，由于特殊情况，导致我......
				你们好！我叫XXX，生于XXXX年，是XXXX地方的人，由于特殊情况，导致我......
				你们好！我叫XXX，生于XXXX年，是XXXX地方的人，由于特殊情况，导致我......
				你们好！我叫XXX，生于XXXX年，是XXXX地方的人，由于特殊情况，导致我......
				你们好！我叫XXX，生于XXXX年，是XXXX地方的人，由于特殊情况，导致我......
				你们好！我叫XXX，生于XXXX年，是XXXX地方的人，由于特殊情况，导致我......
				你们好！我叫XXX，生于XXXX年，是XXXX地方的人，由于特殊情况，导致我......
				你们好！我叫XXX，生于XXXX年，是XXXX地方的人，由于特殊情况，导致我......
				你们好！我叫XXX，生于XXXX年，是XXXX地方的人，由于特殊情况，导致我......
				你们好！我叫XXX，生于XXXX年，是XXXX地方的人，由于特殊情况，导致我......
				你们好！我叫XXX，生于XXXX年，是XXXX地方的人，由于特殊情况，导致我......
				你们好！我叫XXX，生于XXXX年，是XXXX地方的人，由于特殊情况，导致我......
				你们好！我叫XXX，生于XXXX年，是XXXX地方的人，由于特殊情况，导致我......
				你们好！我叫XXX，生于XXXX年，是XXXX地方的人，由于特殊情况，导致我......
				你们好！我叫XXX，生于XXXX年，是XXXX地方的人，由于特殊情况，导致我......
				你们好！我叫XXX，生于XXXX年，是XXXX地方的人，由于特殊情况，导致我......
				你们好！我叫XXX，生于XXXX年，是XXXX地方的人，由于特殊情况，导致我......
				你们好！我叫XXX，生于XXXX年，是XXXX地方的人，由于特殊情况，导致我......
			</view>
			<view class="dd-image-main">
				<view class="dim-item">
					<image src="/static/images/img_12_sy.png" mode=""></image>
				</view>
				<view class="dim-item">
					<image src="/static/images/img_12_sy.png" mode=""></image>
				</view>
				<view class="dim-item">
					<image src="/static/images/img_12_sy.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="btnMs" @click="supportThis()">
			扶贫支持
		</view>
		<uni-popup ref="support" type="center" :custom="true">
			<view class="supportMs">
				<view class="sm-title">
					扶贫支持
				</view>
				<view class="sm-main">
					<view class="smm-main">
						<view class="smmm-title">
							支持金额
						</view>
						<view class="smmm-input">
							<input type="number" placeholder="请输入支持金额" />
						</view>
					</view>
				</view>
				<view class="sm-tips">
					一元起步无限制
				</view>
				<view class="btnMs" @click="pay()">
					支持
				</view>
			</view>
		</uni-popup>
		<!-- 分享 -->
		<uni-popup ref="share" type="bottom" :custom="true">
			<view class="shareMs">
				<view class="sm-title">
					分享
				</view>
				<view class="sm-kinds">
					<view class="sk-item">
						<view class="si-icon">
							<image src="/static/icon/icon_wxhy_fx.png" mode=""></image>
						</view>
						<view class="si-name">
							微信好友
						</view>
					</view>
					<view class="sk-item">
						<view class="si-icon">
							<image src="/static/icon/icon_pyq_fx.png" mode=""></image>
						</view>
						<view class="si-name">
							朋友圈
						</view>
					</view>
				</view>
				<view class="sm-bom">
					取消
				</view>
			</view>
		</uni-popup>
		<uni-popup ref="pay" type="bottom" :custom="true">
			<view class="payMain">
				<view class="pm-title">
					确认付款
				</view>
				<view class="pm-price">
					￥<text class="pp-price">19.90</text>
				</view>
				<view class="pm-pay-item" v-for="(p,p_idx) in payList" :key="p_idx" @tap="chosePay(p_idx)">
					<view class="ppi-main">
						<view class="pm-left">
							<view class="pl-icon">
								<image :src="p.icon" mode=""></image>
							</view>
							<view class="pl-fonts">
								{{p.name}}
							</view>
						</view>
						<view class="pm-right">
							<image v-if="p.isChose" src="/static/icon/icon_xz_zylm.png" mode=""></image>
							<image v-else src="/static/icon/icon_wxz_zylm.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="btnMs">
					确认支付
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
				payList : [
					{
						icon : '/static/icon/icon_zfb_mmdl.png',
						name : '支付宝支付',
						isChose : true
					},
					{
						icon : '/static/icon/icon_wx_mmdl.png',
						name : '微信支付',
						isChose : false
					}
				]
			}
		},
		onLoad() {
			_self = this;
		},
		methods: {
			supportThis(){
				_self.$refs.support.open();
			},
			share(){
				_self.$refs.share.open();
			},
			pay(){
				_self.$refs.support.close();
				_self.$refs.pay.open();
			},
			chosePay(idx){
				_self.payList.forEach((item,index)=>{
					if(index === idx){
						item.isChose = true
					}else{
						item.isChose = false
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.htaMs{
		width: 100%;
		height: 120rpx;
		background-color: #F77F0C;
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
			.ha-right{
				width: 10%;
				height: 90rpx;
				image{
					width: 40rpx;
					height: 46rpx;
					margin-top: 30rpx;
				}
			}
		}
	}
	.headSpace{
		height: 120rpx;
	}
	.userMs{
		border-bottom: 20rpx solid #F6F6F6;
		.um-main{
			width: 92%;
			margin: 0 auto;
			.umm-user{
				height: 100rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.ummu-user{
					height: 100rpx;
					display: flex;
					align-items: center;
					image{
						width: 70rpx;
						height: 70rpx;
						border-radius: 50%;
					}
					text{
						font-size: 26rpx;
						margin-left: 20rpx;
					}
				}
				.ummu-time{
					font-size: 24rpx;
					color: #888888;
				}
			}
			.umm-info{
				font-size: 26rpx;
			}
			.umm-desc{
				width: 70%;
				height: 80rpx;
				margin: 30rpx auto 30rpx;
				display: flex;
				align-items: center;
				.immi-item{
					width: 33.3%;
					height: 80rpx;
					border-right: 2rpx solid #F4F4F1;
					&:nth-child(3){
						border-right: none;
					}
					view{
						height: 40rpx;
						line-height: 40rpx;
						font-size: 26rpx;
						text-align: center;
					}
					.imi-top{
						color: #888888;
					}
					.imi-bom{
						color: #F77F0C;
					}
				}
			}
			.umm-progress{
				height: 40rpx;
				line-height: 40rpx;
			}
			.umm-type{
				height: 60rpx;
				line-height: 60rpx;
				text-align: center;
				font-size: 28rpx;
				color: #F77F0C;
			}
		}
	}
	.demandDetails{
		width: 92%;
		margin: 0 auto;
		.dd-title{
			height: 90rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			.dt-icon{
				height: 90rpx;
				image{
					width: 26rpx;
					height: 14rpx;
					margin-top: 38rpx;
				}
			}
			.dt-fonts{
				margin: 0 12rpx 0 12rpx;
				font-size: 28rpx;
				font-weight: bold;
				color: #FF0000;
			}
		}
		.dd-fonts-main{
			font-size: 26rpx;
		}
		.dd-image-main{
			margin: 20rpx 0 20rpx 0;
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex-wrap: wrap;
			.dim-item{
				width: 32%;
				height: 190rpx;
				image{
					width: 100%;
					height: 100%;
					border-radius: 10rpx;
				}
			}
		}
	}
	.btnMs{
		width: 90%;
		margin: 50rpx auto 40rpx;
	}
	.supportMs{
		width: 600rpx;
		height: 500rpx;
		background-color: #FFFFFF;
		border-radius: 16rpx;
		.sm-title{
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
			font-size: 28rpx;
			border-bottom: 1rpx solid #EAEAEA;
		}
		.sm-main{
			border-bottom: 1rpx solid #EAEAEA;
			.smm-main{
				width: 90%;
				height: 200rpx;
				margin: 0 auto;
				.smmm-title{
					height: 70rpx;
					line-height: 70rpx;
					font-size: 24rpx;
					color: #888888;
				}
				.smmm-input{
					height: 130rpx;
					input{
						width: 100%;
						height: 100%;
						font-size: 44rpx;
					}
				}
			}
		}
		.sm-tips{
			width: 90%;
			margin: 0 auto;
			height: 60rpx;
			line-height: 60rpx;
			font-size: 24rpx;
			color: #666666;
		}
		.btnMs{
			margin-top: 20rpx;
		}
	}
	.shareMs{
		height: 360rpx;
		background-color: #FFFFFF;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		.sm-title{
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
			font-size: 28rpx;
		}
		.sm-kinds{
			width: 400rpx;
			height: 180rpx;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.sk-item{
				width: 110rpx;
				height: 120rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-wrap: wrap;
				.si-icon{
					height: 70rpx;
					image{
						width: 70rpx;
						height: 70rpx;
					}
				}
				.si-name{
					height: 50rpx;
					line-height: 50rpx;
					text-align: center;
					font-size: 24rpx;
				}
			}
		}
		.sm-bom{
			width: 750rpx;
			height: 90rpx;
			border: 1rpx solid #EAEAEA;
			line-height: 90rpx;
			text-align: center;
			font-size: 26rpx;
		}
	}
	.payMain{
		height: 600rpx;
		background-color: #FFFFFF;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		.pm-title{
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
			font-size: 28rpx;
		}
		.pm-price{
			height: 200rpx;
			text-align: center;
			line-height: 180rpx;
			font-size: 30rpx;
			border-bottom: 1rpx solid #F6F6F6;
			.pp-price{
				font-size: 60rpx;
				font-weight: bold;
			}
		}
		.pm-pay-item{
			border-bottom: 1rpx solid #F6F6F6;
			.ppi-main{
				width: 90%;
				height: 100rpx;
				margin: 0 auto;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.pm-left{
					display: flex;
					align-items: center;
					.pl-icon{
						height: 100rpx;
						image{
							width: 60rpx;
							height: 60rpx;
							margin-top: 20rpx;
						}
					}
					.pl-fonts{
						height: 100rpx;
						font-size: 26rpx;
						line-height: 100rpx;
						margin-left: 20rpx;
					}
				}
				.pm-right{
					height: 100rpx;
					image{
						width: 30rpx;
						height: 30rpx;
						margin-top: 35rpx;
					}
				}
			}
		}
		.btnMs{
			width: 90%;
			margin-top: 16rpx;
		}
	}
</style>

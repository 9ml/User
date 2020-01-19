<template>
	<view>
		<headTypeA :title="title" :isWhite="isWhite" :isHaveSpace="isHaveSpace"></headTypeA>
		<view class="choseAdressMs" @click="myTools.navTo('index/buyingVegetables/myAdress')">
			<view class="cam-icon">
				<image src="/static/icon/icon_dz_tjdd.png" mode=""></image>
			</view>
			<view class="cam-info">
				<view class="ci-user">
					{{userAdress.name}}<text class="cu-phone">{{userAdress.phone}}</text>
				</view>
				<view class="ci-adress hiddenFonts">
					{{userAdress.province}}{{userAdress.city}}{{userAdress.district}}{{userAdress.address}}
				</view>
			</view>
			<view class="cam-into">
				<image src="/static/icon/btn_enter_spxq.png" mode=""></image>
			</view>
		</view>
		<view class="orderGoods" v-for="(s,s_idx) in orderGoodsInfo" :key="s_idx">
			<view class="og-store">
				<view class="os-main">
					<view class="om-icon">
						<image src="/static/icon/icon_dp_tjdd.png" mode=""></image>
					</view>
					<view class="om-name">
						{{s.shop_name}}
					</view>
					<view class="om-into">
						<image src="/static/icon/btn_enter_spxq.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="og-store" v-for="(g,g_idx) in s.data" :key="g_idx">
				<view class="os-main og-main">
					<view class="og-image">
						<image src="/static/images/img_14_sy.png" mode=""></image>
					</view>
					<view class="og-info">
						<view class="oi-name hiddenFonts">
							{{g.name}}
						</view>
						<view class="oi-price">
							￥{{g.price}}
						</view>
						<view class="oi-nums-main">
							<view class="onm-item">
								-
							</view>
							<view class="onm-item onm-nums">
								{{g.num}}
							</view>
							<view class="onm-item">
								+
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="og-store">
				<view class="os-main os-item-main">
					<view class="oim-item">
						店铺优惠
					</view>
					<view class="oim-item">
						-￥6.00
					</view>
				</view>
			</view>
			<view class="og-store">
				<view class="os-main os-item-main">
					<view class="oim-item">
						配送方式
					</view>
					<view class="oim-item oim-dis" @tap="choseDelivery()">
						<view class="od-fonts">
							物流配送
						</view>
						<view class="od-icon">
							<image src="/static/icon/btn_enter_spxq.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
			<view class="og-store">
				<view class="os-main">
					<view class="om-left">
						订单备注:
					</view>
					<view class="om-right">
						<input type="text" placeholder="请输入备注(选填)" />
					</view>
				</view>
			</view>
			<view class="og-store">
				<view class="os-main os-item-main">
					<view class="oim-item">
						可用30积分抵用劵
					</view>
					<view class="oim-item oim-image" @tap="choseDiscount()">
						<image v-if="isUseDiscount" src="/static/icon/icon_xz_zylm.png" mode=""></image>
						<image v-else src="/static/icon/icon_wxz_zylm.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="og-store">
				<view class="os-main os-bom">
					<view class="ob-nums">
						共2件
					</view>
					<view class="ob-price">
						共计:<text class="op-price">￥229.00</text>
					</view>
				</view>
			</view>
		</view>
		<view class="bomMsSpace"></view>
		<view class="bomMs">
			<view class="bm-main">
				<view class="bmm-left hiddenFontsA">
					<text class="bl-nums">共2件</text>
					<text class="bl-fonts">共计:</text>
					<text class="bl-price">￥229.00</text>
				</view>
				<view class="bmm-right" @tap="submitOrder()">
					提交订单
				</view>
			</view>
		</view>
		<uni-popup ref="delivery" type="bottom" :custom="true">
			<view class="deliveryMs">
				<view class="dm-title">
					配送方式
				</view>
				<view class="dm-item-ms" v-for="(d,d_idx) in deliveryList" :key="d_idx" @tap="choseDeliveryKinds(d_idx)">
					<view class="dim-main">
						<view class="dm-left">
							{{d.name}}
						</view>
						<view class="dm-right">
							<image v-if="d.isChose" src="/static/icon/icon_xz_zylm.png" mode=""></image>
							<image v-else src="/static/icon/icon_wxz_zylm.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="btnMs">
					确定
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
				title : '确认订单',
				isWhite : true,
				isHaveSpace : true,
				// 地址信息
				userAdress : '',
				// 订单信息
				orderGoodsInfo : [],
				deliveryList : [
					{
						name : '物流配送',
						isChose : true
					},
					{
						name : '同城配送',
						isChose : false
					}
				],
				isUseDiscount : true,
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
				],
				getCarIds : [],
				getNums : []
			}
		},
		onLoad(options) {
			_self = this;
			_self.getCarIds = options.carIds;
			_self.getNums = JSON.parse(options.nums);
			_self.getCarInfos();
			_self.getAdressDefault();
		},
		methods: {
			// 默认收货地址
			getAdressDefault(){
				_self.Api.userAddressRead({
					token : uni.getStorageSync('token')
				},res=>{
					console.log(res);
					if(res.code === 1){
						_self.userAdress = res.data[0];
					}else{
						_self.myTools.myShow(res.msg,true);
					}
				});
			},
			getCarInfos(){
				_self.Api.shopingcartOrder({
					ids : _self.getCarIds,
					type : 1,
					token : uni.getStorageSync('token')
				},res=>{
					console.log(res);
					if(res.code === 1){
						res.data.forEach((i,i_idx)=>{
							i.data.forEach((j,j_idx)=>{
								_self.getNums.forEach((k,k_idx)=>{
									if(j_idx === k_idx){
										j.num = k.num
									}
								});
							});
						});
						_self.orderGoodsInfo = res.data
					}else{
						_self.myTools.myShow(res.msg,true);
					}
				});
			},
			choseDelivery(){
				_self.$refs.delivery.open();
			},
			choseDeliveryKinds(idx){
				_self.deliveryList.forEach((item,index)=>{
					if(index === idx){
						item.isChose = true
					}else{
						item.isChose = false
					}
				});
			},
			choseDiscount(){
				_self.isUseDiscount = !_self.isUseDiscount
			},
			submitOrder(){
				_self.Api.vegetablesOrderSave({
					coupon_id : '',
					goods : JSON.stringify(_self.getNums),
					shop_id : _self.orderGoodsInfo[0].data[0].user_id,
					coordinate : '117.08380660604718,36.68403547183936',
					user_address_id : _self.userAdress.id,
					score : '0',
					token : uni.getStorageSync('token')
				},res=>{
					console.log(res);
					if(res.code === 1){
						_self.myTools.myShow('提交成功',true);
						setTimeout(()=>{
							_self.$refs.pay.open();
						},1000);
					}else{
						_self.myTools.myShow(res.msg,true);
					}
				});
			},
			chosePay(idx){
				_self.payList.forEach((item,index)=>{
					if(index === idx){
						item.isChose = true
					}else{
						item.isChose = false
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F6F6F6;
	}
	.choseAdressMs{
		width: 92%;
		height: 220rpx;
		background-color: #FFFFFF;
		border-radius: 16rpx;
		margin: 20rpx auto 20rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.cam-icon{
			width: 16%;
			height: 70rpx;
			text-align: center;
			image{
				width: 70rpx;
				height: 70rpx;
				border-radius: 50%;
			}
		}
		.cam-info{
			width: 70%;
			height: 150rpx;
			.ci-user{
				height: 60rpx;
				line-height: 60rpx;
				font-size: 28rpx;
				.cu-phone{
					margin-left: 20rpx;
					font-size: 26rpx;
					color: #888888;
				}
			}
			.ci-adress{
				height: 90rpx;
				line-height: 45rpx;
				font-size: 26rpx;
			}
		}
		.cam-into{
			width: 10%;
			height: 70rpx;
			text-align: center;
			image{
				width: 18rpx;
				height: 30rpx;
				margin-top: 20rpx;
			}
		}
	}
	.orderGoods{
		width: 92%;
		margin: 0 auto;
		background-color: #FFFFFF;
		border-radius: 16rpx;
		.og-store{
			border-bottom: 1rpx solid #F6F6F6;
			.os-main{
				width: 92%;
				margin: 0 auto;
				display: flex;
				.om-icon{
					width: 30rpx;
					height: 80rpx;
					image{
						width: 30rpx;
						height: 28rpx;
						margin-top: 26rpx;
					}
				}
				.om-name{
					height: 80rpx;
					font-size: 26rpx;
					line-height: 74rpx;
					margin: 0 16rpx 0 16rpx;
				}
				.om-into{
					width: 16rpx;
					height: 80rpx;
					image{
						width: 16rpx;
						height: 24rpx;
						margin-top: 27rpx;
					}
				}
				.om-left{
					width: 20%;
					height: 80rpx;
					font-size: 26rpx;
					line-height: 80rpx;
				}
				.om-right{
					width: 70%;
					height: 80rpx;
					input{
						width: 100%;
						height: 100%;
						font-size: 26rpx;
					}
				}
			}
			.og-main{
				height: 180rpx;
				align-items: center;
				justify-content: space-between;
				.og-image{
					width: 28%;
					height: 180rpx;
					text-align: center;
					image{
						width: 150rpx;
						height: 150rpx;
						border-radius: 10rpx;
						margin-top: 15rpx;
					}
				}
				.og-info{
					width: 70%;
					height: 150rpx;
					.oi-name{
						height: 80rpx;
						line-height: 40rpx;
						font-size: 26rpx;
					}
					.oi-price{
						height: 40rpx;
						line-height: 40rpx;
						font-size: 26rpx;
						color: #FF0000;
					}
					.oi-nums-main{
						height: 30rpx;
						display: flex;
						align-items: center;
						justify-content: flex-end;
						.onm-item{
							width: 40rpx;
							height: 30rpx;
							border: 1rpx solid #BBBBBB;
							font-size: 26rpx;
							line-height: 30rpx;
							text-align: center;
							color: #666666;
						}
						.onm-nums{
							border: none;
							border-top: 1rpx solid #BBBBBB;
							border-bottom: 1rpx solid #BBBBBB;
						}
					}
				}
			}
			.os-item-main{
				height: 80rpx;
				align-items: center;
				justify-content: space-between;
				.oim-item{
					font-size: 26rpx;
					color: #888888;
				}
				.oim-dis{
					height: 80rpx;
					display: flex;
					align-items: center;
					.od-icon{
						height: 80rpx;
						margin-left: 16rpx;
						image{
							width: 16rpx;
							height: 24rpx;
							margin-top: 29rpx;
						}
					}
				}
				.oim-image{
					height: 80rpx;
					image{
						width: 32rpx;
						height: 32rpx;
						margin-top: 24rpx;
					}
				}
			}
			.os-bom{
				height: 80rpx;
				align-items: center;
				justify-content: flex-end;
				font-size: 28rpx;
				.ob-nums{
					margin-right: 20rpx;
				}
				.ob-price{
					.op-price{
						color: #FF0000;
						margin-left: 10rpx;
					}
				}
			}
		}
	}
	.bomMsSpace{
		height: 100rpx;
	}
	.bomMs{
		width: 100%;
		height: 100rpx;
		background-color: #FFFFFF;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 9;
		.bm-main{
			width: 90%;
			height: 100rpx;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.bmm-left{
				width: 70%;
				height: 80rpx;
				line-height: 80rpx;
				font-size: 28rpx;
				.bl-nums{
					margin: 0 30rpx 0 20rpx;
				}
				.bl-fonts{
					margin-right: 10rpx;
				}
				.bl-price{
					color: #FF0000;
				}
			}
			.bmm-right{
				width: 200rpx;
				height: 70rpx;
				border-radius: 35rpx;
				background-color: #FC901E;
				color: #FFFFFF;
				text-align: center;
				line-height: 70rpx;
				font-size: 28rpx;
			}
		}
	}
	.deliveryMs{
		height: 600rpx;
		background-color: #FFFFFF;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		position: relative;
		.dm-title{
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
			font-size: 28rpx;
		}
		.dm-item-ms{
			border-bottom: 1rpx solid #F6F6F6;
			.dim-main{
				width: 90%;
				height: 90rpx;
				margin: 0 auto;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.dm-left{
					font-size: 26rpx;
				}
				.dm-right{
					image{
						width: 32rpx;
						height: 32rpx;
					}
				}
			}
		}
		.btnMs{
			width: 90%;
			position: absolute;
			left: 50%;
			margin-left: -45%;
			bottom: 20rpx;
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
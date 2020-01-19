<template>
	<view>
		<!-- 头部导航 -->
		<headTypeA :title="title" :isWhite="isWhite" :isHaveSpace="isHaveSpace" v-if="heightShow"></headTypeA>
		<!-- 商品展示 Banner -->
		<view class="banners">
			<view class="bTop" v-if="shareShow">
				<view class="bt-left" @click="myTools.navBack()">
					<image src="/static/icon/nav_back_spxq.png" mode=""></image>
				</view>
				<view class="bt-mid">
					商品详情
				</view>
				<view class="bt-right" @tap="openShare()">
					<image src="/static/icon/icon_fx_spxq.png" mode=""></image>
				</view>
			</view>
			<swiper class="swiper" indicator-dots="true" indicator-color="#8A8989" circular="true" indicator-active-color="#FF8C19">
				<swiper-item v-for="(b,b_idx) in goodsInfo.getImg" :key="b_idx">
					<image :src="b" mode=""></image>
				</swiper-item>
			</swiper>
		</view>
		<!-- 商品信息 -->
		<view class="goodsDesc">
			<view class="gd-name">
				{{goodsInfo.name}}
			</view>
			<view class="gd-price">
				￥{{goodsInfo.price}}
			</view>
			<view class="gd-num">
				商品销量 {{goodsInfo.sales}}
			</view>
		</view>
		<!-- 操作选项 -->
		<view class="eachMs">
			<view class="em-main">
				<view class="em-left">
					优惠
				</view>
				<view class="em-right" @tap="openDiscount()">
					<view class="er-fonts">
						领劵
					</view>
					<view class="er-icon">
						<image src="/static/icon/btn_enter_spxq.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<view class="eachMs">
			<view class="em-main">
				<view class="em-left">
					购买得积分/积分可兑换
				</view>
				<view class="em-right" @tap="openIntegral()">
					<view class="er-fonts">
						查看
					</view>
					<view class="er-icon">
						<image src="/static/icon/btn_enter_spxq.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<view class="eachMs">
			<view class="em-main">
				<view class="em-left">
					选择
				</view>
				<view class="em-right" @tap="openChoses(true)">
					<view class="er-fonts">
						请选择
					</view>
					<view class="er-icon">
						<image src="/static/icon/btn_enter_spxq.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="choseMs">
				<view class="cm-item cm-active">
					{{goodsInfo.company}}
				</view>
			</view>
		</view>
		<!-- 商品评价 -->
		<view class="comments">
			<view class="csMs">
				<view class="cm-title">
					<view class="ct-left">
						宝贝评价({{commentsList.length}})
					</view>
					<view class="ct-right" @click="myTools.navTo('index/buyingVegetables/allComments')">
						<view class="cr-fonts">
							查看全部
						</view>
						<view class="cr-icon">
							<image src="/static/icon/btn_enter_spxq_2.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="cm-item" v-for="(d,d_idx) in commentsList" :key="d_idx">
					<view class="ci-user">
						<view class="cu-header">
							<image :src="d.header" mode=""></image>
						</view>
						<view class="cu-info">
							<view class="ci-name">
								{{d.name}}
							</view>
							<view class="ci-time">
								{{d.time}}
							</view>
						</view>
					</view>
					<view class="ci-comments">
						{{d.comments}}
					</view>
					<view class="ci-images">
						<view class="ci-item" v-for="(e,e_idx) in d.imageList" :key="e_idx">
							<image :src="e.url" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 商品详情 -->
		<!-- <view class="goodsDetails">
			<view class="gd-title">
				<view class="gt-icon">
					<image src="/static/icon/icon_bbxq_spxq.png" mode=""></image>
				</view>
				<view class="gt-name">
					宝贝详情
				</view>
				<view class="gt-icon">
					<image src="/static/icon/icon_bbxq_spxq.png" mode=""></image>
				</view>
			</view>
			<view class="gd-show">
				<image src="/static/images/img_1_spxq.png" mode="widthFix"></image>
			</view>
		</view> -->
		<!-- 底部 -->
		<view class="btnSpace"></view>
		<view class="btmHandle">
			<view class="bh-left">
				<view class="bl-item" @click="myTools.navTo('index/buyingVegetables/store?storeId='+goodsInfo.shop_id)">
					<view class="bi-icon">
						<image src="/static/icon/icon_jd_spxq.png" mode=""></image>
					</view>
					<view class="bi-name">
						进店
					</view>
				</view>
				<view class="bl-item">
					<view class="bi-icon">
						<image src="/static/icon/icon_kf_spxq.png" mode=""></image>
					</view>
					<view class="bi-name bi-other">
						客服
					</view>
				</view>
				<view class="bl-item">
					<view class="bi-icon">
						<image src="/static/icon/icon_sc_spxq.png" mode=""></image>
					</view>
					<view class="bi-name bi-other">
						收藏
					</view>
				</view>
			</view>
			<view class="bh-right">
				<view class="br-btns">
					<view class="bb-left" @click="openChoses(false,2)">
						加入购物车
					</view>
					<view class="bb-right" @click="openChoses(false,1)">
						立即购买
					</view>
				</view>
			</view>
		</view>
		<!-- 选择 -->
		<uni-popup ref="choseKindsA" type="bottom" :custom="true">
			<view class="choseA">
				<view class="ca-goods">
					<view class="cg-images">
						<image src="/static/images/img_avatar_spxq_2.png" mode=""></image>
					</view>
					<view class="cg-details">
						<view class="cd-price">
							￥{{goodsInfo.price}}
						</view>
						<view class="cd-name">
							{{goodsInfo.name}}
						</view>
						<view class="cd-adress">
							配送至：铜山万达
						</view>
					</view>
				</view>
				<view class="ca-kinds">
					<view class="ck-name">
						种类
					</view>
					<view class="ck-chose">
						<view class="cm-item cm-active">
							{{goodsInfo.company}}
						</view>
					</view>
				</view>
				<view class="ca-nums">
					<view class="cn-main">
						<view class="cm-left">
							数量
						</view>
						<view class="cm-right">
							<view class="cr-item" @tap="handleNums(false)">
								-
							</view>
							<view class="cr-item">
								{{goodsNums}}
							</view>
							<view class="cr-item" @tap="handleNums(true)">
								+
							</view>
						</view>
					</view>
				</view>
				<view class="ca-btns" v-if="isTwoChose">
					<view class="bb-left"  @click="sureThis(2)">
						加入购物车
					</view>
					<view class="bb-right"  @click="sureThis(1)">
						立即购买
					</view>
				</view>
				<view class="cb-btns" v-else @click="sureThis(buyType)">
					确定
				</view>
			</view>
		</uni-popup>
		<!-- 优惠 -->
		<uni-popup ref="discount" type="bottom" :custom="true">
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
		<!-- 积分 -->
		<uni-popup ref="integral" type="bottom" :custom="true">
			<view class="integralMs">
				<view class="im-title">
					优惠
				</view>
				<view class="im-ms">
					<view class="im-item">
						购买可得30积分
					</view>
					<view class="im-item">
						积分可抵扣：满100元可用1积分抵扣0.1元
					</view>
				</view>
				<view class="btnMs">
					完成
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
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue";
	var _self;
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				title : '商品详情',
				isWhite : true,
				heightShow : false,
				isHaveSpace : false,
				shareShow : true,
				// 商品信息
				goodsInfo : '',
				// 
				buyType : 0,
				bannerList : [
					{
						image : '/static/images/goodsBanner.jpg'
					},
					{
						image : '/static/images/goodsBanner.jpg'
					},
					{
						image : '/static/images/goodsBanner.jpg'
					},
					{
						image : '/static/images/goodsBanner.jpg'
					}
				],
				choseList : [
					{
						name : '烟台红富士12个(190-240g)'
					},
					{
						name : '烟台红富士10斤(190-240g)'
					},
					{
						name : '烟台一级大果(230-320g)'
					},
					{
						name : '烟台红富士12个(190-240g)'
					},
					{
						name : '烟台红富士10斤(190-240g)'
					},
					{
						name : '烟台一级大果(230-320g)'
					}
				],
				current_c : 0,
				commentsList : [
					{
						header : '/static/images/img_avatar_spxq.png',
						name : '小**Y',
						time : '2019-11-30',
						comments : '很新鲜，下次再来',
						imageList : [
							{
								url : '/static/images/img_avatar_spxq_1.png'
							},
							{
								url : '/static/images/img_avatar_spxq_2.png'
							},
							{
								url : '/static/images/img_avatar_spxq_3.png'
							},
							{
								url : '/static/images/img_avatar_spxq_4.png'
							},
							{
								url : '/static/images/img_avatar_spxq_1.png'
							},
							{
								url : '/static/images/img_avatar_spxq_2.png'
							},
							{
								url : '/static/images/img_avatar_spxq_3.png'
							},
							{
								url : '/static/images/img_avatar_spxq_4.png'
							}
						]
					},
					{
						header : '/static/images/img_avatar_spxq.png',
						name : '小**Y',
						time : '2019-11-30',
						comments : '很新鲜，下次再来',
						imageList : [
							{
								url : '/static/images/img_avatar_spxq_1.png'
							},
							{
								url : '/static/images/img_avatar_spxq_2.png'
							},
							{
								url : '/static/images/img_avatar_spxq_3.png'
							},
							{
								url : '/static/images/img_avatar_spxq_4.png'
							}
						]
					}
				],
				goodsNums : 1,
				isTwoChose : true,
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
		onLoad(options){
			_self = this;
			_self.goodsId = options.goodsId;
			_self.getGoodsInfo();
		},
		methods: {
			// 商品详情
			getGoodsInfo(){
				_self.Api.apiVegetablesCommodityDetail({
					page : 0,
					limit : 2,
					id : _self.goodsId
				},res=>{
					console.log(res);
					if(res.code === 1){
						var imgArr = []
						res.data[0].images.split(',').forEach((i)=>{
							if(i.indexOf('http') === -1){
								imgArr.push(_self.Api.baseUrl + i);
							}else{
								imgArr.push(i);
							}
						});
						res.data[0].getImg = imgArr
						_self.goodsInfo = res.data[0];
					}
				})
			},
			openChoses(booleans,types){
				_self.isTwoChose = booleans;
				_self.buyType = types;
				_self.$refs.choseKindsA.open();
			},
			// 确定
			sureThis(types){
				if(types === 1){
					// 立即购买
				}else if(types === 2){
					// 加入购物车
					_self.Api.shopingCartSave({
						shop_id : _self.goodsInfo.shop_id,
						num : _self.goodsNums,
						type : 1,
						specification : _self.goodsInfo.company,
						goods_id : _self.goodsId,
						token : uni.getStorageSync('token')
					},res=>{
						console.log(res);
						if(res.code === 1){
							_self.$refs.choseKindsA.close();
							_self.myTools.myShow("添加购物车成功~",true);
						}else{
							_self.myTools.myShow(res.msg,true);
						}
					});
				}
			},
			onPageScroll(info) {
				if(info.scrollTop >= 80){
					_self.heightShow = true;
					_self.shareShow = false;
				}else{
					_self.heightShow = false;
					_self.shareShow = true;
				}
			},
			choseEach(idx){
				_self.current_c = idx;
			},
			handleNums(types){
				if(types){
					_self.goodsNums ++;
				}else{
					if(_self.goodsNums === 1){}else{
						_self.goodsNums --;
					}
				}
			},
			
			openDiscount(){
				_self.$refs.discount.open();
			},
			openIntegral(){
				_self.$refs.integral.open();
			},
			receiveCoupon(idx){
				_self.couponList[idx].isHave = true
			},
			openShare(){
				_self.$refs.share.open();
			}
		}
	}
</script>

<style lang="scss">
	.banners{
		height: 600rpx;
		position: relative;
		.bTop{
			width: 92%;
			height: 80rpx;
			position: absolute;
			top: 40rpx;
			left: 50%;
			margin-left: -46%;
			z-index: 999;
			display: flex;
			align-items: center;
			.bt-left{
				width: 10%;
				height: 46rpx;
				image{
					width: 46rpx;
					height: 100%;
				}
			}
			.bt-mid{
				width: 80%;
				height: 50rpx;
				font-size: 30rpx;
				text-align: center;
				line-height: 50rpx;
				color: #FFFFFF;
			}
			.bt-right{
				width: 10%;
				height: 40rpx;
				text-align: right;
				image{
					width: 34rpx;
					height: 40rpx;
				}
			}
		}
		.swiper{
			height: 100%;
			swiper-item{
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	.goodsDesc{
		width: 92%;
		margin: 0 auto;
		.gd-name{
			height: 100rpx;
			font-size: 28rpx;
			line-height: 50rpx;
			overflow: hidden;
		}
		.gd-price{
			height: 70rpx;
			line-height: 70rpx;
			font-size: 32rpx;
			color: #F26065;
			font-weight: bold;
		}
		.gd-num{
			height: 60rpx;
			line-height: 60rpx;
			font-size: 24rpx;
			color: #666666;
		}
	}
	.eachMs{
		border-top: 1rpx solid #F6F6F6;
		.em-main{
			width: 92%;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			.em-left{
				height: 80rpx;
				line-height: 80rpx;
				font-size: 24rpx;
			}
			.em-right{
				display: flex;
				align-items: center;
				.er-fonts{
					height: 80rpx;
					line-height: 80rpx;
					font-size: 24rpx;
					color: #666666;
					margin-right: 16rpx;
				}
				.er-icon{
					width: 18rpx;
					height: 80rpx;
					image{
						width: 100%;
						height: 30rpx;
						margin-top: 26rpx;
					}
				}
			}
		}
		.choseMs{
			width: 92%;
			margin: 0 auto;
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			.cm-item{
				height: 60rpx;
				font-size: 24rpx;
				line-height: 60rpx;
				padding: 0 16rpx 0 16rpx;
				margin: 10rpx 20rpx 10rpx 0;
				background-color: #F8F8F8;
				border-radius: 10rpx;
				border: 1rpx solid #F8F8F8;
			}
			.cm-active{
				background-color: #FFFFFF;
				border: 1rpx solid #F26065;
				color: #F26065;
			}
		}
	}
	.comments{
		margin-top: 16rpx;
		border-top: 10rpx solid #F6F6F6;
		.csMs{
			width: 92%;
			margin: 0 auto;
			.cm-title{
				height: 70rpx;
				display: flex;
				justify-content: space-between;
				.ct-left{
					height: 70rpx;
					font-size: 24rpx;
					line-height: 70rpx;
				}
				.ct-right{
					height: 70rpx;
					display: flex;
					align-items: center;
					.cr-fonts{
						height: 70rpx;
						line-height: 70rpx;
						font-size: 22rpx;
						color: #EE8616;
						margin-right: 6rpx;
					}
					.cr-icon{
						width: 12rpx;
						height: 70rpx;
						image{
							width: 14rpx;
							height: 22rpx;
							margin-top: 23rpx;
						}
					}
				}
			}
			.cm-item{
				.ci-user{
					height: 70rpx;
					display: flex;
					align-items: center;
					.cu-header{
						width: 60rpx;
						height: 60rpx;
						image{
							width: 100%;
							height: 100%;
							border-radius: 50%;
						}
					}
					.cu-info{
						height: 60rpx;
						margin-left: 10rpx;
						.ci-name{
							height: 35rpx;
							line-height: 35rpx;
							font-size: 22rpx;
						}
						.ci-time{
							height: 25rpx;
							line-height: 25rpx;
							font-size: 20rpx;
							color: #666666;
						}
					}
				}
				.ci-comments{
					margin: 10rpx 0 10rpx 0;
					font-size: 24rpx;
				}
				.ci-images{
					margin: 10rpx 0 10rpx 0;
					display: flex;
					align-items: center;
					flex-wrap: wrap;
					.ci-item{
						width: 24%;
						height: 170rpx;
						margin: 0 2rpx 2rpx 0;
						image{
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}
	}
	.goodsDetails{
		border-top: 12rpx solid #F6F6F6;
		.gd-title{
			height: 100rpx;
			display: flex;
			justify-content: center;
			.gt-icon{
				height: 100rpx;
				image{
					width: 26rpx;
					height: 12rpx;
					margin-top: 46rpx;
				}
			}
			.gt-name{
				height: 100rpx;
				line-height: 100rpx;
				color: #F1564C;
				font-size: 30rpx;
				font-weight: bold;
				margin: 0 20rpx 0 20rpx;
			}
		}
		.gd-show{
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
	.btnSpace{
		height: 100rpx;
	}
	.btmHandle{
		width: 100%;
		height: 100rpx;
		position: fixed;
		bottom: 0;
		z-index: 999;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		.bh-left{
			width: 40%;
			height: 100rpx;
			display: flex;
			align-items: center;
			.bl-item{
				width: 33%;
				height: 80rpx;
				text-align: center;
				.bi-icon{
					height: 40rpx;
					image{
						width: 40rpx;
						height: 100%;
					}
				}
				.bi-name{
					height: 40rpx;
					line-height: 50rpx;
					font-size: 24rpx;
					color: #FF7328;
				}
				.bi-other{
					color: #666666;
				}
			}
		}
		.bh-right{
			width: 60%;
			height: 100rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			.br-btns{
				width: 90%;
				height: 70rpx;
				margin: 0 auto;
				border-radius: 35rpx;
				border: 2rpx solid #FF6604;
				overflow: hidden;
				display: flex;
				view{
					width: 50%;
					height: 100%;
					font-size: 26rpx;
					text-align: center;
					line-height: 70rpx;
					padding: 0;
					margin: 0;
				}
				.bb-left{
					color: #FF6604;
				}
				.bb-right{
					background-color: #FF6604;
					color: #FFFFFF;
				}
			}
		}
	}
	.choseA{
		height: 900rpx;
		background-color: #FFFFFF;
		border-top-right-radius: 20rpx;
		border-top-left-radius: 20rpx;
		.ca-goods{
			width: 90%;
			height: 260rpx;
			margin: 0 auto;
			display: flex;
			align-items: center;
			.cg-images{
				width: 34%;
				height: 200rpx;
				image{
					width: 200rpx;
					height: 200rpx;
					border-radius: 10rpx;
				}
			}
			.cg-details{
				width: 66%;
				height: 200rpx;
				.cd-price{
					height: 50rpx;
					font-size: 32rpx;
					font-weight: bold;
					color: #F26065;
				}
				.cd-name{
					height: 100rpx;
					line-height: 50rpx;
					overflow: hidden;
					font-size: 26rpx;
				}
				.cd-adress{
					height: 50rpx;
					font-size: 24rpx;
					color: #666666;
					line-height: 50rpx;
				}
			}
		}
		.ca-kinds{
			width: 90%;
			height: 400rpx;
			overflow: auto;
			margin: 0 auto;
			.ck-name{
				height: 50rpx;
				font-size: 28rpx;
				line-height: 50rpx;
			}
			.ck-chose{
				display: flex;
				flex-wrap: wrap;
				.cm-item{
					height: 60rpx;
					font-size: 24rpx;
					line-height: 60rpx;
					padding: 0 16rpx 0 16rpx;
					margin: 10rpx 20rpx 10rpx 0;
					background-color: #F8F8F8;
					border-radius: 10rpx;
					border: 1rpx solid #F8F8F8;
				}
				.cm-active{
					background-color: #FFFFFF;
					border: 1rpx solid #F26065;
					color: #F26065;
				}
			}
		}
		.ca-nums{
			border-top: 1rpx solid #F6F6F6;
			border-bottom: 1rpx solid #F6F6F6;
			.cn-main{
				width: 90%;
				height: 110rpx;
				margin: 0 auto;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.cm-left{
					height: 110rpx;
					line-height: 110rpx;
					font-size: 28rpx;
				}
				.cm-right{
					width: 180rpx;
					height: 50rpx;
					border: 1rpx solid #F6F6F6;
					display: flex;
					.cr-item{
						width: 33%;
						height: 50rpx;
						font-size: 26rpx;
						text-align: center;
						line-height: 50rpx;
						color: #333333;
						border-right: 1rpx solid #F6F6F6;
						&:nth-child(3){
							border-right: none;
						}
					}
				}
			}
		}
		.ca-btns{
			width: 90%;
			height: 80rpx;
			margin: 30rpx auto 0;
			border-radius: 40rpx;
			border: 2rpx solid #FF6604;
			overflow: hidden;
			display: flex;
			view{
				width: 50%;
				height: 100%;
				font-size: 26rpx;
				text-align: center;
				line-height: 80rpx;
			}
			.bb-left{
				color: #FF6604;
			}
			.bb-right{
				background-color: #FF6604;
				color: #FFFFFF;
			}
		}
		.cb-btns{
			width: 90%;
			height: 80rpx;
			margin: 30rpx auto 0;
			border-radius: 40rpx;
			font-size: 26rpx;
			color: #FFFFFF;
			text-align: center;
			line-height: 80rpx;
			background-color: #FE9421;
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
	.integralMs{
		height: 500rpx;
		background-color: #FFFFFF;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		.im-title{
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
			font-size: 28rpx;
		}
		.im-ms{
			width: 90%;
			height: 300rpx;
			margin: 0 auto;
			overflow: auto;
			.im-item{
				height: 60rpx;
				line-height: 60rpx;
				font-size: 26rpx;
				color: #888888;
			}
		}
		.btnMs{
			width: 90%;
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
</style>
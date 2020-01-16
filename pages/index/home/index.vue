<template>
	<view>
		<headTypeB :adress="adress" :isShowBack="isShowBack"></headTypeB>
		<view class="banner">
			<swiper class="swiper" indicator-dots="true" autoplay="true" indicator-color="rgba(0,0,0,.6)" indicator-active-color="#F88C1B" interval="3000" duration="500" circular="true">
				<swiper-item v-for="(b,b_idx) in 5" :key="b_idx">
					<view class="images">
						<image src="/static/images/banner.png" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="classiTypeB">
			<view class="ctMs">
				<view class="cm-item" v-for="(c,c_idx) in classiList.itemA" :key="c_idx" @click="jumpIndex(c.cName)">
					<view class="ci-icon">
						<image :src="c.cIcon" mode=""></image>
					</view>
					<view class="ci-name">
						{{c.cName}}
					</view>
				</view>
			</view>
		</view>
		<view class="bodyMsA">
			<view class="bma-item" v-for="(a,a_idx) in listA" :key="a_idx">
				<view class="bi-title">
					{{a.name}}
				</view>
				<view class="bi-desc">
					{{a.details}}
				</view>
				<view class="bi-show">
					<view class="bs-item" v-for="(i,i_idx) in a.item" :key="i_idx">
						<image :src="i.image" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<view class="bodyMsB">
			<view class="bmbTab">
				<view class="bt-item" v-for="(b,b_idx) in listB" :key="b_idx" :class="[curB === b_idx ? 'bt-ac' : '']" @tap="choseTab(b_idx)">
					<view class="bi-name">
						{{b.name}}
					</view>
					<view class="bi-desc">
						<view class="bd-main">
							{{b.details}}
						</view>
					</view>
				</view>
			</view>
		</view>
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
				adress : "山东济南",
				isShowBack : false,
				classiList : {
					itemA : [
						{
							cId : 1,
							cIcon : '/static/icon/icon_tcmc_sy.png',
							cName : '同城买菜'
						},
						{
							cId : 2,
							cIcon : '/static/icon/icon_txcp_sy.png',
							cName : '乡村产品'
						},
						{
							cId : 3,
							cIcon : '/static/icon/icon_fpzc_sy.png',
							cName : '扶贫众筹'
						},
						{
							cId : 4,
							cIcon : '/static/icon/icon_zb_sy.png',
							cName : '直播'
						},
						{
							cId : 5,
							cIcon : '/static/icon/icon_xsp_sy.png',
							cName : '小视频'
						},
						{
							cId : 6,
							cIcon : '/static/icon/icon_tcsj.png',
							cName : '同城商家'
						},
						{
							cId : 7,
							cIcon : '/static/icon/icon_shfw_sy.png',
							cName : '生活服务'
						},
						{
							cId : 8,
							cIcon : '/static/icon/icon_pfcg_sy.png',
							cName : '批发采购'
						},
						{
							cId : 9,
							cIcon : '/static/icon/icon_jqqd_sy_1.png',
							cName : '敬请期待'
						},
						{
							cId : 10,
							cIcon : '/static/icon/icon_jqqd_sy_2.png',
							cName : '敬请期待'
						}
					]
				},
				isShowSwiper : false,
				listA : [
					{
						name : '产品',
						details : '热销好货，放心购买',
						item : [
							{
								image : '/static/images/img_1_sy.png'
							},
							{
								image : '/static/images/img_2_sy.png'
							}
						]
					},
					{
						name : '商铺',
						details : '热销好货，放心购买',
						item : [
							{
								image : '/static/images/img_3_sy.png'
							},
							{
								image : '/static/images/img_4_sy.png'
							}
						]
					},
					{
						name : '直播',
						details : '与主播互动，购买更放心',
						item : [
							{
								image : '/static/images/img_5_sy.png'
							},
							{
								image : '/static/images/img_6_sy.png'
							}
						]
					},
					{
						name : '小视频',
						details : '带你看遍世界产地',
						item : [
							{
								image : '/static/images/img_7_sy.png'
							},
							{
								image : '/static/images/img_8_sy.png'
							}
						]
					},
					{
						name : '扶贫众筹',
						details : '帮助乡村扶贫创业',
						item : [
							{
								image : '/static/images/img_9_sy.png'
							},
							{
								image : '/static/images/img_10_sy.png'
							}
						]
					},
					{
						name : '同城信息',
						details : '便民服务信息',
						item : [
							{
								image : '/static/images/img_11_sy.png'
							},
							{
								image : '/static/images/img_12_sy.png'
							}
						]
					}
				],
				listB : [
					{
						name : '全部',
						details : '猜你喜欢'
					},
					{
						name : '便宜',
						details : '天天打折'
					},
					{
						name : '爆款',
						details : '今日热门'
					},
					{
						name : '上新',
						details : '每日上新'
					}
				],
				curB : 0,
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
				]
			}
		},
		onLoad() {
			_self = this;
		},
		methods: {
			choseTab(idx){
				_self.curB = idx
			},
			jumpIndex(name){
				if(name === "同城买菜" || name === "乡村产品" || name === "同城商家"){
					uni.navigateTo({
						url:'/pages/index/other/index?name='+name
					})
				}else if(name === "扶贫众筹"){
					uni.navigateTo({
						url:'/pages/index/crowdFunding/index'
					})
				}else if(name === "直播"){
					uni.navigateTo({
						url:'/pages/index/home/liveBroadcast'
					})
				}else if(name === "小视频"){
					uni.navigateTo({
						url:'/pages/index/home/productVideoList'
					})
				}else if(name === "生活服务" || name === "批发采购"){
					uni.navigateTo({
						url:'/pages/index/lifeService/index'
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	@import 'common/css/goodsList.scss';
	page{
		background-color: #F6F6F6;
	}
	.classiTypeB{
		background-color: #FFFFFF;
		height: 410rpx;
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
</style>

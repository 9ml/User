<template>
	<view>
		<headTypeB :adress="adress" :isShowBack="isShowBack"></headTypeB>
		<view class="recommend">
			<view class="r-item" v-for="(r,r_idx) in recommendList" :key="r_idx">
				<view class="ri-image">
					<image :src="r.image" mode=""></image>
				</view>
				<view class="ri-title">
					{{r.name}}
				</view>
				<view class="ri-fonts">
					{{r.desc}}
				</view>
			</view>
		</view>
		<classifica :classiList="classiList" :isShowSwiper="isShowSwiper"></classifica>
		<view class="lineA"></view>
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
		<view class="lineA"></view>
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
				adress : '国贸市场',
				isShowBack : true,
				recommendList : [
					{
						image : '/static/img_mc/img_1_sy.png',
						name : '美味基',
						desc : '根据你看过的店推荐'
					},
					{
						image : '/static/img_mc/img_2_sy.png',
						name : '美味基',
						desc : '根据你看过的店推荐'
					},
					{
						image : '/static/img_mc/img_3_sy.png',
						name : '美味基',
						desc : '根据你看过的店推荐'
					}
				],
				classiList : {
					itemA : [
						{
							cId : 1,
							cIcon : '/static/icon/icon_sc_sy.png',
							cName : '蔬菜'
						},
						{
							cId : 2,
							cIcon : '/static/icon/icon_rdb_sy.png',
							cName : '肉禽蛋'
						},
						{
							cId : 3,
							cIcon : '/static/icon/icon_yx_sy.png',
							cName : '鱼虾'
						},
						{
							cId : 4,
							cIcon : '/static/icon/icon_sg_sy.png',
							cName : '水果'
						},
						{
							cId : 5,
							cIcon : '/static/icon/icon_lytw_sy.png',
							cName : '粮油调味'
						},
						{
							cId : 6,
							cIcon : '/static/icon/icon_rpzd_sy.png',
							cName : '乳品早点'
						},
						{
							cId : 7,
							cIcon : '/static/icon/icon_ls_sy.png',
							cName : '零食'
						},
						{
							cId : 8,
							cIcon : '/static/icon/icon_ssp_sy.png',
							cName : '速食品'
						},
						{
							cId : 9,
							cIcon : '/static/icon/icon_jjcw_sy.png',
							cName : '家具厨卫'
						},
						{
							cId : 10,
							cIcon : '/static/icon/icon_cwp_sy.png',
							cName : '调味铺'
						}
					],
					itemB : [
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
				isShowSwiper : true,
				listA : [
					{
						name : '应季新品',
						details : '国庆欢乐购',
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
						name : '生态肉蛋',
						details : '鲜肉8折很新鲜很牛',
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
						name : '特价专区',
						details : '白菜3.9/个',
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
						name : '天然海特产',
						details : '新鲜螃蟹',
						item : [
							{
								image : '/static/images/img_7_sy.png'
							},
							{
								image : '/static/images/img_8_sy.png'
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
						name : '最新鲜',
						details : '每日新品'
					},
					{
						name : '天然蔬菜',
						details : '新鲜蔬菜'
					},
					{
						name : '野生药材',
						details : '野生药材'
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
			}
		}
	}
</script>

<style lang="scss">
	@import 'common/css/goodsList.scss';
	.recommend{
		width: 94%;
		margin: 20rpx auto 20rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		.r-item{
			width: 32%;
			height: 220rpx;
			.ri-image{
				height: 140rpx;
				image{
					width: 100%;
					height: 100%;
					border-radius: 10rpx;
				}
			}
			.ri-title{
				height: 50rpx;
				line-height: 50rpx;
				font-size: 26rpx;
				font-weight: bold;
				text-align: center;
			}
			.ri-fonts{
				height: 30rpx;
				text-align: center;
				font-size: 24rpx;
				color: #666666;
			}
		}
	}
	.lineA{
		height: 10rpx;
		background-color: #F6F6F6;
	}
</style>
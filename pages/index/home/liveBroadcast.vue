<template>
	<view>
		<headTypeB :adress="adress" :isShowBack="isShowBack"></headTypeB>
		<classifica :classiList="classiList" :isShowSwiper="isShowSwiper"></classifica>
		<view class="liveMs">
			<view class="lm-main">
				<view class="lm-item" v-for="(a,a_idx) in liveListA" :key="a_idx" :class="{'lm-itemH' : a.llisBig}">
					<view class="li-bg">
						<image :src="a.llBg" mode=""></image>
					</view>
					<view class="li-top">
						<view class="lt-left">
							{{a.llStore}}
						</view>
						<view class="lt-left lt-right">
							<view class="lr-icon" :class="{'lr-close' : a.llisClose}"></view>
							<view class="lr-fonts">
								{{a.llState}}
							</view>
						</view>
					</view>
					<view class="li-bom">
						<view class="lb-left">
							<view class="ll-top">
								<view class="lt-icon">
									<image src="/static/icon/icon_dz_sy.png" mode=""></image>
								</view>
								<view class="lt-nums hiddenFonts">
									{{a.llDistance}}米
								</view>
							</view>
							<view class="ll-bom hiddenFonts">
								{{a.llName}}
							</view>
						</view>
						<view class="lb-right">
							<view class="lr-icon">
								<image src="/static/icon/icon_rs_zb.png" mode=""></image>
							</view>
							<view class="lr-nums hiddenFonts">
								{{a.llNums}}
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="lm-main">
				<view class="lm-item" v-for="(b,b_idx) in liveListB" :key="b_idx" :class="{'lm-itemH' : b.llisBig}">
					<view class="li-bg">
						<image :src="b.llBg" mode=""></image>
					</view>
					<view class="li-top">
						<view class="lt-left">
							{{b.llStore}}
						</view>
						<view class="lt-left lt-right">
							<view class="lr-icon" :class="{'lr-close' : b.llisClose}"></view>
							<view class="lr-fonts">
								{{b.llState}}
							</view>
						</view>
					</view>
					<view class="li-bom">
						<view class="lb-left">
							<view class="ll-top">
								<view class="lt-icon">
									<image src="/static/icon/icon_dz_sy.png" mode=""></image>
								</view>
								<view class="lt-nums hiddenFonts">
									{{b.llDistance}}米
								</view>
							</view>
							<view class="ll-bom hiddenFonts">
								{{b.llName}}
							</view>
						</view>
						<view class="lb-right">
							<view class="lr-icon">
								<image src="/static/icon/icon_rs_zb.png" mode=""></image>
							</view>
							<view class="lr-nums hiddenFonts">
								{{b.llNums}}
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				adress : '徐州市',
				isShowBack : true,
				classiList : {
					itemA : [
						{
							cId : 1,
							cIcon : '/static/icon/icon_tj_zb.png',
							cName : '推荐'
						},
						{
							cId : 2,
							cIcon : '/static/icon/icon_fj_zb.png',
							cName : '附近'
						},
						{
							cId : 3,
							cIcon : '/static/icon/icon_tcmc_zb.png',
							cName : '同城买菜'
						},
						{
							cId : 4,
							cIcon : '/static/icon/icon_cy_zb.png',
							cName : '厨艺'
						},
						{
							cId : 5,
							cIcon : '/static/icon/icon_xccp_zb.png',
							cName : '乡村产品'
						},
						{
							cId : 6,
							cIcon : '/static/icon/icon_yc_zb.png',
							cName : '药材'
						},
						{
							cId : 7,
							cIcon : '/static/icon/icon_sg_zb.png',
							cName : '水果'
						},
						{
							cId : 8,
							cIcon : '/static/icon/icon_hcp_zb.png',
							cName : '海产品'
						},
						{
							cId : 9,
							cIcon : '/static/icon/icon_rybh_zb.png',
							cName : '日用百货'
						},
						{
							cId : 10,
							cIcon : '/static/icon/icon_jy_zb.png',
							cName : '教育'
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
				liveListA : [
					{
						llid : 1,
						llisBig : false,
						llBg : '/static/images/img_1_zb.png',
						llStore : '品杰海产',
						llState : '直播中',
						llisClose : false,
						llDistance : 100,
						llName : '梦语Angel',
						llNums : 1234
					},
					{
						llid : 2,
						llisBig : true,
						llBg : '/static/images/img_3_zb.png',
						llStore : '品杰海产',
						llState : '直播中',
						llisClose : false,
						llDistance : 100,
						llName : '梦语Angel',
						llNums : 1234
					},
					{
						llid : 3,
						llisBig : false,
						llBg : '/static/images/img_1_zb.png',
						llStore : '品杰海产',
						llState : '回放',
						llisClose : true,
						llDistance : 100,
						llName : '梦语Angel',
						llNums : 1234
					},
					{
						llid : 4,
						llisBig : true,
						llBg : '/static/images/img_3_zb.png',
						llStore : '品杰海产',
						llState : '回放',
						llisClose : true,
						llDistance : 100,
						llName : '梦语Angel',
						llNums : 1234
					}
				],
				liveListB : [
					{
						llid : 1,
						llisBig : true,
						llBg : '/static/images/img_2_zb.png',
						llStore : '品杰海产',
						llState : '直播中',
						llisClose : false,
						llDistance : 100,
						llName : '梦语Angel',
						llNums : 1234
					},
					{
						llid : 2,
						llisBig : false,
						llBg : '/static/images/img_4_zb.png',
						llStore : '品杰海产',
						llState : '直播中',
						llisClose : false,
						llDistance : 100,
						llName : '梦语Angel',
						llNums : 1234
					},
					{
						llid : 3,
						llisBig : true,
						llBg : '/static/images/img_2_zb.png',
						llStore : '品杰海产',
						llState : '回放',
						llisClose : true,
						llDistance : 100,
						llName : '梦语Angel',
						llNums : 1234
					},
					{
						llid : 4,
						llisBig : false,
						llBg : '/static/images/img_4_zb.png',
						llStore : '品杰海产',
						llState : '回放',
						llisClose : true,
						llDistance : 100,
						llName : '梦语Angel',
						llNums : 1234
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.liveMs{
		width: 92%;
		margin: 0 auto;
		padding: 20rpx 0 20rpx 0;
		border-top: 10rpx solid #F6F6F6;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		.lm-main{
			width: 48%;
			flex-direction: column;
			.lm-item{
				height: 460rpx;
				margin-bottom: 20rpx;
				border-radius: 16rpx;
				overflow: hidden;
				position: relative;
				.li-bg{
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					z-index: 1;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.li-top{
					width: 92%;
					height: 50rpx;
					position: absolute;
					top: 10rpx;
					left: 50%;
					margin-left: -46%;
					z-index: 9;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.lt-left{
						width: 100rpx;
						height: 40rpx;
						border-radius: 20rpx;
						background-color: rgba($color: #000000, $alpha: .4);
						border: 1rpx solid #C8C7CC;
						font-size: 20rpx;
						text-align: center;
						line-height: 40rpx;
						color: #FFFFFF;
					}
					.lt-right{
						display: flex;
						align-items: center;
						justify-content: center;
						.lr-icon{
							width: 16rpx;
							height: 16rpx;
							border-radius: 50%;
							background-color: #01FF00;
						}
						.lr-close{
							background-color: #D62221;
						}
						.lr-fonts{
							margin-left: 6rpx;
						}
					}
				}
				.li-bom{
					width: 92%;
					height: 70rpx;
					position: absolute;
					bottom: 10rpx;
					left: 50%;
					margin-left: -46%;
					z-index: 9;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.lb-left{
						width: 120rpx;
						height: 70rpx;
						.ll-top{
							height: 35rpx;
							display: flex;
							align-items: center;
							.lt-icon{
								width: 30%;
								height: 35rpx;
								display: flex;
								align-items: center;
								justify-content: center;
								image{
									width: 20rpx;
									height: 26rpx;
								}
							}
							.lt-nums{
								height: 35rpx;
								line-height: 35rpx;
								font-size: 22rpx;
								color: #FFFFFF;
							}
						}
						.ll-bom{
							height: 40rpx;
							font-size: 24rpx;
							line-height: 40rpx;
							color: #FFFFFF;
						}
					}
					.lb-right{
						width: 100rpx;
						height: 70rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						.lr-icon{
							width: 30%;
							height: 70rpx;
							image{
								width: 20rpx;
								height: 26rpx;
								margin-top: 22rpx;
							}
						}
						.lr-nums{
							height: 70rpx;
							line-height: 70rpx;
							font-size: 24rpx;
							color: #FFFFFF;
						}
					}
				}
			}
			.lm-itemH{
				height: 510rpx;
			}
		}
	}
</style>

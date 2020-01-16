<template>
	<view>
		<view class="topSearchMs">
			<view class="tsmSpace"></view>
			<view class="tsmMain">
				<view class="tm-icon" @tap="myTools.navBack()">
					<image src="/static/icon/nav_back_ss.png" mode=""></image>
				</view>
				<view class="tm-input">
					<view class="ti-icon">
						<image src="/static/icon/icon_ss_ss.png" mode=""></image>
					</view>
					<view class="ti-input">
						<input type="text" placeholder="请输入搜索内容" />
					</view>
				</view>
				<view class="tm-fonts" @tap="search()">
					搜本店
				</view>
			</view>
		</view>
		<view class="topSpace"></view>
		<view class="historySearchMain" v-if="isShowHisSearch">
			<view class="hisSearch">
				<view class="hs-left">
					历史搜索
				</view>
				<view class="hs-right">
					<image src="/static/icon/icon_sc_ss.png" mode=""></image>
				</view>
			</view>
			<view class="hisMs">
				<view class="hm-item" v-for="(h,h_idx) in hisSearchList" :key="h_idx">
					{{h.name}}
				</view>
			</view>
		</view>
		<view class="searchDesc" v-else>
			<view class="sdKinds">
				<view class="sk-item" :class="[current === k_idx ? 'sk-active' : '']" @tap="choseKinds(k_idx)" v-for="(k,k_idx) in kindsList" :key="k_idx">
					{{k.name}}
				</view>
			</view>
			<view class="sdMain" v-for="(s,s_idx) in resList" :key="s_idx" @click="myTools.navTo('index/home/goodsDetails')">
				<view class="sm-image">
					<image :src="s.rlImage" mode=""></image>
				</view>
				<view class="sm-desc">
					<view class="sd-name hiddenFonts">
						{{s.rlName}}
					</view>
					<view class="sd-price">
						￥{{s.rlPrice}}.00
					</view>
					<view class="sd-nums">
						{{s.rlNums}}人付款
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
				isShowHisSearch : true,
				hisSearchList : [
					{
						name : '蔬菜'
					},
					{
						name : '白菜'
					},
					{
						name : '番茄'
					},
					{
						name : '黄瓜'
					},
					{
						name : '旗舰店'
					},
					{
						name : '墙布'
					},
					{
						name : '墙布漆'
					},
					{
						name : '灯具'
					},
				],
				kindsList : [
					{
						name : '距离'
					},
					{
						name : '价格'
					},
					{
						name : '销量'
					}
				],
				current : 0,
				resList : [
					{
						rlid : 1,
						rlImage : '/static/images/img_14_sy.png',
						rlName : '蜜桃青州蜜桃 离核冬雪密冬桃脆桃 5斤孕妇水果现摘现发小蜜桃蜜桃青州蜜桃 离核冬雪密冬桃脆桃 5斤孕妇水果现摘现发小蜜桃',
						rlPrice : 20,
						rlNums : 1234
					},
					{
						rlid : 2,
						rlImage : '/static/images/img_13_sy.png',
						rlName : '蜜桃青州蜜桃 离核冬雪密冬桃脆桃 5斤孕妇水果现摘现发小蜜桃',
						rlPrice : 20,
						rlNums : 1234
					},
					{
						rlid : 3,
						rlImage : '/static/images/img_14_sy.png',
						rlName : '蜜桃青州蜜桃 离核冬雪密冬桃脆桃 5斤孕妇水果现摘现发小蜜桃',
						rlPrice : 20,
						rlNums : 1234
					},
					{
						rlid : 1,
						rlImage : '/static/images/img_14_sy.png',
						rlName : '蜜桃青州蜜桃 离核冬雪密冬桃脆桃 5斤孕妇水果现摘现发小蜜桃蜜桃青州蜜桃 离核冬雪密冬桃脆桃 5斤孕妇水果现摘现发小蜜桃',
						rlPrice : 20,
						rlNums : 1234
					},
					{
						rlid : 2,
						rlImage : '/static/images/img_13_sy.png',
						rlName : '蜜桃青州蜜桃 离核冬雪密冬桃脆桃 5斤孕妇水果现摘现发小蜜桃',
						rlPrice : 20,
						rlNums : 1234
					},
					{
						rlid : 3,
						rlImage : '/static/images/img_14_sy.png',
						rlName : '蜜桃青州蜜桃 离核冬雪密冬桃脆桃 5斤孕妇水果现摘现发小蜜桃',
						rlPrice : 20,
						rlNums : 1234
					}
				]
			}
		},
		onLoad() {
			_self = this;
		},
		methods: {
			choseKinds(idx){
				_self.current = idx;
			},
			search(){
				_self.isShowHisSearch = false
			}
		}
	}
</script>

<style lang="scss">
	@import 'common/css/goodsList.scss';
	page{
		background-color: #FDFDFD;
	}
	.topSearchMs{
		width: 100%;
		height: 130rpx;
		background-color: #FFFFFF;
		position: fixed;
		top: 0;
		z-index: 999;
		.tsmSpace{
			height: 40rpx;
		}
		.tsmMain{
			width: 96%;
			height: 90rpx;
			margin: 0 auto;
			display: flex;
			align-items: center;
			.tm-icon{
				width: 8%;
				height: 66rpx;
				image{
					width: 24rpx;
					height: 40rpx;
					margin: 12rpx 0 0 10rpx;
				}
			}
			.tm-input{
				width: 80%;
				height: 66rpx;
				display: flex;
				align-items: center;
				background-color: #F6F6F6;
				border-radius: 33rpx;
				.ti-icon{
					width: 10%;
					height: 66rpx;
					text-align: center;
					image{
						width: 24rpx;
						height: 24rpx;
						margin-top: 21rpx;
					}
				}
				.ti-input{
					width: 90%;
					height: 66rpx;
					input{
						width: 100%;
						height: 100%;
						font-size: 24rpx;
					}
				}
			}
			.tm-fonts{
				width: 12%;
				height: 66rpx;
				line-height: 66rpx;
				text-align: center;
				font-size: 28rpx;
			}
		}
	}
	.topSpace{
		height: 130rpx;
	}
	.historySearchMain{
		.hisSearch{
			width: 90%;
			height: 70rpx;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.hs-left{
				font-size: 26rpx;
			}
			.hs-right{
				width: 32rpx;
				height: 38rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
		.hisMs{
			width: 90%;
			margin: 0 auto;
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			.hm-item{
				height: 50rpx;
				padding: 0 30rpx 0 30rpx;
				font-size: 24rpx;
				line-height: 50rpx;
				background-color: #F6F6F6;
				color: #878787;
				border-radius: 25rpx;
				margin: 0 20rpx 20rpx 0;
			}
		}
	}
	.sdKinds{
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #FFFFFF;
		border-top: 1rpx solid #F6F6F6;
		.sk-item{
			width: 33%;
			height: 80rpx;
			text-align: center;
			line-height: 80rpx;
			font-size: 28rpx;
		}
		.sk-active{
			color: #F26065;
		}
	}
</style>

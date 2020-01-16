<template>
	<view>
		<headTypeB :adress="adress" :isShowBack="isShowBack"></headTypeB>
		<view class="topTab">
			<view class="tt-item" v-for="(t,t_idx) in tabList" :class="[t_idx === current ? 'tt-ac' : '']" @tap="tabChange(t_idx)" :key="t_idx">
				{{t.name}}
			</view>
		</view>
		<view class="vList">
			<view class="vItem" v-for="(v,v_idx) in vList" :key="v_idx">
				<view class="vImage" @click="myTools.navTo('index/home/productVideo')">
					<view class="vi-bg">
						<image :src="v.image" mode=""></image>
					</view>
					<view class="vi-icon">
						<image :src="v.icon" mode=""></image>
					</view>
					<view class="vi-time">
						{{v.time}}
					</view>
				</view>
				<view class="vDesc">
					<view class="vd-title hiddenFonts">
						{{v.title}}
					</view>
					<view class="vd-user">
						<view class="vu-user">
							<view class="vu-header">
								<image :src="v.header" mode=""></image>
							</view>
							<view class="vu-name">
								{{v.name}}
							</view>
						</view>
						<view class="vu-like" :class="{'likeAnimation' : v.isAnima}" @tap="eachLike(v_idx)">
							<image v-if="v.isLike" src="/static/icon/xin_1.png" mode=""></image>
							<image v-else src="/static/icon/xin.png" mode=""></image>
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
				adress : '徐州市',
				isShowBack : true,
				tabList : [
					{
						name : '产品短视频'
					},
					{
						name : '正能量视频'
					}
				],
				current : 0,
				vList : [
					{
						image : '/static/images/img_1.png',
						icon : '/static/icon/icon_zt.png',
						time : '1:00',
						title : '半斤芝麻酥糖出货',
						header : '/static/images/img_avatar_1.png',
						name : '刘先生',
						isAnima : false,
						isLike : false
					},
					{
						image : '/static/images/img_2.png',
						icon : '/static/icon/icon_zt.png',
						time : '1:00',
						title : '半斤芝麻酥糖出货',
						header : '/static/images/img_avatar_1.png',
						name : '刘先生',
						isAnima : false,
						isLike : false
					},
					{
						image : '/static/images/img_1.png',
						icon : '/static/icon/icon_zt.png',
						time : '1:00',
						title : '半斤芝麻酥糖出货',
						header : '/static/images/img_avatar_1.png',
						name : '刘先生',
						isAnima : false,
						isLike : false
					},
					{
						image : '/static/images/img_2.png',
						icon : '/static/icon/icon_zt.png',
						time : '1:00',
						title : '半斤芝麻酥糖出货',
						header : '/static/images/img_avatar_1.png',
						name : '刘先生',
						isAnima : false,
						isLike : false
					},
					{
						image : '/static/images/img_1.png',
						icon : '/static/icon/icon_zt.png',
						time : '1:00',
						title : '半斤芝麻酥糖出货',
						header : '/static/images/img_avatar_1.png',
						name : '刘先生',
						isAnima : false,
						isLike : false
					},
					{
						image : '/static/images/img_2.png',
						icon : '/static/icon/icon_zt.png',
						time : '1:00',
						title : '半斤芝麻酥糖出货',
						header : '/static/images/img_avatar_1.png',
						name : '刘先生',
						isAnima : false,
						isLike : false
					},
					{
						image : '/static/images/img_1.png',
						icon : '/static/icon/icon_zt.png',
						time : '1:00',
						title : '半斤芝麻酥糖出货',
						header : '/static/images/img_avatar_1.png',
						name : '刘先生',
						isAnima : false,
						isLike : false
					}
				]
			}
		},
		onLoad() {
			_self = this;
		},
		methods: {
			tabChange(idx){
				_self.current = idx;
			},
			eachLike(idx){
				_self.vList[idx].isAnima = !_self.vList[idx].isAnima;
				setTimeout(()=>{
					_self.vList[idx].isLike = !_self.vList[idx].isLike
				},250);
				setTimeout(()=>{
					_self.vList[idx].isAnima = !_self.vList[idx].isAnima
				},500);
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F6F6F6;
	}
	.topTab{
		background-color: #FFFFFF;
		display: flex;
		.tt-item{
			width: 50%;
			height: 70rpx;
			font-size: 26rpx;
			text-align: center;
			line-height: 70rpx;
		}
		.tt-ac{
			color: #FB8B18;
		}
	}
	.vList{
		width: 96%;
		margin: 0 auto;
		padding: 10rpx 0 10rpx 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		.vItem{
			width: 49%;
			height: 404rpx;
			overflow: hidden;
			border-radius: 16rpx;
			margin-bottom: 20rpx;
			box-shadow: 8rpx 8rpx 10rpx #DEDEDE;
			.vImage{
				width: 100%;
				height: 266rpx;
				position: relative;
				.vi-bg{
					width: 100%;
					height: 100%;
					position: absolute;
					z-index: 1;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.vi-icon{
					width: 80rpx;
					height: 80rpx;
					position: absolute;
					top: 50%;
					left: 50%;
					margin: -40rpx 0 0 -40rpx;
					z-index: 9;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.vi-time{
					width: 50%;
					height: 40rpx;
					position: absolute;
					bottom: 0;
					right: 20rpx;
					text-align: right;
					line-height: 40rpx;
					font-size: 24rpx;
					color: #FFFFFF;
					z-index: 9;
				}
			}
			.vDesc{
				width: 90%;
				height: 138rpx;
				margin: 0 auto;
				.vd-title{
					height: 60rpx;
					line-height: 60rpx;
					font-size: 26rpx;
				}
				.vd-user{
					height: 78rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.vu-user{
						height: 60rpx;
						display: flex;
						align-items: center;
						.vu-header{
							width: 60rpx;
							height: 100%;
							image{
								width: 100%;
								height: 100%;
								border-radius: 50%;
							}
						}
						.vu-name{
							height: 60rpx;
							font-size: 24rpx;
							line-height: 60rpx;
							margin-left: 16rpx;
						}
					}
				}
				.vu-like{
					width: 40rpx;
					height: 40rpx;
					image{
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
	.likeAnimation{
		animation: anima .5s linear infinite;
	}
	@keyframes anima{
		0%{
			transform: scale(1);
			opacity: 1;
		}
	    10%{
			transform: scale(0.8);
			opacity: 0.9;
		}
		20%{
			transform: scale(0.6);
			opacity: 0.8;
		}
		30%{
			transform: scale(0.4);
			opacity: 0.7;
		}
		40%{
			transform: scale(0.2);
			opacity: 0.6;
		}
		50%{
			transform: scale(0);
			opacity: 0.5;
		}
		60%{
			transform: scale(0.3);
			opacity: 0.6;
		}
		70%{
			transform: scale(0.6);
			opacity: 0.7;
		}
		80%{
			transform: scale(0.9);
			opacity: 0.8;
		}
		90%{
			transform: scale(1.2);
			opacity: 0.9;
		}
		100%{
			transform: scale(1);
			opacity: 1;
		}
	}
</style>

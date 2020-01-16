<template>
	<view>
		<headTypeA :title="title" :isWhite="isWhite" :isHaveSpace="isHaveSpace"></headTypeA>
		<view class="topTypeMs">
			<view class="ttm-item" v-for="(t,t_idx) in topTypeMsList" :class="[topTypeMsCurrent === t_idx ? 'ttm-ac' : '']" @click="choseTTM(t_idx)" :key="t_idx">
				{{t.name}}
			</view>
		</view>
		<view class="topTypeMsSpace"></view>
		<view class="itemMs" v-for="(i,i_idx) in itemList" :key="i_idx">
			<view class="im-image">
				<image :src="i.image" mode=""></image>
			</view>
			<view class="im-main">
				<view class="imm-title">
					{{i.name}}
				</view>
				<view class="imm-progress">
					<progress show-info class="ip-main" :percent="i.percent" activeColor="#F77F0C" border-radius="10" backgroundColor="#E1E1E1" active stroke-width="20" />
				</view>
				<view class="imm-info">
					<view class="immi-item">
						<view class="imi-top">
							已募集
						</view>
						<view class="imi-bom">
							{{i.have}}元
						</view>
					</view>
					<view class="immi-item">
						<view class="imi-top">
							目标金额
						</view>
						<view class="imi-bom">
							{{i.all}}元
						</view>
					</view>
					<view class="immi-item">
						<view class="imi-top">
							距离
						</view>
						<view class="imi-bom">
							{{i.distance}}
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
				title : '创业众筹',
				isWhite : true,
				isHaveSpace : true,
				topTypeMsList : [
					{
						name : '乡村创业'
					},
					{
						name : '农业创业'
					},
					{
						name : '大学生创业'
					},
					{
						name : '科技创业'
					}
				],
				topTypeMsCurrent : 0,
				itemList : [
					{
						image : '/static/img_cf/img_1_xccy.png',
						name : '扶贫定向包扶',
						percent : 30,
						have : 6000,
						all : 36000,
						distance : '2.5km'
					},
					{
						image : '/static/img_cf/img_1_xccy.png',
						name : '扶贫定向包扶',
						percent : 30,
						have : 6000,
						all : 36000,
						distance : '2.5km'
					},
					{
						image : '/static/img_cf/img_1_xccy.png',
						name : '扶贫定向包扶',
						percent : 30,
						have : 6000,
						all : 36000,
						distance : '2.5km'
					},
					{
						image : '/static/img_cf/img_1_xccy.png',
						name : '扶贫定向包扶',
						percent : 30,
						have : 6000,
						all : 36000,
						distance : '2.5km'
					}
				]
			}
		},
		onLoad() {
			_self = this;
		},
		methods: {
			choseTTM(idx){
				_self.topTypeMsCurrent = idx;
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F6F6F6;
	}
	.topTypeMs{
		width: 100%;
		height: 90rpx;
		background-color: #FFFFFF;
		border-top: 1rpx solid #F6F6F6;
		border-bottom: 10rpx solid #F6F6F6;
		position: fixed;
		left: 0;
		top: 120rpx;
		z-index: 9;
		display: flex;
		align-items: center;
		.ttm-item{
			width: 25%;
			height: 90rpx;
			line-height: 90rpx;
			font-size: 28rpx;
			text-align: center;
		}
		.ttm-ac{
			color: #F77F0C;
		}
	}
	.topTypeMsSpace{
		height: 101rpx;
	}
	.itemMs{
		width: 94%;
		height: 240rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;
		margin: 0 auto 10rpx;
		display: flex;
		align-items: center;
		.im-image{
			width: 28%;
			text-align: center;
			height: 190rpx;
			image{
				width: 150rpx;
				height: 190rpx;
			}
		}
		.im-main{
			width: 68%;
			height: 190rpx;
			margin-left: 10rpx;
			.imm-title{
				height: 60rpx;
				line-height: 60rpx;
				font-size: 26rpx;
			}
			.imm-progress{
				height: 50rpx;
				line-height: 50rpx;
			}
			.imm-info{
				height: 80rpx;
				display: flex;
				align-items: center;
				.immi-item{
					width: 33.3%;
					height: 80rpx;
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
		}
	}
</style>
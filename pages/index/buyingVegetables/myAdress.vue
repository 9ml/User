<template>
	<view>
		<view class="htaMs">
			<view class="hm-space"></view>
			<view class="hm-all">
				<view class="ha-left" @tap="myTools.navBack()">
					<image src="/static/icon/nav_back_ss.png" mode=""></image>
				</view>
				<view class="ha-name">
					我的收货地址
				</view>
				<view class="ha-right" @tap="showAdd()">
					添加新地址
				</view>
			</view>
		</view>
		<view class="headSpace"></view>
		<view class="ma-item" v-for="(a,a_idx) in myAdressList" :key="a_idx">
			<view class="mi-main">
				<view class="mm-icon" @tap="choseChange(a_idx)">
					<image v-if="a.isChose" src="/static/icon/icon_xz_zylm.png" mode=""></image>
					<image v-else src="/static/icon/icon_wxz_zylm.png" mode=""></image>
				</view>
				<view class="mm-info">
					<view class="mi-item">
						{{a.name}}<text class="mi-phone">{{a.phone}}</text>
					</view>
					<view class="mi-item hiddenFonts">
						地址：{{a.adress}}
					</view>
				</view>
				<view class="mm-right">
					编辑
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
				myAdressList : [
					{
						name : '张可',
						phone : '123456789',
						adress : '江苏省徐州市泉山区域景区F63号楼',
						isChose : true
					},
					{
						name : '张可',
						phone : '123456789',
						adress : '江苏省徐州市泉山区域景区F63号楼',
						isChose : false
					},
					{
						name : '张可',
						phone : '123456789',
						adress : '江苏省徐州市泉山区域景区F63号楼',
						isChose : false
					}
				]
			}
		},
		onLoad() {
			_self = this;
		},
		methods: {
			choseChange(idx){
				_self.myAdressList.forEach((item,index)=>{
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
	page{
		background-color: #F6F6F6;
	}
	.htaMs{
		width: 100%;
		height: 120rpx;
		background-color: #FFFFFF;
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
				width: 70%;
				height: 90rpx;
				text-align: center;
				font-size: 30rpx;
				color: #333333;
				line-height: 100rpx;
			}
			.ha-right{
				width: 20%;
				height: 90rpx;
				line-height: 100rpx;
				font-size: 26rpx;
				color: #333333;
			}
		}
	}
	.headSpace{
		height: 120rpx;
	}
	.ma-item{
		border-top: 1rpx solid #F6F6F6;
		background-color: #FFFFFF;
		.mi-main{
			width: 90%;
			height: 100rpx;
			margin: 0 auto;
			display: flex;
			align-items: center;
			.mm-icon{
				width: 8%;
				image{
					width: 34rpx;
					height: 34rpx;
				}
			}
			.mm-info{
				width: 80%;
				height: 80rpx;
				.mi-item{
					height: 40rpx;
					line-height: 40rpx;
					font-size: 26rpx;
					.mi-phone{
						color: #777777;
						margin-left: 16rpx;
					}
				}
			}
			.mm-right{
				width: 12%;
				height: 70rpx;
				line-height: 70rpx;
				text-align: center;
				font-size: 26rpx;
				border-left: 2rpx solid #AEAEAE;
			}
		}
	}
</style>

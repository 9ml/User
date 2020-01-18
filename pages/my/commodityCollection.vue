<!-- 商品收藏 -->
<template>
	<view>
		<!-- 商品列表 -->
		<view class="content" v-for="(value,index) in infoArr" :key='index'>
			<view class="info">
				<view v-if="ok" class="xuan" :class="{'cur': rSelect.indexOf(index)!=-1}" @tap="xuan(index)"></view>
				<image class="img" :src="value.image"></image>
				<view class="right">
					<view class="con">{{value.name}}</view>
					<view class="price">￥{{value.price}}</view>
					<view class="xl">销量:{{value.sales}}</view>
				</view>
			</view>
		</view>

		<!-- 底部全选 -->
		<view class="foot" v-if="ok">
			<view class="xuan"></view>
			<text>全选</text>
			<view class="queding">删除</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ok:false,
				rSelect: [],
				infoArr: []
			}
		},
		onNavigationBarButtonTap() {
			this.ok = !this.ok
		},
		onLoad() {
			this.commodityList()
		},
		methods: {
			commodityList(){
				this.Api.commodityList({
					token:uni.getStorageSync('token')
				},res=>{
					console.log(res)
					if(res.data.length == 0){
						uni.showToast({
							title:'当前没有商品收藏',
							icon:'none'
						})
					}else{
						this.infoArr = res.data
					}
				})
			},
			
			
			xuan(e) {
				if (this.rSelect.indexOf(e) == -1) {
					this.rSelect.push(e);
					if(this.rSelect.length==this.infoArr.length){
						console.log(111)
					}
				} else {
					this.rSelect.splice(this.rSelect.indexOf(e), 1);
				}
			}
		}
	}
</script>

<style lang='scss'>
	.content {
		margin-top: 20rpx;
		width: 100%;
		height: 290rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: white;

		.info {
			width: 700rpx;
			height: 220rpx;
			display: flex;
			align-items: center;

			.xuan {
				width: 30rpx;
				height: 30rpx;
				background-image: url(../../static/icon_wxz_zylm.png);
				background-size: 100% 100%;
			}

			.cur {
				background-image: url(../../static/icon_xz_zylm.png);
			}

			.img {
				margin-left: 20rpx;
				width: 220rpx;
				height: 220rpx;
				border-radius: 15rpx;
			}

			.right {
				margin-left: 20rpx;
				width: 405rpx;
				height: 220rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-around;

				.con {
					font-size: 28rpx;
				}

				.xl {
					color: gray;
					font-size: 26rpx;
					margin-left: 280rpx;
				}

				.price {
					color: red;
					font-size: 30rpx;
				}
			}
		}
	}

	.foot {
		position: fixed;
		bottom: 0;
		display: flex;
		align-items: center;
		width: 100%;
		height: 100rpx;
		font-size: 30rpx;
		background-color: white;

		.xuan {
			margin-left: 30rpx;
			width: 30rpx;
			height: 30rpx;
			background-image: url(../../static/icon_wxz_zylm.png);
			background-size: 100% 100%;
		}
		text{
			margin-left: 30rpx;
		}
		.queding{
			margin-left: 360rpx;
			width: 200rpx;
			height: 75rpx;
			color: white;
			text-align: center;
			line-height: 75rpx;
			border-radius: 60rpx;
			background-color: #fc8a18;
		}
	}
</style>


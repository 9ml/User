<!-- 小视频收藏 -->
<template>
	<view>
		<!-- 商品列表 -->
		<view class="content" v-for="(value,index) in infoArr" :key='index'>
			<view class="xuan" v-if="ok" :class="{'cur': rSelect.indexOf(index)!=-1}" @tap="xuan(index)"></view>
			<image class="img" src="../../static/img_1_xjz.png"></image>
			<view class="row1">
				<image class="head" :src="value.head"></image>
				{{value.name}}
				<!-- <image class="like" src="../../static/like.PNG"></image> -->
			</view>
			<view class="row2">{{value.con}}</view>
			<view class="row3">{{value.shop}}</view>
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
				infoArr: [
					{name:'张三',head:'../../static/img_avatar_xspsc.png',con:'水果贱卖',shop:'张三店铺'},
					{name:'张三',head:'../../static/img_avatar_xspsc.png',con:'水果贱卖',shop:'张三店铺'},
					{name:'张三',head:'../../static/img_avatar_xspsc.png',con:'水果贱卖',shop:'张三店铺'},
					{name:'张三',head:'../../static/img_avatar_xspsc.png',con:'水果贱卖',shop:'张三店铺'},
					{name:'张三',head:'../../static/img_avatar_xspsc.png',con:'水果贱卖',shop:'张三店铺'},
				]
			}
		},
		onNavigationBarButtonTap:function(e){
			this.ok = !this.ok
			e.text = '完成'
		},
		methods: {
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
		margin-left: 10rpx;
		float: left;
		width: 360rpx;
		height: 620rpx;
		border-radius: 15rpx;
		background-color: white;
		.xuan {
			position: absolute;
			margin-top: 0rpx;
			margin-left: 330rpx;
			width: 30rpx;
			height: 30rpx;
			z-index: 100;
			background-image: url(../../static/icon_wxz_zylm.png);
			background-size: 100% 100%;
		}
		
		.cur {
			background-image: url(../../static/icon_xz_pre.png);
		}
		.img{
			width: 360rpx;
			height: 460rpx;
		}
		.row1{
			width: 360rpx;
			height: 65rpx;
			display: flex;
			align-items: center;
			font-size: 28rpx;
			.head{
				margin-left: 20rpx;
				margin-right:10rpx;
				width: 50rpx;
				height: 50rpx;
			}
			.like{
				position: relative;
				left: 170rpx;
				width: 35rpx;
				height: 35rpx;
			}
		}
		.row2{
			font-size: 30rpx;
			margin-left: 20rpx;
		}
		.row3{
			color: gray;
			font-size: 28rpx;
			margin-left: 20rpx;
		}
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
		}
	}

	.foot {
		z-index: 1000;
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

<!-- 取消订单 -->
<template>
	<view>
		<view class="content">
			<view class="title">请选择取消订单的原因</view>
			<view class="info" v-for="(value,index) in yyArr" :key='index' @tap="tapyy(index)">
				<view class="xuan" :class="current==index?'cur':''"></view>
				<text>{{value.con}}</text>
			</view>
			
			<view class="submit">提交</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				current:'',
				yyArr:[
					{con:'商品无货'},
					{con:'不想要了'},
					{con:'商品信息填写错误'},
					{con:'地址信息填写错误'},
					{con:'商品降价'},
					{con:'其他原因'}
				]
			}
		},
		methods:{
			tapyy(e){
				this.current = e
			}
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		height: 500rpx;
		background-color: white;
		border-top: 1px solid #f6f6f6;
		.title{
			font-size: 30rpx;
			margin: 20rpx;
		}
		.info{
			margin: 30rpx;
			width: 90%;
			height: 35rpx;
			font-size: 30rpx;
			display: flex;
			.xuan{
				width: 35rpx;
				height: 35rpx;
				background-image: url(../../static/icon_wxz_zylm.png);
				background-size: 100% 100%;
			}
			.cur{
				background-image: url(../../static/icon_xz_zylm.png);
			}
			text{
				margin-left: 30rpx;
				color: gray;
			}
		}
		.submit{
			margin-top: 160rpx;
			margin-left: 50rpx;
			color: white;
			width: 640rpx;
			height: 90rpx;
			font-size: 34rpx;
			text-align: center;
			line-height: 90rpx;
			border-radius: 60rpx;
			background-color: #f88312;
		}
	}
</style>

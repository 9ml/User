<!-- 支付订单 -->
<template>
	<view>
		<view class="head">
			<view class="title">支付金额</view>
			<view class="price">￥300.00</view>
			<view class="shop">张三旗舰店<text @tap="tapxq">订单详情 〉</text></view>
		</view>
		
		<view class="pay">
			<view class="title">支付方式</view>
			<view class="pay_v" v-for="(value,index) in payArr" :key='index' @tap="tappay(index)">
				<image :src="value.src"></image>
				<text>{{value.name}}</text>
				<view :class="current==index?'cur':''"></view>
			</view>
		</view>
		
		<view class="submit" @tap="pay">确认支付</view>
		
		<!-- 弹出订单详情 -->
		<view class="zhezhao" v-if="ok">
			<view class="info">
				<view class="row1">订单详情<text @tap="guanbi">x</text></view>
				<view class="row">
					<view class="title">收货地址</view>
					<view class="con">铜山万达5号楼SOHO5</view>
					<view class="con">张三(先生) 156980151235</view>
				</view>
				<view class="row">
					<view class="title">张三旗舰店</view>
					<view class="con">苹果<text>x2</text></view>
					<view class="con">香蕉<text>x2</text></view>
				</view>
				<view class="row row2">
					<view class="title">优惠券</view>
					<view class="con">已优惠<text>-￥5.00</text></view>
				</view>
				<view class="row row2">
					<view class="title">备注</view>
					<view class="con">无</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				ok:false,
				current:'',
				payArr:[
					{src:'../../static/icon_zfbzf_zfdd.png',name:'支付宝支付'},
					{src:'../../static/icon_wxzf_zfdd.png',name:'微信支付'}
				]
			}
		},
		methods:{
			pay(){
				uni.navigateTo({
					url:'orderInfo'
				})
			},
			guanbi(){
				this.ok = false
			},
			tapxq(){
				this.ok = true
			},
			tappay(e){
				this.current = e
			}
		}
	}
</script>

<style lang="scss">
	.head{
		width: 100%;
		height: 330rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background-color: white;
		border-top: 1px solid #f6f6f6;
		.title{
			font-size: 32rpx;
		}
		.price{
			font-size: 45rpx;
			font-weight: 500;
			margin-top: 20rpx;
		}
		.shop{
			color: gray;
			font-size: 28rpx;
			margin-top: 20rpx;
			text{
				margin-left: 10rpx;
			}
		}
	}
	.pay{
		margin-top: 20rpx;
		width: 100%;
		height: 330rpx;
		background-color: white;
		.title{
			margin-left: 30rpx;
			height: 95rpx;
			font-size: 36rpx;
			display: flex;
			align-items: center;
		}
		.pay_v{
			margin-bottom: 45rpx;
			width: 100%;
			height: 60rpx;
			display: flex;
			font-size: 28rpx;
			align-items: center;
			image{
				margin-left: 30rpx;
				margin-right: 30rpx;
				width: 60rpx;
				height: 60rpx;
			}
			view{
				position: absolute;
				right: 30rpx;
				width: 33rpx;
				height: 33rpx;
				background-image: url(../../static/icon_wxz_zylm.png);
				background-size: 100% 100%;
			}
			.cur{
				background-image: url(../../static/icon_xz_zylm.png);
			}
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
	.zhezhao{
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		.info{
			margin-top: 115rpx;
			margin-left: 65rpx;
			width: 625rpx;
			height: 775rpx;
			border-radius: 15rpx;
			background-color: white;
			.row1{
				width: 100%;
				height: 90rpx;
				font-size: 36rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				border-bottom: 1px solid #f6f6f6;
				text{
					position: absolute;
					right: 80rpx;
					color: gray;
					font-size: 36rpx;
				}
			}
			.title{
				font-size: 36rpx;
			}
			.con{
				font-size: 28rpx;
				color: gray;
				text{
					position: absolute;
					right: 90rpx;
				}
			}
			.row{
				margin-left: 40rpx;
				width: 560rpx;
				height: 180rpx;
				display: flex;
				justify-content: space-around;
				flex-direction: column;
				border-bottom: 1px solid #f6f6f6;
			}
			.row2{
				height: 140rpx;
			}
			
		}
	}
</style>

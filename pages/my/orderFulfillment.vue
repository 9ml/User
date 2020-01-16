<!-- 订单完成 -->
<template>
	<view>
		<!-- 旗舰店 商品详情-->
		<view class="shop">
			<!-- 旗舰店 -->
			<view class="row1">
				<image src="../../static/icon_dp_dpsc.png"></image>
				张三旗舰店
				〉
			</view>
			<view class="row2" v-for="(value,index) in infoArr" :key='index'>
				<image src="../../static/img_1_xjz.png"></image>
				<view class="right">
					<view class="con">{{value.con}}</view>
					<view class="num">x{{value.num}}</view>
					<view class="price">￥{{value.price}}</view>
				</view>
			</view>
			
			<!-- 配送费、满减优惠、积分折扣 -->
			<view class="row3">
				<text>配送费</text>
				<text class="right">￥6.00</text>
			</view>
			<view class="row3">
				<text>满减优惠</text>
				<text class="right">-￥6.00</text>
			</view>
			<view class="row3">
				<text>积分折扣</text>
				<text class="right">-￥6.00</text>
			</view>
			
			<!-- 已优惠、合计 -->
			<view class="row_yh">
				已优惠<text>￥30.2</text>
				合计：<text>20.3</text>
			</view>
			
			<!-- 联系商家、致电商家 -->
			<view class="row4">
				<view @tap="talk(2)"><image src="../../static/icon_lxsj_dt.png"></image>联系商家</view>
				<view @tap="talk(2)"><image src="../../static/icon_zdsj_dt.png"></image>致电商家</view>
			</view>
		</view>
		
		<!-- 配送信息 -->
		<view class="peisongmsg">
			<view class="title"><text>配送信息</text></view>
			<view class="row">
				<text>配送骑手</text>
				<text class="right">张三</text>
			</view>
			<view class="row">
				<text>配送地址</text>
				<text class="right">徐州市万达</text>
			</view>
			<view class="row">
				<text class="right">李先生 156980123456</text>
			</view>
			<view class="row4">
				<view @tap="talk(1)"><image src="../../static/icon_lxsj_dt.png"></image>联系骑手</view>
				<view @tap="talk(1)"><image src="../../static/icon_zdsj_dt.png"></image>致电骑手</view>
			</view>
		</view>
		
		<!-- 订单信息 -->
		<view class="ordermsg">
			<view class="title"><text>订单信息</text></view>
			<view class="row">
				<text>订单编号</text>
				<text class="num">123456789</text>
				<view>复制</view>
			</view>
			<view class="row">
				<text>下单时间</text>
				<text class="right">2019-09-17 10:30</text>
			</view>
			<view class="row">
				<text>支付方式</text>
				<text class="right">在线支付</text>
			</view>
		</view>
		
		<!-- 订单跟踪 -->
		<view class="zhezhao" v-if="ok" @touchmove.stop.prevent>
			<view class="info">
				<view class="title">订单跟踪<text @tap="guanbi">X</text></view>
				<view class="info_v">
					<uni-steps :options="list" :active="active" direction="column" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSteps from '@/components/uni-steps/uni-steps.vue'
	export default {
		components: {
			uniSteps
		},
		data() {
			return {
				ok:false,
				infoArr:[
					{state:1,src:'../../static/img_1_xjz.png',con:'水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖',time:'2019.02.01 10:30',num:1,price:'30.00',heji:'30.00'},
					{state:2,src:'../../static/img_1_xjz.png',con:'水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖',time:'2019.02.01 10:30',num:1,price:'30.00',heji:'30.00'}
				],
				active: 1,
				list: [{
					title: '订单已提交',
					desc: '8月20日 18:31'
				}, {
					title: '订单成功',
					desc: '8月20日 18:31'
				}, {
					title: '商家已接单',
					desc: '8月20日 18:31'
				}, {
					title: '骑手已接单',
					desc: '8月20日 18:31'
				},{
					title: '骑手已到店',
					desc: '8月20日 18:31'
				},{
					title: '骑手已取货',
					desc: '8月20日 18:31'
				},
				{
					title: '骑手已送达',
					desc: '8月20日 18:31'
				},
				{
					title: '订单已完成',
					desc: '8月20日 18:31'
				}]
			}
		},
		methods: {
			talk(e){
				uni.navigateTo({
					url:'talk?e='+e
				})
			},
			tuikuan(){
				uni.navigateTo({
					url:'applyRefund'
				})
			},
			guanbi(){
				this.ok = false
			},
			genzong(){
				this.ok = true
			}
		}
	}
</script>

<style lang="scss">
	.shop {
		width: 710rpx;
		margin: 20rpx;
		border-radius: 15rpx;
		background-color: white;
		.row1{
			width: 100%;
			height: 115rpx;
			display: flex;
			align-items: center;
			font-size: 30rpx;
			image{
				width: 30rpx;
				height: 30rpx;
				margin-left: 30rpx;
				margin-right: 10rpx;
			}
		}
		.row2{
			margin-left: 30rpx;
			margin-bottom: 10rpx;
			width: 670rpx;
			height: 195rpx;
			display: flex;
			align-items: center;
			background-color: #f9f9f9;
			image{
				width: 195rpx;
				height: 195rpx;
			}
			.right {
				margin-left: 20rpx;
				width: 460rpx;
				height: 195rpx;
		
				.con{
					font-size: 28rpx;
					margin-bottom: 10rpx;
				}
				.num{
					font-size: 26rpx;
					margin-left: 400rpx;
				}
				.price{
					color: #fc726f;
					font-size: 30rpx;
				}
			}
		}
		.row3{
			width: 100%;
			height: 65rpx;
			display: flex;
			align-items: center;
			font-size: 30rpx;
			border-bottom: 1px solid #f6f6f6;
			text{
				margin-left: 30rpx;
			}
			.right{
				position: absolute;
				right: 50rpx;
			}
		}
		.row_yh{
			margin-left: 300rpx;
			width: 400rpx;
			height: 75rpx;
			font-size: 30rpx;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			border-bottom: 1px solid #f6f6f6;
			text{
				color: #fc5b60;
				margin-left: 5rpx;
				margin-right: 20rpx;
			}
		}
		.row4{
			width: 710rpx;
			height: 90rpx;
			color: gray;
			display: flex;
			justify-content: space-around;
			view{
				width: 50%;
				height: 90rpx;
				font-size: 30rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				image{
					width: 40rpx;
					height: 40rpx;
					margin-right: 10rpx;
				}
			}
		}
	}
	.peisongmsg{
		margin: 20rpx;
		width: 710rpx;
		font-size: 30rpx;
		border-radius: 15rpx;
		background-color: white;
		text{
			margin-left: 30rpx;
			color: gray;
		}
		.title{
			width: 100%;
			height: 75rpx;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #f6f6f6;
			text{
				color: black;
			}
		}
		.row{
			width: 100%;
			height: 70rpx;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #f6f6f6;
			.right{
				position: absolute;
				right: 50rpx;
				color: black;
			}
		}
		.row4{
			width: 710rpx;
			height: 90rpx;
			color: gray;
			display: flex;
			justify-content: space-around;
			view{
				width: 50%;
				height: 90rpx;
				font-size: 30rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				image{
					width: 40rpx;
					height: 40rpx;
					margin-right: 10rpx;
				}
			}
		}
	}
	.ordermsg{
		margin: 20rpx;
		width: 710rpx;
		font-size: 30rpx;
		border-radius: 15rpx;
		background-color: white;
		text{
			margin-left: 30rpx;
			color: gray;
		}
		.title{
			width: 100%;
			height: 75rpx;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #f6f6f6;
			text{
				color: black;
			}
		}
		.row{
			width: 100%;
			height: 70rpx;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #f6f6f6;
			.right{
				position: absolute;
				right: 50rpx;
				color: black;
			}
			.num{
				position: absolute;
				right: 150rpx;
				color: black;
			}
			view{
				position: absolute;
				right: 30rpx;
				width: 95rpx;
				height: 40rpx;
				color: black;
				text-align: center;
				line-height: 40rpx;
				border-radius: 15rpx;
				border: 1px solid black;
			}
		}
	}
	.zhezhao{
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 100;
		background-color: rgba(0, 0, 0, 0.5);
		.info{	
			position: absolute;
			bottom: 0;
			width: 100%;
			height: 900rpx;
			background-color: white;
			.info_v{
				width: 100%;
				height: 800rpx;
				display: flex;
				flex-direction: column;
				overflow-y: auto;
			}
			.title{
				margin-top: 20rpx;
				width: 100%;
				height: 75rpx;
				font-size: 34rpx;
				text-align: center;
				text{
					position: absolute;
					float: right;
					right: 30rpx;
				}
			}
			
		}
	}
</style>


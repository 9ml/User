<!-- 乡村产品订单详情 -->
<template>
	<view>
		<view class="top">
			<image src="/static/icon_dz_ddxq.png"></image>
			<view class="right">
				<view class="name">张三 <text>156980123456</text></view>
				<view class="address">山东省济南市历下区华能路汇能大厦29楼</view>
			</view>
		</view>

		<!-- 订单信息 -->
		<view class="dingdan">
			<!-- 商品 -->
			<view class="list" v-for="(value,index) in infoArr" :key='index'>
				<view class="row1">
					<image src="../../static/icon_dp_dpsc.png"></image>
					{{value.shop}}
					<text class="right" v-if="true">待付款</text>
					<text class="right" v-if="false" @tap="wancheng">已完成</text>
					<text class="right" v-if="false">待发货</text>
					<text class="right" v-if="false">待收货</text>
				</view>
				<view class="row2">
					<image src="../../static/img_1_xjz.png"></image>
					<view class="right">
						<view class="con">{{value.con}}</view>
						<view class="time">下单时间：{{value.time}}</view>
						<view class="num">x{{value.num}}</view>
						<view class="price">￥{{value.price}}</view>
					</view>
				</view>
			</view>

			<!-- 订单号、时间 -->
			<view class="foot">
				<text>订单编号</text>
				<text class="right">123456789554552</text>
			</view>
			<view class="foot">
				<text>下单时间</text>
				<text class="right">2019.07.08 10:30</text>
			</view>
		</view>

		<!-- 商品总额 -->
		<view class="money">
			<view>
				<text>商品总额</text>
				<text class="right">￥60.00</text>
			</view>
			<view>
				<text>运费</text>
				<text class="right">￥3.00</text>
			</view>
			<view>
				<text>优惠券</text>
				<text class="right">满100减10元</text>
			</view>
			<view class="foot">需付款:<text class="num">￥50.00</text></view>
		</view>

		<!-- 配送方式 -->
		<view class="peisong">
			<text>配送方式</text>
			<text class="right">普通快递</text>
		</view>

		<!-- 底部 -->
		<view class="dibu">
			<view class="quxiao" @tap="quxiao">取消订单</view>
			<view class="pay" @tap="zhifu">去支付</view>
			<view class="pay" v-if="false">提醒发货</view>
			<view class="quxiao" v-if="false" @tap="chakan">查看物流</view>
			<view class="pay" v-if="false">确认收货</view>
		</view>

		<!-- 支付 -->
		<view class="zhezhao" v-if="ok">
			<view class="pay">
				<view class="title">确认付款<text class="right" @tap="guanbi">X</text></view>
					<view class="pay_num">￥19.90</view>
					<view class="pay_v" v-for="(value,index) in payArr" :key='index' @tap="tappay(index)">
						<image :src="value.src"></image>
						<text>{{value.name}}</text>
						<view :class="current==index?'cur':''"></view>
					</view>
					<view class="paybtn">立即付款</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ok: false,
				current: '',
				infoArr: [{
					shop: '张三旗舰店',
					state: 1,
					src: '../../static/img_1_xjz.png',
					con: '水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖',
					time: '2019.02.01 10:30',
					num: 1,
					price: '30.00',
					heji: '30.00'
				}],
				payArr: [{
						src: '../../static/icon_zfbzf_zfdd.png',
						name: '支付宝支付'
					},
					{
						src: '../../static/icon_wxzf_zfdd.png',
						name: '微信支付'
					}
				]
			}
		},
		methods: {
			chakan(){
				uni.navigateTo({
					url:'../my/logistics'
				})
			},
			guanbi() {
				this.ok = false
			},
			zhifu() {
				this.ok = true
			},
			finish(e) {
				console.log(e);
			},
			tappay(e) {
				this.current = e
			},
			quxiao() {
				uni.navigateTo({
					url: 'cancelOrder'
				})
			}
		}
	}
</script>

<style lang="scss">
	text {
		margin-left: 30rpx;
	}

	.right {
		position: absolute;
		right: 50rpx;
		color: gray;
	}

	.top {
		margin: 25rpx;
		width: 700rpx;
		height: 230rpx;
		display: flex;
		align-items: center;
		border-radius: 15rpx;
		background-color: white;

		image {
			width: 70rpx;
			height: 70rpx;
			margin-left: 20rpx;
		}

		.right {
			margin-left: 20rpx;
			width: 560rpx;
			height: 110rpx;

			.name {
				font-size: 32rpx;

				text {
					color: gray;
					font-size: 28rpx;
				}
			}

			.address {
				font-size: 30rpx;
				margin-top: 10rpx;
			}
		}
	}

	.dingdan {
		width: 700rpx;
		margin-left: 25rpx;
		border-radius: 15rpx;
		background-color: white;

		.list {
			padding-bottom: 10rpx;
			width: 700rpx;
			border-radius: 15rpx 15rpx 0 0;
			background-color: white;

			.row1 {
				width: 100%;
				height: 75rpx;
				font-size: 26rpx;
				display: flex;
				align-items: center;

				image {
					width: 28rpx;
					height: 28rpx;
					margin-left: 30rpx;
					margin-right: 10rpx;
				}

				.right {
					color: #fc726f;
				}
			}

			.row2 {
				margin-left: 30rpx;
				width: 670rpx;
				height: 195rpx;
				display: flex;
				align-items: center;

				image {
					width: 195rpx;
					height: 195rpx;
				}

				.right {
					width: 440rpx;
					height: 195rpx;

					.con {
						font-size: 28rpx;
						margin-bottom: 10rpx;
					}

					.time {
						font-size: 26rpx;
						color: gray;
					}

					.num {
						font-size: 26rpx;
						margin-left: 410rpx;
					}

					.price {
						color: #fc726f;
						font-size: 30rpx;
					}
				}
			}
		}

		.foot {
			width: 100%;
			height: 75rpx;
			display: flex;
			font-size: 30rpx;
			align-items: center;
			border-top: 1px solid #f6f6f6;
		}
	}

	.money {
		margin: 25rpx;
		width: 700rpx;
		height: 270rpx;
		border-radius: 15rpx;
		background-color: white;

		view {
			width: 100%;
			height: 65rpx;
			display: flex;
			font-size: 30rpx;
			align-items: center;
			border-bottom: 1px solid #f6f6f6;

		}

		.foot {
			position: absolute;
			right: 10rpx;
			width: 280rpx;
			text-align: right;

			text {
				color: #ee5253;
			}
		}
	}

	.peisong {
		margin: 25rpx;
		width: 700rpx;
		height: 90rpx;
		display: flex;
		font-size: 30rpx;
		align-items: center;
		border-radius: 15rpx;
		background-color: white;
	}

	.dibu {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 100rpx;
		font-size: 30rpx;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		background-color: white;

		view {
			margin-right: 30rpx;
			width: 160rpx;
			height: 50rpx;
			color: gray;
			text-align: center;
			line-height: 50rpx;
			border-radius: 60rpx;
		}

		.quxiao {
			border: 1px solid gray;
		}

		.pay {
			color: #f98412;
			border: 1px solid #f98412;
		}
	}

	.zhezhao {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 100;
		background-color: rgba(0, 0, 0, 0.5);

		.pay {
			position: absolute;
			bottom: 0rpx;
			width: 100%;
			height: 920rpx;
			background-color: white;

			.title {
				width: 100%;
				height: 95rpx;
				font-size: 36rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.pay_num {
				width: 100%;
				height: 260rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 60rpx;
			}

			.pay_v {
				margin-bottom: 45rpx;
				width: 100%;
				height: 60rpx;
				display: flex;
				font-size: 28rpx;
				align-items: center;

				image {
					margin-left: 30rpx;
					margin-right: 30rpx;
					width: 60rpx;
					height: 60rpx;
				}

				view {
					position: absolute;
					right: 30rpx;
					width: 33rpx;
					height: 33rpx;
					background-image: url(../../static/icon_wxz_zylm.png);
					background-size: 100% 100%;
				}

				.cur {
					background-image: url(../../static/icon_xz_zylm.png);
				}
			}

			.paybtn {
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
	}
</style>

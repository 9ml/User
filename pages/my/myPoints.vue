<!-- 我的积分 -->
<template>
	<view>
		<!-- 积分余额 -->
		<view class="top">
			<view class="top_v">
				<view>我的积分：</view>
				<view>{{score}}</view>
			</view>
		</view>

		<!-- 积分明细、兑换商品 -->
		<view class="cat">
			<view :class="current == index ? 'cur' : ''" v-for="(value, index) in catArr" :key="index" @tap="tapcat(index)">{{ value.name }}</view>
		</view>

		<!-- 明细内容 -->
		<view class="mxinfo" v-if="current == 0" v-for="(value, index) in mxArr" :key="index">
			<view class="left">
				<view class="name">{{ value.name }}</view>
				<view class="time">{{ value.time }}</view>
			</view>
			<view class="right">+{{ value.num }}</view>
		</view>

		<!-- 兑换商品 -->
		<view class="list" v-if="current == 1" v-for="(value, index) in infoArr" :key="index">
			<view class="row2">
				<image src="../../static/img_1_xjz.png" @tap="taplist(index)"></image>
				<view class="right">
					<view class="con">{{ value.con }}</view>
					<view class="time">时间：{{ value.time }}</view>
					<view class="jifen">积分：{{ value.jifen }}</view>
					<view class="dhbtn" @tap="dhbtn">去兑换</view>
				</view>
			</view>
		</view>

		<!-- 弹出兑换记录、使用状态 -->
		<view class="zhezhao" v-if="ok">
			<view class="zz_v">
				<view @tap="duihuan">兑换记录</view>
				<view @tap="zhuangtai">使用状态</view>
				<view style="border-bottom: none;color: gray;" @tap="quxiao">取消</view>
			</view>
		</view>
	</view>
</template>

<script>
var _self;
export default {
	data() {
		return {
			ok: false,
			current: 0,
			catArr: [
				{
					name: '积分明细'
				},
				{
					name: '兑换商品'
				}
			],
			mxArr: [
				{
					name: '订单积分',
					time: '2019.09.03 10:30',
					num: 150
				},
				{
					name: '订单积分',
					time: '2019.09.03 10:30',
					num: 150
				},
				{
					name: '订单积分',
					time: '2019.09.03 10:30',
					num: 150
				},
				{
					name: '订单积分',
					time: '2019.09.03 10:30',
					num: 150
				},
				{
					name: '订单积分',
					time: '2019.09.03 10:30',
					num: 150
				}
			],
			infoArr: [
				{
					src: '../../static/img_1_xjz.png',
					con: '水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖',
					time: '2019.02.01 10:30',
					jifen: '30.00'
				},
				{
					src: '../../static/img_1_xjz.png',
					con: '水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖',
					time: '2019.02.01 10:30',
					jifen: '30.00'
				}
			],
			score: '' //积分
		};
	},
	onNavigationBarButtonTap() {
		this.ok = true;
	},
	onLoad() {
		_self = this;
		_self.Api.userInfo(
			{
				token: uni.getStorageSync('token')
			},
			res => {
				console.log(res);
				if (res.code == 1) {
					this.score = res.data[0].score;
				}
			}
		);
	},
	methods: {
		taplist() {
			uni.navigateTo({
				url: 'dhOrderDetail'
			});
		},
		dhbtn() {
			uni.navigateTo({
				url: 'exchangeSuccess'
			});
		},
		zhuangtai() {
			uni.navigateTo({
				url: 'usageState'
			});
			this.ok = false;
		},
		duihuan() {
			uni.navigateTo({
				url: 'exchangeRecords'
			});
			this.ok = false;
		},
		quxiao() {
			this.ok = false;
		},
		tapcat(e) {
			this.current = e;
		}
	}
};
</script>

<style lang="scss">
.zhezhao {
	z-index: 1000;
	position: fixed;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	.zz_v {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 230rpx;
		font-size: 30rpx;
		background-color: white;
		view {
			width: 100%;
			height: 75rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			border-bottom: 1px solid #f6f6f6;
		}
	}
}
.top {
	width: 740rpx;
	height: 225rpx;
	margin-top: 40rpx;
	color: white;
	display: flex;
	font-size: 36rpx;
	align-items: center;
	background-image: url(../../static/img_bg_jfmx.png);
	background-size: 100% 100%;
	.top_v {
		margin-left: 60rpx;
		margin-top: -60rpx;
		width: 270rpx;
		height: 120rpx;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}
}

.cat {
	width: 100%;
	height: 90rpx;
	display: flex;
	font-size: 30rpx;
	align-items: center;
	justify-content: space-around;
	background-color: white;

	view {
		height: 90rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.cur {
		color: #fb8615;
		border-bottom: 2px solid #fb8615;
	}
}

.mxinfo {
	width: 100%;
	height: 90rpx;
	display: flex;
	align-items: center;
	background-color: white;
	border-top: 1px solid #f6f6f6;

	.left {
		width: 280rpx;
		height: 90rpx;
		display: flex;
		justify-content: center;
		flex-direction: column;
		margin-left: 30rpx;

		.name {
			font-size: 30rpx;
		}

		.time {
			color: gray;
			font-size: 26rpx;
		}
	}

	.right {
		position: absolute;
		right: 30rpx;
		color: #fb8615;
		font-size: 32rpx;
		display: flex;
		align-items: center;
	}
}

.list {
	padding-bottom: 10rpx;
	margin: 20rpx;
	width: 710rpx;
	border-radius: 15rpx;
	background-color: white;
	.row2 {
		margin-left: 30rpx;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		width: 670rpx;
		display: flex;
		align-items: center;

		image {
			width: 195rpx;
			height: 195rpx;
		}

		.right {
			margin-left: 20rpx;
			width: 460rpx;

			.con {
				font-size: 28rpx;
				margin-bottom: 10rpx;
			}

			.time {
				font-size: 26rpx;
				color: gray;
			}

			.jifen {
				color: #fc726f;
				font-size: 30rpx;
			}
			.dhbtn {
				margin-left: 260rpx;
				margin-top: 10rpx;
				color: white;
				width: 180rpx;
				height: 60rpx;
				text-align: center;
				line-height: 60rpx;
				font-size: 30rpx;
				border-radius: 60rpx;
				background-color: #f98413;
			}
		}
	}
}
</style>

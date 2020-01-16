<!-- 我的 -->
<template>
	<view>
		<!-- 头部 -->
		<view class="head">
			<view @tap="tapdata">
				<image class="img" :src="avatar"></image>
				<text class="name">{{ nickname }}</text>
				<text class="right">〉</text>
			</view>
			<view class="head_cat">
				<view v-for="(value, index) in catArr" :key="index" @tap="tapcat(index)">
					<image :src="value.src"></image>
					<text :style="{ color: value.color }">{{ value.name }}</text>
				</view>
			</view>
		</view>

		<!-- 我的订单 -->
		<view class="order" @tap="tapdd">
			<view class="title">
				<text>我的订单</text>
				<text class="right">查看全部订单 〉</text>
			</view>
			<view class="foot">
				<view v-for="(value, index) in ordercat" :key="index">
					<image :src="value.src"></image>
					{{ value.name }}
				</view>
			</view>
		</view>

		<!-- 列表 -->
		<view class="list" v-for="(value, index) in listArr" :key="index" @tap="taplist(index)">
			<image :src="value.src"></image>
			<text>{{ value.name }}</text>
			<text class="right">〉</text>
		</view>
	</view>
</template>

<script>
var _self;
export default {
	data() {
		return {
			catArr: [
				{ name: '我的收藏', src: '../../static/icon_wdsc_wd.png', color: '#52bbd8' },
				{ name: '我的关注', src: '../../static/icon_wdgz_wd.png', color: '#9847d0' },
				{ name: '优惠券', src: '../../static/icon_yhj_wd.png', color: '#e5ba2f' },
				{ name: '我的足迹', src: '../../static/icon_wdzj_wd.png', color: '#b3b8fc' }
			],
			ordercat: [
				{ name: '待付款', src: '../../static/1.PNG' },
				{ name: '待发货', src: '../../static/2.PNG' },
				{ name: '待收货', src: '../../static/3.PNG' },
				{ name: '待评论', src: '../../static/4.PNG' },
				{ name: '退款/售后', src: '../../static/5.PNG' }
			],
			listArr: [
				{ name: '我的钱包', src: '../../static/icon_wdqb_wd.png' },
				{ name: '我的积分', src: '../../static/icon_wdjf_wd.png' },
				{ name: '分销中心', src: '../../static/icon_wdfx_wd.png' },
				{ name: '收货地址', src: '../../static/icon_shdz_wd.png' },
				{ name: '开店', src: '../../static/icon_kd_wd.png' },
				{ name: '客服', src: '../../static/icon_kf_wd.png' },
				{ name: '设置', src: '../../static/icon_sz_wd.png' }
			],
			nickname: '',
			avatar: ''
		};
	},
	onLoad() {
		_self = this;
	},
	onShow() {
		_self.Api.userInfo(
			{
				token: uni.getStorageSync('token')
			},
			res => {
				console.log(res);
				if (res.code == 1) {
					this.nickname = res.data[0].nickname;
					this.avatar = res.data[0].avatar;
				}
			}
		);
	},
	methods: {
		taplist(e) {
			if (e == 0) {
				uni.navigateTo({
					url: 'myWallet'
				});
			} else if (e == 1) {
				uni.navigateTo({
					url: 'myPoints'
				});
			} else if (e == 2) {
				uni.navigateTo({
					url: 'distributionCenter'
				});
			} else if (e == 3) {
				uni.navigateTo({
					url: 'myAddress'
				});
			} else if (e == 4) {
				uni.navigateTo({
					url: 'setUpShop'
				});
			} else if (e == 5) {
				uni.navigateTo({
					url: 'customerService'
				});
			} else {
				uni.navigateTo({
					url: 'set'
				});
			}
		},
		tapdd() {
			uni.navigateTo({
				url: 'myOrder'
			});
		},
		tapcat(e) {
			if (e == 0) {
				uni.navigateTo({
					url: 'myCollection'
				});
			} else if (e == 1) {
				uni.navigateTo({
					url: 'myConcern'
				});
			} else if (e == 2) {
				uni.navigateTo({
					url: 'coupon'
				});
			} else {
				uni.navigateTo({
					url: 'myTracks'
				});
			}
		},
		tapdata() {
			var info = {
				nickname: this.nickname,
				headphoto: this.avatar
			};
			uni.navigateTo({
				url: 'personalData?info=' + JSON.stringify(info)
			});
		}
	}
};
</script>

<style lang="scss">
.head {
	width: 100%;
	height: 415rpx;
	color: white;
	background-color: #fb8917;
	.img {
		width: 115rpx;
		height: 115rpx;
		margin-top: 100rpx;
		margin-left: 30rpx;
		margin-right: 30rpx;
	}
	.name {
		position: absolute;
		top: 130rpx;
	}

	.right {
		position: absolute;
		margin-top: 140rpx;
		float: right;
		right: 30rpx;
		font-size: 30rpx;
	}
	.head_cat {
		margin-top: 10rpx;
		margin-left: 30rpx;
		width: 690rpx;
		height: 130rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;
		border-radius: 20rpx;
		background-color: white;
		view {
			width: 110rpx;
			height: 80rpx;
			font-size: 26rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			image {
				width: 45rpx;
				height: 45rpx;
			}
		}
	}
}
.order {
	margin-top: -30rpx;
	margin-left: 30rpx;
	margin-bottom: 20rpx;
	width: 690rpx;
	height: 240rpx;
	border-radius: 20rpx;
	background-color: white;
	.title {
		width: 100%;
		height: 80rpx;
		display: flex;
		align-items: center;
		font-size: 30rpx;
		border-bottom: 1px solid #f6f6f6;
		text {
			margin-left: 20rpx;
		}
		.right {
			position: absolute;
			font-size: 28rpx;
			float: right;
			right: 30rpx;
			color: gray;
		}
	}
	.foot {
		width: 100%;
		height: 165rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;
		view {
			width: 120rpx;
			height: 80rpx;
			display: flex;
			color: gray;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			font-size: 26rpx;
			image {
				width: 45rpx;
				height: 45rpx;
				margin-bottom: 10rpx;
			}
		}
	}
}
.list {
	width: 100%;
	height: 80rpx;
	display: flex;
	align-items: center;
	background-color: white;
	border-bottom: 1px solid #f6f6f6;
	image {
		margin-left: 50rpx;
		width: 45rpx;
		height: 50rpx;
	}
	text {
		margin-left: 20rpx;
		font-size: 30rpx;
	}
	.right {
		position: absolute;
		float: right;
		right: 30rpx;
		color: gray;
	}
}
</style>

<!-- 个人资料 -->
<template>
	<view>
		<view class="info" @tap="tapHead">
			<text>头像</text>
			<image src="../../static/icon_tx_6-1-1_xgtx.png" v-if="img == ''"></image>
			<image :src="img" v-else></image>
			<text class="right">〉</text>
		</view>

		<view class="info" style="border-bottom: none;" @tap="tapName">
			<text>昵称</text>
			<text class="name">{{ nickname }}</text>
			<text class="right">〉</text>
		</view>
	</view>
</template>

<script>
var _self;
export default {
	data() {
		return {
			img: '',
			nickname: ''
		};
	},
	onLoad(option) {
		_self = this;
		var info = JSON.parse(option.info);
		_self.nickname = info.nickname;
		_self.img = info.headphoto;
		console.log(info);
		console.log(_self.img);
	},
	methods: {
		tapName() {
			uni.navigateTo({
				url: 'updataName'
			});
		},
		tapHead() {
			uni.chooseImage({
				count: 1,
				success: res => {
					console.log(res.tempFilePaths[0]);
					var img = res.tempFilePaths[0];
					_self.Api.userAvatarchange(
						{
							avatar: img,
							token: uni.getStorageSync('token')
						},
						res => {
							console.log(res);
							if (res.code == 1) {
								_self.img = img;
							}
						}
					);
					// console.log(_self.img);
				}
			});
		}
	}
};
</script>

<style lang="scss">
.info {
	width: 100%;
	height: 100rpx;
	display: flex;
	align-items: center;
	font-size: 30rpx;
	background-color: white;
	border-top: 1px solid #f6f6f6;
	image {
		position: absolute;
		float: right;
		right: 60rpx;
		width: 80rpx;
		height: 80rpx;
	}
	text {
		margin-left: 30rpx;
	}
	.name {
		position: absolute;
		float: right;
		right: 60rpx;
		color: gray;
	}
	.right {
		position: absolute;
		float: right;
		right: 20rpx;
		color: gray;
	}
}
</style>

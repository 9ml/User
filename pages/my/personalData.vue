<!-- 个人资料 -->
<template>
	<view>
		<view class="info" @tap="tapHead">
			<text>头像</text>
			<image src="../../static/icon_tx_6-1-1_xgtx.png" v-if="img == ''"></image>
			<image :src="imgurl" v-else></image>
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
			imgurl:'',
			nickname: '',
			upload:getApp().globalData.upload
		};
	},
	onLoad(option) {
		_self = this;
		var info = JSON.parse(option.info);
		_self.nickname = info.nickname;
		_self.img = info.headphoto;
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
					uni.uploadFile({
						url: this.upload + '/upload',
						filePath: img,
						name:'file',
						formData:{
							token:uni.getStorageSync('token')
						},
						success: (res) => {
							console.log(JSON.parse(res.data))
							var obj = JSON.parse(res.data)
							this.imgurl = this.upload + obj.data[0].url
							console.log(this.imgurl)
							this.Api.changeHead({
								avatar:this.imgurl,
								token:uni.getStorageSync('token')
							},res=>{
								console.log(JSON.parse(res))
								var msg = JSON.parse(res).msg
								uni.showToast({
									title: msg,
									icon:'none'
								})
							})
						}
					})
				}
			})
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
		border-radius: 50%;
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

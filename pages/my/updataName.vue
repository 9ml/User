<!-- 修改名称 -->
<template>
	<view>
		<view class="info">
			<text>昵称</text>
			<input placeholder="请输入修改的名称" v-model="name" />
		</view>
	</view>
</template>

<script>
var _self;
export default {
	data() {
		return {
			name: ''
		};
	},
	onLoad() {
		_self = this;
	},
	onNavigationBarButtonTap() {
		_self.Api.userNicknamechange(
			{
				nickname: this.name,
				token: uni.getStorageSync('token')
			},
			res => {
				console.log(res);
				if (res.code == 1) {
					uni.showToast({
						title: '修改成功',
						icon: 'none'
					});
					setTimeout(() => {
						uni.navigateBack({
							delta: 2
						});
					}, 1000);
				}
			}
		);
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
	text {
		margin-left: 30rpx;
	}
	input {
		width: 270rpx;
		margin-left: 360rpx;
		text-align: right;
	}
}
</style>

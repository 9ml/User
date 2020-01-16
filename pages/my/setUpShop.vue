<!-- 开店 -->
<template>
	<view>
		<view class="title"><text style="color: gray;">请详细填写一下资料</text></view>
		<view class="info">
			<text>店铺名称</text>
			<input placeholder="请填写您的店铺名称" v-model="shop_name" />
		</view>
		<view class="info">
			<text>店铺类别</text>
			<picker :value="index" @change="lbchange" :range="catArr">
				<text>{{ catArr[index] }} 〉</text>
			</picker>
		</view>
		<view class="info">
			<text>请选择地址</text>
			<view class="er-fonts">
				<view class="tab" :class="{ active: indexs == tabIndex }" @tap="toggleTab(item, index)" v-for="(item, index) in tabList" :key="index">{{ item.name }}</view>
				<w-picker
					mode="region"
					:defaultVal="['北京市', '市辖区', '东城区']"
					:areaCode="['11', '1101', '110101']"
					:hideArea="false"
					@confirm="onConfirm"
					ref="region"
				></w-picker>
			</view>
		</view>
		<view class="info">
			<text>详细地址</text>
			<input placeholder="请填写店铺详细地址" v-model="address" />
		</view>
		<view class="info">
			<text>姓名</text>
			<input placeholder="请填写您的姓名" v-model="name" />
		</view>
		<view class="info">
			<text>身份证号</text>
			<input type="number" maxlength="18" placeholder="请填写您的身份证号" v-model="id_member" />
		</view>
		<view class="info">
			<text>联系方式</text>
			<input type="number" maxlength="11" placeholder="请填写您的联系方式" v-model="tel" />
		</view>
		<view class="info">
			<text>店铺简介</text>
			<input placeholder="请填写您的店铺简介" v-model="description" />
		</view>
		<view class="img" @tap="chooseLogo">
			<text>店铺logo</text>
			<view>
				<image src="../../static/img_tjto_wykd.png" v-if="islogo == ''"></image>
				<image v-else :src="islogo"></image>
			</view>
			<text class="foot">请上传您的店铺logo图片</text>
		</view>
		<view class="img">
			<text>实名认证</text>
			<view>
				<image src="../../static/img_sfzzm_wykd.png" v-if="ispositive == ''" @tap="choosePositive"></image>
				<image v-else :src="ispositive"></image>
				<image src="../../static/img_sfzfm_wykd.png" v-if="isback == ''" @tap="chooseBack"></image>
				<image v-else :src="isback"></image>
			</view>
			<text class="foot">请上传您的手持身份证照片正反面的照片</text>
		</view>
		<view class="img" @tap="chooseLicense">
			<text>营业执照</text>
			<view>
				<image src="../../static/img_tjto_wykd.png" v-if="islicense == ''"></image>
				<image v-else :src="islicense"></image>
			</view>
			<text class="foot">请上传您的营业执照照片</text>
		</view>
		<view class="info" @tap="chooseCheck">
			<checkbox style="transform: scale(0.7);" color="#f88312" :checked="ischeck" />
			<text style="color: gray;">我已阅读并同意《商务协议》</text>
		</view>
		<view class="submit" @tap="submit">提交</view>
	</view>
</template>

<script>
var _self;
import wPicker from '@/components/w-picker/w-picker.vue';
export default {
	components: {
		wPicker
	},
	data() {
		return {
			mode: 'range',
			tabList: [
				{
					mode: 'region',
					name: '徐州市'
				}
			],
			tabIndex: 0,
			indexs: 0,
			index: 0,
			islogo: '',
			ispositive: '',
			isback: '',
			islicense: '',
			ischeck: false,
			catArr: ['农副产品', '蔬菜', '水果'],
			shop_name: '', //店铺名称
			type_id: '农副产品', //店铺类型ID
			coordinate: '117.08629478723311,36.68052242300537', //坐标
			address: '', //详细地址
			province: '', //省
			city: '', //市
			district: '', //区
			name: '', //真实姓名
			id_member: '', //身份证号
			tel: '', //手机号
			description: '', //描述
			logo: '', //logo
			card_positive_image: '', //手持正面
			card_back_image: '', //手持反面
			license_image: '', //营业执照
			token: uni.getStorageSync('token')
		};
	},
	onLoad() {
		_self = this;
		// _self.getLocations();
	},
	methods: {
		lbchange(e) {
			this.index = e.target.value;
			this.type_id = this.index;
		},
		chooseLogo() {
			uni.chooseImage({
				count: 1,
				sourceType: ['album'],
				name: 'file',
				success: res => {
					console.log(res.tempFilePaths[0]);
					this.islogo = res.tempFilePaths[0];
				}
			});
		},
		choosePositive() {
			uni.chooseImage({
				count: 1,
				sourceType: ['album', 'camera'],
				name: 'file',
				success: res => {
					console.log(res.tempFilePaths[0]);
					this.ispositive = res.tempFilePaths[0];
				}
			});
		},
		chooseBack() {
			uni.chooseImage({
				count: 1,
				sourceType: ['album', 'camera'],
				name: 'file',
				success: res => {
					console.log(res.tempFilePaths[0]);
					this.isback = res.tempFilePaths[0];
				}
			});
		},
		chooseLicense() {
			uni.chooseImage({
				count: 1,
				sourceType: ['album', 'camera'],
				name: 'file',
				success: res => {
					console.log(res.tempFilePaths[0]);
					this.islicense = res.tempFilePaths[0];
				}
			});
		},
		chooseCheck() {
			this.ischeck = !this.ischeck;
			console.log(this.ischeck);
		},
		getLocations() {
			var local;
			uni.getLocation({
				type: 'wgs84',
				success: function(res) {
					console.log('当前位置的经度：' + res.longitude);
					console.log('当前位置的纬度：' + res.latitude);
					local = res.longitude + ',' + res.latitude;
					_self.coordinate = local;
				}
			});
		},
		toggleTab(item, index) {
			this.tabIndex = index;
			this.mode = item.mode;
			this.defaultVal = item.value;
			this.$refs[item.mode].show();
		},
		onConfirm(val) {
			console.log(val);
			this.resultInfo = val;
			this.tabList[0].name = val.checkArr[0] + ',' + val.checkArr[1] + ',' + val.checkArr[2];
			this.province = val.checkArr[0];
			this.city = val.checkArr[1];
			this.district = val.checkArr[2];
		},
		submit() {
			if (!_self.ischeck) {
				uni.showToast({
					title: '请先同意商务协议',
					icon: 'none'
				});
				return;
			}
			_self.Api.shopappSave(
				{
					shop_name: _self.shop_name,
					type_id: _self.type_id,
					coordinate: _self.coordinate,
					address: _self.address,
					province: _self.province,
					city: _self.city,
					district: _self.district,
					name: _self.name,
					id_member: _self.id_member,
					tel: _self.tel,
					description: _self.description,
					logo: _self.islogo,
					card_positive_image: _self.ispositive,
					card_back_image: _self.isback,
					license_image: _self.islicense,
					token: _self.token
				},
				res => {
					console.log(res);
					if (res.code == 1) {
						uni.showToast({
							title: '提交成功,等待审核',
							icon: 'none'
						});
					}
				}
			);
		}
	}
};
</script>

<style lang="scss">
.title {
	width: 100%;
	height: 70rpx;
	display: flex;
	align-items: center;
	font-size: 30rpx;
	border-top: 1px solid #f6f6f6;
	text {
		margin-left: 30rpx;
	}
}
.info {
	width: 100%;
	height: 110rpx;
	display: flex;
	font-size: 30rpx;
	align-items: center;
	background-color: white;
	border-top: 1px solid #f6f6f6;
	text {
		margin-left: 30rpx;
	}
	checkbox {
		margin-left: 30rpx;
		margin-right: -30rpx;
	}
	picker {
		position: absolute;
		right: 20rpx;
		color: gray;
	}
	input {
		position: absolute;
		right: 30rpx;
		width: 560rpx;
		text-align: right;
		.er-fonts {
			width: 70%;
			display: flex;
			align-items: center;
			justify-content: flex-end;
		}
		.title {
			width: 100%;
			height: 70rpx;
			display: flex;
			align-items: center;
			font-size: 30rpx;
		}
	}
}
.img {
	padding-top: 20rpx;
	width: 100%;
	height: 380rpx;
	font-size: 30rpx;
	background-color: white;
	border-top: 1px solid #f6f6f6;
	text {
		margin-left: 30rpx;
	}
	.foot {
		color: gray;
		margin-left: 30rpx;
	}
	view {
		display: flex;
		align-items: center;
	}
	image {
		width: 300rpx;
		height: 200rpx;
		margin-left: 60rpx;
		margin-top: 40rpx;
		margin-bottom: 20rpx;
	}
}
.submit {
	margin-top: 50rpx;
	margin-left: 50rpx;
	margin-bottom: 50rpx;
	color: white;
	width: 640rpx;
	height: 90rpx;
	font-size: 34rpx;
	text-align: center;
	line-height: 90rpx;
	border-radius: 60rpx;
	background-color: #f88312;
}
</style>

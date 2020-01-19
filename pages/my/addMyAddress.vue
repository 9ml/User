<!-- 添加收货地址 -->
<template>
	<view>
		<view class="content">
			<view><text>联系人</text><input v-model="uName" placeholder="请输入姓名" /></view>
			<view><text>手机号</text><input v-model="uPhone" placeholder="请输入手机号码" /></view>
			<view class="disChose">
				<text>选择收货地址</text>
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
			<view><text>收货地址</text><input v-model="uAdress" placeholder="请输入收货地址" /></view>
			<view class="moren"><text>设为默认地址</text><switch @change="switchChange" color="#4CD964"/></view>
		</view>
	</view>
</template>

<script>
	var _self;
	import wPicker from '@/components/w-picker/w-picker.vue';
	export default{
		components: {
			wPicker
		},
		data(){
			return{
				uName : '',
				uPhone : '',
				uAdress : '',
				tabList: [
					{
						mode: 'region',
						name: '徐州市'
					}
				],
				tabIndex: 0,
				indexs: 0,
				// 省
				province : '',
				// 市
				city : '',
				// 区
				district : '',
				// 经度
				latitude : 36.68403547183936,
				// 纬度
				longitude : 117.08380660604718,
				// 是否默认
				isDefault : 2
			}
		},
		onNavigationBarButtonTap() {
			var coordinate = _self.longitude + ',' + _self.latitude
			if(!_self.uName){
				_self.myTools.myShow('请输入联系人姓名',true);
			}else if(!_self.uPhone){
				_self.myTools.myShow('请输入联系人手机号',true);
			}else if(!_self.uAdress){
				_self.myTools.myShow('请输入联系人详细地址',true);
			}else if(!_self.province || !_self.city || !_self.district){
				_self.myTools.myShow('请选择省市区',true);
			}else if(!(/^1[3456789]\d{9}$/.test(_self.uPhone))){
				_self.myTools.myShow('手机号格式不正确',true);
			}else{
				_self.Api.userAddressSave({
					token : uni.getStorageSync('token'),
					name : _self.uName,
					phone : _self.uPhone,
					address : _self.uAdress,
					province : _self.province,
					city : _self.city,
					district : _self.district,
					coordinate : coordinate,
					is_default : _self.isDefault
				},res=>{
					console.log(res);
					if(res.code === 1){
						_self.myTools.myShow('添加成功',true);
						setTimeout(()=>{
							_self.myTools.navBack();
						},1500);
					}else{
						_self.myTools.myShow(res.msg,true);
					}
				})
			}
		},
		onLoad() {
			_self = this;
		},
		methods:{
			// 经纬度
			// getUserLocation(){
			// 	uni.getLocation({
			// 	    type: 'wgs84',
			// 	    success:(res)=>{
			// 			console.log(res);
			// 	        _self.latitude = res.latitude;
			// 			_self.longitude = res.longitude;
			// 			_self.getGoodsInfo();
			// 	    }
			// 	});
			// },
			switchChange(e){
				console.log(e.detail.value);
				if(e.detail.value){
					_self.isDefault = 1
				}else{
					_self.isDefault = 2
				}
			},
			toggleTab(item, index) {
				_self.tabIndex = index;
				_self.mode = item.mode;
				_self.defaultVal = item.value;
				_self.$refs[item.mode].show();
			},
			onConfirm(val) {
				console.log(val);
				_self.resultInfo = val;
				_self.tabList[0].name = val.checkArr[0] + ',' + val.checkArr[1] + ',' + val.checkArr[2];
				_self.province = val.checkArr[0];
				_self.city = val.checkArr[1];
				_self.district = val.checkArr[2];
			}
		}
	}
</script>

<style lang="scss">
	.content {
		width: 100%;
		view {
			width: 100%;
			height: 110rpx;
			font-size: 32rpx;
			display: flex;
			align-items: center;
			background-color: white;
			text{
				width: 40%;
				margin-left: 30rpx;
			}
			input {
				position: absolute;
				float: right;
				right: 30rpx;
				width: 520rpx;
				text-align: right;
			}
			.er-fonts{
				width: 60%;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				.tab{
					width: 9000rpx;
				}
			}
			switch{
				margin-left: 400rpx;
				transform: scale(0.7);
			}
		}
		.moren{
			margin-top: 10rpx;
			border-top: none;
		}
	}
</style>

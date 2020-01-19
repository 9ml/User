<!-- 我的收货地址 -->
<template>
	<view>
		<view class="info" v-for="(value,index) in addressArr" :key='index'>
			<view class="left">
				<view class="name">{{value.name}}  {{value.phone}}</view>
				<view class="address">{{value.province}}{{value.city}}{{value.district}}{{value.address}}</view>
			</view>
			<view class="right" @tap="myTools.navTo('my/bjMyAddress?adId='+value.id)">编辑</view>
		</view>
	</view>
</template>

<script>
	var _self;
	export default{
		data(){
			return{
				addressArr:[]
			}
		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url:'addMyAddress'
			})
		},
		onLoad() {
			_self = this;
		},
		onShow() {
			_self.getMyAdress();
		},
		methods:{
			// 收货地址
			getMyAdress(){
				_self.Api.userAddress({
					token : uni.getStorageSync('token')
				},res=>{
					console.log(res);
					if(res.code === 1){
						_self.addressArr = res.data
					}else{
						_self.myTools.myShow(res.msg,true);
					}
				});
			},
			bianji(){
				uni.navigateTo({
					url:'bjMyAddress'
				})
			}
		}
	}
</script>

<style lang="scss">
	.info{
		margin-top: 15rpx;
		width: 100%;
		height: 165rpx;
		display: flex;
		background-color: white;
		.left{
			width: 600rpx;
			height: 165rpx;
			.name{
				margin: 25rpx;
				font-size: 32rpx;
			}
			.address{
				color: gray;
				margin: 20rpx;
				font-size: 32rpx;
			}
		}
		.right{
			margin-top: 25rpx;
			width: 180rpx;
			height: 105rpx;
			color: gray;
			text-align: center;
			line-height: 105rpx;
			font-size: 32rpx;
			border-left: 1px solid lightgray;
		}
	}
	image{
		width: 360rpx;
		height: 360rpx;
		margin-top: 330rpx;
		margin-left: 200rpx;
	}
</style>

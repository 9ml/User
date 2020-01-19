<template>
	<view>
		<headTypeA :title="title" :isWhite="isWhite" :isHaveSpace="isHaveSpace"></headTypeA>
		<view class="searchDesc">
			<view class="sdKinds">
				<view class="sk-item" :class="[current === k_idx ? 'sk-active' : '']" @tap="choseKinds(k_idx)" v-for="(k,k_idx) in kindsList" :key="k_idx">
					{{k.name}}
				</view>
			</view>
			<view class="sdMain" v-for="(s,s_idx) in resList" :key="s_idx" @click="myTools.navTo('index/buyingVegetables/goodsDetails?goodsId='+s.id)">
				<view class="sm-image">
					<image :src="s.imgShow" mode=""></image>
				</view>
				<view class="sm-desc">
					<view class="sd-name hiddenFonts">
						{{s.name}}
					</view>
					<view class="sd-price">
						￥{{s.price}}.00
					</view>
					<view class="sd-nums">
						月售：{{s.sales}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var _self;
	export default {
		data() {
			return {
				title : '商品列表',
				isWhite : true,
				isHaveSpace : true,
				kindsList : [
					{
						name : '距离'
					},
					{
						name : '价格'
					},
					{
						name : '销量'
					}
				],
				current : 0,
				resList : [],
				// 经度
				latitude : 36.68403547183936,
				// 纬度
				longitude : 117.08380660604718,
				// 类型
				typeId : 0,
				// 页数
				page : 0,
				// 条数
				limit : 5
			}
		},
		onLoad(optinos) {
			_self = this;
			_self.typeId = parseInt(optinos.type) + 1
			// _self.getUserLocation();
			_self.getGoodsInfo(_self.typeId,_self.current+1);
		},
		methods: {
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
			// 商品信息
			getGoodsInfo(type,distance){
				_self.Api.apiVegetablesType({
					type : type,
					order : distance,
					page : _self.page,
					limit : _self.limit,
					latitude : _self.latitude,
					longitude : _self.longitude,
					status : 1
				},res=>{
					console.log(res);
					if(res.code === 1){
						res.data.forEach((i)=>{
							if(i.images.split(',')[0].indexOf('http') === -1){
								i.imgShow = _self.Api.baseUrl + i.images.split(',')[0]
							}else{
								i.imgShow = i.images.split(',')[0]
							}
						})
						_self.resList = res.data;
					}else{
						_self.myTools.myShow(res.msg,true);
					}
				})
			},
			choseKinds(idx){
				_self.current = idx;
				_self.getGoodsInfo(_self.typeId,idx+1);
			}
		}
	}
</script>

<style lang="scss">
	@import 'common/css/goodsList.scss';
	page{
		background-color: #FDFDFD;
	}
	.sdKinds{
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #FFFFFF;
		border-top: 1rpx solid #F6F6F6;
		.sk-item{
			width: 33%;
			height: 80rpx;
			text-align: center;
			line-height: 80rpx;
			font-size: 28rpx;
		}
		.sk-active{
			color: #F26065;
		}
	}
</style>
<template>
	<view>
		<view class="htaMs">
			<view class="hm-space"></view>
			<view class="hm-all">
				<view class="ha-left"></view>
				<view class="ha-name">
					购物车
				</view>
				<view class="ha-right" @tap="updateCar(updateFonts)">
					{{updateFonts}}
				</view>
			</view>
		</view>
		<view class="headSpace"></view>
		<view class="itemMs" v-for="(s,s_idx) in dataList" :key="s_idx">
			<view class="imMs im-store">
				<view class="im-chose-icon" @click="choseStore(s)">
					<image v-if="s.storeChose" src="/static/icon/icon_xz_zylm.png" mode=""></image>
					<image v-else src="/static/icon/icon_wxz_zylm.png" mode=""></image>
				</view>
				<view class="is-store-icon">
					<image src="/static/icon/icon_dp_tjdd.png" mode=""></image>
				</view>
				<view class="is-store-name">
					{{s.shop_name}}
				</view>
				<view class="is-into-icon">
					<image src="/static/icon/btn_enter_spxq.png" mode=""></image>
				</view>
			</view>
			<view class="imMs im-goods" v-for="(g,g_idx) in s.data" :key="g_idx">
				<view class="im-chose-icon" @click="choseGoods(s,g)">
					<image v-if="g.goodsChose" src="/static/icon/icon_xz_zylm.png" mode=""></image>
					<image v-else src="/static/icon/icon_wxz_zylm.png" mode=""></image>
				</view>
				<view class="ig-goods-image">
					<image :src="g.images" mode=""></image>
				</view>
				<view class="ig-goods-info">
					<view class="igi-name hiddenFonts">
						{{g.name}}
					</view>
					<view class="igi-price">
						<view class="ip-price">
							￥{{g.price}}
						</view>
						<view class="ip-nums">
							<view class="onm-item" @click="changeCount(g,-1)">
								-
							</view>
							<view class="onm-item onm-nums">
								{{g.num}}
							</view>
							<view class="onm-item" @click="changeCount(g,1)">
								+
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bomMsSpace"></view>
		<view class="bomMs">
			<view class="bm-main">
				<view class="bm-left">
					<view class="bl-icon" @click="checkAll()">
						<image v-if="isCheckAll" src="/static/icon/icon_xz_zylm.png" mode=""></image>
						<image v-else src="/static/icon/icon_wxz_zylm.png" mode=""></image>
					</view>
					<view class="bl-name">
						全选
					</view>
				</view>
				<view class="bm-middle" v-if="handleFonts === '结算'">
					合计：<text class="bm-price">￥{{allPrice}}</text>
				</view>
				<view class="bm-right" @click="settlement(handleFonts)">
					{{handleFonts}}
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
				dataList: [
					{
						storeName: '王小二旗舰店',
						storeChose: false,
						checkedCount: 0,
						goodsList: [
							{
								image: '/static/images/img_14_sy.png',
								name: '新西兰皇家红苹果6个约135g/个90元包邮到家送货上门',
								price: 128,
								nums: 1,
								goodsChose: false
							},
							{
								image: '/static/images/img_14_sy.png',
								name: '新西兰皇家红苹果6个约135g/个90元包邮到家送货上门',
								price: 128,
								nums: 1,
								goodsChose: false
							}
						]
					},
					{
						storeName: '王小二旗舰店',
						storeChose: false,
						checkedCount: 0,
						goodsList: [
							{
								image: '/static/images/img_14_sy.png',
								name: '新西兰皇家红苹果6个约135g/个90元包邮到家送货上门',
								price: 128,
								nums: 1,
								goodsChose: false
							}
						]
					}
				],
				// 全选
				isCheckAll: false,
				// 店铺数量
				allShops: 0,
				// 总价格
				allPrice: 0,
				//被选中的产品数量
				allCount: 0,
				updateFonts : '编辑',
				handleFonts : '结算'
			}
		},
		onLoad() {
			_self = this;
		},
		onShow() {
			_self.getMyShoppingCar();
			_self.isCheckAll = false
		},
		watch: {
			dataList: {
				deep: true,
				handler(val, oldval) {
					_self._totalPrice()
					_self._totalCount()
				}
			}
		},
		methods: {
			// 获取购物车
			getMyShoppingCar(){
				_self.Api.shopingcart({
					token : uni.getStorageSync('token')
				},res=>{
					console.log(res);
					if(res.code === 1){
						res.data.forEach((i)=>{
							i.storeChose = false
							i.checkedCount = 0
							i.data.forEach((j)=>{
								if(!j.images){}else{
									if(j.images.split(',')[0].indexOf('http') === -1){
										j.images = _self.Api.baseUrl + j.images.split(',')[0]
									}else{
										j.images = j.images.split(',')[0]
									}
								}
								j.goodsChose = false
							})
						});
						_self.dataList = res.data
					}else{
						_self.myTools.myShow(res.msg,true);
					}
				})
			},
			// 结算
			settlement(fonts){
				if(fonts === '结算'){
					var getGoodsIdsAA = []
					var getGoodsIdsAB = []
					_self.dataList.forEach((i)=>{
						i.data.forEach((j)=>{
							if(j.goodsChose){
								getGoodsIdsAA.push(j.goods_id);
								getGoodsIdsAB.push({
									id : j.goods_id,
									num : j.num
								});
							}
						});
					});
					if(getGoodsIdsAA.length === 0){
						_self.myTools.myShow('请选中要购买的商品哦~');
					}else{
						uni.navigateTo({
							url:'/pages/index/buyingVegetables/confirmOrderShopCar?carIds='+JSON.stringify(getGoodsIdsAA)+'&nums='+JSON.stringify(getGoodsIdsAB)
						});
					}
				}else if(fonts === '删除'){
					uni.showModal({
					    title: '提示',
					    content: '确定删除吗？',
					    success:(res)=>{
					        if(res.confirm){
								var getGoodsIdsB = []
								_self.dataList.forEach((i)=>{
									i.data.forEach((j)=>{
										if(j.goodsChose){
											getGoodsIdsB.push(j.id);
										}
									});
								});
								if(getGoodsIdsB.length === 0){
									_self.myTools.myShow('请选中要删除的商品');
								}else{
									_self.Api.shopingcartDelete({
										ids : JSON.stringify(getGoodsIdsB),
										token : uni.getStorageSync('token')
									},res=>{
										console.log(res);
										if(res.code === 1){
											_self.myTools.myShow('删除成功',true);
											_self.getMyShoppingCar();
										}else{
											_self.myTools.myShow(res.msg,true);
										}
									});
								}
					        } else if (res.cancel) {
					            console.log('用户点击取消');
					        }
					    }
					});
				}
			},
			// 编辑
			updateCar(fonts){
				if(fonts === '编辑'){
					_self.updateFonts = '完成'
					_self.handleFonts = '删除'
				}else{
					_self.updateFonts = '编辑'
					_self.handleFonts = '结算'
				}
			},
			// 选择店铺
			choseStore(list) {
				!list.storeChose ? _self._shopTrue(list) : _self._shopFalse(list)
			},
			_shopTrue(list) {
				list.data.forEach((item) => {
					item.goodsChose === false ? _self._checkTrue(list, item) : ''
				});
			},
			_shopFalse(list) {
				list.data.forEach((item) => {
					item.goodsChose === true ? _self._checkFalse(list, item) : ''
				});
			},
			// 选择商品
			choseGoods(list, item) {
				!item.goodsChose ? _self._checkTrue(list, item) : _self._checkFalse(list, item)
			},
			_checkTrue(list, item) {
				item.goodsChose = true
				++ list.checkedCount === list.data.length ? list.storeChose = true : ''
				list.storeChose ? ++_self.allShops === _self.dataList.length ? _self.isCheckAll = true : _self.isCheckAll = false : ''
			},
			_checkFalse(list, item) {
				item.goodsChose = false
				-- list.checkedCount
				if (list.storeChose) {
					list.storeChose = false
					-- _self.allShops
				}
				_self.isCheckAll = false
			},
			// 全选
			checkAll() {
				_self.isCheckAll = !_self.isCheckAll
				_self.isCheckAll ?
					_self.dataList.forEach((list) => {
						_self._shopTrue(list)
					}) :
					_self.dataList.forEach((list) => {
						_self._shopFalse(list)
					})
			},
			// 购物车加减
			changeCount(item,type){
				if(type > 0){
					item.num ++
				}else{
					if(item.num === 1){}else{
						item.num --
					}
				}
			},
			// 总价格
			_totalPrice() {
				_self.allPrice = 0
				_self.dataList.forEach((list) => {
					list.data.forEach((item) => {
						if (item.goodsChose) {
							_self.allPrice += Number(item.price) * Number(item.num);
						}
					});
				});
			},
			// 数量
			_totalCount() {
				_self.allCount = 0
				_self.dataList.forEach((list) => {
					_self.allCount += list.checkedCount
				});
			}
		}
	}
</script>

<style lang="scss">
	.htaMs {
		width: 100%;
		height: 120rpx;
		background-color: #FFFFFF;
		position: fixed;
		top: 0;
		z-index: 99;

		.hm-space {
			height: 30rpx;
		}

		.hm-all {
			display: flex;
			align-items: center;

			.ha-left {
				width: 10%;
				height: 90rpx;
				text-align: center;

				image {
					width: 20rpx;
					height: 36rpx;
					margin-top: 30rpx;
				}
			}

			.ha-name {
				width: 80%;
				height: 90rpx;
				text-align: center;
				font-size: 30rpx;
				color: #333333;
				line-height: 100rpx;
			}

			.ha-right {
				width: 10%;
				height: 90rpx;
				line-height: 100rpx;
				font-size: 26rpx;
				color: #333333;
			}
		}
	}

	.headSpace {
		height: 120rpx;
		margin-bottom: 20rpx;
	}

	.itemMs {
		width: 94%;
		margin: 0 auto 20rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;
		padding-bottom: 20rpx;

		.imMs {
			margin: 0 auto;
			display: flex;
			align-items: center;

			.im-chose-icon {
				width: 8%;
				text-align: center;

				image {
					width: 30rpx;
					height: 30rpx;
				}
			}
		}

		.im-store {
			width: 94%;
			height: 90rpx;

			.is-store-icon {
				margin: 0 10rpx 0;

				image {
					width: 30rpx;
					height: 26rpx;
				}
			}

			.is-store-name {
				font-size: 26rpx;
				margin-right: 10rpx;
			}

			.is-into-icon {
				image {
					width: 14rpx;
					height: 24rpx;
				}
			}
		}

		.im-goods {
			width: 88%;
			height: 200rpx;

			.ig-goods-image {
				width: 28%;
				height: 150rpx;
				text-align: center;

				image {
					width: 150rpx;
					height: 150rpx;
					border-radius: 10rpx;
				}
			}

			.ig-goods-info {
				width: 62%;
				height: 150rpx;

				.igi-name {
					height: 80rpx;
					line-height: 40rpx;
					font-size: 26rpx;
				}

				.igi-price {
					height: 70rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;

					.ip-price {
						font-size: 26rpx;
						color: #FF403C;
					}

					.ip-nums {
						height: 30rpx;
						display: flex;
						align-items: center;

						.onm-item {
							width: 40rpx;
							height: 30rpx;
							border: 1rpx solid #BBBBBB;
							font-size: 26rpx;
							line-height: 30rpx;
							text-align: center;
							color: #666666;
						}

						.onm-nums {
							border: none;
							border-top: 1rpx solid #BBBBBB;
							border-bottom: 1rpx solid #BBBBBB;
						}
					}
				}
			}
		}
	}

	.bomMsSpace {
		height: 100rpx;
	}

	.bomMs {
		width: 100%;
		height: 100rpx;
		position: fixed;
		left: 0;
		bottom: 100rpx;
		// border: 1rpx solid #000000;
		background-color: #FFFFFF;
		z-index: 99;

		.bm-main {
			width: 92%;
			height: 100rpx;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.bm-left {
				width: 20%;
				height: 100rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.bl-icon {
					width: 40%;
					text-align: center;

					image {
						width: 30rpx;
						height: 30rpx;
					}
				}

				.bl-name {
					font-size: 26rpx;
				}
			}

			.bm-middle {
				width: 30%;
				font-size: 26rpx;

				.bm-price {
					color: #FF403C;
				}
			}

			.bm-right {
				width: 200rpx;
				height: 60rpx;
				background-color: #F77F0C;
				text-align: center;
				line-height: 60rpx;
				font-size: 26rpx;
				color: #FFFFFF;
				border-radius: 30rpx;
			}
		}
	}
</style>

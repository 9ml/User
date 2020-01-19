import {
	get,
	post,
	imgUpload 
} from './mAjax.js'

function loading() {
	uni.showLoading({
		title: '请稍后',
		mask: true
	})
}

function request() {
	this.baseUrl = 'http://47.111.109.110:80'
	buildRequest(this.baseUrl)
}

function buildRequest(baseUrl) {
	// User
	// 发送短信
	request.prototype.send = function(params, callBack) {
		post(baseUrl + '/send', params, callBack)
	}
	// 验证短信
	request.prototype.checkdx = function(params, callBack) {
		post(baseUrl + '/check', params, callBack)
	}
	// 注册
	request.prototype.register = function(params, callBack) {
		loading()
		post(baseUrl + '/register', params, callBack)
	}
	// 手机号密码登录
	request.prototype.login = function(params, callBack) {
		loading()
		post(baseUrl + '/login', params, callBack)
	}
	// 手机号验证码登录
	request.prototype.mobileLogin = function(params, callBack) {
		loading()
		post(baseUrl + '/mobile/login', params, callBack)
	}
	// 首页
	// 同城买菜搜索本店商品
	request.prototype.searchshopself = function(params, callBack) {
		post(baseUrl + '/api/vegetables/search', params, callBack)
	}
	// 店铺商品列表
	request.prototype.shopgoodslist = function(params, callBack) {
		post(baseUrl + '/api/vegetables/userIndex', params, callBack)
	}
	// 同城买菜
	// 四个模块查询商品
	request.prototype.apiVegetablesType = function(params, callBack) {
		post(baseUrl + '/api/Vegetables/type', params, callBack)
	}
	// 首页商品列表(同城)
	request.prototype.apiVegetablesRecommendVegetables = function(params, callBack) {
		post(baseUrl + '/api/vegetables/recommendVegetables', params, callBack)
	}
	// 商品详情(同城)
	request.prototype.apiVegetablesCommodityDetail = function(params, callBack) {
		post(baseUrl + '/api/vegetables/commodityDetail', params, callBack)
	}
	// 加入购物车(同城)
	request.prototype.shopingCartSave = function(params, callBack) {
		post(baseUrl + '/shopingcart/save', params, callBack)
	}
	// 我的购物车
	request.prototype.shopingcart = function(params, callBack) {
		post(baseUrl + '/shopingcart', params, callBack)
	}
	// 购物车删除
	request.prototype.shopingcartDelete = function(params, callBack) {
		post(baseUrl + '/shopingcart/delete', params, callBack)
	}
	// 默认收货地址
	request.prototype.userAddressDefault = function(params, callBack) {
		post(baseUrl + '/userAddress/default', params, callBack)
	}
	// 购物车提交订单展示
	request.prototype.shopingcartOrder = function(params, callBack) {
		post(baseUrl + '/shopingcart/order', params, callBack)
	}
	// 购物车提交订单
	request.prototype.vegetablesOrderSave = function(params, callBack) {
		post(baseUrl + '/vegetablesOrder/save', params, callBack)
	}
	// 店铺分类列表
	request.prototype.vegetablestype = function(params, callBack) {
		post(baseUrl + '/vegetablestype', params, callBack)
	}
	// 店铺商品列表
	request.prototype.apiVegetablesUserIndex = function(params, callBack) {
		post(baseUrl + '/api/vegetables/userIndex', params, callBack)
	}
	// 店铺优惠券列表
	request.prototype.apiUserCouponIndex = function(params, callBack) {
		post(baseUrl + '/api/user_coupon/index', params, callBack)
	}
	// 关注/取消关注店铺
	request.prototype.apiAttentionAttention = function(params, callBack) {
		post(baseUrl + '/api/attention/attention', params, callBack)
	}
	
	
	
	
	
	// 我的
	// 申请成为商家
	request.prototype.shopappSave = function(params, callBack) {
		post(baseUrl + '/shopapp/save', params, callBack)
	}
	// 用户信息
	request.prototype.userInfo = function(params, callBack) {
		post(baseUrl + '/user/info', params, callBack)
	}
	// 修改头像
	request.prototype.changeHead = function(params, callBack) {
		post(baseUrl + '/user/avatar/change', params, callBack)
	}
	// 修改昵称
	request.prototype.userNicknamechange = function(params, callBack) {
		post(baseUrl + '/user/nickname/change', params, callBack)
	}
	// 修改支付密码
	request.prototype.changePayPass = function(params, callBack) {
		post(baseUrl + '/user/payPassword/change', params, callBack)
	}
	// 问题反馈
	request.prototype.feedback = function(params, callBack) {
		post(baseUrl + '/api/feedback/save', params, callBack)
	}
	// 商品收藏列表
	request.prototype.commodityList = function(params, callBack) {
		post(baseUrl + '/api/collection/commodityList', params, callBack)
	}
	// 店铺关注列表
	request.prototype.shoplist = function(params, callBack) {
		post(baseUrl + '/api/attention/index', params, callBack)
	}
	// 主播关注列表
	request.prototype.zhubolist = function(params, callBack) {
		post(baseUrl + '/api/attention/index', params, callBack)
	}
	// 关注/取消
	request.prototype.follow = function(params, callBack) {
		post(baseUrl + '/api/attention/attention', params, callBack)
	}
	// 我的收货地址
	request.prototype.userAddress = function(params, callBack) {
		post(baseUrl + '/userAddress', params, callBack)
	}
	// 添加收货地址
	request.prototype.userAddressSave = function(params, callBack) {
		post(baseUrl + '/userAddress/save', params, callBack)
	}
	// 单个收货地址信息
	request.prototype.userAddressRead = function(params, callBack) {
		post(baseUrl + '/userAddress/read', params, callBack)
	}
	// 删除收货地址信息
	request.prototype.userAddressDelete = function(params, callBack) {
		post(baseUrl + '/userAddress/delete', params, callBack)
	}
	// 修改收货地址信息
	request.prototype.userAddressUpdate = function(params, callBack) {
		post(baseUrl + '/userAddress/update', params, callBack)
	}
	// 成为商家分类列表
	request.prototype.shopType = function(params, callBack) {
		post(baseUrl + '/shoptype', params, callBack)
	}
	
	
	
	
	
}

export default {
	request
}

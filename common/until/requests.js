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
	
	
	
	
	
}

export default {
	request
}

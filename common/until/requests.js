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
		loading()
		post(baseUrl + '/send', params, callBack)
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
	
	
	
	
	
	// 申请成为商家
	request.prototype.shopappSave = function(params, callBack) {
		loading()
		post(baseUrl + '/shopapp/save', params, callBack)
	}
	// 用户信息
	request.prototype.userInfo = function(params, callBack) {
		post(baseUrl + '/user/info', params, callBack)
	}
	// 修改头像
	request.prototype.userAvatarchange = function(params, callBack) {
		post(baseUrl + '/user/avatar/change', params, callBack)
	}
	// 修改昵称
	request.prototype.userNicknamechange = function(params, callBack) {
		post(baseUrl + '/user/nickname/change', params, callBack)
	}
}

export default {
	request
}

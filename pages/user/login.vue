<template>
	<view>
		<view class="topSpace"></view>
		<view class="navMs">
			<view class="nm-item" v-for="(n,n_idx) in navList" :key="n_idx" @tap="tapChangeNav(n_idx)">
				<view class="ni-ms" :class="[current === n_idx ? 'ni-active' : '']">
					{{n.nName}}
				</view>
			</view>
		</view>
		<!-- 密码登录 -->
		<view class="inpMs" v-if="current === 0">
			<view class="im-item">
				<view class="ii-left">
					手机号
				</view>
				<view class="ii-right">
					<input type="number" v-model="phone" placeholder="请输入手机号" />
				</view>
			</view>
			<view class="im-item">
				<view class="ii-left">
					密码
				</view>
				<view class="ii-right">
					<input type="password" v-model="pwd" placeholder="请输入密码" />
				</view>
			</view>
			<view class="im-item">
				<view class="item" @tap="myTools.navTo('user/phoneRegiste')">
					立即注册
				</view>
				<view class="item" @tap="myTools.navTo('user/retrievePwd')">
					忘记密码
				</view>
			</view>
		</view>
		<!-- 验证码登录 -->
		<view class="inpMs" v-if="current === 1">
			<view class="im-item">
				<view class="ii-left">
					手机号
				</view>
				<view class="ii-right">
					<input type="number" v-model="phone" placeholder="请输入手机号" />
				</view>
			</view>
			<view class="im-item">
				<view class="ii-left">
					验证码
				</view>
				<view class="ii-right">
					<input type="number" v-model="code" placeholder="请输入验证码" />
				</view>
				<view class="ii-getCode" v-if="isGet" @tap="getCode()">
					获取验证码
				</view>
				<view class="ii-getCode ii-gotCode" v-else>
					请{{seconds}}秒后再试
				</view>
			</view>
			<view class="im-item">
				<view class="item"></view>
			</view>
		</view>
		<view class="btnMs" hover-class="hoverStyleA" @click="login()">
			登录
		</view>
		<!-- 快捷登录 -->
		<view class="otherLogin">
			<view class="ol-lines"></view>
			<view class="ol-fonts">
				快捷登录
			</view>
			<view class="ol-lines"></view>
		</view>
		<view class="otherIcon">
			<view class="oi">
				<image src="/static/icon/icon_wx_mmdl.png" mode=""></image>
			</view>
			<view class="oi">
				<image src="/static/icon/icon_zfb_mmdl.png" mode=""></image>
			</view>
		</view>
		<view class="ol-tip" @tap="showUserAgreement()">
			登录即代表同意<text>用户协议</text>
		</view>
		<!-- 用户协议 -->
		<uni-popup ref="agreement" type="center" :custom="true">
			<view class="uaMs">
				<view class="um-title">
					用户协议
				</view>
				<view class="um-desc">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos porro temporibus libero quasi vitae perspiciatis molestiae at commodi totam neque necessitatibus aspernatur non hic quis ipsum. Quo dolore mollitia ipsa.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos porro temporibus libero quasi vitae perspiciatis molestiae at commodi totam neque necessitatibus aspernatur non hic quis ipsum. Quo dolore mollitia ipsa.
				</view>
				<view class="um-btns">
					<view class="ub-left" @tap="agreeUA()">
						不同意
					</view>
					<view class="ub-right" @tap="agreeUA()">
						同意
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	var _self;
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				navList : [
					{
						nid : 1,
						nName : "密码登录"
					},
					{
						nid : 2,
						nName : "验证码登录"
					}
				],
				current : 0,
				seconds : 60,
				isGet : true,
				phone : '',
				pwd : '',
				code : ''
			}
		},
		onLoad(options) {
			_self = this;
			_self.phone = options.phone
			_self.pwd = options.pwd
			if(uni.getStorageSync('token') != ''){
				uni.switchTab({
					url:'../index/home/index'
				})
			}
		},
		methods: {
			tapChangeNav(idx){
				_self.current = idx
			},
			// 获取验证码
			getCode(){
				if(!_self.phone){
					_self.myTools.myShow("手机号不能为空！",true);
					return false;
				}else if(!(/^1[3456789]\d{9}$/.test(_self.phone))){
					_self.myTools.myShow("手机号格式不正确！",true);
					return false;
				}
				_self.Api.send({
					mobile : _self.phone,
					event : "mobilelogin"
				},res=>{
					console.log(res);
					if(res.code === 1){
						uni.hideLoading();
						_self.myTools.myShow("验证码发送成功，请注意查收~",true);
						_self.isGet = false
						let timer = setInterval(()=>{
							_self.seconds --
							if(_self.seconds === 0){
								_self.isGet = true
								_self.seconds = 60
								clearInterval(timer);
							}
						},1000)
					}else{
						_self.myTools.myShow(res.msg,true);
					}
				});
			},
			// 登录
			login(){
				if(_self.current === 0){
					// 密码登录
					if(!_self.phone){
						_self.myTools.myShow("手机号不能为空！",true);
						return false;
					}else if(!(/^1[3456789]\d{9}$/.test(_self.phone))){
						_self.myTools.myShow("手机号格式不正确！",true);
						return false;
					}else if(!_self.pwd){
						_self.myTools.myShow("密码不能为空！",true);
						return false;
					}
					_self.Api.login({
						account : _self.phone,
						password : _self.pwd
					},res=>{
						console.log(res);
						if(res.code === 1){
							uni.hideLoading();
							_self.myTools.myShow("登录成功",true);
							uni.setStorageSync('uid',res.data[0].userinfo.user_id);
							uni.setStorageSync('token',res.data[0].userinfo.token);
							setTimeout(()=>{
								uni.switchTab({
									url:'/pages/index/home/index'
								});
							},1500)
						}else{
							_self.myTools.myShow(res.msg,true);
						}
					})
				}else if(_self.current === 1){
					// 验证码登录
					if(!_self.phone){
						_self.myTools.myShow("手机号不能为空！",true);
						return false;
					}else if(!(/^1[3456789]\d{9}$/.test(_self.phone))){
						_self.myTools.myShow("手机号格式不正确！",true);
						return false;
					}else if(!_self.code){
						_self.myTools.myShow("验证码不能为空！",true);
						return false;
					}
					_self.Api.mobileLogin({
						mobile : _self.phone,
						captcha : _self.code
					},res=>{
						console.log(res);
						if(res.code === 1){
							uni.hideLoading();
							_self.myTools.myShow("登录成功",true);
							uni.setStorageSync('uid',res.data[0].userinfo.user_id);
							uni.setStorageSync('token',res.data[0].userinfo.token);
							setTimeout(()=>{
								uni.switchTab({
									url:'/pages/index/home/index'
								});
							},1500)
						}else{
							_self.myTools.myShow(res.msg,true);
						}
					})
				}
			},
			showUserAgreement(){
				_self.$refs.agreement.open();
			},
			agreeUA(){
				_self.$refs.agreement.close();
			}
		}
	}
</script>

<style lang="scss">
	@import 'common/css/user.scss';
	.topSpace{
		height: 240rpx;
	}
	.navMs{
		width: 80%;
		display: flex;
		align-items: center;
		.nm-item{
			width: 50%;
			display: flex;
			.ni-ms{
				margin: 0 auto;
				height: 70rpx;
				text-align: center;
				font-size: 30rpx;
				line-height: 70rpx;
				font-weight: bold;
				color: #777777;
				border-bottom: 6rpx solid #FFFFFF;
			}
			.ni-active{
				color: #F77F0E;
				border-bottom: 6rpx solid #F77F0E;
			}
		}
	}
	.inpMs{
		.im-item{
			&:nth-child(3){
				border-bottom: none;
				margin-top: 0;
			}
		}
	}
</style>

<template>
	<view>
		<headTypeA :title="title" :isWhite="isWhite" :isHaveSpace="isHaveSpace"></headTypeA>
		<view class="bpMs">
			<view class="inpMs">
				<view class="im-item">
					<view class="ii-left">
						手机号
					</view>
					<view class="ii-right">
						<input type="number" v-model="phone" maxlength="11" placeholder="请输入手机号" />
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
					<view class="ii-left">
						密码
					</view>
					<view class="ii-right">
						<input type="password" v-model="pwd" placeholder="请输入密码" />
					</view>
				</view>
			</view>
		</view>
		<view class="btnMs" hover-class="hoverStyleA" @tap="register()">
			立即注册
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
				title: '手机快速注册',
				isWhite : false,
				isHaveSpace : true,
				seconds : 60,
				isGet : true,
				phone : "",
				code : "",
				pwd : ""
			}
		},
		onLoad() {
			_self = this;
		},
		methods: {
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
					event : ""
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
			// 注册
			register(){
				if(!_self.phone){
					_self.myTools.myShow("手机号不能为空！",true);
					return false;
				}else if(!(/^1[3456789]\d{9}$/.test(_self.phone))){
					_self.myTools.myShow("手机号格式不正确！",true);
					return false;
				}else if(!_self.code){
					_self.myTools.myShow("验证码不能为空！",true);
					return false;
				}else if(!_self.pwd){
					_self.myTools.myShow("密码不能为空！",true);
					return false;
				}
				_self.Api.register({
					mobile : _self.phone,
					password : _self.pwd,
					code : _self.code
				},res=>{
					console.log(res);
					if(res.code === 1){
						uni.hideLoading();
						_self.myTools.myShow("注册成功",true);
						setTimeout(()=>{
							uni.navigateTo({
								url:'/pages/user/login?phone='+_self.phone+"&pwd="+_self.pwd
							});
						},1500);
					}else{
						_self.myTools.myShow(res.msg,true);
					}
				})
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
	.bpMs{
		margin-top: 90rpx;
	}
</style>
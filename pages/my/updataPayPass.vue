<!-- 修改支付密码-->
<template>
	<view>
		<view v-if="ok">
			<view class="form">
				<text>手机号</text>
				<input type="number" maxlength="11" placeholder="请输入手机号" v-model="phone"/>
			</view>
			
			<view class="form">
				<text>验证码</text>
				<input type="number" placeholder="请输入验证码" v-model="code"/>
				<text class="send" v-if="countDown==0" @click="enter">获取验证码</text>
				<text class="send" v-else>重新获取{{countDown}}</text>
			</view>
			
			<view class="submit" @tap="next">下一步</view>
		</view>
		
		<!-- 输入新的支付密码 -->
		<view v-if="ok1">
			<view class="head">输入新的支付密码</view>
			<validcode :maxlength="6" :isPwd="true" @finish="finish1"></validcode>
		</view>
		
		<!-- 再次输入密码 -->
		<view v-if="ok2">
			<view class="head">请再次确认支付密码</view>
			<validcode :maxlength="6" :isPwd="true" @finish="finish2"></validcode>
			<view class="submit" @tap="submit">确定</view>
		</view>

	</view>
</template>

<script>
	export default{
		data(){
			return{
				ok:true,
				ok1:false,
				ok2:false,
				countDown: 0,
				phone:'',
				code:'',
				pass1:'',
				pass2:''
			}
		},
		methods:{
			submit(){
				if(this.pass1 != this.pass2){
						uni.showToast({
							title:'两次输入密码不一致',
							icon:'none'
						})
				}else{
					this.Api.changePayPass({
						pay_password:this.pass2,
						mobile:this.phone,
						captcha:this.code,
						token:uni.getStorageSync('token')
					},res=>{
						console.log(res)
						if(res.code == 1){
							uni.showToast({
								title:res.msg,
								icon:'none'
							})
						}else{
							uni.showToast({
								title:res.msg,
								icon:'none'
							})
						}
					})
				}
			},
			finish1(e) {
				console.log(e);
				this.pass1 = e
				this.ok1 = false
				this.ok2 = true
			},
			finish2(e) {
				console.log(e);
				this.pass2 = e
			},
			next(){
				this.Api.checkdx({
					mobile:this.phone,
					captcha:this.code,
					event:'change_pay_password'
				},res=>{
					console.log(res)
					if(res.code == 1){
						this.ok = false
						this.ok1 = true
					}else{
						uni.showToast({
							title:a.msg,
							icon:'none'
						})
					}
				})
			},
			enter(){
				if(!(/^1[3456789]\d{9}$/.test(this.phone))){
					uni.showToast({
						title: "手机号格式错误！",
						icon: "none"
					})
				}else{
					this.Api.send({
						mobile:this.phone,
						event:'change_pay_password'
					},res=>{
						console.log(JSON.parse(res))
						var a = JSON.parse(res)
						if(a.code == 1){
							uni.showToast({
								title: a.msg,
								icon:'none'
							})
							this.countDown = 60;
							let timer = setInterval(() => {
								this.countDown--;
								if (this.countDown == 0) {
									clearInterval(timer)
								}
							}, 1000)
						}else{
							uni.showToast({
								title: a.msg,
								icon:'none'
							})
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.form{
		width: 100%;
		height: 100rpx;
		font-size: 30rpx;
		display: flex;
		align-items: center;
		background-color: white;
		border-top: 1px solid #f6f6f6;
		text{
			margin-left: 30rpx;
		}
		input{
			margin-left: 30rpx;
		}
		.send {
			position: absolute;
			width: 200rpx;
			color: #fc8a18;
			float: right;
			right: 0rpx;
		}
	}
	.submit{
		margin-top: 160rpx;
		margin-left: 50rpx;
		color: white;
		width: 640rpx;
		height: 90rpx;
		font-size: 34rpx;
		text-align: center;
		line-height: 90rpx;
		border-radius: 60rpx;
		background-color: #f88312;
	}
	.head{
		margin-bottom: 30rpx;
		width: 100%;
		height: 100rpx;
		font-size: 30rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: white;
		border-top: 1px solid #f6f6f6;
	}
</style>

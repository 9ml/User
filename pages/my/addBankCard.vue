<!-- 添加银行卡 -->
<template>
	<view>
		<view class="form">
			<text>持卡人姓名</text>
			<input placeholder="请输入持卡人姓名"/>
		</view>
		
		<view class="form">
			<text>开户行</text>
			<input placeholder="请输入开户行"/>
		</view>
		
		<view class="form">
			<text>卡号</text>
			<input type="number" placeholder="请输入卡号"/>
		</view>
		
		<view class="form">
			<text>绑定手机号</text>
			<input type="number" maxlength="11" placeholder="请输入手机号" v-model="phone"/>
		</view>
		
		<view class="form">
			<text>验证码</text>
			<input type="number"  placeholder="请输入验证码"/>
			<text class="send" v-if="countDown==0" @tap="enter">获取验证码</text>
			<text class="send" v-else>重新获取{{countDown}}</text>
		</view>
		
		<view class="submit">提交</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				countDown: 0,
				phone:''
			}
		},
		methods:{
			enter(){
				if(!(/^1[3456789]\d{9}$/.test(this.phone))){
					uni.showToast({
						title: "手机号格式错误！",
						icon: "none"
					})
				}else{
					this.countDown = 60;
					let timer = setInterval(() => {
						this.countDown--;
						if (this.countDown == 0) {
							clearInterval(timer)
						}
					}, 1000)
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
		border-bottom: 1px solid #f6f6f6;
		text{
			margin-left: 30rpx;
		}
		input{
			position: absolute;
			float: right;
			right: 180rpx;
		}
		.send {
			position: absolute;
			float: right;
			right: 30rpx;
			width: 200rpx;
			color: #fb8917;
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
</style>

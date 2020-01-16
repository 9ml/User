<template>
	<view>
		<headTypeA :title="title" :isWhite="isWhite"></headTypeA>
		<view class="bpMs">
			<view class="inpMs">
				<view class="im-item">
					<view class="ii-left">
						手机号
					</view>
					<view class="ii-right">
						<input type="number" placeholder="请输入手机号" />
					</view>
				</view>
				<view class="im-item">
					<view class="ii-left">
						验证码
					</view>
					<view class="ii-right">
						<input type="number" placeholder="请输入验证码" />
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
						新密码
					</view>
					<view class="ii-right">
						<input type="text" placeholder="请输入新密码" />
					</view>
				</view>
				<view class="im-item">
					<view class="ii-left">
						确认密码
					</view>
					<view class="ii-right">
						<input type="text" placeholder="请再次输入密码" />
					</view>
				</view>
				<view class="im-tips">
					密码由数字、字符组成(不能是纯数字)
				</view>
			</view>
		</view>
		<view class="btnMs">
			完成
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '找回密码',
				isWhite : false,
				seconds : 60,
				isGet : true
			}
		},
		onLoad() {
			
		},
		methods: {
			getCode(){
				this.isGet = false
				let timer = setInterval(()=>{
					this.seconds --
					if(this.seconds === 0){
						this.isGet = true
						clearInterval(timer);
					}
				},1000)
			}
		}
	}
</script>

<style lang="scss">
	@import 'common/css/user.scss';
	.bpMs{
		margin-top: 90rpx;
		.im-tips{
			width: 550rpx;
			height: 50rpx;
			line-height: 50rpx;
			margin: 0 auto;
			font-size: 24rpx;
			color: #666666;
		}
	}
</style>

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
			</view>
		</view>
		<view class="btnMs">
			确认绑定
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '绑定手机',
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
						this.seconds = 60
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
	}
</style>

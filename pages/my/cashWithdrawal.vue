<!-- 余额提现 -->
<template>
	<view>
		<view class="info">
			<view class="xuan"></view>
			<text>到账银行卡</text>
			<picker class="right" :value="index"  @change="xzchange" :range="cardArr">
				{{cardArr[index]}} 〉
			</picker>
		</view>
		<view class="info">
			<view class="xuan"></view>
			<text>支付宝</text>
			<input placeholder="请输入提现支付宝账户"/>
		</view>
		<view class="info">
			<view class="xuan"></view>
			<text>微信</text>
			<input placeholder="请输入提现微信号"/>
		</view>
		
		<!-- 提现金额 -->
		<view class="txnum">
			<view class="title"><text>提现金额</text></view>
			<view class="input">￥<input value="23"/></view>
			<view class="foot"><text>当前余额100元</text> <text class="all">全部提现</text></view>
		</view>
		
		<view class="tixian" @tap="tixian">提现</view>
		
		<!-- 输入密码 -->
		<view class="zhezhao" v-if="ok1">
			<view class="con2">
				<view class="title">请输入支付密码<text @tap="guanbi">X</text></view>
				<view>零钱提现</view>
				<view class="num">￥200.00</view>
				<validcode :maxlength="6" :isPwd="true" @finish="finish" v-model="pass"></validcode>
			</view>
		</view>
		
		<!-- 密码错误 -->
		<view class="zhezhao" v-if="ok3"> 
			<view class="con4">
				<view class="title">密码错误，请重试</view>
				<view class="con4_v">
					<view @tap="chongshi">重试</view>
					<view style="color: #f88312;border-right: none" @tap="wjPass">忘记密码</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index:0,
				current:'',
				ok1: false,
				ok3:false,
				pass: '',
				cardArr:['中国建设银行','农业储蓄银行']
			}
		},

		methods: {
			xzchange(e){
				this.index = e.target.value
			},
			mingxi(){
				uni.navigateTo({
					url:'billDetails'
				})
			},
			wjPass(){
				uni.navigateTo({
					url:'forgetPassword'
				})
			},
			chongshi(){
				this.ok3 = false
				this.pass = ''
			},
			xuan(e){
				this.current = e
			},
			guanbi() {
				this.ok1 = false
			},
			finish(e) {
				console.log(e);
				this.pass = e
				this.ok3 = true
			},
			txbtn() {
				this.ok1 = true
			},
			tixian() {
				this.ok1 = true
			}
		}
	}
</script>

<style lang="scss">
	.info{
		width: 100%;
		height: 100rpx;
		display: flex;
		font-size: 30rpx;
		align-items: center;
		background-color: white;
		border-top: 1px solid #f6f6f6;
		.xuan{
			margin-left: 30rpx;
			margin-right: 10rpx;
			width: 33rpx;
			height: 33rpx;
			background-image: url(../../static/icon_wxz_zylm.png);
			background-size: 100% 100%;
		}
		.cur{
			background-image: url(../../static/icon_xz_zylm.png);
		}
		.right{
			position: absolute;
			right: 20rpx;
			color: gray;
		}
		input{
			position: absolute;
			right: 20rpx;
			text-align: right;
			font-size: 30rpx;
		}
	}
	.txnum{
		margin-top: 20rpx;
		width: 100%;
		height: 260rpx;
		background-color: white;
		.title{
			width: 100%;
			height: 70rpx;
			display: flex;
			font-size: 30rpx;
			align-items: center;
			text{
				margin-left: 30rpx;
			}
		}
		.input{
			font-size: 60rpx;
			margin-left: 20rpx;
			height: 115rpx;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #f6f6f6;
			input{
				font-size: 60rpx;
			}
		}
		.foot{
			width: 100%;
			height: 70rpx;
			display: flex;
			font-size: 30rpx;
			align-items: center;
			text{
				margin-left: 30rpx;
			}
			.all{
				color: #fc8c1c;
			}
		}
	}
	.tixian{
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
	.zhezhao {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 1000;
		background-color: rgba(0, 0, 0, 0.5);
	
		.con1 {
			margin-top: 180rpx;
			margin-left: 75rpx;
			width: 600rpx;
			height: 560rpx;
			border-radius: 15rpx;
			background-color: white;
	
			.row1 {
				width: 100%;
				height: 160rpx;
				font-size: 30rpx;
				display: flex;
				align-items: center;
				border-bottom: 1px solid #f6f6f6;
	
				text {
					margin-left: 30rpx;
				}
	
				.right {
					margin-left: 200rpx;
					color: gray;
				}
			}
	
			.row2 {
				width: 100%;
				height: 200rpx;
	
				view {
					margin-top: 30rpx;
					margin-left: 30rpx;
					font-size: 26rpx;
				}
	
				.num {
					display: flex;
					align-items: center;
					font-size: 53rpx;
					border-bottom: 1px solid #f6f6f6;
	
					input {
						height: 50rpx;
						font-size: 53rpx;
					}
				}
	
				.all {
					font-size: 26rpx;
					color: #fb8b1b;
					margin-left: 30rpx;
				}
			}
	
			.row3 {
				margin-top: 70rpx;
				margin-left: 60rpx;
				color: white;
				width: 480rpx;
				height: 80rpx;
				font-size: 32rpx;
				text-align: center;
				line-height: 80rpx;
				border-radius: 60rpx;
				background-color: #f88312;
			}
		}
	
		.con2 {
			margin-top: 180rpx;
			margin-left: 75rpx;
			width: 600rpx;
			height: 430rpx;
			font-size: 30rpx;
			display: flex;
			align-items: center;
			flex-direction: column;
			border-radius: 15rpx;
			background-color: white;
		
			.title {
				width: 100%;
				margin-top: 20rpx;
				margin-bottom: 30rpx;
				text-align: center;
				border-bottom: 1px solid #f6f6f6;
		
				text {
					position: absolute;
					float: right;
					right: 100rpx;
				}
			}
		
			.num {
				margin-top: 30rpx;
				margin-bottom: 100rpx;
				font-weight: bold;
				font-size: 40rpx;
			}
		}
		.con4{
			margin-top: 380rpx;
			margin-left: 115rpx;
			width: 525rpx;
			height: 240rpx;
			border-radius: 15rpx;
			font-size: 30rpx;
			background-color: white;
			.title{
				width: 100%;
				height: 150rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				border-bottom: 1px solid #f6f6f6;
			}
			.con4_v{
				width: 100%;
				height: 90rpx;
				display: flex;
				view{
					width: 50%;
					height: 90rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					border-right: 1px solid #f6f6f6;
				}
			}
		}
	}
</style>

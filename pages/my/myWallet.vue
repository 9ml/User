<!-- 我的钱包 -->
<template>
	<view class="content">
		<image src="../../static/icon_wdye_wdqb.png"></image>
		<view class="info">
			<view class="title">我的余额</view>
			<view class="money">￥300.00</view>
			<view class="mingxi" @tap="mingxi">账单明细〉</view>
		</view>
		<view class="tixian" @tap="tixian">提现</view>

		<!-- 提现 -->
		<view class="zhezhao" v-if="ok">
			<view class="con1">
				<view class="row1" @tap="fangshi">
					<text>到账银行卡</text>
					<text class="right">中国建设银行〉</text>
				</view>
				<view class="row2">
					<view>提现金额</view>
					<view class="num">
						￥<input type="number" />
					</view>
					<view>当前余额100元 <text class="all">全部提现</text></view>
				</view>
				<view class="row3" @tap="txbtn">提现</view>
			</view>
		</view>

		<!-- 输入密码 -->
		<view class="zhezhao" v-if="ok1">
			<view class="con2">
				<view class="title">请输入支付密码<text @tap="guanbi">X</text></view>
				<view>零钱提现</view>
				<view class="num">￥200.00</view>
				<validcode :maxlength="6" :isPwd="true" @finish="finish" v-model="pass"></validcode>
			</view>
		</view>

		<!-- 选择提现方式 -->
		<view class="zhezhao" v-if="ok2">
			<view class="con3">
				<view class="title">选择提现方式</view>
				<view class="con3_v"  v-for="(value,index) in fsArr" :key='index' @tap="xuan(index)">
					{{value.name}}
					<view class="xuan" :class="current==index?'cur':''"></view>
				</view>
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
				current:'',
				ok: false,
				ok1: false,
				ok2: false,
				ok3:false,
				pass: '',
				fsArr: [{
						name: '中国建设银行储蓄卡(1254)'
					},
					{
						name: '中国银行储蓄卡(1274)'
					},
					{
						name: '余额(剩余￥10.00)'
					}
				]
			}
		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url:'bankCard'
			})
		},
		methods: {
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
			fangshi() {
				this.ok2 = true
				this.ok = false
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
				this.ok = false
				this.ok1 = true
			},
			tixian() {
				uni.navigateTo({
					url:'cashWithdrawal'
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		align-items: center;
		flex-direction: column;

		image {
			margin-top: 160rpx;
			width: 120rpx;
			height: 120rpx;
		}

		.info {
			margin-top: 70rpx;
			display: flex;
			align-items: center;
			flex-direction: column;
			letter-spacing: 5rpx;

			.title {
				font-size: 35rpx;
			}

			.money {
				font-size: 45rpx;
				font-weight: 500;
			}

			.mingxi {
				font-size: 32rpx;
				color: gray;
			}
		}

		.tixian {
			margin-top: 160rpx;
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
			position: absolute;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 100;
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

			.con3 {
				margin-top: 180rpx;
				margin-left: 75rpx;
				width: 600rpx;
				height: 560rpx;
				font-size: 30rpx;
				display: flex;
				align-items: center;
				flex-direction: column;
				border-radius: 15rpx;
				background-color: white;

				.title {
					width: 100%;
					height: 110rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					border-bottom: 1px solid #f6f6f6;
				}

				.con3_v {
					width: 90%;
					margin: 40rpx;
					display: flex;
					align-items: center;
					
					.xuan {
						position: absolute;
						float: right;
						right: 100rpx;
						width: 30rpx;
						height: 30rpx;
						background-image: url(../../static/icon_wxz_zylm.png);
						background-size: 100% 100%;
					}
					.cur{
						position: absolute;
						float: right;
						right: 100rpx;
						width: 30rpx;
						height: 30rpx;
						background-image: url(../../static/icon_xz_zylm.png);
						background-size: 100% 100%;
					}
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
	}
</style>

<!-- 意见反馈 -->
<template>
	<view>
		<view class="form">
			<text>标题</text>
			<input placeholder="请输入标题" v-model="title"/>
		</view>
		
		<view class="form">
			<text>联系方式</text>
			<input type="number" maxlength="11" placeholder="请输入联系方式" v-model="phone"/>
		</view>
		
		<view class="fankui">
			<text>反馈内容</text>
			<textarea placeholder="请输入反馈内容" v-model="content"></textarea>
		</view>
		
		<view class="submit" @tap="submit">确认反馈</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				title:'',
				phone:'',
				content:''
			}
		},
		methods:{
			submit(){
				if(this.title == '' || this.phone == '' || this.content == ''){
					uni.showToast({
						title:'请输入完整信息',
						icon:'none'
					})
				}else{
					this.Api.feedback({
						token:uni.getStorageSync('token'),
						title:this.title,
						contact:this.phone,
						content:this.content
					},res=>{
						console.log(res)
						if(res.code == 1){
							uni.showToast({
								title: res.msg,
								icon:'none'
							})
						}else{
							uni.showToast({
								title: res.msg,
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
		height: 90rpx;
		display: flex;
		align-items: center;
		font-size: 30rpx;
		background-color: white;
		border-top: 1px solid #f6f6f6;
		text {
			margin-left: 30rpx;
		}
		
		input {
			position: absolute;
			float: right;
			right: 30rpx;
			text-align: right;
		}
	}
	.fankui{
		padding-top: 20rpx;
		width: 100%;
		height: 375rpx;
		font-size: 30rpx;
		background-color: white;
		border-top: 1px solid #f6f6f6;
		text{
			margin-left: 30rpx;
		}
		textarea{
			margin-top: 20rpx;
			margin-left: 20rpx;
			padding: 20rpx;
			width: 670rpx;
			height: 230rpx;
			border-radius: 15rpx;
			border: 1px solid gray;
		}
	}
	.submit{
		margin-top: 160rpx;
		margin-left: 100rpx;
		color: white;
		width: 560rpx;
		height: 70rpx;
		font-size: 30rpx;
		text-align: center;
		line-height: 70rpx;
		border-radius: 60rpx;
		background-color: #f88312;
	}
</style>

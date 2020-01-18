<!-- 我关注的主播 -->
<template>
	<view>
		<view class="info" v-for="(value,index) in zhuboArr" :key='index'>
			<image :src="value.avatar"></image>
			<text>{{value.nickname}}</text>
			<view @tap="cancel(value.anchor_id)">取消关注</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				zhuboArr:[]
			}
		},
		onLoad() {
			this.zhubolist()
		},
		methods:{
			cancel(id){
				this.Api.follow({
					anchor_id:id,
					token:uni.getStorageSync('token')
				},res=>{
					console.log(res)
				})
			},
			zhubolist(){
				this.Api.zhubolist({
					token:uni.getStorageSync('token'),
					type:1
				},res=>{
					console.log(res)
					if(res.data.length == 0){
						uni.showToast({
							title:'当前没有关注的主播',
							icon:'none'
						})
					}else{
						this.zhuboArr = res.data
						console.log(this.zhuboArr)
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.info{
		width: 100%;
		height: 125rpx;
		display: flex;
		align-items: center;
		background-color: white;
		border-top: 1px solid #f6f6f6;
		image{
			width: 80rpx;
			height: 80rpx;
			margin-left: 30rpx;
		}
		text{
			font-size: 30rpx;
			margin-left: 30rpx;
		}
		view{
			position: absolute;
			float: right;
			right: 30rpx;
			width: 140rpx;
			height: 55rpx;
			color: white;
			font-size: 28rpx;
			text-align: center;
			line-height: 55rpx;
			border-radius: 15rpx;
			background-color: #7d7d7d;
		}
	}
</style>
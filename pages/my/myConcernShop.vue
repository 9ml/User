<!-- 我关注的店铺 -->
<template>
	<view>
		<view class="info" v-for="(value,index) in shopArr" :key='index'>
			<image :src="value.image"></image>
			<text>{{value.name}}</text>
			<view @tap="cancel(value.shop_id)">取消关注</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				shopArr:[]
			}
		},
		onLoad() {
			this.shoplist()
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
			shoplist(){
				this.Api.shoplist({
					token:uni.getStorageSync('token'),
					type:1
				},res=>{
					console.log(res)
					if(res.data.length == 0){
						uni.showToast({
							title:'当前没有关注的店铺',
							icon:'none'
						})
					}else{
						this.shopArr = res.data
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

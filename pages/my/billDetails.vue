<!-- 账单明细 -->
<template>
	<view>
		<view class="list" v-for="(value,index) in mxArr" :key='index'>
			<view>
				<text>{{value.name}}</text>
				<text :class="value.state=='成功'?'state':'state1'">{{value.state}}</text>
			</view>
			<view>
				<text class="time">{{value.time}}</text>
				<text class="price">+{{value.price}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				mxArr:[
					{name:'充值入账',time:'2019.09.03 10:30',state:'成功',price:150},
					{name:'充值入账',time:'2019.09.03 10:30',state:'失败',price:150},
					{name:'充值入账',time:'2019.09.03 10:30',state:'成功',price:150},
					{name:'充值入账',time:'2019.09.03 10:30',state:'失败',price:150},
					{name:'充值入账',time:'2019.09.03 10:30',state:'成功',price:150}
				]
			}
		}
	}
</script>

<style lang="scss">
	.list{
		width: 100%;
		height: 140rpx;
		line-height: 60rpx;
		font-size: 30rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: white;
		border-top: 1px solid #f6f6f6;
		view{
			width: 690rpx;
			margin-left: 30rpx;
		}
		.price,.state,.state1{
			position: absolute;
			float: right;
			right: 30rpx;
		}
		.state{
			color: #24cc5d;
		}
		.state1{
			color: red;
		}
		.time{
			font-size: 28rpx;
			color: gray;
		}
		.price{
			color: #ffcc01;
		}
	}
</style>

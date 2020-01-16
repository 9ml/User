<!-- 平台协议 -->
<template>
	<view class="content">
		<view class="info" v-for="(value,index) in infoArr" :key='index'>
			<view>{{index+1}}.{{value.title}}</view>
			<view class="info_i">{{index}}.{{index}}{{value.info}}</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				infoArr:[
					{title:'服务说明',info:'我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容'},
					{title:'服务说明',info:'我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容'}
					
				]
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: white;
	}
	.content{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		border-top: 1px solid #f6f6f6;
		.info{
			margin-top: 30rpx;
			width: 690rpx;
			font-size: 28rpx;
			text-indent: 2em;
			.info_i{
				color: gray;
				margin-top: 20rpx;
			}
		}
	}
</style>



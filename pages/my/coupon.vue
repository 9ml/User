<!-- 优惠券 -->
<template>
	<view>
		<!-- 头部 -->
		<view class="head">
			<view :class="current==index?'cur':''" v-for="(value,index) in catArr" :key='index' @tap='tapcat(index)'>
				{{value.name}}
			</view>
		</view>
		
		<!-- 内容 -->
		<view class="info" v-for="(value,index) in infoArr" :key='index'>
			<view class="row1">
				<image src="../../static/icon_dp_dpsc.png"></image>
				{{value.shop}}
			</view>
			<view :class="current==0?'info_v':'cur1'">
				<view class="left">
					<view class="num">￥{{value.num}} <text>{{value.man}}</text></view>
					<view class="title">{{value.title}}</view>
					<view class="time">{{value.kstime}}-{{value.jstime}}</view>
				</view>
				<view class="right">
					<view class="ling" v-if='current==0'>领取</view>
					<view class="ling ling1" v-else>已领取</view>
				</view>
			
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				current:'',
				catArr:[
					{name:'未使用'},
					{name:'已使用'}
				],
				infoArr:[
					{shop:'张三旗舰店',num:20,man:'满300减20',title:'店铺优惠券',kstime:'2019.8.1 00.00',jstime:'2019.8.1 23:59'},
					{shop:'张三旗舰店',num:20,man:'满300减20',title:'店铺优惠券',kstime:'2019.8.1 00.00',jstime:'2019.8.1 23:59'},
					{shop:'张三旗舰店',num:20,man:'满300减20',title:'店铺优惠券',kstime:'2019.8.1 00.00',jstime:'2019.8.1 23:59'}
				]
			}
		},
		methods:{
			tapcat(e){
				this.current = e
			}
		}
	}
</script>

<style lang="scss">
	.head{
		width: 100%;
		height: 90rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;
		font-size: 30rpx;
		background-color: white;
		border-top: 1px solid #f6f6f6;
		view{
			height: 90rpx;
			display: flex;
			align-items: center;
		}
		.cur{
			color: #fe6404;
			border-bottom: 2px solid #fe6404;
		}
	}
	.info{
		margin: 20rpx;
		width: 710rpx;
		height: 280rpx;
		border-radius: 15rpx;
		background-color: white;
		.row1{
			width: 710rpx;
			height: 70rpx;
			font-size: 26rpx;
			display: flex;
			align-items: center;
			image{
				width: 26rpx;
				height: 26rpx;
				margin-left: 15rpx;
				margin-right: 10rpx;
			}
		}
		.cur1{
			margin-left: 20rpx;
			width: 670rpx;
			height: 170rpx;
			display: flex;
			align-items: center;
			background-image: url(../../static/icon_ylq.png);
			background-size: 100% 100%;
		}
		.info_v{
			margin-left: 20rpx;
			width: 670rpx;
			height: 170rpx;
			display: flex;
			align-items: center;
			background-image: url(../../static/img_bg_wsy.png);
			background-size: 100% 100%;	
		}
		.left{
			margin-left: 40rpx;
			width: 460rpx;
			height: 100rpx;
			font-size: 32rpx;
			font-weight: 500;
			.num{
				color: #f7380b;
				text{
					font-size: 28rpx;
					margin-left: 10rpx;
				}
			}
			.title{
				color: gray;
				font-size: 28rpx;
			}
			.time{
				color: gray;
				font-size: 26rpx;
			}
		}
		.right{
			margin-left: 40rpx;
			width: 125rpx;
			height: 175rpx;
			.ling{
				margin-top: 70rpx;
				width: 110rpx;
				height: 45rpx;
				color: white;
				text-align: center;
				line-height: 45rpx;
				font-size: 28rpx;
				border-radius: 60rpx;
				background-color: #fd5f04;
			}
			.ling1{
				background-color: #aeaeae;
			}
		}
		
	}
</style>

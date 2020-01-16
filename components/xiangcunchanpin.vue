<!-- 乡村产品 -->
<template>
	<view>
		<!-- 乡村产品 全部、待付款、 -->
		<view class="second">
			<view :class="current==index?'cur1':''" v-for='(value,index) in xcCat' :key='index' @tap="tapcat(index)">
				{{value.name}}
			</view>
		</view>
		<!-- 订单列表 -->
		<view class="list" v-for="(value,index) in infoArr" :key='index'>
			<view class="row1">
				<image src="../../static/icon_dp_dpsc.png"></image>
				{{value.shop}}
				<text class="right" v-if="current==0||current==1">待付款</text>
				<text class="right" v-if="current==2">待发货</text>
				<text class="right" v-if="current==3">待收货</text>
				<text class="right" @tap="wancheng" v-if="current==4" >已完成</text>
			</view>
			<view class="row2" @tap="taplist(index)">
				<image src="../../static/img_1_xjz.png"></image>
				<view class="right">
					<view class="con">{{value.con}}</view>
					<view class="time">下单时间：{{value.time}}</view>
					<view class="num">x{{value.num}}</view>
					<view class="price">￥{{value.price}}</view>
				</view>
			</view>
			<view class="row3">
				共{{value.num}}件商品 合计￥{{value.heji}}
			</view>
			<view class="foot">
				<view @tap="pay" v-if="current==0||current==1">付款</view>
				<view  v-if="current==2">提醒发货</view>
				<view class="row4_v" v-if="current==3" @tap="chakan">查看物流</view>
				<view v-if="current==3">确认收货</view>
				<view @tap="plbtn" v-if="current==4">待评论</view>
				<view @tap="tuikuan" v-if="current==5">申请退款</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				current:'',
				xcCat:[
					{name:'全部'},
					{name:'待付款'},
					{name:'待发货'},
					{name:'待收货'},
					{name:'待评价'},
					{name:'退款或售后'}
				],
				infoArr:[
					{shop:'张三旗舰店',state:1,src:'../../static/img_1_xjz.png',con:'水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖',time:'2019.02.01 10:30',num:1,price:'30.00',heji:'30.00'},
					{shop:'张三旗舰店',state:2,src:'../../static/img_1_xjz.png',con:'水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖',time:'2019.02.01 10:30',num:1,price:'30.00',heji:'30.00'}
				]
			}
		},
		methods:{
			chakan(){
				uni.navigateTo({
					url:'../my/logistics'
				})
			},
			taplist(){
				uni.navigateTo({
					url:'../my/orderDetail'
				})
			},
			tuikuan(){
				uni.navigateTo({
					url:'../my/xiangApplyRefund.vue'
				})
			},
			tapcat(e){
				this.current = e
			},
			wancheng(){
				uni.navigateTo({
					url:'orderFulfillment'
				})
			},
			plbtn(){
				uni.navigateTo({
					url:'pinglun'
				})
			},
			pay(){
				uni.navigateTo({
					url:'payOrder'
				})
			},
			tapcat(e){
				this.current = e
			}
			
		}
	}
</script>

<style lang="scss">
	.second{
		width: 100%;
		height: 90rpx;
		font-size: 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;
		background-color: white;
		border-top: 1px solid #f6f6f6;
		.cur1{
			height: 90rpx;
			color: #fa8615;
			display: flex;
			align-items: center;
			border-bottom: 2px solid #fa8615;
		}
	}
	.list{
		padding-bottom: 10rpx;
		margin: 20rpx;
		width: 710rpx;
		border-radius: 15rpx;
		background-color: white;
		.row1{
			width: 100%;
			height: 75rpx;
			font-size: 26rpx;
			display: flex;
			align-items: center;
			image{
				width: 28rpx;
				height: 28rpx;
				margin-left: 30rpx;
				margin-right: 10rpx;
			}
			.right{
				position: absolute;
				float: right;
				right: 30rpx;
				color: #fa8615;
			}
		}
		.row2{
			margin-left: 30rpx;
			width: 670rpx;
			height: 195rpx;
			display: flex;
			align-items: center;
	
			image{
				width: 195rpx;
				height: 195rpx;
			}
			.right {
				margin-left: 20rpx;
				width: 460rpx;
				height: 195rpx;
	
				.con{
					font-size: 28rpx;
					margin-bottom: 10rpx;
				}
				.time{
					font-size: 26rpx;
					color: gray;
				}
				.num{
					font-size: 26rpx;
					margin-left: 400rpx;
				}
				.price{
					color: #fa8615;
					font-size: 30rpx;
				}
			}
		}
		.row3{
			margin-top: 10rpx;
			text-align: right;
			font-size: 28rpx;
			margin-right: 20rpx;
			color: gray;
		}
		.foot{
			width: 100%;
			height: 100rpx;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			border-top: 1px solid #f6f6f6;
			view{
				margin-right: 20rpx;
				width: 160rpx;
				height: 50rpx;
				color: #f98111;
				font-size: 30rpx;
				text-align: center;
				line-height: 50rpx;
				border-radius: 60rpx;
				border: 1px solid #f98111;
			}
			.row4_v{
				color: gray;
				border: 1px solid gray;
			}
		}
	}
</style>

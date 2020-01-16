<!-- 我的订单 -->
<template>
	<view>
		<!-- 同城、乡村 -->
		<view class="top">
			<view :class="current==index?'cur':''" v-for='(value,index) in firstArr' :key='index' @tap="taptop(index)">
				{{value.name}}
			</view>
		</view>
		
		<!-- 同城买菜 -->
		<tongcheng v-if="current==0"></tongcheng>
		
		<!-- 乡村产品 -->
		<xiangcun v-if="current==1"></xiangcun>
	</view>
</template>

<script>
	import tongcheng from '../../components/cityBuyCai.vue'
	import xiangcun from '../../components/xiangcunchanpin.vue'
	export default{
		components:{
			tongcheng,
			xiangcun
		},
		data(){
			return{
				ok:true,
				ok1:false,
				current:'',
				firstArr:[
					{name:'同城买菜'},
					{name:'乡村产品'}
				],
				infoArr:[
					{shop:'张三旗舰店',state:1,src:'../../static/img_1_xjz.png',con:'水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖',time:'2019.02.01 10:30',num:1,price:'30.00',heji:'30.00'},
					{shop:'张三旗舰店',state:2,src:'../../static/img_1_xjz.png',con:'水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖水蜜桃贱卖',time:'2019.02.01 10:30',num:1,price:'30.00',heji:'30.00'}
				]
			}
		},
		methods:{
			taptop(e){
				this.current = e
			}
		}
	}
</script>

<style lang="scss">
	.top{
		width: 100%;
		height: 90rpx;
		font-size: 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;
		background-color: white;
		border-top: 1px solid #f6f6f6;
		.cur{
			height: 90rpx;
			color: #fa8615;
			display: flex;
			align-items: center;
			border-bottom: 2px solid #fa8615;
		}
	}
</style>

<template>
	<view>
		<headTypeA :title="title" :isWhite="isWhite" :isHaveSpace="isHaveSpace"></headTypeA>
		<view class="allStyle">
			<view class="asMs">
				<view class="amLeft">
					标题
				</view>
				<view class="amRight add-input-right">
					<input type="text" placeholder="请输入标题">
				</view>
			</view>
		</view>
		<view class="allStyle">
			<view class="asMs">
				<view class="amLeft">
					目标金额
				</view>
				<view class="amRight add-input-right">
					<input type="text" placeholder="请输入目标金额">
				</view>
			</view>
		</view>
		<view class="allStyle">
			<view class="asMs">
				<view class="amLeft">
					发布类型
				</view>
				<view class="amRight add-kinds-right">
					<picker @change="bindPickerChange" :value="index" :range="kindsList" range-key="name">
						<view class="uni-input">{{kindsList[index].name}}</view>
					</picker>
				</view>
			</view>
		</view>
		<view class="allStyle">
			<view class="asMs">
				<view class="amLeft">
					地址
				</view>
				<view class="amRight add-kinds-right">
					<view class="tab" :class="{'active':index==tabIndex}" @tap="toggleTab(item,index)" v-for="(item,index) in tabList" :key="index">{{item.name}}</view>
						<w-picker
							mode="region"
							:defaultVal="['北京市','市辖区','东城区']"
							:areaCode="['11','1101','110101']"
							:hideArea="false"
							@confirm="onConfirm" 
							ref="region" 
						></w-picker>
				</view>
			</view>
		</view>
		<view class="allStyle">
			<view class="as-text">
				<view class="at-textarea">
					<textarea placeholder="请输入发众筹的原因" maxlength="-1" />
				</view>
				<view class="at-upload">
					<image src="/static/icon/icon_tjtp_zcnrfb.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="btnMs">
			提交
		</view>
	</view>
</template>

<script>
	var _self;
	import wPicker from "@/components/w-picker/w-picker.vue";
	export default {
		components:{
			wPicker
		},
		data() {
			return {
				title : '众筹内容发布',
				isWhite : true,
				isHaveSpace : true,
				kindsList : [
					{
						id : 1,
						name : '请选择发布类型'
					},
					{
						id : 2,
						name : '水果类'
					},
					{
						id : 3,
						name : '蔬菜类'
					},
					{
						id : 4,
						name : '食品类'
					},
					{
						id : 5,
						name : '百货'
					},
					{
						id : 6,
						name : '箱包'
					},
					{
						id : 7,
						name : '母婴'
					},
					{
						id : 8,
						name : '美妆'
					}
				],
				index : 0,
				mode:"range",
				tabList : [
					{
						mode:"region",
						name:"请选择地址"
					}
				],
				tabIndex:0
			}
		},
		onLoad() {
			_self = this;
		},
		methods: {
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				_self.index = e.target.value
			},
			onConfirm(val){
				console.log(val);
				this.resultInfo=val;
				this.tabList[0].name = val.checkArr[0] + "," + val.checkArr[1] + "," + val.checkArr[2]
			},
			toggleTab(item,index){
				this.tabIndex=index;
				this.mode=item.mode;
				this.defaultVal=item.value;
				this.$refs[item.mode].show();
			},
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F6F6F6;
	}
	.allStyle{
		border-top: 1rpx solid #EDEDED;
		background-color: #FFFFFF;
		.asMs{
			width: 94%;
			margin: 0 auto;
			display: flex;
			align-items: center;
			.amLeft{
				width: 20%;
				height: 100rpx;
				text-align: center;
				font-size: 26rpx;
				line-height: 100rpx;
			}
			.amRight{
				width: 80%;
			}
			.add-input-right{
				height: 100rpx;
				input{
					width: 100%;
					height: 100%;
					font-size: 26rpx;
					text-align: right;
				}
			}
			.add-kinds-right{
				height: 100rpx;
				font-size: 26rpx;
				line-height: 100rpx;
				text-align: right;
			}
		}
		.as-text{
			width: 94%;
			height: 420rpx;
			margin: 0 auto;
			.at-textarea{
				height: 260rpx;
				textarea{
					width: 100%;
					height: 100%;
					padding-top: 10rpx;
					font-size: 26rpx;
				}
			}
			.at-upload{
				height: 140rpx;
				image{
					width: 120rpx;
					height: 120rpx;
					margin-top: 10rpx;
				}
			}
		}
	}
	.btnMs{
		
	}
</style>

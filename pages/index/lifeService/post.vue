<template>
	<view>
		<headTypeA :title="title" :isWhite="isWhite" :isHaveSpace="isHaveSpace"></headTypeA>
		<view class="itemMs">
			<view class="im-main">
				<view class="im-left">
					标题
				</view>
				<view class="im-right">
					<input type="text" placeholder="请输入标题" />
				</view>
			</view>
		</view>
		<view class="itemMs">
			<view class="im-main">
				<view class="im-left">
					描述
				</view>
				<view class="im-right">
					<input type="text" placeholder="请输入描述" />
				</view>
			</view>
		</view>
		<view class="itemMs">
			<view class="im-main">
				<view class="im-area">
					<textarea placeholder="请输入要发布的内容" maxlength="-1" />
				</view>
				<view class="im-adress">
					<view class="ia-icon">
						<image src="/static/icons/icon_dz_fb.png" mode=""></image>
					</view>
					<view class="ia-fonts hiddenFontsA">
						江苏省徐州市铜山万达
					</view>
				</view>
			</view>
		</view>
		<view class="itemMs">
			<view class="im-main">
				<view class="im-left">
					<image src="/static/icons/icon_tp_fb.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="itemMs">
			<view class="im-main">
				<view class="im-left">
					选择发布类型
				</view>
				<view class="im-right">
					<picker @change="bindPickerChange" :value="index" :range="kindsList" range-key="name">
						<view class="uni-input">{{kindsList[index].name}}</view>
					</picker>
				</view>
			</view>
		</view>
		<view class="itemMs">
			<view class="im-main">
				<view class="im-left">
					我要置顶
				</view>
				<view class="im-right">
					<image src="/static/icons/icon_kai_fb.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="itemMs">
			<view class="im-main">
				<view class="im-left">
					置顶费用
				</view>
				<view class="im-right">
					￥6.00
				</view>
			</view>
		</view>
		<view class="itemMs">
			<view class="im-main">
				<view class="im-left">
					推广费用
				</view>
				<view class="im-right">
					￥6.00
				</view>
			</view>
		</view>
		<view class="itemMs">
			<view class="im-main">
				<view class="im-left">
					发布费用
				</view>
				<view class="im-right">
					￥6.00
				</view>
			</view>
		</view>
		<view class="itemMs">
			<view class="im-main">
				<view class="im-left">
					联系人
				</view>
				<view class="im-right">
					张先生
				</view>
			</view>
		</view>
		<view class="itemMs">
			<view class="im-main">
				<view class="im-left">
					联系电话
				</view>
				<view class="im-right">
					123456789
				</view>
			</view>
		</view>
		<view class="bomSpace"></view>
		<view class="bomMs">
			<view class="bm-main">
				<view class="bm-left">
					发布需支付：<text class="bl-price">￥18.00</text>
				</view>
				<view class="bm-right" hover-class="hoverStyleA">
					立即发布
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var _self;
	export default {
		data() {
			return {
				title : '发布',
				isWhite : true,
				isHaveSpace : true,
				index : 0,
				kindsList : [
					{
						id : 1,
						name : '农副产品'
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
		}
	}
</script>

<style lang="scss">
	.itemMs{
		border-top: 1rpx solid #F6F6F6;
		.im-main{
			width: 90%;
			margin: 0 auto;
			display: flex;
			flex-wrap: wrap;
			.im-left{
				width: 30%;
				height: 90rpx;
				line-height: 90rpx;
				font-size: 28rpx;
				image{
					width: 60rpx;
					height: 44rpx;
					margin-top: 23rpx;
				}
			}
			.im-right{
				width: 70%;
				height: 90rpx;
				font-size: 26rpx;
				text-align: right;
				line-height: 90rpx;
				input{
					width: 100%;
					height: 100%;
					font-size: 26rpx;
					text-align: right;
				}
				image{
					width: 70rpx;
					height: 40rpx;
					margin-top: 25rpx;
				}
			}
			.im-area{
				width: 100%;
				height: 300rpx;
				textarea{
					width: 100%;
					height: 100%;
					font-size: 26rpx;
					padding-top: 10rpx;
				}
			}
			.im-adress{
				width: 360rpx;
				height: 60rpx;
				background-color: #F6F6F6;
				border-radius: 30rpx;
				margin: 20rpx 0 20rpx;
				display: flex;
				.ia-icon{
					width: 26%;
					height: 60rpx;
					text-align: center;
					image{
						width: 32rpx;
						height: 38rpx;
						margin-top: 11rpx;
					}
				}
				.ia-fonts{
					width: 70%;
					height: 60rpx;
					line-height: 60rpx;
					font-size: 24rpx;
				}
			}
		}
	}
	.bomSpace{
		height: 100rpx;
	}
	.bomMs{
		width: 100%;
		background-color: #FFFFFF;
		border-top: 1rpx solid #E3E3E3;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 9;
		.bm-main{
			width: 90%;
			height: 100rpx;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.bm-left{
				font-size: 28rpx;
				.bl-price{
					color: #FF474D;
				}
			}
			.bm-right{
				width: 250rpx;
				height: 70rpx;
				border-radius: 35rpx;
				line-height: 70rpx;
				text-align: center;
				font-size: 28rpx;
				color: #FFFFFF;
				background-color: #F77F0C;
			}
		}
	}
</style>
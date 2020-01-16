<template :name="classifica">
	<view>
		<view class="classiTypeA" v-if="isShowSwiper">
			<swiper class="swiper" indicator-dots="true" indicator-color="#7E7E7E" indicator-active-color="#F29028">
				<swiper-item>
					<view class="ctMs">
						<view class="cm-item" v-for="(c,c_idx) in classiList.itemA" :key="c_idx">
							<view class="ci-icon">
								<image :src="c.cIcon" mode=""></image>
							</view>
							<view class="ci-name">
								{{c.cName}}
							</view>
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="ctMs">
						<view class="cm-item" v-for="(c,c_idx) in classiList.itemB" :key="c_idx">
							<view class="ci-icon">
								<image :src="c.cIcon" mode=""></image>
							</view>
							<view class="ci-name">
								{{c.cName}}
							</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="classiTypeB" v-else>
			<view class="ctMs">
				<view class="cm-item" v-for="(c,c_idx) in classiList.itemA" :key="c_idx">
					<view class="ci-icon">
						<image :src="c.cIcon" mode=""></image>
					</view>
					<view class="ci-name">
						{{c.cName}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name : "classifica",
		props : {
			classiList : {
				type : Object,
				default : function(){
					return {}
				}
			},
			isShowSwiper : {
				type : Boolean
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.classiTypeA{
		background-color: #FFFFFF;
		.swiper{
			height: 430rpx;
		}
	}
	.classiTypeB{
		background-color: #FFFFFF;
		height: 410rpx;
	}
	.ctMs{
		width: 96%;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		.cm-item{
			width: 20%;
			.ci-icon{
				height: 130rpx;
				width: 100rpx;
				margin: 0 auto;
				text-align: center;
				image{
					width: 100rpx;
					height: 100rpx;
					margin-top: 30rpx;
				}
			}
			.ci-name{
				height: 70rpx;
				font-size: 26rpx;
				line-height: 70rpx;
				text-align: center;
			}
		}
	}
</style>

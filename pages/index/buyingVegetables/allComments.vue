<template>
	<view>
		<headTypeA :title="title" :isWhite="isWhite" :isHaveSpace="isHaveSpace"></headTypeA>
		<!-- 商品评价 -->
		<view class="comments">
			<view class="csMs">
				<view class="cm-item" v-for="(d,d_idx) in commentsList" :key="d_idx">
					<view class="ci-user">
						<view class="cu-header">
							<image :src="d.header" mode=""></image>
						</view>
						<view class="cu-info">
							<view class="ci-name">
								{{d.name}}
							</view>
							<view class="ci-time">
								{{d.time}}
							</view>
						</view>
					</view>
					<view class="ci-comments">
						{{d.comments}}
					</view>
					<view class="ci-images">
						<view class="ci-item" v-for="(e,e_idx) in d.imageList" :key="e_idx">
							<image :src="e.url" mode=""></image>
						</view>
					</view>
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
				title : '全部评价',
				isWhite : true,
				isHaveSpace : true,
				commentsList : [
					{
						header : '/static/images/img_avatar_spxq.png',
						name : '小**Y',
						time : '2019-11-30',
						comments : '很新鲜，下次再来'
					},
					{
						header : '/static/images/img_avatar_spxq.png',
						name : '小**Y',
						time : '2019-11-30',
						comments : '很新鲜，下次再来',
						imageList : [
							{
								url : '/static/images/img_avatar_spxq_1.png'
							},
							{
								url : '/static/images/img_avatar_spxq_2.png'
							},
							{
								url : '/static/images/img_avatar_spxq_3.png'
							},
							{
								url : '/static/images/img_avatar_spxq_4.png'
							},
							{
								url : '/static/images/img_avatar_spxq_1.png'
							},
							{
								url : '/static/images/img_avatar_spxq_2.png'
							},
							{
								url : '/static/images/img_avatar_spxq_3.png'
							},
							{
								url : '/static/images/img_avatar_spxq_4.png'
							}
						]
					},
					{
						header : '/static/images/img_avatar_spxq.png',
						name : '小**Y',
						time : '2019-11-30',
						comments : '很新鲜，下次再来',
						imageList : [
							{
								url : '/static/images/img_avatar_spxq_1.png'
							},
							{
								url : '/static/images/img_avatar_spxq_2.png'
							},
							{
								url : '/static/images/img_avatar_spxq_3.png'
							},
							{
								url : '/static/images/img_avatar_spxq_4.png'
							}
						]
					},
					{
						header : '/static/images/img_avatar_spxq.png',
						name : '小**Y',
						time : '2019-11-30',
						comments : '很新鲜，下次再来',
						imageList : [
							{
								url : '/static/images/img_avatar_spxq_1.png'
							},
							{
								url : '/static/images/img_avatar_spxq_2.png'
							},
							{
								url : '/static/images/img_avatar_spxq_3.png'
							},
							{
								url : '/static/images/img_avatar_spxq_4.png'
							}
						]
					},
					{
						header : '/static/images/img_avatar_spxq.png',
						name : '小**Y',
						time : '2019-11-30',
						comments : '很新鲜，下次再来',
						imageList : [
							{
								url : '/static/images/img_avatar_spxq_1.png'
							},
							{
								url : '/static/images/img_avatar_spxq_2.png'
							},
							{
								url : '/static/images/img_avatar_spxq_3.png'
							},
							{
								url : '/static/images/img_avatar_spxq_4.png'
							}
						]
					}
				]
			}
		},
		onLoad() {
			_self = this;
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.comments{
		border-top: 1rpx solid #F6F6F6;
		.csMs{
			width: 92%;
			margin: 0 auto;
			.cm-item{
				border-bottom: 1rpx solid #F6F6F6;
				margin: 20rpx 0 10rpx 0;
				.ci-user{
					height: 70rpx;
					display: flex;
					align-items: center;
					.cu-header{
						width: 60rpx;
						height: 60rpx;
						image{
							width: 100%;
							height: 100%;
							border-radius: 50%;
						}
					}
					.cu-info{
						height: 60rpx;
						margin-left: 10rpx;
						.ci-name{
							height: 35rpx;
							line-height: 35rpx;
							font-size: 22rpx;
						}
						.ci-time{
							height: 25rpx;
							line-height: 25rpx;
							font-size: 20rpx;
							color: #666666;
						}
					}
				}
				.ci-comments{
					margin: 10rpx 0 10rpx 0;
					font-size: 24rpx;
				}
				.ci-images{
					margin: 10rpx 0 10rpx 0;
					display: flex;
					align-items: center;
					flex-wrap: wrap;
					.ci-item{
						width: 24%;
						height: 170rpx;
						margin: 0 2rpx 2rpx 0;
						image{
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}
	}
</style>
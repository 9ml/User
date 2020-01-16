<template>
	<view>
		<headTypeA :title="title" :isWhite="isWhite" :isHaveSpace="isHaveSpace"></headTypeA>
		<view class="sdMain" v-for="(s,s_idx) in resList" :key="s_idx">
			<view class="sm-image">
				<image :src="s.rlImage" mode=""></image>
			</view>
			<view class="sm-desc">
				<view class="sd-name hiddenFonts">
					{{s.rlName}}
				</view>
				<view class="sd-price">
					￥{{s.rlPrice}}.00
				</view>
				<view class="sd-nums">
					月售：{{s.rlNums}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title : '产品',
				isWhite : true,
				isHaveSpace : true,
				resList : [
					{
						rlid : 1,
						rlImage : '/static/images/img_14_sy.png',
						rlName : '蜜桃青州蜜桃 离核冬雪密冬桃脆桃 5斤孕妇水果现摘现发小蜜桃蜜桃青州蜜桃 离核冬雪密冬桃脆桃 5斤孕妇水果现摘现发小蜜桃',
						rlPrice : 20,
						rlNums : 1234
					},
					{
						rlid : 2,
						rlImage : '/static/images/img_13_sy.png',
						rlName : '蜜桃青州蜜桃 离核冬雪密冬桃脆桃 5斤孕妇水果现摘现发小蜜桃',
						rlPrice : 20,
						rlNums : 1234
					},
					{
						rlid : 3,
						rlImage : '/static/images/img_14_sy.png',
						rlName : '蜜桃青州蜜桃 离核冬雪密冬桃脆桃 5斤孕妇水果现摘现发小蜜桃',
						rlPrice : 20,
						rlNums : 1234
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	@import 'common/css/goodsList.scss';
	page{
		background-color: #F6F6F6;
	}
</style>

<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	// 文本溢出省略号
	.hiddenFontsA{
		overflow: hidden;
		display: -webkit-box;
		overflow: hidden;
		-webkit-line-clamp: 1;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
	}
	.hiddenFonts{
		overflow: hidden;
		display: -webkit-box;
		overflow: hidden;
		-webkit-line-clamp: 2;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
	}
	// view 按钮点击效果
	.hoverStyleA{
		opacity: 0.8;
		background: #F7F7F7;
	}
	.hoverStyleB{
		position: relative;
		top: 2rpx;
		left: 2rpx;
		box-shadow: 0px 0px 8px rgba(0, 0, 0, .1) inset;
	}
	// 按钮
	.btnMs{
		width: 500rpx;
		height: 70rpx;
		margin: 120rpx auto 0;
		background-color: #F77F0C;
		border-radius: 35rpx;
		text-align: center;
		line-height: 70rpx;
		color: #FFFFFF;
		font-size: 30rpx;
	}
	page{
		background-color: #F6F6F6;
	}
</style>

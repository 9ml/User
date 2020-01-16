// 常用工具函数：
function myTools() {
	const defaultSetting = {

	}
	this.defaultSetting = defaultSetting
	buildMyTools()
}

function buildMyTools() {
	// 创建指定个数、默认值的数组
	myTools.prototype.myArr = function(num, val) {
		let arr = []
		for (var i = 0; i < num; i++) {
			arr.push(val)
		}
		return arr
	}
	// 改变、删除、插入指定数组项
	myTools.prototype.editArr = function(flag, arr, idx, val) {
		let workArr = []
		for (var i = 0; i < arr.length; i++) {
			if(i === idx) {
				if(flag) {
					continue
				} else {
					if(val) {
						workArr.push(arr[i],val)
						if(arr.length-1 < i) {
							workArr.push(arr[++i])
						}
					} else {
						workArr.push(val)
					}
				}
			} else {
				workArr.push(arr[i])
			}
		}
		return workArr
	}
	// 判断登录
	myTools.prototype.whetherLogin = function(){
		uni.showModal({
		    title: '提示',
		    content: '您未登录，是否去登录',
		    success: (res)=>{
		        if(res.confirm){
		            uni.reLaunch({
		            	url:"/pages/user/login"
		            })
		        }else if(res.cancel){
					// console.log("取消");
		        }
		    }
		});
	}
	// 判断状态
	myTools.prototype.loadingIs = function(arr) {
		let flag = true
		let index = null
		arr.forEach((val, idx) => {
			if (!val) {
				flag = false
				index = idx
				return
			}
		})
		if (flag) {
			uni.hideLoading()
			uni.stopPullDownRefresh()
			return flag
		} else {
			return index
		}
	}
	// 常用提示
	myTools.prototype.myShow = function(title = '', type = false, times = 1500) {
		if (type) {
			uni.showToast({
				title: title,
				icon: 'none',
				mask: true,
				duration: times
			})
		} else {
			uni.showToast({
				title: title,
				icon: 'none',
				position: 'bottom'
			})
		}
	}
	// 获取位置
	myTools.prototype.myLocation = function(_self) {
		return new Promise((resolve, reject) => {
			if (_self.globalData.location.isReady) {
				resolve(_self.globalData.location.info)
			} else {
				uni.getLocation({
					type: 'gcj02',
					geocode: true
				}).then(locationRes=> {
					if(locationRes[0] === null) {
						_self.globalData.location.isReady = true
						_self.globalData.location.info = locationRes[1]
						resolve(_self.globalData.location.info)
					} else {
						reject(locationRes[0])
					}
				}).catch(error=> {
					uni.showToast({
						title: '错误code:-1001',
						icon: 'none',
						position: 'bottom'
					})
					reject(error)
				})
			}
		})
	}
	// 时间戳转日期格式
	myTools.prototype.formatDateTime = function(timeStamp, returnType) {
		var date = new Date();
		// date.setTime(timeStamp * 1000);
		var y = date.getFullYear();
		var m = date.getMonth() + 1;
		m = m < 10 ? ('0' + m) : m;
		var d = date.getDate();
		d = d < 10 ? ('0' + d) : d;
		var h = date.getHours();
		h = h < 10 ? ('0' + h) : h;
		var minute = date.getMinutes();
		var second = date.getSeconds();
		minute = minute < 10 ? ('0' + minute) : minute;
		second = second < 10 ? ('0' + second) : second;
		if (returnType === 'str') {
			// return y + '-' + m + '-' + d
			return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
		}
		if (returnType === 'time') {
			return h + ":" + minute
		}
		return [y, m, d, h, minute, second];
	}
	// 2019-11-02T02:59:00.000+0000 格式 转 日期格式
	myTools.prototype.conversionTime = function(date){
		let d = new Date(date);
		let month = (d.getMonth() + 1) < 10 ? '0'+(d.getMonth() + 1) : (d.getMonth() + 1);
		let day = d.getDate()<10 ? '0'+d.getDate() : d.getDate();
		let hours = d.getHours()<10 ? '0'+d.getHours() : d.getHours();
		let min = d.getMinutes()<10 ? '0'+d.getMinutes() : d.getMinutes();
		let sec = d.getSeconds()<10 ? '0'+d.getSeconds() : d.getSeconds();
		let times=d.getFullYear() + '/' + month + '/' + day + ' ' + hours + ':' + min + ':' + sec;
		return times
	}
	// 跳转
	myTools.prototype.navTo = function(url) {
		uni.navigateTo({
			url: `/pages/${url}`
		})
	}
	// 返回
	myTools.prototype.navBack = function() {
		uni.navigateBack({
			delta: 1
		})
	}
}

export default {
	myTools
}
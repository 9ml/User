(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/setUpShop"],{"09d2":function(e,t,o){"use strict";(function(e){o("38eb"),o("921b");i(o("66fd"));var t=i(o("8cf4"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("6e42")["createPage"])},"22be":function(e,t,o){"use strict";var i,n=function(){var e=this,t=e.$createElement;e._self._c},a=[];o.d(t,"b",function(){return n}),o.d(t,"c",function(){return a}),o.d(t,"a",function(){return i})},"5bae":function(e,t,o){"use strict";(function(e,i){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){return Promise.all([o.e("common/vendor"),o.e("components/w-picker/w-picker")]).then(o.bind(null,"1304"))},c={components:{wPicker:a},data:function(){return{mode:"range",tabList:[{mode:"region",name:"徐州市"}],tabIndex:0,indexs:0,index:0,islogo:"",ispositive:"",isback:"",islicense:"",ischeck:!1,catArr:[{id:1,name:"农副产品"}],shop_name:"",type_id:"农副产品",coordinate:"117.08629478723311,36.68052242300537",address:"",province:"",city:"",district:"",name:"",id_member:"",tel:"",description:"",logo:"",card_positive_image:"",card_back_image:"",license_image:"",token:e.getStorageSync("token")}},onLoad:function(){n=this,n.getStoreKinds()},methods:{getStoreKinds:function(){n.Api.shopType({token:e.getStorageSync("token")},function(e){console.log(i(e," at pages\\my\\setUpShop.vue:142")),1===e.code?n.catArr=e.data:n.myTools.myShow(e.mag,!0)})},lbchange:function(e){this.index=e.target.value,this.type_id=this.index},chooseImage:function(t){e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(e){n.upLoadImages(e.tempFilePaths[0],t)}})},upLoadImages:function(t,o){var i=this;e.uploadFile({url:n.Api.baseUrl+"/upload",filePath:t,name:"file",formData:{token:e.getStorageSync("token")},success:function(e){var t=JSON.parse(e.data);n.myTools.myShow(t.msg,!0),1===o?i.islogo=n.Api.baseUrl+t.data[0].url:2===o?i.ispositive=n.Api.baseUrl+t.data[0].url:3===o?i.isback=n.Api.baseUrl+t.data[0].url:4===o&&(i.islicense=n.Api.baseUrl+t.data[0].url)}})},chooseCheck:function(){this.ischeck=!this.ischeck,console.log(i(this.ischeck," at pages\\my\\setUpShop.vue:191"))},getLocations:function(){var t;e.getLocation({type:"wgs84",success:function(e){console.log(i("当前位置的经度："+e.longitude," at pages\\my\\setUpShop.vue:198")),console.log(i("当前位置的纬度："+e.latitude," at pages\\my\\setUpShop.vue:199")),t=e.longitude+","+e.latitude,n.coordinate=t}})},toggleTab:function(e,t){this.tabIndex=t,this.mode=e.mode,this.defaultVal=e.value,this.$refs[e.mode].show()},onConfirm:function(e){console.log(i(e," at pages\\my\\setUpShop.vue:212")),this.resultInfo=e,this.tabList[0].name=e.checkArr[0]+","+e.checkArr[1]+","+e.checkArr[2],this.province=e.checkArr[0],this.city=e.checkArr[1],this.district=e.checkArr[2]},submit:function(){n.ischeck?n.Api.shopappSave({shop_name:n.shop_name,type_id:n.catArr[n.index].id,coordinate:n.coordinate,address:n.address,province:n.province,city:n.city,district:n.district,name:n.name,id_member:n.id_member,tel:n.tel,description:n.description,logo:n.islogo,card_positive_image:n.ispositive,card_back_image:n.isback,license_image:n.islicense,token:n.token},function(e){console.log(i(e," at pages\\my\\setUpShop.vue:247")),1==e.code?(n.myTools.myShow("提交成功，请等待审核",!0),setTimeout(function(){n.myTools.navBack()},1500)):n.myTools.myShow(e.msg,!0)}):e.showToast({title:"请先同意商务协议",icon:"none"})}}};t.default=c}).call(this,o("6e42")["default"],o("0de9")["default"])},"8cf4":function(e,t,o){"use strict";o.r(t);var i=o("22be"),n=o("eaca");for(var a in n)"default"!==a&&function(e){o.d(t,e,function(){return n[e]})}(a);o("d32f");var c,s=o("f0c5"),r=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);t["default"]=r.exports},aa4c:function(e,t,o){},d32f:function(e,t,o){"use strict";var i=o("aa4c"),n=o.n(i);n.a},eaca:function(e,t,o){"use strict";o.r(t);var i=o("5bae"),n=o.n(i);for(var a in i)"default"!==a&&function(e){o.d(t,e,function(){return i[e]})}(a);t["default"]=n.a}},[["09d2","common/runtime","common/vendor"]]]);
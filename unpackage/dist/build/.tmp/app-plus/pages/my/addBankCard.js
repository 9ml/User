(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/addBankCard"],{"590e":function(n,t,e){"use strict";e.r(t);var u=e("d70c"),a=e.n(u);for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);t["default"]=a.a},"68ff":function(n,t,e){},"8a29":function(n,t,e){"use strict";(function(n){e("38eb"),e("921b");u(e("66fd"));var t=u(e("ead5b"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},a3d6:function(n,t,e){"use strict";var u=e("68ff"),a=e.n(u);a.a},c637:function(n,t,e){"use strict";var u,a=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"b",function(){return a}),e.d(t,"c",function(){return o}),e.d(t,"a",function(){return u})},d70c:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{countDown:0,phone:""}},methods:{enter:function(){var t=this;if(/^1[3456789]\d{9}$/.test(this.phone)){this.countDown=60;var e=setInterval(function(){t.countDown--,0==t.countDown&&clearInterval(e)},1e3)}else n.showToast({title:"手机号格式错误！",icon:"none"})}}};t.default=e}).call(this,e("6e42")["default"])},ead5b:function(n,t,e){"use strict";e.r(t);var u=e("c637"),a=e("590e");for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);e("a3d6");var c,r=e("f0c5"),f=Object(r["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],c);t["default"]=f.exports}},[["8a29","common/runtime","common/vendor"]]]);
import Vue from 'vue'
import App from './App'
import Tools from '@/common/until/methods.js'
import Api from '@/common/until/requests.js'
import headTypeA from '@/components/assembly/headTypeA.vue'
import headTypeB from '@/components/assembly/headTypeB.vue'
import classifica from '@/components/assembly/classification.vue'
import uniSteps from '@/components/uni-steps/uni-steps.vue'
import validCode from './components/validCode/validCode.vue'


Vue.config.productionTip = false
Vue.prototype.myTools = new Tools.myTools
Vue.prototype.Api = new Api.request

App.mpType = 'app'
Vue.component('headTypeA',headTypeA)
Vue.component('headTypeB',headTypeB)
Vue.component('classifica',classifica)
Vue.component('validcode',validCode)
Vue.component('uniSteps',uniSteps)
const app = new Vue({
    ...App
})
app.$mount()

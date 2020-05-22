import Vue from 'vue'
import App from './App'
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)	
Vue.config.productionTip = false

App.mpType = 'app'


Vue.prototype.$imgSuffix = '?imageView&thumbnail=369x0&quality=75&tostatic=0';
const app = new Vue({
    ...App
})
app.$mount()

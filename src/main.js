import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import VueLazyload from 'vue-lazyload'
import store from './store/index'

Vue.config.productionTip = false

Vue.prototype.$bus=new Vue();

Vue.use(VueLazyload,{
  preload:1,
  loading:require('assets/img/common/placeholder.png')
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

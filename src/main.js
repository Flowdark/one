import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueTilt from 'vue-tilt.js'
import VueNumber from 'vue-number-animation'
import VueLazyLoadVideo from 'vue-lazyload-video'

Vue.use(VueNumber)
Vue.use(VueTilt)
Vue.use(VueLazyLoadVideo)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

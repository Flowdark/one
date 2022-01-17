import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@splidejs/splide/dist/css/splide.min.css';

import VueTilt from 'vue-tilt.js'
import VueNumber from 'vue-number-animation'
import VueLazyLoadVideo from 'vue-lazyload-video'
import VueI18n from 'vue-i18n';
import { i18n } from './plugins/i18n';
import VueSplide from '@splidejs/vue-splide';

Vue.use(VueNumber);
Vue.use(VueTilt);
Vue.use(VueLazyLoadVideo);
Vue.use( VueSplide );

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

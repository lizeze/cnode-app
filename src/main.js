import Vue from 'vue';
import App from './App';
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from './vue-axios';
import common from './common';
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(common)
Vue.use(axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

import Vue from 'vue'
import App from './App'
import router from './router'
 import   axios from 'axios'
Vue.config.productionTip = false

let  baseUrl='https://cnodejs.org/api/v1/'

Vue.prototype.axiosGet=function (url,ok) {

  axios
    .get(baseUrl+url)
    .then(response => {
      ok&&ok(response);
    })
    .catch(error => {
      console.log(error)
    })
    .finally()


}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

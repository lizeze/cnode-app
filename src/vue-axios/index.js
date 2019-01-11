import Vue from 'vue'
import axios from 'axios'

let  baseUrl='https://cnodejs.org/api/v1/'
const http = {
  install() {
    Vue.prototype.axiosGet = function (url,ok) {
      axios
        .get(baseUrl + url)
        .then(response => {
          ok && ok(response);
        })
        .catch(error => {
        })
        .finally();
    }

    Vue.prototype.axiosGetDev = function (url,ok) {
      axios
        .get(url)
        .then(response => {
          ok && ok(response);
        })
        .catch(error => {
        })
        .finally();
    }



  }
};

export default http

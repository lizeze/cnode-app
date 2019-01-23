import Vue from 'vue';
import axios from 'axios';
let baseUrl = 'https://cnodejs.org/api/v1/';
const http = {
  install () {
    Vue.prototype.axiosGet = (url) => {
      return new Promise((resolve, reject) => {
        axios
        .get(baseUrl + url)
        .then(response => {
          resolve(response.data);
        }).finally();
      }
      )
    };
    Vue.prototype.axiosGetDev = (url, ok) => {
      return new Promise((resolve, reject) => {
        axios.get(url)
        .then(response => {
          resolve(response.data);
        }).finally();
      }
      )
    }
  }
}
export default http;

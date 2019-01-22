import Vue from 'vue';
const commom = {
  install() {
    Vue.prototype.getLoginUser = function (loginName, ok) {
      this.axiosGet('/user/' + loginName, function (data) {
         ok&&ok(data)
      })
    }
  }
};
export  default  commom



import Vue from 'vue';
const commom = {
  install() {
    Vue.prototype.getLoginUser = (loginName) => {
      return new Promise((resolve, reject) => {
        this.axiosGet('/user/' + loginName).then((data) => {
          resolve(data.data);
        })
      })
    }
  }
}
export default commom;

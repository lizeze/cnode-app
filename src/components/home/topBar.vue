<template>
  <div class="topBar clearfix">
    <div class="logo">
      <a href="#">
        <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt="">
      </a>
    </div>
    <div class="searchBox "><input type="text"></div>
    <nav>

      <ol>
        <li v-for="item in navList">
          <a href="#">{{item.text}}</a>
        </li>


      </ol>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "topBar",
    data: function () {
      return {
        navList: [{text: '首页'}, {text: '新手入门'}, {text: 'API'}, {text: '关于'}, {text: '注册'}, {text: '登陆'}]

      }
    }
  }
</script>

<style scoped>

  .topBar {
    background: #444444;
    height: 47px;
    /*width: 1000px;*/
  }

  .topBar .logo {
    margin-left: 67px;
    float: left;
    padding: 4px;
  }

  .topBar .logo a img {
    height: 34px;
    width: 120px;
  }

  .topBar .searchBox {
    float: left;
    width: 229px;
    margin-top: 10px;
    margin-left: 23px;

  }

  .topBar .searchBox input {
    padding: 3px 5px 3px 22px;
    color: #666;
    border: 0;
    width: 100%;
    border-radius: 27px;
    height: 23px;
    background: url("https://static2.cnodejs.org/public/images/search.e53b380a.hashed.png") 4px 4px no-repeat #888;

  }

  .topBar .searchBox input:focus {
    background-color: #fff;
    outline: -webkit-focus-ring-color auto 0px;
  }

  .topBar nav {
    margin: 16px auto;
    text-align: center;
    padding: 10px auto;
    float: right;
    margin-right: 60px;
    height: 100%;
  }

  .topBar nav ol li {
    float: left;
    margin-left: 30px;
    color: #CACACA;
    font-size: 13px;
    font-weight: bold;
  }

  .topBar nav ol li a:hover {

    color: #fff;
  }
</style>

<template>
  <div>

    <div class="topBar">
      <ol class="clearfix">
        <li v-for="item in navList">
          <a v-on:click="changeNav(item)" v-bind:class="{topBarActive:active==item.id}" href="#">{{item.text}}</a>
        </li>

      </ol>

    </div>
    <section>
      <ol>
        <li class="clearfix">
          <div class="portrai">
            <a href="#">
            <img src="https://avatars3.githubusercontent.com/u/45624434?v=4&s=120" alt="">
            </a>
          </div>
          <div class="count">
            <span class="leftCount">11</span><span class="count_seperator">/</span><span class="rightCount">222</span>
          </div>
        </li>


      </ol>
    </section>

  </div>
</template>

<script>
  export default {
    name: "MainContent",
    methods: {
      changeNav: function (item) {

        this.active = item.id;
      }

    },
    data: function () {
      return {
        active: 0,
        navList: [

          {text: '全部', id: 0},
          {text: '精华', id: 1},
          {text: '分享', id: 2},
          {text: '问答', id: 3},
          {text: '招聘', id: 4},
          {text: '客户端测试', id: 5},

        ]

      }
    }
  }
</script>

<style scoped>


  .topBar {

    border: 1px solid #f6f6f6;
    border-radius: 2px;
    background: #F6F6F6;
  }

  .topBar ol li {
    font-weight: bold;
    color: #80bd01;
    float: left;
    font-size: 14px;
    margin-left: 24px;
    padding: 6px;

  }

  .topBarActive {
    background: #80bd01;
    color: #fff;
    padding: 3px 4px;
    border-radius: 3px 3px 0px 0px;
  }

  section ol li {

    background: #FFFFFF;
    padding: 8px;
    padding-top: 10px;
    border: 1px solid #F0F0F0;

  }

  section ol li .portrai {
    margin-left: 8px;
    float: left;
  }

  section ol li .portrai  a img {
    display: inline;
    height: 30px;
    width: 30px;
  }

  section ol li .count {
    float: left;
    margin: 4px;
    font-weight: bold;
  }

  section ol li .count .leftCount {
    font-size: 14px;

    color: #987FBF;
  }

  section ol li .count .count_seperator {
    /*margin: 0 px;*/

    font-size: 10px;
  }

  section ol li .count .rightCount {
    color: #C1B9B5;
    font-size: 12px;
  }
</style>

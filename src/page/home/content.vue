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
        <li class="clearfix" v-for="item in topicList">
          <div class="portrai">
            <a href="#">
              <img v-bind:src="item.author.avatar_url" alt=""/>
            </a>
          </div>
          <div class="content">
            <span class="leftCount">{{item.reply_count}}</span><span class="count_seperator">/</span><span
            class="rightCount">{{item.visit_count}}</span>
            <span v-if="item.top" class="tab top">置顶</span>
            <span v-if="!item.top" class="tab topic ">
               {{getTab(item.tab)}}

            </span>

            <a class="title" href="#">{{item.title}}</a>
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
      },
      getTab: function (tab) {

        switch (tab) {

          case  "ask" :
            return '问答'
          case  "share" :
            return '共享'
          case  "good" :
            return '精华'
          case "job":
            return '工作'
        }
      }

    }
    ,
    mounted: function () {
      let _ = this;
      this.axiosGet('topics?pageNumber=1&limit=20', function (data) {

        _.topicList = data.data.data;
        console.log(data)
      })
    }
    ,
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
        ],
        topicList: []
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
    border-top: none;

  }

  section ol li .portrai {
    margin-left: 8px;
    float: left;
  }

  section ol li .portrai a img {
    display: inline;
    height: 30px;
    width: 30px;
  }

  section ol li .content {
    float: left;
    margin: 4px;
    margin-left: 13px;
    font-weight: bold;
  }

  section ol li .content .leftCount {
    font-size: 14px;

    color: #987FBF;
  }

  section ol li .content .count_seperator {
    /*margin: 0 px;*/

    font-size: 10px;
  }

  section ol li .content .rightCount {
    color: #C1B9B5;
    font-size: 12px;
  }

  .title {
 font-size: 16px;
    line-height: 30px;
    color: #333;
  }

  .title:hover {

    text-decoration-line: underline;
  }


  section ol li .content .tab {
    font-size: 12px;
    padding: 2px 4px;
    font-weight: bold;
    color: #fff;
    border-radius: 3px;

  }

  .topic {
    background: #999;
  }

  .top {

    background: #80bd01;
  }
</style>

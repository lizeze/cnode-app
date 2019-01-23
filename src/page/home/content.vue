<template>
  <div>
    <div class="topBar">
      <ol class="clearfix" style="list-style: none">
        <li v-for="item in navList" :key="item.id">
          <a v-on:click="changeNav(item)" v-bind:class="{topBarActive:active==item.id}" href="#">{{item.text}}</a>
        </li>
      </ol>
    </div>
    <section>
      <ol style="list-style: none">
        <li class="clearfix" v-for="item in topicList" :key="item.id">
          <div class="portrai">
            <a href="#">
              <img v-bind:src="item.author.avatar_url" alt=""/>
            </a>
          </div>
          <div class="content">
            <div style="width: 60px"><span class="leftCount">{{item.reply_count}}</span><span
              class="count_seperator">/</span><span
              class="rightCount">{{item.visit_count}}</span>
            </div>

            <span v-if="item.top" class="tab top">置顶</span>
            <span v-if="!item.top" class="tab topic ">
               {{getTab(item.tab)}}

            </span>

            <router-link class="title" v-bind:title="item.title" :to="{name:'detail',params:{id:item.id}}">
              {{item.title}}
            </router-link>

          </div>

        </li>


      </ol>
    </section>
 

  </div>
</template>

<script>
  export default {
    name: 'MainContent',
    methods: {
      changePage (item) {
        this.loadData(item);
      },
      loadData (pageIndex) {
        this.axiosGet('topics?pageNumber=' + pageIndex + '&limit=50').then((data) => {
          this.topicList = data.data;
        })
      },
      changeNav (item) {
        this.active = item.id;
      },
      getTab (tab) {
        switch (tab) {
          case 'ask' :
            return '问答'
          case 'share' :
            return '共享'
          case 'good' :
            return '精华'
          case 'job':
            return '招聘';
        }
      }
    },
    mounted () {
      this.loadData(1);
    },
    data () {
      return {
        active: 0,
        navList: [
          {text: '全部', id: 0},
          {text: '精华', id: 1},
          {text: '分享', id: 2},
          {text: '问答', id: 3},
          {text: '招聘', id: 4},
          {text: '客户端测试', id: 5}
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
    width: 79%;

  }

  section ol li:hover {

    background: #f5f5f5
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
    word-break: keep-all; /* 不换行 */
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis;
    width: 84%;
    text-align: left;
  }

  section ol li .content div {
    display: inline-block;
  }

  section ol li .content div .leftCount {
    font-size: 14px;

    color: #987FBF;
  }

  section ol li .content div .count_seperator {
    /*margin: 0 px;*/

    font-size: 10px;
  }

  section ol li .content div .rightCount {
    color: #C1B9B5;
    font-size: 12px;
  }

  .title {
    font-size: 16px;
    line-height: 30px;
    color: #333;
    text-overflow: ellipsis;

  }

  .title:hover {

    text-decoration-line: underline;
  }

  section ol li .content .tab {
    font-size: 12px;
    padding: 4px 4px 4px 6px;
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

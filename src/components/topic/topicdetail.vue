<template>
  <div class="warpper clearfix">
    <div class="content">
      <div class="title">
        <span class="top">置顶</span>
        {{article.title}}
        <div class="describe">
          <span class="item"></span>
          发布于{{DateMinus(article.create_at)}}天前
          <span class="item"></span>
          作者{{article.author.loginname}}
          <span class="item"></span>
          {{article.visit_count}}次浏览
          <span class="item"></span>最后一次编辑9天前
        </div>
        <div class="border1px"></div>
      </div>
      <article class="article" v-html="article.content"></article>
    </div>
    <div class="panels">
    </div>
  </div>
</template>
<script>
export default {
  name: 'topicdetail',
  props: {
    article: {
      type: Object
    }
  },
  methods: {
    DateMinus(start) {
      let sdate = new Date(start);
      let now = new Date();
      let days = now.getTime() - sdate.getTime();
      let day = parseInt(days / (1000 * 60 * 60 * 24));
      return day;
    }
  }
};
</script>
<style scoped>
.title {
  text-align: left;
  padding: 10px;
  font-size: 22px;
  font-weight: 700;
  vertical-align: bottom;
  border-bottom: 1px solid #e5e5e5;
}
.title .top {
  padding: 2px 4px;
  background: #80bd01;
  font-size: 12px;
  color: #fff;
  font-weight: 700;
}

.title .describe {
  font-size: 12px;
  color: rgb(131, 131, 131);
  margin-top: 14px;
  margin-bottom: 27px;
}

.title .describe .item {
  margin-right: 4px;
}

.title .describe .item:before {
  content: "•";
}

.content {
  text-align: left;
  background: #fff;
  width: 73%;
  float: left;
}

.article {
  padding: 0 20px;
  margin: 0 10px;
}

.article >>> .markdown-text:first-child {
  margin-top: 0px;
}

.article >>> .markdown-text img {
  cursor: pointer;
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  border: 0;
}

.article >>> .markdown-text p {
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
  line-height: 2em;
  margin: 1em 0;
}

.article >>> .markdown-text >>> ol,
ul {
  padding: 0;
  margin: 0 0 10px 25px;
}
.article >>> div pre.prettyprint {
  font-size: 14px;
  border-radius: 0;
  padding: 0 15px;
  border: none;
  margin: 20px -10px;
  border-width: 1px 0;
  background: #f7f7f7;
  -o-tab-size: 4;
  -moz-tab-size: 4;
  tab-size: 4;
}
.article >>> pre code {
  color: inherit;
  white-space: pre-wrap;
  background-color: transparent;
  line-height: 2em;
}
</style>

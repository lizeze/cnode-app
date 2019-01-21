<template>
  <div class="warpper">
    <div class="title">
      <span class="top">置顶</span>
      {{article.title}}
      <div class="describe">
        <span class="item"></span> 发布于{{DateMinus(article.create_at)}}天前
        <span class="item"></span>22
        <span class="item"></span>22
        <span class="item"></span>22¬
      </div>
      </div>
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
        article: {}
      }
    },
    created: function () {
      let _ = this;
      this.axiosGet('/topic/' + this.$route.params.id, function (data) {
        _.article = data.data.data;
        console.log(_.article)
      })
    },methods:{
      DateMinus(start){
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
  .warpper {
  }
  .title {
    text-align: left;
    padding: 10px;
    font-size: 22px;
    font-weight: 700;
    vertical-align: bottom;
  }
  .title .top {
    padding: 2px 4px;
    background: #80bd01;
    font-size: 12px;
    color: #fff;
    font-weight: 700;
  }
  .title .describe{
    font-size: 12px;
  }
  .title .describe .item:before{
    content: '•';
  }
</style>

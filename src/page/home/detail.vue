<template>
  <div class="warpper clearfix">
    <div class="content">
      <topicDetail  :article=article ></topicDetail>
    </div>
    <div class="panels">
      <div class="panel">
        <author :user-info="userInfo"></author>
      </div>
      <div class="panel">
        <othertopic   @title-click='titleClick' :user-info="userInfo"></othertopic>
      </div>
      <div class="panel">
        <noreply :user-info="userInfo"></noreply>
      </div>
    </div>
  </div>
</template>
<script>
import Noreply from '@/components/noreply/noreply';
import Author from '@/components/author/author';
import Othertopic from '@/components/author/othertopic';
import topicDetail from '@/components/topic/topicdetail'
export default {
  components: {Othertopic, Author, Noreply, topicDetail},
  data () {
    return {
      article: {
        author: {
          loginname: ''
        }
      },
      userInfo: {}
    };
  },
  created () {
    this.loadTopic(this.$route.params.id, true);
  },
  methods: {
    titleClick (id) {
      this.loadTopic(id, false);
    },
    loadTopic (id, flg) {
      this.axiosGet('/topic/' + id).then(data => {
        this.article = data.data;
        if (flg) {
          this.axiosGet('/user/' + this.article.author.loginname).then((user) => {
            this.userInfo = user.data;
          });
        }
      });
    },
    DateMinus (start) {
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
  margin-left: 50px;
}

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
.panels {
  float: left;
  margin-left: 15px;
}

.panels .panel {
  width: 300px;
  margin-bottom: 20px;
}
</style>

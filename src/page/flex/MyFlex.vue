<template>
    <div class="box">
      <div class="content">
          <div class="header">
              <ul class="type-list">
                  <li :class="{'active':item.id==currentType}" class="type-item" v-for="(item,i) in typeList" :key="i"> 
                      <a  @click.stop.prevent="selectType(item.id)"  href='#'>{{item.name}}</a></li>
              </ul>
          </div>
          <div class="topic-warpper">
             <ul class="topic-list">
                 <li v-for="item in topicList" :key="item.id" class="topic-item">
                      <div class="user_avatar">
                          <img   width="30" height="30"  :src="item.author.avatar_url" alt="touxiang">
                      </div>
                      <div class="count">
                         <span class="reply">{{item.reply_count}}</span>
                         <label class="label">/</label>
                         <span class="visit">{{item.visit_count}}</span>
                      </div>
                      <tag></tag>
                     {{item.title}}
                 </li>
             </ul>
          </div>
      </div>
      <div class="panels">33333</div>
    </div>
    
</template>
<script>
import Tag from '@/components/tag/tag'
export default {
  name: 'MyFlex',
  components: { Tag },
  data () {
    return {
      typeList: [],
      currentType: 1,
      topicList: []
    }
  },
  created () {
    this.axiosGetDev('/topic/types').then((data) => {
      this.typeList = data.data;
    })
    this.loadData(1);
  },
  methods: {
    selectType (id) {
      this.currentType = id;
    },
    loadData (pageIndex) {
      this.axiosGet('topics?pageNumber=' + pageIndex + '&limit=50').then((data) => {
        this.topicList = data.data;
      })
    }
  }
}
</script>
<style scoped>
.box{
    display: flex;
}
.box .content{
    background: #F6F6F6;
    flex: 0  0 100%;
    margin: 13px 4px 0px 64px;
}
.box .content .header{
    color: #8EBA39;
    font-size: 14px;
    background: #F6F6F6;
    padding: 10px;
    border-radius: 3px 3px 0 0;
  

}
.header .type-list{
    display: flex;
}
.type-list .type-item{
    padding:  3px 4px;
    margin-right: 10px;
    font-weight: 500;

}
.type-list .active{
    background-color: #80bd01;
    color: #fff;
    padding: 3px 4px;
    border-radius: 3px;
}
.type-list .type-item a:hover{
       color: #005580;
}
.type-list .active a:hover{
       color: #fff;
}
.topic-warpper .topic-list .topic-item{
    display: flex;
    padding: 4px;
    border-bottom: 1px solid #F0F0F0;
}
.topic-warpper .topic-list .topic-item .count{
    font-size: 0;
    height: 29px;
    line-height: 29px;
    margin-left: 4px;
}
.topic-warpper .topic-list .topic-item .count .reply,.visit,.label{
    font-size: 14px;
}
.topic-warpper .topic-list .topic-item .count .reply{
    color:  #9e78c0;
}
</style>

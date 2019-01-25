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
                       <div class="tag-warpper">
                        <tag :tab="item.tab" :good="item.good" :top="item.top"></tag>
                       </div>
                     <div class="title" :title="item.title">
                         <a href="#"> {{item.title}}</a>
                     </div>
                     <div class="last-reply">
                        
                        <div class="avatar">
                           <img :src="item.author.avatar_url" alt="头像" width="18" height="18">
                          </div> 
                          <div  class="time">15小时前</div> 
                           
                     </div> 
                 </li>
             </ul>
          </div>
      </div>
      <div class="panels">
         <div class="panel">
              <author :userInfo="userInfo"></author>
         </div>
         <div class="panel">
            <noreply></noreply>
         </div>
      </div>
    </div>
    
</template>
<script>
import Tag from '@/components/tag/tag';
import author from '@/components/author/author';
import noreply from '@/components/noreply/noreply';
export default {
  name: 'MyFlex',
  components: { Tag, author, noreply },
  data () {
    return {
      typeList: [],
      currentType: 1,
      topicList: [],
      userInfo: {}
    }
  },
  created () {
    this.axiosGetDev('/topic/types').then((data) => {
      this.typeList = data.data;
    })
    this.loadData(1);
    this.axiosGet('/user/lizeze').then((user) => {
      this.userInfo = user.data;
    })
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
    margin: 17px 4px 0px 70px;
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
.topic-warpper .topic-list {
    background: #fff;
}
.topic-warpper .topic-list .topic-item{
    display: flex;
    border-bottom: 1px solid #F0F0F0;
    justify-content:center;
    align-self:center;
   height: 50px;
   line-height: 50px;
   padding: 0px 18px;
}
.topic-warpper .topic-list .topic-item .user_avatar{
	display:flex;
	align-items:center; 

}
.topic-warpper .topic-list .topic-item .count{
    font-size: 0;
    margin-left: 5px;
    width: 70px;
}
.topic-warpper .topic-list .topic-item .count .reply,.visit,.label{
    font-size: 14px;
}
.topic-warpper .topic-list .topic-item .count .reply{
    color:  #9e78c0;
}
.topic-warpper .topic-list .topic-item .count .visit{
    color: #B4B4B4;
}
.topic-warpper .topic-list .topic-item .tag-warpper{
  margin:0px  5px;
}
.topic-warpper .topic-list .topic-item .title{
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    margin-top: 2px;
    max-width: 650px;
    font-size: 16px;
}
.topic-warpper .topic-list .topic-item:hover{
      background: #f5f5f5
}
.topic-warpper .topic-list .topic-item .title a:hover{
    text-decoration: underline;
}
.topic-warpper .topic-list .topic-item  .last-reply{
  margin-left: auto; 
  display: flex;
}
.topic-warpper .topic-list .topic-item  .last-reply .avatar{
    display:inline-block;

}
.topic-warpper .topic-list .topic-item  .last-reply .time{
    color: #798086;
    text-align: right;
    min-width: 50px;
    white-space: nowrap;
    font-size: 12px;
    margin-left: 14px;
}
.panels{
    margin-left: 20px;
    margin-top: 20px;
}
.panels .panel{
    width: 290px;
}
</style>

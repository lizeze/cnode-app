<template>
  <div class="noreply">
    <div class="header">
      无人回复的话题
    </div>
    <div class="content">
      <ul>
        <li class="content-item" v-for="(items,i) in topicData" :key="i"> 
          <a href="#"> {{items.title}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'noreply',
    data () {
      return {
        topicData: {
          type: Array
        }
      }
    },
    created () {
      this.axiosGetDev('/topic/noreply').then((data) => {
        this.topicData = data.data;
      })
    }
  }
</script>
<style scoped>
  .noreply {
    background: #fff;
  }

  .noreply .header {
    background: #F6F6F6;
    padding: 10px;
    text-align: left;
    color: #444;
    font-size: 13px;
    border-radius: 3px 3px 0 0
  }

  .content {

    max-width: 97%;

  }

  .content-item {

    list-style: none;
    font-size: 14px;
    color: rgb(119, 128, 135);
    width: 100%;
    line-height: 30px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    margin-left: 8px;
    margin-top: 8px;
    font-weight: 500;

  }
</style>

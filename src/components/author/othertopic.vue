<template>
  <div class="othertopic">
      <div class="header">
        作者其他话题
      </div>
    <div class="content">
      <ul>
        <li class="content-item" v-for="item in userInfo.recent_topics" :key="item.id">
          <a   href="#" @click.stop.prevent="$emit('title-click',item.id)"> {{item.title}}</a>
        </li>
      </ul>
    </div>

  </div>

</template>

<script>
    export default {
      name: 'othertopic',
      props: {
        userInfo: {
          type: Object
        }
      },
      methods: {
        open (id) {
          this.$router.push({name: 'detail', params: {id: id}})
        },
        getStatus (urlStr) {
          var urlStrArr = urlStr.split('/')
          return urlStrArr[urlStrArr.length - 1]
        }
      },
      watch: {
        '$route' (route) {
          this.$router.go(0)
        }
      }
    }
</script>

<style scoped>
  .othertopic{
    background: #fff;
  }
  .header {
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

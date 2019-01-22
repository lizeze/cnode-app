<template>
  <div class="author">
    <div class="header">
      个人信息
    </div>
    <div class="profile">
      <div class="usercard">
        <div class="avatar">

          <a href="#">
            <img style="width:48px;height: 48px" :src="userInfo.avatar_url" alt="头像">
          </a>
        </div>

        <div class="loginName">
          <a href="">
            {{userInfo.loginname}}
          </a>
        </div>

        <div class="score"> 积分：{{userInfo.score}}</div>
        <p class="signature">“ 这家伙很懒，什么个性签名都没有留下。”</p>
      </div>


    </div>


  </div>
</template>

<script>
  export default {
    name: "author",
    props: {
      userInfo: {
        type: Object,

      }
    },
    data() {
      return {}

    },
    created() {

    }
  }
</script>

<style scoped>
  .author {

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

  .usercard {

    text-align: left;
    margin: 10px 15px;
    vertical-align: top;

  }

  .loginName, .avatar {
    display: inline-block;
    height: 48px;
    line-height: 48px;
  }

  .profile {
    width: 100%;
  }

  .loginName {
    vertical-align: top;
    color: #778087;
    font-size: 16px;
    text-overflow: ellipsis;
    margin-left: 14px;
    font-weight: 600;
  }

  .score {

    font-size: 14px;
    font-weight: 500;
    line-height: 2em;
  }

  .signature {
    font-style: italic;
    line-height: 2em;
    font-size: 13px;
  }
</style>

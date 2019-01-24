<template>

  <div class="container clearfix">
    <div class="contents">
      <MainContent></MainContent>
    </div>
    <div class="cards">
      <div class="card">
        <div class="inner">
          <p> CNode：Node.js专业中文社区</p>
          <div>您可以 <a href="#">登陆</a> 或 <a href="#">注册</a>,也可以</div>
          <a href="#">
            <span> 通过 GitHub 登录</span>
          </a>
        </div>
      </div>
      <div class="card">
        <noreply></noreply>
      </div>
    </div>
  </div>
</template>
<script>
  import MainContent from './content';
  import Noreply from '../../components/noreply/noreply';
  export default {
    name: 'index',
    components: {Noreply, MainContent},
    data () {
      return {
        userInfo: {}
      }
    }
  }
</script>
<style scoped>
  .container {
    background: #E1E1E1;
  }
  .contents {
    width: 70%;
    float: left;
    margin-left: 66px;
    margin-top: -16px;
    background: #FFFFFF;
  }

  .cards {
    margin-left: 20px;
    width: 290px;
    float: left;
    margin-top: -26px;

  }

  .cards .card {
    padding: 10px;
    border-radius: 0 0 3px 3px;
    font-size: 13px;
    word-break: break-word;
  }

  .cards .card .inner {
    padding: 10px;
    border-radius: 0 0 3px 3px;
    background: #FFFFFF;

  }

  .cards .card .inner div {
    text-align: left;
    margin-top: 10px;
    margin-bottom: 9px;
  }

  .cards .card .inner p {
    font-weight: bold;
    font-size: 14px;
    text-align: left;
  }

  .cards .card .inner div a {
    color: #798086;
  }

  .cards .card .inner a span {
    padding: 6px 10px;
    letter-spacing: 2px;
    color: #fff;
    font-weight: bold;
    background: #5bc0de;
    border-radius: 4px;
    line-height: 2em;

  }

  .cards .card .inner a span:hover {
    color: #fff;
    background-color: #2f96b4;
  }

  .cards .card .header {
    text-align: left;
    background: #F6F6F6;
    padding: 10px 12px;

    color: #444;
  }

  .cards .card .inner .unstyled {

    text-align: left;

    color: #333;
    max-width: 270px;
  }

  .cards .card .inner .unstyled li {

    font-size: 14px;

  }

  .cards .card .inner .unstyled li div {
    color: #778087;
    max-width: 270px;
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: bold;
  }

  .cards .card .inner .unstyled li a:hover {
    text-decoration-line: underline;
  }

  li {

    list-style: none;
  }
</style>

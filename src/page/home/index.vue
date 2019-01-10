<template>

  <div class="container clearfix">
    <div class="contents">
      <MainContent></MainContent>

      <pagination  ></pagination>

    </div>
    <div class="cards">2222</div>


  </div>

</template>

<script>


  import MainContent from "./content";
  import Pagination from "../../components/home/pagination";

  export default {
    name: "index",
    components: {Pagination, MainContent},
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

    float: left;
  }

</style>

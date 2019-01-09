<template>
  <div>

    <top-bar></top-bar>
    <main class="container clearfix">
      <div class="content">
        <MainContent></MainContent>
      </div>
      <div class="cards">222</div>

    </main>

  </div>


</template>

<script>
  import TopBar from "../../components/home/topBar";
  import MainContent from "./content";


  export default {
    name: "index",
    components: {MainContent, TopBar}
  }
</script>

<style scoped>

  .container {
    width: 100%;
    background: #E1E1E1;
  }

  .content {
    margin-left: -119px;
     margin-top: 10px;
    float: left;

  }

  .cards {

    float: left;
  }


</style>

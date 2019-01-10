<template>

   <div class="container clearfix">
     <div class="contents">
        <MainContent></MainContent>

     </div>
  <div class="cards">2222</div>




   </div>


</template>

<script>


  import MainContent from "./content";
  export default {
    name: "index",
    components: {MainContent},
  }
</script>

<style scoped>


  .container{

    background: #E1E1E1;
  }
  .contents{
     width: 70%;
     float: left;
    margin-left: 66px;
    margin-top: 14px;
  }



   .cards{

     float: left;
   }

</style>

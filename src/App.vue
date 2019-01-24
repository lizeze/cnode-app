<template>
  <div id="app">
  <top-bar></top-bar>
    <router-view   />
  </div>
</template>

<script>
  import TopBar from './components/home/topBar';
  export default {
    name: 'App',
    components: {TopBar}
  }
</script>

<style>
 

  * {

    margin: 0px;
    padding: 0px;

  }

  .clearfix:after {
    content: '';
    display: block;
    clear: both;
  }



  a {
    text-decoration: none;
    color: inherit;
  }

  body{
  background: #E1E1E1;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
  }
  li{
    list-style: none;
  }
</style>

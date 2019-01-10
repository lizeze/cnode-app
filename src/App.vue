<template>
  <div id="app">
  <top-bar></top-bar>
    <router-view/>
  </div>
</template>

<script>
  import TopBar from "./components/home/topBar";
  export default {
    name: 'App',
    components: {TopBar}
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  * {

    margin: 0px;
    padding: 0px;

  }

  .clearfix:after {
    content: '';
    display: block;
    clear: both;
  }

  li {

    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body{

    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
  }
</style>

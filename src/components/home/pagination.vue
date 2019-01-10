<template>
  <div class="container">

    <ul class="clearfix">

      <li v-for="(item,index) in numbers" v-bind:class="{active:item==curren}">

        <a v-bind:class="{active:curren==item}" href="#">{{item==0?'«':item<0? '»':item}}</a>
      </li>


    </ul>


  </div>
</template>

<script>
  export default {
    name: "pagination",
    data: function () {
      return {
        curren: 4,
        numbers: [0, 1, 2, 3, 4,5,6,7,8,9,10,11,12, -1]


      }
    }
  }
</script>

<style scoped>

  .container {
    background: #FFFFFF;

  }

  ul {
    margin-top: 20px;
    margin-left: 20px;
    font-size: 14px;
    color: #798086;

  }

  .active {
    color: #80bd01;
  }

  ul li {
    float: left;
    line-height: 2em;
   font-weight: inherit;
  }

  ul li a {
    border: 1px solid #DDDDDD;
    padding: 6px 9px;

  }

  ul > li:first-child > a {
    border-left-width: 1px;

    border-bottom-left-radius: 4px;

    border-top-left-radius: 4px;

  }

  ul > li:last-child > a {
    -webkit-border-top-right-radius: 4px;
    border-top-right-radius: 4px;
    -webkit-border-bottom-right-radius: 4px;
    border-bottom-right-radius: 4px;
    -moz-border-radius-topright: 4px;
    -moz-border-radius-bottomright: 4px;
  }

  ul li a:hover {
    background-color: #f5f5f5
  }

  .active a, .disable a {

    cursor: default;
  }
</style>

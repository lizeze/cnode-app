<template>
   <div class="tag-warpper">
      <span class="tag" :class="{good:tab==='good'||tab==='top'}">{{tabText}}</span> 
    </div>    
</template>
<script>
export default {
  name: 'tag',
  props: {
    tab: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      tabText: ''
    }
  },
  created () {
    switch (this.tab) {
      case 'ask' :
        this.tabText = '问答';
        break;
      case 'share' :
        this.tabText = '共享';
        break;
      case 'good' :
        this.tabText = '精华';
        break;
      case 'job':
        this.tabText = '招聘';
        break;
    }
  }
}
</script>
<style scoped>
.tag{
  background: #E5E5E5;
   padding: 2px 4px;
   font-size: 12px;
}
.good{
    padding: 2px 4px;
    border-radius: 3px;
    color: #fff;
    font-size: 12px;
}
</style>


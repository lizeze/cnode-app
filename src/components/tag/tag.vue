<template>
   <div class="tag-warpper">
      <span class="tag " :class="{good:good||top}">{{tabText}}</span> 
    </div>    
</template>
<script>
export default {
  name: 'tag',
  props: {
    tab: {
      type: String,
      default: ''
    },
    good: {
      type: Boolean
    },
    top: {
      type: Boolean
    }
  },
  data () {
    return {
      tabText: ''
    }
  },
  created () {
    if (this.top) {
      this.tabText = '置顶';
      return;
    }
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
    background-color: #e5e5e5;
    color: #999;
    border-radius: 3px;
    padding: 2px 4px;
    font-size: 12px;
}
.good{
    padding: 2px 4px;
    border-radius: 3px;
    color: #fff;
    font-size: 12px;background: #8EBA39;
    color: #fff;
}
 
</style>


<template>
  <div class="footer">
    <router-link to="/" tag="div" exact>首页</router-link>
    <router-link to="/classify" tag="div">分类</router-link>
    <router-link to="/mine" tag="div">我的</router-link>    
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'footer'
  }
</script>

<style lang="scss">
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 48px;
    line-height: 48px;
    display: flex;
    div {
      flex: 1;
    }
  }
</style>

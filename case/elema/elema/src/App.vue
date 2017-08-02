<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <router-link class="tab-item" to="/goods">商品</router-link>
      <router-link class="tab-item" to="/ratings">评价</router-link>
      <router-link class="tab-item" to="/seller">商家</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header.vue'

  const ERR_OK = 0

  export default {
    data () {
      return {
        seller: {}
      }
    },
    created () {
      this.$http.jsonp('http://vuedata.com/api.php').then((response) => {
        response = response.body
        console.log(response)
        if (response.error === ERR_OK) {
          this.seller = response.data
        }
      })
    },
    components: {
      'v-header': header
    }
  }
</script>

<style>
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
  }

  .tab-item {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: rgb(77, 85, 93);
    border-bottom: 1px solid #f1f1f1;
  }

  .router-link-active {
    color: red;
  }
</style>

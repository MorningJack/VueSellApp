<style type="text/css" lang="scss">
  // @import '../assets/scss/_function.scss';
  // pxToRem 实际像素转rem
  #page1 {
    width: pxToRem(200px);
  }
</style>

<template>
  <div>
    <div id="page1">我是分类页面page1</div>
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <ul>
        <li v-for="(item,index) in list">{{ item }} {{index}}</li>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script type="text/javascript">
  import { Loadmore } from 'mint-ui'
  export default {
    components: {
      mtLoadmore: Loadmore
    },
    data () {
      return {
        list: [
          '11111111111111111',
          '11111111111111111',
          '11111111111111111',
          '11111111111111111',
          '11111111111111111',
          '11111111111111111',
          '11111111111111111',
          '11111111111111111',
          '11111111111111111',
          '11111111111111111',
          '11111111111111111',
          '11111111111111111',
          '11111111111111111',
          '11111111111111111',
          '11111111111111111',
          '11111111111111111',
          '11111111111111111',
          '11111111111111111',
          '11111111111111111',
          '11111111111111111',
          '11111111111111111',
          '11111111111111111',
          '11111111111111111',
          '11111111111111111',
          '11111111111111111',
          '11111111111111111',
          '11111111111111111',
          '11111111111111111',
          '11111111111111111',
          '11111111111111111',
          '11111111111111111',
          '11111111111111111',
          '11111111111111111',
          '11111111111111111',
          '11111111111111111'
        ],
        allLoaded: false
      }
    },
    methods: {
      loadTop: function () {
        console.log('下拉')
        // 处理数据
        this.$refs.loadmore.onTopLoaded()
      },
      loadBottom: function () {
        console.log('上拉')
        // 处理数据
        for (var i = 0; i < 30; i++) {
          this.list.push('1222222222222')
        }
        // 若数据已全部获取完毕 假如不需要加载了设置allLoaded 为true,阻止继续加载
        this.allLoaded = true
        this.$refs.loadmore.onBottomLoaded()
      }
    }
  }
</script>


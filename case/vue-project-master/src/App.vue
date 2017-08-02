<template>
  <div id="app">
    <view-box 
    :transitionName="name"
    :isShowBack="is_show_back"
    :isShowFooter="is_show_footer"
    ></view-box>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ViewBox from './components/ViewBox'
export default {
  name: 'app',
  components: {
    ViewBox
  },
  data () {
    return {
      name: '',
      is_show_back: '',
      is_show_footer: true
    }
  },
  created () {
    window.axios.post('/activities/banner').then(function (res) {
      console.log(res)
    }).catch(function (err) {
      console.log(err)
    })
    this.increment()
    // console.log(this.$store)
  },
  methods: {
    ...mapActions([
      'increment'
    ])
  },
  // 接着在父组件内
  // watch $route 决定使用哪种过渡
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      // 假如在首页不使用过渡效果
      if (toDepth === 2) {
        this.name = ''
        this.is_show_back = false
        this.is_show_footer = true
        if (fromDepth >= 3) {
          this.name = 'slideRight'
        }
      } else {
        this.is_show_back = true
        this.is_show_footer = false
        this.name = toDepth < fromDepth ? 'slideRight' : 'slideLeft'
      }
    }
  }
}
</script>

<style lang="scss">
/*
引入全局的自适应编译函数
 */
@import './assets/scss/_function.scss';

*{
  margin: 0;
  padding: 0;
}
html,body {
  width: 100%;
  height: 100%;
  color: #000;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  /*第三方库样式修改*/
  .mint-header {
    background: #fff;
    box-shadow: 0px 1px 1px 1px rgba(0,0,0,0.1);
    .mint-header-title {
      color: #000;
    }
  }  
}
#app>div {
  height: 100%;
}
</style>

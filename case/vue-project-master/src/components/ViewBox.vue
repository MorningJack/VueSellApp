<template>
  <div>
    <mt-header fixed title="demo">
      <mt-button v-if="isShowBack" @click="back" icon="back" slot="left">返回</mt-button>
      <mt-button v-else @click="showSideBar" slot="left">我的</mt-button>
    </mt-header>
    
    <transition :name="transitionName">
      <router-view id="viewBox"></router-view>
    </transition> 
    
    <!-- 侧边栏遮罩 -->
    <div v-if="is_show_shade" @click="hideSideBar" class="shade"></div>
    
    <!-- 侧边栏 -->
    <transition name="slide-fade"> 
      <router-view v-if="is_show_side_bar" name="sideBar"></router-view>
    </transition>
    
    <foot v-if="isShowFooter"></foot>
  </div>
</template>

<script type="text/javascript">
import { Header, Button } from 'mint-ui'
import Footer from './common/Footer'

export default {
  name: 'viewBox',
  components: {
    mtHeader: Header,
    mtButton: Button,
    foot: Footer
  },
  data () {
    return {
      is_show_side_bar: false,
      sideBarTransition: '',
      is_show_shade: false
    }
  },
  props: {
    transitionName: {
      type: String
    },
    isShowBack: {
      type: Boolean
    },
    isShowFooter: {
      type: Boolean
    }
  },
  methods: {
    back: () => {
      window.history.go(-1)
    },
    // 展示侧边栏
    showSideBar: function () {
      this.is_show_side_bar = true
      this.is_show_shade = true
    },
    // 隐藏侧边栏
    hideSideBar: function () {
      var _self = this
      this.is_show_side_bar = false
      setTimeout(function () {
        _self.is_show_shade = false
      }, 500)
    }
  },
  watch: {
    'is_show_side_bar': function () {
      console.log(this.sideBarTransition)
    }
  }
}
</script>

<style type="text/css"> 
  #viewBox {
    width: 100%;
    height: 100%;
  }
  .shade {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.2);
    z-index: 100;
  }
  /*页面左滑*/
  .slideLeft-enter-active,.slideLeft-leave-active {
    transition: all 0.5s;
  }
  .slideLeft-enter {
    transform: translateX(100%);
  }
  .slideLeft-leave-active {
    transform: translate(-100%);
  }
  /*页面右滑*/
  .slideRight-enter-active,.slideRight-leave-active {
    transition: all 0.5s;
  }
  .slideRight-enter {
    transform: translateX(-100%);
  }
  .slideRight-leave-active {
    transform: translate(100%);
  }
  #viewBox {
    margin-top: 40px;
  }

  /*侧边栏导航*/
  .slide-fade-enter-active {
    transition: all .6s ease;
  }
  .slide-fade-leave-active {
    transition: all .6s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for <2.1.8 */ {
    transform: translateX(-100%);
  }
  </style>

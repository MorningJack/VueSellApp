<style lang="scss">
  .side_bar {
    width: 60%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 101;
  }
</style>

<template>
  <div class="side_bar">
    <!-- <div class="side_bar_content"> -->
      侧边栏
    <!-- </div> -->
  </div>  
</template>

<script type="text/javascript">
  export default {
    name: 'sideBar',
    data () {
      return {

      }
    },
    // props: {
    //   is_show: {
    //     type: Function
    //   }
    // },
    methods: {
      close: function () {
        // this.is_show()
        this.$emit('close')
      }
    }
  }
</script>

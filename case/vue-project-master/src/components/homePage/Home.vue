<style type="text/css">
  
</style>

<template>
  <div>
  home
  <router-link to='/home/homePage1' tag="div">跳转到首页-page1</router-link>
  <input v-model="count" type="text" name="vuex">
  <button @click="add">add</button>
  </div>
</template>

<script type="text/javascript">
  import { mapMutations } from 'vuex'
  export default {
    data () {
      return {
        message: 'aaa'
      }
    },
    computed: {
      count: {
        get () {
          return this.$store.state.count
        },
        set (val) {
          console.log(val)
          this.transformMessage1(val)
        }
      }
    },
    methods: {
      ...mapMutations([
        'transformMessage1'
      ]),
      transformMessage (e) {
        this.transformMessage1(e.target.value)
        console.log(e.target.value)
      },
      add () {
        console.log(this.$store.state.count)
      }
    }
  }
</script>

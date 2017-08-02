<template>
  <div id="app">
    <h2>{{title}}</h2>
    <input v-model="newItem" @keyup.enter="addNew">
    <ul v-for="item in items" :class="{isFinish: item.state}" @click="todo(item)">
      <li>{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
  import Store from './store/store'

  export default {
    data () {
      return {
        title: 'toDoList',
        items: Store.fetch(),
        newItem: ''
      }
    },
    watch: {
      items: {
        handler: function (items) {
          Store.save(items)
        },
        deep: true
      }
    },
    methods: {
      todo: function (item) {
        console.log(item)
        item.state = !item.state
      },
      addNew: function () {
        if (this.newItem === '') {
          alert('请输入')
          return
        }
        this.items.push(
          {name: this.newItem, state: false}
        )
        this.newItem = ''
      }
    }
  }
</script>

<style>
  .isFinish {
    text-decoration: line-through;
    color: #000;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

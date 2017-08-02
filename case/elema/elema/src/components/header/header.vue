<template>
  <div>
    <div class="content-wrapper">
      <div class="avatar">
        <img width="=64" height="64" :src="seller.avatar">
        <div class="content">
          <div class="title">
            <span class="brand"></span>
            <span class="name">{{seller.name}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bulletin-warpper"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      seller: {
        type: Object
      }
    }
  }
</script>

<style>

</style>

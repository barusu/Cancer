<style>
  .wrapper {
    height: 100%;
  }
  .wrapper.index {
    background: url('../images/bg1.jpg') 50% -10px / cover repeat-y;
  }
  .main {
    height: 100%;
    min-height: 200px;
    margin: -1.8rem 0 0;
    padding: 1.8rem 0 0;
  }
</style>
<template>
  <div class="wrapper index">
    <xc-header></xc-header>
    <router-view class="main"></router-view>
  </div>
</template>
<script>
  import Header from 'components/header.vue';

  export default {
    filters: {},
    components: {
      'xc-header': Header
    },
    data () {
      return {}
    },
    beforeDestroy () {
    },
    methods: {
    }
  }
</script>

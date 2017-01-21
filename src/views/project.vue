<style>
  .wrapper.project {
    background: hsl(0,0%,90%) 50% -10px / cover repeat-y;
  }
</style>
<template>
  <div class="wrapper project">
    <xc-header></xc-header>
    <router-view></router-view>
  </div>
</template>
<script>
  import Header from 'components/header.vue';

  export default {
    components: {
      'xc-header': Header
    }
  }
</script>

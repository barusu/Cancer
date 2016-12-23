<style>
  .button-page {}
</style>

<template>
  <div class="button-page">
    <button class="btn" v-for="i in originalSin" v-html="i.en"></button>
  </div>
</template>

<script>
  import CONSTANTS from 'libs/constant.js';

  export default {
    data () {
      return {
        originalSin: CONSTANTS.ORIGINALSIN
      };
    },
    methods: {},
    components: {},
    ready () {},
    beforeDestroy () {},
  }
</script>

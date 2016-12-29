<style></style>

<template>
  <div class="wrapper">
    <xc-header :data="nav"></xc-header>
    <main>
      <h2>
        <img src="../images/logo.png">
      </h2>
    </main>
  </div>
</template>

<script>
  import Header from 'components/header.vue';
  import {NAV} from '../libs/const';

  export default {
    components: {
      'xc-header': Header
    },
    data () {
      return {
        nav: NAV
      };
    },
    created() {
      console.log(NAV);
    },
    beforeDestroy () {
    }
  }
</script>
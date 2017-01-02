<style>
  .wrapper {
    height: 100%;
  }
  main {
    min-height: 200px;
  }
</style>
<template>
  <div class="wrapper">
    <xc-header :data="nav"></xc-header>
    <main>
      <h2>
        <img src="../images/logo.png">
      </h2>
    </main>
    <xc-footer></xc-footer>
  </div>
</template>
<script>
  import Header from 'components/header.vue';
  import Footer from 'components/footer.vue';
  import {NAV} from '../libs/const';

  export default {
    filters: {},
    components: {
      'xc-header': Header,
      'xc-footer': Footer
    },
    data () {
      return {
        nav: NAV
      }
    },
    beforeDestroy () {
    },
    methods: {
    }
  }
</script>

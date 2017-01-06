<style>
  .wrapper {
    height: 100%;
    background: url('../images/bg1.jpg') 50% -10px / 100% auto repeat-y;
  }
  header {
    position: relative;
    background: inherit;
    background-position: 50% -100%;
    overflow: hidden;
  }
  header::before {
    content: "";
    position: absolute;
    top: -10px; left: -20px;
    display: block;
    width: 100%;
    height: 56px;
    padding: 0 20px;
    background: inherit;
    background-position: 50% 0;
    filter: blur(5px);
  }
  header::after {
    content: "";
    position: absolute;
    top: 0; left: 0;
    display: block;
    width: 100%;
    height: 36px;
    background: rgba(255,255,255,.4);
    z-index: 0;
  }
  header > div,
  header > nav {
    position: relative;
    z-index: 4;
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

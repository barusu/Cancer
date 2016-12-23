<style>
  .bread {
    padding: 0 1em;
    line-height: 2;
    font-size: 24px;
  }
</style>

<template>
  <main>
    <div class="content">
      <div class="bread">
        <span v-html="$route.name" class="green"></span>
      </div>
      <router-view class="content-body"></router-view>
    </div>
  </main>
  <xc-footer></xc-footer>
</template>

<script>
  import Footer from 'components/footer.vue';

  export default {
    data () {
      return {}
    },
    methods: {},
    components: {
      'xc-footer': Footer
    },
    ready () {},
    beforeDestroy () {},
  }
</script>

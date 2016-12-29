<style></style>

<template>
  <main>
    <h2>
      <img src="../images/logo.png">
    </h2>
    <h1>
      覆盖移动终端: {{ 3731700153 |  NumberSeparator }}
    </h1>
    <xc-footer></xc-footer>
  </main>
</template>

<script>
  import NumberSeparator from '../filters/number-separator';

  export default {
    filters: {
      NumberSeparator
    },
    components: {
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

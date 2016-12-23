<style>
  nav.chapter {
    position: relative;
    overflow: hidden;
    padding: 9px 0 10px;
    text-align: center;
    width: 100%;
    background: rgba(242,242,242,0.7);
  }
  ul.chapter-items {
    font-size: 0;
  }
  li.chapter-item {
    display: inline-block;
    font-size: 12px;
    padding: 0 1em;
    cursor: pointer;
  }
  li.chapter-item:first-child {
    padding-left: 0;
  }
  li.chapter-item:last-child {
    padding-right: 0;
  }
  li.v-link-active.chapter-item {
    color: #1871d7;
  }
</style>

<template>
  <main class="admin-page">
    <router-view class="admin-body"></router-view>
  </main>
</template>

<script>
  export default {
    data () {
      return {};
    },
    methods: {},
    components: {},
    ready () {},
    beforeDestroy () {},
  }
</script>

<style>
  .radio {
    cursor: pointer;
  }
  .radio > input {
    position: absolute;
    clip: rect(0,0,0,0);
    opacity: 0;
  }
  .radio > .i {
    position: relative;
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    box-shadow: 0 0 0 1px #ccc inset;
    background-color: #fff;
    vertical-align: middle;
    transition: all .2s cubic-bezier(.12,.4,.29,1.46) .1s;
  }
  .radio.s > .i {width: 12px; height: 12px;}
  .radio.l > .i {width: 16px; height: 16px;}
  .radio > .i::after {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    display: block;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    background-color: #14b4fc;
    transform: scale(0);
    opacity: 0;
    transition: all .2s cubic-bezier(.78,.14,.15,.86);
  }
  .radio.s > .i::after {top: 3px; left: 3px; width: 6px; height: 6px;}
  .radio.l > .i::after {top: 4px; left: 4px; width: 8px; height: 8px;}
  .radio > input:checked + .i::after {
    background-color: #14b4fc;
    box-shadow: none;
  }
  .radio > input:checked + .i::after {
    transform: scale(1);
    opacity: 1;
  }
</style>

<template>
  <label class="radio">
    <span v-html="msg"></span>
    <slot></slot>
    <span class="i"></span>
  </label>
</template>

<script>
  export default {
    data () {
      return {};
    },
    props: {
      msg: String
    },
    methods: {},
    computed: {},
    components: {},
    ready () {},
    beforeDestroy () {},
  }
</script>

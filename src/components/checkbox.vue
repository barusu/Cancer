<style>
  .checkbox {
    cursor: pointer;
  }
  .checkbox > input {
    position: absolute;
    clip: rect(0,0,0,0);
    opacity: 0;
  }
  .checkbox > .i {
    position: relative;
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius: 3px;
    box-shadow: 0 0 0 1px #ccc inset;
    background-color: #fff;
    vertical-align: middle;
    transition: all .2s cubic-bezier(.12,.4,.29,1.46) .1s;
  }
  .checkbox.s > .i {width: 13px; height: 12px;}
  .checkbox.l > .i {width: 17px; height: 16px;}
  .checkbox > .i::after {
    content: "";
    position: absolute;
    bottom: 3px;
    right: 4px;
    width: 4px;
    height: 8px;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    border-radius: 1px;
    transform: rotate(45deg) scale(0);
    transition: all .2s cubic-bezier(.12,.4,.29,1.46) .1s;
  }
  .checkbox.s > .i::after {bottom: 3px; right: 4px; width: 3px; height: 7px; border: 2px solid #fff; border-top: 0; border-left: 0;}
  .checkbox.l > .i::after {bottom: 3px; right: 5px; width: 4px; height: 9px; border: 3px solid #fff; border-top: 0; border-left: 0;}
  .checkbox > input:checked + .i {
    background-color: #14b4fc;
    box-shadow: none;
  }
  .checkbox > input:checked + .i::after {
    transform: rotate(45deg) scale(1);
  }
</style>

<template>
  <label class="checkbox">
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

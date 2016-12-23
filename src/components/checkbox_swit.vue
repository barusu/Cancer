<style>
  .swit {
    position: relative;
    display: inline-block;
    font-size: 12px;
    vertical-align: middle;
    font-family: HanHei SC,sans-serif;
    cursor: pointer;
  }
  .swit > input {
    position: absolute;
    clip: rect(0,0,0,0);
    opacity: 0;
  }

  .swit > .round {
    position: relative;
    display: inline-block;
    float: left;
    border-radius: .5em;
    width: 2em;
    height: 1em;
    background-color: #ddd;
    transition: background-color .3s cubic-bezier(.78,.14,.15,.86);
    font-size: 24px;
  }
  .swit.s > .round {
    font-size: 16px;
  }
  .swit.l > .round {
    font-size: 32px;
  }
  .swit .round > span {
    position: absolute;
    top: .125em;
    left: .125em;
    width: .75em;
    height: .75em;
    background-color: #fff;
    border-radius: 50%;
    transition: left .3s cubic-bezier(.78,.14,.15,.86);
    font-size: 1em;
  }
  .swit.led .round > span::after {
    position: absolute;
    left: 50%;
    top: 20%;
    content: '';
    display: block;
    width: 2px;
    height: 60%;
    margin-left: -1px;
    border-radius: 2px;
    background-color: #fff;
  }
  .swit.led.s .round > span::after {
    width: 4px;
    top: 4px;
    height: 4px;
    margin-left: -2px;
  }
  .swit.led.l .round > span::after {
    width: 4px;
    border-radius: 4px;
    margin-left: -2px;
  }
  .swit input:checked + .round {
    background-color: #14b4fc;
  }
  .swit input:checked + .round > span {
    left: 1.125em;
  }

  .swit > .rectangle {
    position: relative;
    display: inline-block;
    height: 2em;
    width: 6em;
    float: left;
    border-radius: 3px;
    overflow: hidden;
  }
  .swit .rectangle > span {
    position: absolute;
    left: -3em;
    display: inline-block;
    width: 9em;
    height: 2em;
    padding: 0;
    text-align: center;
    background-color: #fff;
    transition: left .3s ease-in-out;
  }
  .swit input:checked + .rectangle span {
    left: 0;
  }
  .swit .rectangle > span::before,
  .swit .rectangle > span::after {
    display: inline-block;
    width: 3em;
    height: 1em;
    padding: .5em 0;
    text-align: center;
    line-height: 1.2;
  }
  .swit .rectangle > span::before {
    content: attr(on);
    float: left;
    background-color: #14b4fc;
    color: #fff;
  }
  .swit .rectangle > span::after {
    content: attr(off);
    float: right;
    background-color: #ddd;
    color: #444;
  }
</style>

<template>
  <label class="swit">
    <slot></slot>
    <span :class="[ckType]">
      <span on="{{on}}" off="{{off}}"></span>
    </span>
  </label>
</template>

<script>
  export default {
    data () {
      return {
        types: ['round','rectangle']
      };
    },
    props: {
      type: String,
      off: String,
      on: String
    },
    methods: {},
    computed: {
      ckType () {
        var _this = this;
        return this.types.some(function(i) { return i == _this.type;}) ? this.type : this.types[0];
      }
    },
    components: {},
    ready () {},
    beforeDestroy () {},
  }
</script>

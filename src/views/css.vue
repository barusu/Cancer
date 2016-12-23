<style>
  .css-page {
    padding: 1em 1em 0;
  }
  .css-page .box {
    position: relative;
    padding: 5px;
    border: 1px solid #eee;
    border-radius: 3px;
    margin-bottom: 20px;
    text-align: justify;
  }
  .css-page .box.tip {
    padding-top: 12px;
  }
  .css-page .box > * {
    display: inline-block;
    margin: 5px;
  }
  .css-page .box > a {
    font-size: 13px;
    line-height: 1;
  }
  .css-page span {
    font-size: 13px;
  }
  .css-page .box.tip::before {
    content: attr(data-tip);
    position: absolute;
    top: -7px;
    left: 12px;
    padding: 1px 4px;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 3px;
    font-size: 12px;
    color: #238efa;
  }
  .css-page .block {
    line-height: 1.5;
    padding: 0 1em;
  }
</style>

<template>
  <div class="css-page">
    <!-- button -->
    <div class="box tip" data-tip="button">
      <button class="btn" v-for="i in scene" :class="[i]" v-html="originalSin[$index % 7].en"></button>
    </div>
    <div class="box tip" data-tip="button disable">
      <button class="btn disable" v-for="i in scene" :class="[i]" v-html="originalSin[$index % 7].en" disabled></button>
    </div>
    <!-- background-color -->
    <div class="box tip" data-tip="background-color">
      <span v-for="i in scene" class="block bg-{{i}}" v-html="i"></span>
    </div>
    <!-- checkbox swit -->
    <div class="box tip" data-tip="checkbox round">
      <div>
        <span>我已阅读并同意该条款</span>
        <xc-swit type="round" class="s">
          <input type="checkbox" name="a" checked>
        </xc-swit>
      </div>
      <div>
        <span>我已阅读并同意该条款</span>
        <xc-swit type="round">
          <input type="checkbox" name="a" checked>
        </xc-swit>
      </div>
      <div>
        <span>我已阅读并同意该条款</span>
        <xc-swit type="round" class="l">
          <input type="checkbox" name="a" checked>
        </xc-swit>
      </div>
      <br>
      <xc-swit type="round" :class="[i]" v-for="i in scene" class="s">
        <input type="checkbox" name="b" checked>
      </xc-swit>
      <br>
      <xc-swit type="round" :class="[i]" v-for="i in scene">
        <input type="checkbox" name="b" checked>
      </xc-swit>
      <br>
      <xc-swit type="round" :class="[i]" v-for="i in scene" class="l">
        <input type="checkbox" name="b" checked>
      </xc-swit>
      <br>
      <xc-swit type="round" :class="[i]" v-for="i in scene" class="led s">
        <input type="checkbox" name="b" checked>
      </xc-swit>
      <br>
      <xc-swit type="round" :class="[i]" v-for="i in scene" class="led">
        <input type="checkbox" name="b" checked>
      </xc-swit>
      <br>
      <xc-swit type="round" :class="[i]" v-for="i in scene" class="led l">
        <input type="checkbox" name="b" checked>
      </xc-swit>
    </div>
    <div class="box tip bg-warning" data-tip="checkbox rectangle">
      <xc-swit type="rectangle" on="ON" off="OFF" :class="[i]" v-for="i in scene">
        <input type="checkbox" name="c" checked>
      </xc-swit>
    </div>
    <!-- checkbox -->
    <div class="box tip" data-tip="checkbox">
      <!-- checkbox small -->
      <xc-checkbox :msg="originalSin[$index % 7].en" v-for="i in scene" :class="[i]" class="s">
        <input type="checkbox" name="h" checked v-model="ck1" value="{{i}}">
      </xc-checkbox>
      <span v-html="ck1"></span>
      <br>
      <!-- checkbox medium -->
      <xc-checkbox :msg="originalSin[$index % 7].en" v-for="i in scene" :class="[i]">
        <input type="checkbox" name="h" checked v-model="ck2" :value="$index">
      </xc-checkbox>
      <span v-html="ck2"></span>
      <br>
      <!-- checkbox large -->
      <xc-checkbox :msg="originalSin[$index % 7].en" v-for="i in scene" :class="[i]" class="l">
        <input type="checkbox" name="h" checked v-model="ck3" value="{{$index + originalSin[$index % 7].en}}">
      </xc-checkbox>
      <span v-html="ck3"></span>
    </div>
    <!-- radio -->
    <div class="box tip" data-tip="radio">
      <xc-radio :msg="originalSin[$index % 7].en" v-for="i in scene" :class="[i]" class="s">
        <input type="radio" name="radio1" v-model="radio1" value="{{$index + originalSin[$index % 7].en}}">
      </xc-radio>
      <span v-html="radio1"></span>
      <br>
      <xc-radio :msg="originalSin[$index % 7].en" v-for="i in scene" :class="[i]">
        <input type="radio" name="radio2" v-model="radio2" value="{{$index + originalSin[$index % 7].en}}">
      </xc-radio>
      <span v-html="radio2"></span>
      <br>
      <xc-radio :msg="originalSin[$index % 7].en" v-for="i in scene" :class="[i]" class="l">
        <input type="radio" name="radio3" v-model="radio3" value="{{$index + originalSin[$index % 7].en}}">
      </xc-radio>
      <span v-html="radio3"></span>
    </div>
    <!-- a link -->
    <div class="box tip" data-tip="a link">
      <a href="javascript:void(0);" :class="[i]" v-for="i in scene" v-html="Excerpt()"></a>
      <a href="javascript:void(0);" class="conceal">这里没什么好看的</a>
      <a href="javascript:void(0);" class="conceal full">Love Xc</a>
    </div>
    <!-- a link -->
    <div class="box tip" data-tip="span">
      <span :class="[i]" v-for="i in scene" v-html="Excerpt()"></span>
      <span class="conceal">这里没什么好看的</span>
      <span class="conceal full">Love Xc</span>
    </div>
  </div>
</template>

<script>
  import CONSTANTS from 'libs/constant.js';
  import Swit from 'components/checkbox_swit.vue';
  import Checkbox from 'components/checkbox.vue';
  import Radio from 'components/radio.vue';

  var i = 0;

  export default {
    data () {
      return {
        originalSin: CONSTANTS.ORIGINALSIN,
        scene: CONSTANTS.SCENE,
        excerpt: CONSTANTS.EXCERPT,
        a: true,
        ck1: [],
        ck2: [],
        ck3: []
      };
    },
    methods: {
      Excerpt () {
        i++;
        i = i % this.excerpt.length;
        return this.excerpt[i].content;
      }
    },
    computed: {},
    components: {
      'xc-swit': Swit,
      'xc-checkbox': Checkbox,
      'xc-radio': Radio
    },
    ready () {
      this.a = true;
    },
    beforeDestroy () {},
  }
</script>

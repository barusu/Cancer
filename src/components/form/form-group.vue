<style></style>

<template>
  <dl class="form-group" :class="{'error': isInput && !verify}">
    <dt><label :for="'field'+cc"><slot></slot></label></dt>
    <dd><input type="password" class="form-field" :class="statusStyle" @blur="isInput = true" @input="update($event.target.value)" :value="value" :id="'field'+cc"></dd>
    <dd class="error" v-html="errorMsg"></dd>
  </dl>
</template>

<script>
  import {MSG as msg} from 'libs/const'

  var cc = 0;

  export default {
    data() {
      return {
        cc: cc,
        isInput: false,
        verifyMsg: ''
      };
    },
    props: {
      value: String,
      require: {
        type: Boolean,
        default: false
      },
      confirm: String,
      msg: String,
      type: String,
      status: String
    },
    watch: {
      confirm() {
        this.isInput = false;
      }
    },
    methods: {
      update(value) {
        this.$emit('input', value);
      }
    },
    computed: {
      verify() {
        if(this.require && !this.value.length) {
          this.verifyMsg = msg.requireError;
          return false;
        }
        if(this.confirm && this.confirm !== this.value) {
          this.verifyMsg = this.value.length && msg.confirmError || msg.confirmMsg;
          return false;
        }
        return true;
      },
      statusStyle() {
        return this.status && 'bg-tag-' + this.status || '';
      },
      errorMsg() {
        return this.msg || this.verifyMsg;
      }
    },
    created() {
      cc++;
    }
  }
</script>

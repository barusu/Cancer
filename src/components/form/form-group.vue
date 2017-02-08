<style></style>

<template>
  <dl class="form-group" :class="{'error': isInput && !verify}">
    <dt><label :for="'field'+cc"><slot></slot></label></dt>
    <dd><input :type="type" :maxlength="max || false" class="form-field" :class="statusStyle" @blur="isInput = true" @input="update($event.target.value)" :value="value" :id="'field'+cc"></dd>
    <dd class="error" v-html="errorMsg"></dd>
  </dl>
</template>

<script>
  var cc = 0;
  const MSG = {
    requireError: '请填写此字段',
    confirmMsg: '请再次输入',
    confirmError: '两次输入不一致'
  };

  export default {
    data() {
      return {
        cc: cc,
        isInput: false,
        verifyMsg: '',
        min: 0,
        max: 0
      };
    },
    props: {
      value: {
        type: String,
        default: ''
      },
      require: {
        type: Boolean,
        default: false
      },
      length: [String, Number],
      confirm: String,
      msg: String,
      type: {
        type: String,
        default: 'text'
      },
      status: String
    },
    watch: {
      confirm() {
        this.isInput = false;
      }
    },
    methods: {
      update(value) {
        if(this.max && value.length > this.max) {
          value = value.slice(0, this.max);
          this.value = value;
        }
        this.$emit('input', value);
      }
    },
    computed: {
      verify() {
        if(typeof(this.value) !== 'string') {
          this.verifyMsg = MSG.requireError;
          return false;
        }
        if(this.require && !this.value.length) {
          this.verifyMsg = MSG.requireError;
          return false;
        }
        if(this.min && this.value.length < this.min || (this.max && this.value.length > this.max)) {
          if(this.min === this.max) {this.verifyMsg = '输入长度必需为' + this.min;}
          else if(this.min && this.max) {this.verifyMsg = '输入长度需在' + this.min + '与' + this.max + '之间';}
          else if(this.min) {this.verifyMsg = '输入长度最少为' + this.min;}
          else if(this.max) {this.verifyMsg = '输入长度最多为' + this.max;}
          return false;
        }
        if(this.confirm && this.confirm !== this.value) {
          this.verifyMsg = this.value.length && MSG.confirmError || MSG.confirmMsg;
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
      if(this.length) {
        if(isNaN(this.length) && this.length.split(',').length === 2) {
          this.min = this.length.split(',')[0];
          this.max = this.length.split(',')[1];
        }else {
          this.min = this.max = this.length;
        }
      }
    }
  }
</script>

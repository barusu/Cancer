<style>
  .half {
    display: inline-block;
  }
</style>

<template>
  <div class="user-content">
    <div class="hidden">
      <input type="text">
    </div>
    <div class="subhead">
      <h2>基本信息</h2>
    </div>
    <div class="form">
      <msg-tip :msg="errorMsg"></msg-tip>
      <form-group v-model="name" :require="true">昵称</form-group>
      <dl class="form-group half">
        <dt>性别</dt>
        <dd>
          <label for=""></label>
          <input type="radio" id="field111" class="form-field-radio">
        </dd>
      </dl>
      <form-group v-model="sex" class="half">性别</form-group>
      <form-group v-model="zodiac">属相</form-group>
      <form-group v-model="constellation">星座</form-group>
      <div class="action-group">
        <button type="button" class="btn info" :disabled="verify" @click="update">更新基本信息</button>
      </div>
    </div>
  </div>
</template>

<script>
  import formGroup from 'components/form/form-group';
  import msgTip from 'components/form/msg-tip';
  import $ from 'libs/ajax';

  export default {
    data() {
      return {
        name: '',
        sex: '',
        zodiac: '',
        constellation: '',
        status: '',
        verify: true,
        lock: false,
        errorMsg: ''
      };
    },
    watch: {
      name: 'updateVerify'
    },
    components: {
      'form-group': formGroup,
      'msg-tip': msgTip
    },
    methods: {
      updateVerify() {
        this.lock = true;
        this.$nextTick(() => {
          this.verify = this.$children.some((i) => {
            return i.verify === false;
          });
          this.lock = false;
        });
      },
      update() {
        var that = this;
        if(!this.lock && !this.verify) {
          this.status = "loading";
          $.post('account', {
            methods: 'chang_password'
          }, (data) => {
            if(data && data.status) {
              that.status = 'success';
              console.log(data);
            }else {
              that.status = 'error';
              that.errorMsg = data.info || '未知错误';
            }
          });
        }
      }
    },
    computed: {
      confirmVerify() {
        if(this.confirmPassword && this.confirmPassword !== this.newPassword) {return false;}
        else {return true;}
      }
    }
  }
</script>

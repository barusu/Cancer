<style>
</style>

<template>
  <div class="user-content">
    <div class="hidden">
      <input type="text">
      <input type="password">
    </div>
    <div class="subhead">
      <h2>修改密码</h2>
    </div>
    <div class="form">
      <msg-tip :msg="errorMsg"></msg-tip>
      <form-group v-model="oldPassword" :require="true" :status="status">旧密码</form-group>
      <form-group v-model="newPassword" :require="true">新密码</form-group>
      <form-group v-model="confirmPassword" :confirm="newPassword">确认新密码</form-group>
      <div class="action-group">
        <button type="button" class="btn info" :disabled="verify" @click="update">更新密码</button>
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
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
        status: '',
        verify: true,
        lock: false,
        errorMsg: ''
      };
    },
    watch: {
      oldPassword: 'updateVerify',
      newPassword: 'updateVerify',
      confirmPassword: 'updateVerify'
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
            methods: 'chang_password',
            old: this.oldPassword,
            new: this.newPassword
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

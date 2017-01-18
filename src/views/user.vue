<style lang="sass">
  .sidebar-wrapper {
    float: left;
    width: 11rem;
    padding: 1rem;
    > ul {
      background: hsla(0,0%,100%,.8);
      border: 1px solid #d8d8d8;
      border-radius: 3px;
      overflow: hidden;
      > li {
        padding: .4rem .5rem;
        line-height: 1rem;
        font-size: .65rem;
        background: hsla(0,0%,100%,.95);
        font-weight: 300;
        color: #555;
      }
      > .head {
        font-weight: 600;
        background: hsla(0,0%,97%,.9);
        border: 0;
      }
    }
  }
  main {
    > .content-wrapper {
      padding: 1rem;
      overflow: hidden;
    }
    &.user {
      background-color: inherit;
      > .content-wrapper {
        padding-left: 0;
      }
    }
  }
  .user-content {}
  .subhead {
    border-bottom: 1px solid #ddd;
    padding-bottom: .4rem;
  }
</style>

<template>
  <main class="user">
    <div class="sidebar-wrapper">
      <ul>
        <li class="head">Personal settings</li>
        <li>修改密码</li>
      </ul>
    </div>
    <div class="content-wrapper">
      <div class="user-content">
        <div class="hidden">
          <input type="text">
          <input type="password">
        </div>
        <div class="subhead">
          <h2>修改密码</h2>
        </div>
        <div class="form">
          <div class="errorMsg" v-html="errorMsg"></div>
          <form-group v-model="oldPassword" :require="true" :status="status">旧密码</form-group>
          <form-group v-model="newPassword" :require="true">新密码</form-group>
          <form-group v-model="confirmPassword" :confirm="newPassword">确认新密码</form-group>
          <div class="action-group">
            <button type="button" class="btn info" :disabled="verify" @click="update">更新密码</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import formGroup from 'components/form/form-group';
  import store from 'libs/store/lawliet';
  import {URL as url, MSG as Msg} from 'libs/const';
  import $ from 'jquery';

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
      'form-group': formGroup
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
          $.post(url.account, {
            methods: 'chang_password',
            uid: store.state.uid,
            old: this.oldPassword,
            new: this.newPassword
          }, (data) => {
            if(data && data.status) {
              console.log(data);
            }else if(data) {
              that.errorMsg = data.info || Msg.dataError;
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

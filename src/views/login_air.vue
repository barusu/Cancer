<style lang="sass">
  .login_air {
    &.wrapper {
      position: relative;
      height: 100%;
      min-height: 400px;
      background: url('../images/bg1.jpg') 0 0 / cover no-repeat;
      overflow: hidden;
    }
    &::before {
      content: "";
      position: absolute;
      top: 0; left: 0;
      width: 100%;
      height: 100%;
      background: inherit;
      filter: blur(3px);
    }
    &::after {
      content: "";
      position: absolute;
      top: 0; left: -20rem;
      width: 100%;
      height: 100%;
      background: inherit;
      background-position: 20rem 0;
    }
    .form-wrapper {
      position: relative;
      width: 20rem;
      height: 100%;
      float: right;
      background: rgba(255,255,255,.25);
    }
    .form-body {
      position: absolute;
      top: 50%;
      width: 100%;
      height: 18rem;
      margin: -9rem 0 0;
      padding: 0 2rem;
      font-size: .7rem;
    }
    .login-title {
      position: relative;
      top: 10%;
      font-size: 3rem;
      color: #eee;
      overflow: hidden;
      text-align: center;
      z-index: 1;
      letter-spacing: .3em;
      &::before {
        content: "。";
        visibility: hidden;
      }
      &::after {
        content: attr(data-en);
        display: block;
        font-size: 12px;
        letter-spacing: .3em;
      }
    }
    .head-img {
      padding: 1em 0;
      text-align: center;
      > img {
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
      }
    }
    .form-group {
      margin: 0 0 1em;
      height: 2em;
    }
    .form-field {
      padding: 0 .5em;
      border: 0;
    }
    .msg {
      margin: -.5em 0 0;
      font-size: 12px;
      color: #b22;
    }
  }
</style>

<template>
  <div class="wrapper login_air" @keyup.enter="login">
    <div class="form-wrapper">
      <div class="form-body">
        <div class="head-img">
          <img src="../images/head.jpg" class="anime-breath" alt="headImg">
        </div>
        <label class="form-group">
          <input type="text" class="form-field" v-model="loginName" placeholder="用户名" @blur="verifyName" autofocus>
        </label>
        <div class="form-group">
          <span class="btn goto" @click="login"></span>
          <label>
            <input type="password" class="form-field" v-model="password" placeholder="密码">
          </label>
        </div>
        <div class="msg" v-html="ErrorMsg" v-show="errorTip"></div>
      </div>
    </div>
    <div class="login-title" data-en="your name and password.">君の名は。</div>
  </div>
</template>

<script>
  import {URL as url, MSG as Msg} from 'libs/const';
  import store from 'libs/store/lawliet';
  import $ from 'jquery';

  export default {
    data () {
      return {
        loginName: '',
        password: '',
        errorMsg: '',
        errorTip: false
      };
    },
    methods: {
      verifyName() {},
      login() {
        var that = this;
        if(this.loginName && this.password) {
          $.ajax({
            url: url.login,
            headers: {
              'Authorization': 'Basic ' + btoa(unescape(encodeURIComponent(that.loginName + ':' + that.password)))
            },
            success(data) {
              if(data && data.id) {
                store.setUser(data);
                store.updateCache();
                that.$router.replace('/');
              }else {
                that.errorMsg = data && data.info || Msg.dataError;
                that.errorTip = true;
              }
            }
          });
        }else {this.errorTip = true;}
      }
    },
    computed: {
      ErrorMsg() {
        if(!this.loginName) {this.errorMsg = '用户名不能为空';}
        else if(!this.password) {this.errorMsg = '密码不能为空';}
        else if(this.errorMsg === '用户名不能为空' || this.errorMsg === '密码不能为空') {
          this.errorMsg = '';
        }
        return this.errorMsg;
      }
    },
    beforeDestroy () {}
  }
</script>

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
      padding: 1em;
      text-align: center;
      > img {
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
      }
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
        <label :class="{'anime-spin-after': userVerify}">
          <input type="text" class="form-field" :class="{'error': userError || errorTip && !loginName}" v-model="loginName" placeholder="用户名" @blur="verifyName" autofocus>
        </label>
        <label>
          <input type="password" class="form-field" :class="{'error': errorTip && !password}" v-model="password" placeholder="密码">
        </label>
        <div class="msg" v-html="errorMsg" v-show="errorMsg"></div>
        <label>
          <button type="button" class="login-btn btn info" @click="login">登录</button>
        </label>
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
        userVerify: false,
        isLogin: false,
        errorTip: false,
        userError: false
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
                that.$router.replace('index');
              }else {
                that.errorMsg = data && data.info || Msg.dataerror;
              }
            }
          });
        }else {this.errorTip = true;}
      }
    },
    beforeDestroy () {}
  }
</script>

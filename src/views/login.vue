<style>
  .login.wrapper {
    position: relative;
    height: 100%;
    min-height: 400px;
    background: url('../images/bg1.jpg') bottom center / cover no-repeat;
    overflow: hidden;
  }
  .login .form-wrapper {
    position: absolute;
    top: 50%;
    right: 5%;
    width: 20rem;
    height: 18rem;
    margin-top: -9rem;
    background-color: rgba(255,255,255,.85);
  }
  .login .form-header {
    padding: 1rem .5rem .8rem;
  }
  .login .form-header > h2 {
    position: relative;
  }
  .login .form-body {
    height: 14.5rem;
    padding: 0 1.5rem 1rem;
    overflow: auto;
  }
  .login .login-btn {
    background-color: #fff;
    width: 100%;
    padding: .5em;
    line-height: 1.5;
    font-size: .9rem;
    border-radius: 0;
  }
  .login .msg {
    font-size: .7rem;
    color: #e64a19;
    padding-bottom: .5em;
  }
  .login .msg::before {
    content: '';
    position: relative;
    top: 1px;
    display: inline-block;
    width: .7rem;
    height: .7rem;
    background: url('../images/error.png') center / .7rem auto no-repeat;
    margin-right: .5em;
  }
  .login .form-field {
    background-color: rgba(255,255,255,.9);
    font-size: .7rem;
    margin-bottom: 1em;
  }
  .login .anime-spin-after .form-field {
    padding-right: 2em;
  }
  .login .anime-spin-after {
    position: relative;
  }
  .login .anime-spin-after::after {
    content: "";
    position: absolute;
    top: .2em;
    right: .3em;
    width: .8rem;
    height: .8rem;
    background: url('../images/loading.png') top left / .8rem auto no-repeat;
  }
</style>

<template>
  <div class="wrapper login" @keyup.enter="login">
    <div class="form-wrapper">
      <div class="form-header clearfix">
        <h2 class="center">用户登录</h2>
      </div>
      <div class="form-body">
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
                that.errorMsg = data && data.info || Msg.dataError;
              }
            }
          });
        }else {this.errorTip = true;}
      }
    },
    beforeDestroy () {}
  }
</script>

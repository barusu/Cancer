<style>
  .login.wrapper {
    position: relative;
    height: 100%;
    min-height: 400px;
    background-size: 100%;
    background-position: bottom center;
    background-image: url('../images/bg1.jpg');
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
  .dept-list {
    padding: .1rem .5rem;
    box-shadow: 0 0 .25rem 0 #eee inset;
    background: #f7f7f7;
    margin-bottom: .7rem;
  }
  .dept-list > .btn {
    font-size: .7rem;
    border-radius: 0;
    border-color: #dcdcdc;
    margin: .4rem 0;
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
          <input type="text" class="form-field" :class="{'error': userError || errorTip && !loginName}" v-model="loginName" placeholder="用户名" @blur="getDept" autofocus>
        </label>
        <label>
          <input type="password" class="form-field" :class="{'error': errorTip && !password}" v-model="password" placeholder="密码">
        </label>
        <div class="dept-list" v-show="depts.length">
          <div class="dept-item btn noselect" :class="{'info': departmentId === dept.id}" v-for="dept in depts" v-html="dept.fullname" @click="departmentId = dept.id"></div>
        </div>
        <div class="msg" v-html="errorMsg" v-show="errorMsg"></div>
        <label>
          <button type="button" class="login-btn btn info" @click="login">登录</button>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
  import {URL as url, MSG as Msg} from '../libs/const';
  import store from '../libs/store';
  import $ from 'jquery';

  export default {
    data () {
      return {
        loginName: '',
        password: '',
        departmentId: '',
        errorMsg: '',
        userVerify: false,
        isLogin: false,
        errorTip: false,
        userError: false,
        depts: [],
        cache: {}
      };
    },
    methods: {
      getDept() {
        if(!this.loginName) {return;}
        this.userError = false;
        // 尝试读取缓存
        if(this.cache[this.loginName]) {
          this.setDept(this.cache[this.loginName]);
          return;
        }
        // 获取用户的部门信息
        var that = this;
        var loginName = this.loginName;
        this.userVerify = true;
        $.post(url.deptbyuser, {userName: loginName}, function(data) {
          that.userVerify = false;
          if(Array.isArray(data)) {
            that.cache[loginName] = data;
            that.setDept(data);
          }else {that.errorMsg = Msg.dataerror;}
        }, 'json').fail(function() {
          that.errorMsg = Msg.ajaxerror;
          that.userVerify = false;
        });
      },
      setDept(data) {
        if(!data.length) {
          this.errorMsg = '用户不存在';
          this.userError = true;
        }else if(data.length === 1) {
          this.errorMsg = '';
          this.departmentId = data[0].id;
          this.depts = [];
          if(this.isLogin) {
            this.isLogin = false;
            this.login();
          }
        }else {this.depts = data;}
      },
      login() {
        var that = this;
        if(this.loginName && this.password) {
          if(this.departmentId && !this.userVerify) {
            $.get(url.login, {
              'loginName': this.loginName,
              'password': this.password,
              'department.id': this.departmentId
            }, function(data) {
              if(data && data.status) {
                store.setUser(data);
                store.updateCache();
                that.$router.replace('index');
              }else {
                that.errorMsg = data && data.info || Msg.dataerror;
              }
            }, 'json').fail(function() {
              that.errorMsg = Msg.ajaxerror;
            });
          }else {
            this.isLogin = true;
            if(!this.userVerify) {this.getDept();}
          }
        }else {this.errorTip = true;}
      }
    },
    beforeDestroy () {
    }
  }
</script>

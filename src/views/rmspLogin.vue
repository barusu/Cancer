<style></style>

<template>
  <div class="form-wrapper">
    <div class="form-group">
      <label class="control-label visible-ie8 visible-ie9">用户名</label>
      <div class="input-icon">
        <i class="fa fa-user"></i>
        <input class="" type="text" v-model="loginName" autocomplete="off" placeholder="用户名"/> </div>
    </div>
    <div class="form-group">
      <label class="control-label visible-ie8 visible-ie9">密码</label>
      <div class="input-icon">
        <i class="fa fa-lock"></i>
        <input class="" type="password" v-model="password" autocomplete="off" placeholder="密码"/> </div>
    </div>
    <input type="hidden" name="orgName" value="省发展改革委">
    <input type="hidden" name="department.id" value="115">
    <div class="form-actions" >
      <label class="checkbox"> </label>
      <button type="button" class="btn" @click="login"> 登录 </button>
      <button type="button" @click="test">test</button>
    </div>
    <div class="form-group">
      <label><input type="checkbox">记住密码</label>
      <a href="javascript:;">忘记密码</a>
    </div>
  </div>
</template>

<script>
  import CONSTANT from '../libs/const';
  import $ from 'jquery';

  export default {
    data () {
      return {
        loginName: 'sfgw',
        password: '123456',
        orgName: '省发展改革委',
        departmentId: '115'
      };
    },
    methods: {
      login() {
        $.get(CONSTANT.host + 'login', {
          'loginName': this.loginName,
          'password': this.password,
          'orgName': this.orgName,
          'department.id': this.departmentId
        }, function(data) {
          console.log(data);
        }, 'json');
      },
      test() {
        $.get(CONSTANT.host + 'statistics/InitStatistics/getCatalogStatisticsData', function(data) {
          console.log(data);
        }, 'json')
      }
    },
    beforeDestroy () {
    }
  }
</script>


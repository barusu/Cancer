import $ from 'jquery';
import store from 'libs/store/lawliet';

$.ajaxSetup({
  timeout: 3000,
  dataType: 'json'
});

const CONSTANT = {
  host: 'http://www.yui.org.cn/'
};

const URL = {
  login: CONSTANT.host + 'login',
  account: CONSTANT.host + 'account'
};

const MSG = {
  linkError: '无法连接到系统',
  ajaxError: '系统异常',
  dataError: '数据异常',
  code401: '没有访问权限'
};

let Ajax = {
  post(url, data, callback) {
    if(!data) {return;}
    if(!callback) {
      callback = data;
      data = [];
    }
    if(!URL[url]) {
      callback({
        status: false,
        info: '未配置URL',
        code: 404
      });
      return;
    }
    data.uid = store.state.uid;
    data.token = store.state.token;
    $.ajax({
      type: 'POST',
      url: URL[url],
      data: data,
      success: callback,
      error(xhr, e) {
        xhr.e = e;
        if(!xhr.readyState) {xhr.info = MSG.linkError;}
        else if(xhr.status == 401) {xhr.info = MSG.code401;}
        else {xhr.info = MSG.ajaxError;}
        xhr.status = false;
        callback(xhr);
      }
    });
  },
  login(data, callback) {
    if(!callback) {return;}
    if(!data.name || !data.password) {
      callback({
        status: false,
        info: '用户名与密码不能为空',
        code: 500
      });
      return;
    }
    $.ajax({
      url: URL.login,
      headers: {
        'Authorization': 'Basic ' + btoa(unescape(encodeURIComponent(data.name + ':' + data.password)))
      },
      success(data) {
        if(data && data.id) {
          store.setUser(data);
          store.updateCache();
          callback(true);
        }else {callback(data && data.info || MSG.dataError);}
      },
      error(xhr) {
        if(xhr.readyState) {callback(MSG.ajaxError);}
        else {callback(MSG.linkError);}
      }
    });
  }
};

export default Ajax;
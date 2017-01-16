/**
 * define global constant
 *
 * Created by Shiro on 16/12/20.
 */
const CONSTANT = {
  host: 'http://lawliet.cc/'
};
export default CONSTANT;

const URL = {
  login: CONSTANT.host + 'login',
  areatree: CONSTANT.host + 'System/Area/listForTree',
  depttree: CONSTANT.host + 'resources/Department/listForTree',
  deptbyuser: CONSTANT.host + 'resources/Department/listForUser'
};
export {URL};

const NAV = [
  {name: 'Home', link: '/index'},
  {name: 'Editor', link: '/editor'},
  {name: 'Css', link: '/css'}
];
export {NAV};

const TITLEMAP = {
  login: '登录'
};
export {TITLEMAP};

const MSG = {
  ajaxError: '系统异常',
  dataError: '数据异常',
  requireError: '请填写此字段',
  confirmMsg: '请再次输入',
  confirmError: '两次输入不一致'
};
export {MSG};

const MAP = {
  sex: ['女', '男']
};
export {MAP}
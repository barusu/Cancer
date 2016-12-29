/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Routers from './router';
import Env from './config/env';
import App from './views/app';
import store from './libs/store';
import {TITLEMAP} from './libs/const';

Vue.use(VueRouter);

// 开启debug模式
Vue.config.debug = true;

// 路由配置
let router = new VueRouter({
  // 是否开启History模式的路由,默认开发环境开启,生产环境不开启。如果生产环境的服务端没有进行相关配置,请慎用
  mode: (Env != 'production' ? 'history' : 'hash'),
  routes: Routers
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  if(to.name === 'login') {next();}
  else if(!store.state.name) {
    router.replace('/login');
  }else {
    next();
  }
});

router.afterEach((r) => {
  if(r.name) {
    document.title = TITLEMAP[r.name];
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
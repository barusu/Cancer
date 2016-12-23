/**
 * Created by shiro on 16/9/11.
 */
import Vue from 'vue';
import Resource from 'vue-resource';
import VueRouter from 'vue-router';
import App from 'components/app.vue';
import Routers from './router';
import Env from './config/env';

Vue.use(VueRouter);
Vue.use(Resource);

// 开启debug模式
Vue.config.debug = true;

// 路由配置
let router = new VueRouter({
  // 是否开启History模式的路由,默认开发环境开启,生产环境不开启。如果生产环境的服务端没有进行相关配置,请慎用
  // history: Env != 'production'
  history: true
});

router.map(Routers);

router.beforeEach(() => {
  window.scrollTo(0, 0);
});

router.afterEach(() => {
  console.log(App);
});

window.owari = function () {
  var loader = document.getElementById('loader');
  if (!!loader) {
    loader.classList.add('over');
    setTimeout(function() {
      loader && loader.remove();
    }, 2000);
  }
};

window.$log = function(msg) {
  console.log(msg);
};

router.redirect({
  '*': "/"
});
router.start(App, document.body);
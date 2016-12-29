/**
 * Created by aresn on 16/8/22.
 */
const routes = [
  {
    path: '/',
    component(resolve) {
      require(['./views/index.vue'], resolve);
    },
    children: [{
      path: 'index',
      component(resolve) {
        require(['./views/index.vue'], resolve);
      }
    }]
  }, {
    path: '/editor',
    component(resolve) {
      require(['./views/editor.vue'], resolve);
    }
  }, {
    path: '/project',
    component(resolve) {
      require(['./views/project.vue'], resolve);
    }
  }, {
    path: '/rmsp',
    name: '浙江省数据管理服务平台',
    component(resolve) {
      require(['./views/rmsp.vue'], resolve);
    },
    children: [{
      path: 'login',
      name: 'rmsp_login',
      component(resolve) {
        require(['./views/rmspLogin.vue'], resolve);
      }
    }]
  }, {
    path: '/login',
    name: 'login',
    component(resolve) {
      require(['./views/login.vue'], resolve);
    }
  }, {
    path: '*',
    redirect: '/'
  }
];
export default routes;
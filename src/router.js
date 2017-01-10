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
    path: '/login',
    name: 'login',
    component(resolve) {
      require(['./views/login.vue'], resolve);
    }
  }, {
    path: '/login_air',
    name: 'login',
    component(resolve) {
      require(['./views/login_air'], resolve);
    }
  }, {
    path: '*',
    redirect: '/'
  }
];
export default routes;
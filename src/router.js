/**
 * Created by aresn on 16/8/22.
 */
const routes = [
  {
    path: '/',
    name: 'index',
    component(resolve) {
      require(['./views/index.vue'], resolve);
    },
    children: [{
      path: 'index',
      component(resolve) {
        require(['./views/index.vue'], resolve);
      }
    }, {
      path: 'user/:userId',
      name: 'user',
      component(resolve) {
        require(['./views/user.vue'], resolve);
      },
      children: [{
        path: 'account',
        name: 'Account',
        component(resolve) {
          require(['./views/user/account.vue'], resolve);
        }
      }]
    }]
  }, {
    path: '/editor',
    component(resolve) {
      require(['./views/editor.vue'], resolve);
    }
  }, {
    path: '/login_old',
    name: 'login_old',
    component(resolve) {
      require(['./views/login.vue'], resolve);
    }
  }, {
    path: '/login',
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
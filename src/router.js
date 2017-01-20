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
      component(resolve) {
        require(['./views/user.vue'], resolve);
      },
      children: [{
        path: '',
        name: 'User',
        redirect: 'profile'
      }, {
        path: 'account',
        name: 'Account',
        component(resolve) {
          require(['./views/user/account.vue'], resolve);
        }
      }, {
        path: 'profile',
        name: 'Profile',
        component(resolve) {
          require(['./views/user/profile.vue'], resolve);
        }
      }]
    }]
  }, {
    path: '/project',
    component(resolve) {
      require(['./views/project.vue'], resolve);
    },
    children: [{
      path: '',
      name: 'Project',
      component(resolve) {
        require(['./views/project/index.vue'], resolve);
      }
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
  },
  {path: '*', redirect: '/'}
];
export default routes;
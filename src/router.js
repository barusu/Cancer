/**
 * Created by shiro on 16/9/22.
 */
const routers = {
  '/': {
    name: '',
    component(resolve) {require(['./views/index.vue'], resolve); },
  },
  '/css': {
    name: 'CSS',
    component(resolve) {require(['./views/css.vue'], resolve); }
  },
  '/button': {
    name: 'Button',
    component(resolve) {require(['./views/button.vue'], resolve); }
  },
  '/admin': {
    name: 'Admin',
    component(resolve) {require(['./views/admin.vue'], resolve); },
    subRoutes: {
      '/': {
        name: 'AdminIndex',
        component(resolve) {require(['./views/adminindex.vue'], resolve); }
      },
      '/person': {
        name: 'Person',
        component(resolve) {require(['./views/person.vue'], resolve); }
      }
    }
  }
};
export default routers;
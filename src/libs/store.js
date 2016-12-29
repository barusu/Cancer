/**
 * define store
 *
 * Created by shiro on 16/12/29.
 */

let store = {
  state: {
    name: ''
  },
  setUser(ob) {
    this.state.name = ob.name;
  },
  updateCache() {
    localStorage.ELPSYCONGROO = window.btoa(window.encodeURIComponent(JSON.stringify(this.state))).split('T').map(function(i){ return i.split('').reverse().join('');}).join('T');
  },
  clear() {
    localStorage.removeItem('ELPSYCONGROO');
    this.state.name = '';
  }
};
if(localStorage.ELPSYCONGROO) {
  store.state = JSON.parse(window.decodeURIComponent(window.atob(localStorage.ELPSYCONGROO.split('T').map(function(i){ return i.split('').reverse().join('');}).join('T'))));
}
export default store;

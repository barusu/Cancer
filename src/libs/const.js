/**
 * define global constant
 *
 * Created by Shiro on 16/12/20.
 */
const NAV = [
  {name: 'Home', link: '/index'},
  {name: 'Editor', link: '/editor'},
  {name: 'Project', link: '/project', children: [
    {name: 'RMSP', link: '/project/rmsp'},
    {name: 'test', link: '/project/'},
    {name: 'test', link: '/project/'}
  ]},
  {name: 'Css', link: '/css'}
];
export {NAV};

const TITLEMAP = {
  login: '登录'
};
export {TITLEMAP};

const MAP = {
  sex: ['女', '男'],
  zodiac: [
   {zh: '鼠', emoji: '🐹'},
   {zh: '牛', emoji: '🐮'},
   {zh: '虎', emoji: '🐯'},
   {zh: '兔', emoji: '🐰'},
   {zh: '龙', emoji: '🐲'},
   {zh: '蛇', emoji: '🐍'},
   {zh: '马', emoji: '🦄'},
   {zh: '羊', emoji: '🐑'},
   {zh: '猴', emoji: '🐒'},
   {zh: '鸡', emoji: '🐣'},
   {zh: '狗', emoji: '🐶'},
   {zh: '猪', emoji: '🐷'}
  ]
};
export {MAP}
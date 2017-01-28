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
  ],
  constellation: [
    {zh: '白羊座', emoji: '♈'},
    {zh: '金牛座', emoji: '♉'},
    {zh: '双子座', emoji: '♊'},
    {zh: '巨蟹座', emoji: '♋'},
    {zh: '狮子座', emoji: '♌'},
    {zh: '处女座', emoji: '♍'},
    {zh: '天秤座', emoji: '♎'},
    {zh: '天蝎座', emoji: '♏'},
    {zh: '射手座', emoji: '♐'},
    {zh: '摩羯座', emoji: '♑'},
    {zh: '水瓶座', emoji: '♒'},
    {zh: '双鱼座', emoji: '♓'}
  ]
};
export {MAP}
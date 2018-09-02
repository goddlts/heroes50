// 基于webpack的开发，是基于模块化的开发
// node.js的模块化遵守CommonJS规范
// var Vue = require('vue');

// ES6模块化的语法
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

// 导入全局的样式
// 导入bootstrap的样式  3.3.7
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';

// 导入(路由)组件
import HeroList from './views/heroes/List.vue';
import WeaponList from './views/weapons/List.vue';
import EquipList from './views/equips/List.vue';


// Vue.use()注册VueRouter插件
Vue.use(VueRouter);

// 创建路由对象
const router = new VueRouter({
  // 设置精确的激活类样式
  linkExactActiveClass: 'active',
  // 路由规则
  routes: [
    { path: '/heroes', component: HeroList },
    { path: '/equips', component: EquipList },
    { path: '/weapons', component: WeaponList }
  ]
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});

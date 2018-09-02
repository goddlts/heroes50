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

// Vue.use()注册VueRouter插件
Vue.use(VueRouter);

// 创建路由对象
const router = new VueRouter({
  // 路由规则
  routes: [
  ]
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});

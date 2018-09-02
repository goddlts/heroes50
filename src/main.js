// 基于webpack的开发，是基于模块化的开发
// node.js的模块化遵守CommonJS规范
// var Vue = require('vue');

// ES6模块化的语法
import Vue from 'vue';
import App from './App.vue';

// 导入全局的样式
// 导入bootstrap的样式  3.3.7
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';

// 导入路由模块
import router from './routers';

// import axios from 'axios';

// 给Vue的原型增加axios成员
// axios.defaults.baseURL = 'http://127.0.0.1:3001/';
// Vue.prototype.$http = axios;

import MyHttp from './plugins/MyHttp.js';
// 注册插件
// 调用插件对象 MyHttp.install方法
Vue.use(MyHttp);

new Vue({
  el: '#app',
  render: h => h(App),
  router
});

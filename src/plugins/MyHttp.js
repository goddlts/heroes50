import axios from 'axios';

const MyHttp = {};
// Vue的插件应该提供一个，install方法
MyHttp.install = function (Vue) {
  axios.defaults.baseURL = 'http://127.0.0.1:3001/';
  Vue.prototype.$http = axios;
};

// CommonJS规范
// module.exports 

// ES6 
export default MyHttp;

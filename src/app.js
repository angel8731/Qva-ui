// es6 polyfill
import 'core-js/fn/array/find-index';
// vue
import Vue from 'vue/dist/vue.js';
// 导入路由组件
import VueRouter from 'vue-router';
// 导入自定义组件
import webComponents from './components/web';
// 加载样式
require('./styles/web/index.less');
// 注册路由
Vue.use(VueRouter);
// 导入路由
import route from './routers/router.base.js';

const router = new VueRouter(route);
// 注册组件
Object.keys(webComponents).forEach((key) => {
    Vue.component(key,webComponents[key]);
})

const app = new Vue({
    router
}).$mount('#app')

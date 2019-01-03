import Vue from 'vue';
import App from './App';
import router from './router';
import util from '@/assets/js/util';
import infiniteScroll from 'vue-infinite-scroll';//滚动加载
import vueLazyload from 'vue-lazyload';//懒加载
import '@/assets/js/filter';//引入过滤器
import '@/assets/js/directive';//引入自定义指令
import store from '@/store/index.js';//使用vuex 不使用请删除掉
//懒加载
Vue.use(vueLazyload, {
	preLoad: 1.3,
	error: require('@/assets/images/default-img.png'),
	loading: require('@/assets/images/default-img.png'),//防止url的问题
	attempt: 3,
	listenEvents: [ 'scroll' ]
});
//加载更多
Vue.use(infiniteScroll);
Vue.config.productionTip = false;
Vue.use(util);
new Vue({
	el: '#app',
	store,//使用vuex 不使用请删除掉
	router,
	components: { App },
	template: '<App/>'
})

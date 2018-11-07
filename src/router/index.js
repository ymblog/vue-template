import Vue from 'vue';
import Router from 'vue-router';
import Util from '@/assets/js/util';
import store from '@/store/index.js';//使用vuex 不使用请删除掉
//组件统一懒加载引入
const index = r => require.ensure([], () => r(require('@/pages/index/index')), 'index');
const detail = r => require.ensure([], () => r(require('@/pages/detail/detail')), 'detail');
const login = r => require.ensure([], () => r(require('@/pages/login/login')), 'login');
Vue.use(Util);
Vue.use(Router);
/* 需要验证登录的加上
meta:{
    requiresAuth:true
}
*/
const router = new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index,
            meta:{
                requiresAuth:true
            }
        },
        {
            path: '/detail',
            name: 'detail',
            component: detail,
            meta:{
                requiresAuth:true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: login
        }
    ]
});
//登录验证 包括存储用户信息 不使用请删除掉
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (Vue.prototype.$cookie.get('token')) {
            if(store.state.userInfo && store.state.token){
                next();
            }else{
                store.commit('SAVE_USERINFO',JSON.parse(Vue.prototype.$cookie.get('userInfo')));
                store.commit('SAVE_TOKEN',Vue.prototype.$cookie.get('token'));
                next();
            }    
        } else {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            });
        }
    } else {
        next();
    }
});
export default router;


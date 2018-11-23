import Vue from 'vue';
import Router from 'vue-router';
import Util from '@/assets/js/util';
import common from '@/assets/js/common';
import store from '@/store/index.js';//使用vuex 不使用请删除掉
//组件统一懒加载引入
const index = r => require.ensure([], () => r(require('@/pages/index/index')), 'index');
const login = r => require.ensure([], () => r(require('@/pages/login/login')), 'login');
const user = r => require.ensure([], () => r(require('@/pages/user/user')), 'user');
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
            component: index
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/user',
            name: 'user',
            component: user,
            meta:{
                requiresAuth:true
            }
        }
    ]
});
//登录验证 包括存储用户信息 不使用请删除掉
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (common.cookie.get(common.cookie.dataName)) {
            if(store.state.token){
                next();
            }else{
                store.commit('SET_DATA',JSON.parse(common.cookie.get(common.cookie.dataName)));
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


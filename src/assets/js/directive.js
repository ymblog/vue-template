//全局自定义指令 
import Vue from 'vue';
//输入框只能输入数字
const number = Vue.directive('number',{
    bind: function (el) {
        el.handler = function () {
            el.value = el.value.replace(/\D+/, '');
        }
        el.addEventListener('input', el.handler);
    },
    unbind: function () {
        el.removeEventListener('input', el.handler);
    }
});
//获取焦点
const focus = Vue.directive('focus',{
    inserted: function (el) {
        el.focus();
    }
});
export default{number,focus};
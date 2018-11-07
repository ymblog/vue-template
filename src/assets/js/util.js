import axios from 'axios';
const apiBase = '';
// 工具函数注册在这里全局使用
export default {
    install(Vue) {
        Vue.prototype.$ajax = {
            get(url) {
                url = apiBase + url;
                return axios.get(url);
            },
            post(url, data) {
                url = apiBase + url;
                return axios.post(url, data);
            },
        }

        Vue.prototype.$cookie = {
            set(name, value) {
                if(window.localStorage){
                    localStorage.removeItem(name);
                    localStorage.setItem(name,value);
                } else {
                    var Days = 30;
                    var exp = new Date();
                    exp.setTime(exp.getTime() + Days * 24 * 60 * 60);
                    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
                };
            },
            delete(name) {
                if(window.localStorage){
                    localStorage.removeItem(name);
                } else {
                    var exp = new Date();
                    exp.setTime(exp.getTime() - 1);
                    var cval=getCookie(name);
                    if(cval!=null){document.cookie= name + "="+cval+";expires="+exp.toGMTString();}
                };
            },
            get(name) {
                if(window.localStorage){
                    var arr,reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)");
                    arr = localStorage.getItem(name);
                    return arr;
                } else {
                    var arr,reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)");
                    if(arr = document.cookie.match(reg)){
                        return unescape(arr[2]);
                    }else{
                        return null;
                    }
                };
            }
        }

        Vue.prototype.$toast = (content='系统繁忙,请重试',time=2000) => {
            let tpl = '';
            if(!document.getElementById('toast-box')){
                let toastTpl = Vue.extend({// 1、创建构造器，定义好提示信息的模板
                    template: '<div class="lt-toast" id="toast-box"></div>'
                });
                tpl = new toastTpl().$mount().$el; // 2、创建实例，挂载到文档以后的地方
                document.body.appendChild(tpl); // 3、把创建的实例添加到body中
            }
            setTimeout(function () {
                tpl.innerHTML = '<p>' + content + '</p>';
                tpl.classList.add('lt-toast-show');
            },100);
            setTimeout(function () { // 4、延迟2秒后移除该提示
                tpl.classList.remove('lt-toast-show');
            },time);
        }
    }
}
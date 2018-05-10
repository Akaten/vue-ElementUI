import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './config/routes'
import store from './store/'
import components from './components/' //加载公共组件
import animate from 'animate.css'
import  './css/common.css'
import  './config/comonfig'

import 'babel-polyfill'
// Vue.component('full-calendar', fullCalendar)
Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    Vue.component(`v${name}`, components[key])
})
Vue.prototype.getCookies= function (c_name)//获取cookie
{
    var c_start,c_end;
    if (document.cookie.length>0)
    {
        c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1)
        {
            c_start=c_start + c_name.length+1
            c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return document.cookie.substring(c_start,c_end);   
        }
    }
    return ""
}
Vue.prototype.delcookie=function() { //删除cookie
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
        for (var i = keys.length; i--;)
            document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
    }
}
Vue.prototype.dateformat=function(time){
    var time = new Date(time);
    var year=time.getFullYear();
    var mouth=time.getMonth()+1;
    var day=time.getDate();
    var moustr;
    if(mouth>=10){
        moustr=mouth.toString();
    }
    else{
        moustr=0+""+mouth.toString();
    }
    var daystr;
    if(day>=10){
        daystr=day.toString();
    }
    else{
        daystr=0+""+day.toString();
    }
    var timeformat=year+'-'+moustr+'-'+daystr
    return timeformat
}


Vue.filter('time', function (value) {//value为13位的时间戳
    function add0(m) {
        return m < 10 ? '0' + m : m
    }
    var time = new Date(parseInt(value));
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var    H = time.getHours()
    var    i = time.getMinutes()
    var    s = time.getSeconds();
    return y + '-' + add0(m) + '-' + add0(d)+"  "+add0(H)+":"+add0(i)+":"+add0(s);
});

Vue.use(VueRouter)
Vue.use(ElementUI)
const router = new VueRouter({
   routes
});
// router.go(-1);
/*自定义全局指令 start*/
Vue.directive('title', {
    inserted:function (el,binding) {
        document.title = binding.value
    }
});

new Vue({ store, router }).$mount('#app')
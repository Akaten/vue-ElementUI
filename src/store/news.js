/**
 * Created by Administrator on 2017/4/25.
 */
import Vue from 'vue'
export const GET_NEWID = 'GET_NEWID' //获得新闻ID
export default {
    state: JSON.parse(sessionStorage.getItem('news')) || {},//从sessionStorage中获取数据
    mutations:{
        [GET_NEWID](state,news){
            sessionStorage.setItem('news', JSON.stringify(news))//向sessionStorage中存储数据
            Object.assign(state,news)//从一个对象复制所有的属性到另一个对象是一个常见的操作
                                    //将所有自由属性从 news 复制到 state 。并且它返回(修改后的) state 。
        }
    },
    actions: {
        [GET_NEWID]({commit}, news) {
            commit(GET_NEWID, news)
        }
    }
}
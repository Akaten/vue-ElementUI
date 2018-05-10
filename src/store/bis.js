import Vue from 'vue'
export const GET_UID = 'GET_UID' //获得标的信息
export default {
    state: JSON.parse(sessionStorage.getItem('bs')) || {},
    mutations:{
        [GET_UID](state,bs){
            sessionStorage.setItem('bs', JSON.stringify(bs))
            Object.assign(state,bs)
        }
    },
    actions: {
        [GET_UID]({commit}, bs) {
            commit(GET_UID, bs)
        }
    },
}
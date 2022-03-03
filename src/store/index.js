import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "@/store/mutations";
import getters from "@/store/getters";
import actions from "@/store/actions";


Vue.use(Vuex)

const state= {
    domain: '/api',
    filter: 'any',
    isLogin: false,
}

const store = new Vuex.Store({
    state: state,
    mutations : mutations,
    getters: getters,
    actions:actions
})


export default store
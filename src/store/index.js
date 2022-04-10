import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "@/store/mutations";
import getters from "@/store/getters";
import actions from "@/store/actions";


Vue.use(Vuex)

const state = {
    domain: '/api',
    filter: 'any',
    isLogin: false,
    isReady: false,
    devices: [],
    deviceData: {},
    tempDeviceData: [],
    deviceManageData: [],
    stoppedDevices: [],
    paraTypes: ['dom', 'zd', 'yl', 'cod', 'toc', 'tds', 'tem1', 'ph', 'an', '_do', 'sw', 'dd', 'odf'],
}
const store = new Vuex.Store({
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations,
})


export default store

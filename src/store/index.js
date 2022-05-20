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
    paraDescribe: ['溶解有机物', '浊度', '叶绿素', '化学所需氧', '总有机碳', '总溶解性固体物质', '水温', 'Ph值 酸碱度', '氨氮', '溶解氧', '温湿度', '电导率', '油膜厚度']
}
const store = new Vuex.Store({
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations,
})


export default store

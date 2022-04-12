const getters = {
    getDomain(state) {
        return state.domain
    },
    isLogin(state) {
        return state.isLogin
    },
    isReady(state) {
        return state.isReady
    },
    getDevices(state) {
        return state.devices
    },
    getDeviceData: (state) => (id) => {
        return state.deviceData[id]
    },
    getAllDeviceData(state) {
        return state.deviceData
    },
    getDeviceManageData(state) {
        return state.deviceManageData
    },
    getParaTypes(state) {
        return state.paraTypes
    },
    getParaDescribe(state) {
        return state.paraDescribe
    },
    getStoppedDevices(state) {
        return state.stoppedDevices
    },

}
export default getters

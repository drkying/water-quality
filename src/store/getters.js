
const getters={
    getDomain(state) {
        return state.domain
    },
    isLogin(state) {
        return state.isLogin
    },
    getDevices(state) {
        return state.devices
    },
    getDeviceData(state, id) {
        return state.deviceData[id]
    },
}
export default getters

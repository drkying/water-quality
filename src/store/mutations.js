
const mutations = {
    setFilter(state, filter) {
        state.filter = filter
    },
    setIsLogin(state, isLogin) {
        state.isLogin = isLogin
    },
    setDevices(state, devices) {
        state.devices = devices
    },
    setDeviceData(state, id, data) {
        console.log(id, data)
        state.deviceData[id] = data
        console.log(state.deviceData)
    },
    setTempDeviceData(state, data) {
        state.tempDeviceData = data
    }
}

export default mutations



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
    setDeviceData(state, data) {
        //console.log(id, data)
        if (data != null)
            state.deviceData[data.device] = data
        // console.log(state.deviceData)
        //Vue.set(state.deviceData, id, data);
    },
    setTempDeviceData(state, data) {
        state.tempDeviceData = data
    }
}

export default mutations

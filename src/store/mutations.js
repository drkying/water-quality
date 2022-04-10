

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
    },
    setDeviceManageData(state, data) {
        state.deviceManageData = data
    },
    setIsReady(state, isReady) {
        state.isReady = isReady
    },
    addStoppedDevice(state, device) {
        if (device in state.stoppedDevices)
            return
        state.stoppedDevices.push(device)
    },
    removeStoppedDevice(state, device) {
        if (!(device in state.stoppedDevices))
            return
        state.stoppedDevices.splice(state.stoppedDevices.indexOf(device), 1)
    },
}

export default mutations

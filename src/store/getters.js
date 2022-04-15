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
    getDeviceStatus: (state) => (id) => {
        console.log(state.devices)
        if (state.devices.length === 0) {
            return 'outline'
        }

        let stoppedDevices = state.stoppedDevices
        for (let i = 0; i < stoppedDevices.length; i++) {
            if (stoppedDevices[i] === id) {
                return 'outline'
            }
        }
        for (let i = 0; i < state.devices.length; i++) {
            if (state.devices[i].id === id) {
                if (state.devices[i].alerted) {
                    return 'warning'
                }
            }
        }

        return 'running'
    },

}
export default getters

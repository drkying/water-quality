import axios from "axios";

const data = {
    getDeviceDataById(context, id) {
        return new Promise((resolve, reject) => {
            axios.get("/water/data/getSpectrum", {
                params: {
                    device: id
                }
            }).then(response => {
                context.commit("setDeviceData", id, response.data.data)
                resolve(response.data.data);
            }).catch(error => {
                context.commit("setDeviceData", id, null)
                reject(error);
            });
        });
    },
    getAllDeviceData(context) {
        for (let i = 0; i < context.state.devices.length; i++) {
            this.getDeviceDataById(context, context.state.devices[i].id)
        }
    },
    getDeviceDataHistory(context, id) {
        return new Promise((resolve, reject) => {
            axios.get("/water/data/getSpectrumParam", {
                params: {
                    device: id
                }
            }).then(response => {
                if (response.status === 200) {
                    context.commit("setTempDeviceData", response.data.data)
                    resolve(response.data.data)
                } else {
                    //context.commit("setDeviceData", id, null)
                    context.commit("setTempDeviceData", null)
                    reject(response.data.data)
                }
                return response.data.data
            });
        })

    },
    getDeviceDataHistoryByDate(context, id, startTime, endTime) {
        return new Promise((resolve, reject) => {
            axios.get("/water/data/getSpectrumByDate", {
                params: {
                    device: id,
                    startTime: startTime,
                    endTime: endTime
                }
            }).then(response => {
                if (response.status === 200) {
                    //context.commit("setTempDeviceData",response.data.data)
                    resolve(response.data.data)
                } else {
                    //context.commit("setDeviceData", id, null)
                    //context.commit("setTempDeviceData", null)
                    reject(response.data.data)
                }
                return response.data.data
            });
        })
    },
}
const device = {
    getDevice(context) {
        return new Promise((resolve, reject) => {
            axios.get("/water/device/getDevices").then(response => {
                if (response.status === 200) {
                    context.commit("setDevices", response.data.data)
                    resolve(response.data.data)
                } else {
                    context.commit("setDevices", null)
                    reject(response.data.data)
                }
                return response.data.data
            });
        })
    },
    setDeviceThreshold(context, id, type, val) {
        return new Promise((resolve, reject) => {
            axios.post("/water/device/setThreshold", {
                params: {
                    device: id,
                    type: type,
                    val: val
                }
            }).then(response => {
                if (response.status === 200) {
                    resolve(response.data)
                } else {
                    reject(response.data)
                }
                return response.data
            });
        })
    },
    setDeviceName(context, id, name) {
        return new Promise((resolve, reject) => {
            axios.post("/water/device/setDeviceName", {
                params: {
                    deviceId: id,
                    name: name
                }
            }).then(response => {
                if (response.status === 200) {
                    resolve(response.data)
                } else {
                    reject(response.data)
                }
                return response.data
            });
        })
    },
}
export default {...device, ...data}

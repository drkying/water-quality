import axios from "axios";

const data = {
    getDeviceDataById(context, id) {
        return new Promise((resolve, reject) => {
            axios.get("/water/data/getSpectrum", {
                params: {
                    device: id
                }
            }).then(response => {
                context.commit("setDeviceData", response.data.data)
                if (response.data.data === null) {
                    context.commit('addStoppedDevice', id)
                } else {
                    context.commit('removeStoppedDevice', id)
                }
                resolve(response.data.data);
            }).catch(error => {
                context.commit("setDeviceData", null)
                context.commit('addStoppedDevice', id)
                reject(error);
            });
        });
    },
    getAllDeviceData(context) {
        for (let i = 0; i < context.state.devices.length; i++) {
            context.dispatch("getDeviceDataById", context.state.devices[i].id).then(() => {
                // console.log(r);
            }).catch(() => {
                // console.log(e);
            });
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
    requestImage(context, id) {
        return new Promise((resolve, reject) => {
            axios.get("/water/device/addPicOrder", {
                params: {
                    deviceId: id
                }
            }).then(response => {
                if (response.status === 200) {
                    // context.commit("setImage", response.data.data)
                    resolve(response.data.data)
                } else {
                    // context.commit("setImage", null)
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

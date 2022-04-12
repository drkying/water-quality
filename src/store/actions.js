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
            }).catch(error => {
                context.commit("setTempDeviceData", null)
                reject(error);
            });
        })

    },
    getDeviceDataHistoryByDate(context, data) {
        return new Promise((resolve, reject) => {
            axios.get("/water/data/getSpectrumByDate", {
                params: {
                    device: data.id,
                    startTime: data.startTime,
                    endTime: data.endTime
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
            }).catch(error => {
                //context.commit("setDeviceData", id, null)
                //context.commit("setTempDeviceData", null)
                reject(error)
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
            }).catch(error => {
                context.commit("setDevices", null)
                reject(error);
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
            }).catch(error => {
                // context.commit("setImage", null)
                reject(error)
            });
        })
    },
    setDeviceThreshold(context, data) {
        return new Promise((resolve, reject) => {
            axios.post("/water/device/setThreshold?device=" + data.id + "&type=" + data.type + "&val=" + data.val).then(response => {
                if (response.status === 200) {
                    resolve(response.data)
                } else {
                    reject(response.data)
                }
                return response.data
            }).catch(error => {
                reject(error)
            });
        })
    },
    setDeviceName(context, data) {
        return new Promise((resolve, reject) => {
            axios.post("/water/device/setDeviceName?deviceId=" + data.id + "&name=" + data.name).then(response => {
                console.log(response)
                if (response.status === 200) {
                    resolve(response.data)
                } else {
                    reject(response.data)
                }
                return response.data
            }).catch(err => {
                reject(err)
            });
        })
    },
}
export default {...device, ...data}

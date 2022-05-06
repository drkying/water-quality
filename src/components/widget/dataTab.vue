<template>
  <div>
    <div class="data-filter-container">
      <div class="data-filter-item">
        <span class="data-filter-title">
          设备
        </span><br>
        <a-select placeholder="请选择设备"
                  @change="handleIdChange"
                  class="data-filter-content">
          <a-select-option v-for="device in devices"
                           :value="device.id"
                           :key="device.id">
            {{ device.name }}
          </a-select-option>
        </a-select>
      </div>
      <div class="data-filter-item">
        <span class="data-filter-title">
          监测参数
        </span><br>
        <a-select placeholder="请选择参数"
                  @change="handleParaChange"
                  class="data-filter-content">
          <a-select-option v-for="parameter in parameters"
                           :value="parameter"
                           :key="parameter">
            {{ parameter }}
          </a-select-option>
        </a-select>
      </div>
      <div class="data-filter-item">
        <span class="data-filter-title">
          时间段
        </span><br>
        <a-select placeholder="请选择数据时间段"
                  @change="handleTimeRangeChange"
                  class="data-filter-content">
          <a-select-option v-for="timeRange in timeRanges"
                           :value="timeRange"
                           :key="timeRange">
            {{ timeRange }}
          </a-select-option>
        </a-select>
      </div>
      <div class="data-filter-item">
        <span class="data-filter-title">
          自定义日期
        </span><br>
        <a-date-picker
            placeholder="选择数据日期"
            @change="handlePanelChange"
            :disabledDate="disabledSelectedDate"
        />
      </div>
    </div>
    <div id="main" style="height: 600px;background: white;"></div>

  </div>
</template>

<script>
import * as echarts from "echarts";

let chartDom = null;
let myChart = null;
let option;

export default {
  name: "dataTab",
  data() {
    return {
      id: '',
      parameter: '',
      startTime: null,
      endTime: null,
      running: false,
      devices: this.$store.getters.getDevices,
      parameters: this.$store.getters.getParaTypes,
      timeRanges: ['实时动态数据', '最近1小时', '最近3小时', '最近6小时', '最近12小时', '最近24小时'],
      timeRangeIndex: 0,
      dynamic: false,
      tempData: {},
      Xtime: [],
      lastDate: {
        id: null,
        parameter: null,
        startTime: null,
        endTime: null,
        dynamicDate: null,
      }
    }
  },
  methods: {
    initTempData() {
      this.tempData = {}
      this.Xtime = []
      let types = this.$store.getters.getParaTypes
      for (let i = 0; i < types.length; i++) {
        console.log(this.tempData[types[i]])
        this.tempData[types[i]] = {
          name: types[i],
          type: 'line',
          stack: 'x',
          data: []
        }
      }
    },
    drawLine: function () {
      chartDom = document.getElementById('main');
      myChart = echarts.init(chartDom);
      option = {
        xAxis: {
          type: 'time',
          data: [],
        },
        yAxis: {
          type: 'value'
        },
        tooltip: {
          trigger: 'axis'
        },
        series: {},
        toolbox: {
          feature: {
            saveAsImage: {},
            dataZoom: {
              yAxisIndex: 'none'
            },
            restore: {},
            mySaveAsExcel: {
              show: true,
              title: '导出Excel',
              icon: 'path://M795.3408 69.632L732.6208 0H238.6944c-35.6352 0-49.408 26.4192-49.408 47.0528v185.856H258.56V84.6336c0-7.8848 6.656-14.5408 14.336-14.5408h353.4336c7.7824 0 11.6736 1.3824 11.6736 7.7824v246.784h251.5456c9.8816 0 13.7216 5.12 13.7216 12.5952v602.624c0 12.5952-5.12 14.4896-12.8 14.4896H272.896a14.6944 14.6944 0 0 1-14.336-14.5408V884.736H189.7472v86.784c-0.9216 30.72 15.4624 52.48 48.9472 52.48H924.672c35.84 0 48.0768-25.9584 48.0768-49.6128V265.5744l-17.92-19.456-159.5392-176.4352z m-86.9376 8.192l19.8144 22.2208 132.9152 146.0736 7.3216 8.8576h-135.8336c-10.24 0-16.7424-1.6896-19.456-5.12-2.7136-3.328-4.3008-8.704-4.7616-16.0256V77.824z m-55.808 468.3264h234.3424v68.3008h-234.3936v-68.3008z m0-136.4992h234.3424v68.2496h-234.3936V409.6z m0 273.0496h234.3424v68.3008h-234.3936v-68.3008zM51.2 288.0512v546.1504h535.808V288.0512H51.2z m267.9296 317.6448l-32.768 50.0736h32.768V716.8H154.4192L273.92 537.088 168.0384 375.5008H256.512L319.1808 469.504l62.6176-94.0032h88.4224L364.1344 537.088 483.7888 716.8H391.9872l-72.8576-111.104z',
              onclick: function () {
                this.exportExcel();
              }
            }
          }
        },
      };
      myChart.showLoading();
    },
    exportExcel() {
      for (let i = 0; i < option.series.data.length; i++) {
        let time = option.series.data[i][0]
        let data = option.series.data[i][1]
        //export time & data to excel
        console.log(time, data)
      }

    },
    handleIdChange(value) {
      console.log(value)
      this.id = value
    },
    handleParaChange(value) {
      console.log(value, option)
      this.parameter = value
    },
    handleTimeRangeChange(value) {
      this.running = true
      if (value === this.timeRanges[0]) {
        this.dynamic = true
        this.initTempData()
      } else if (value === this.timeRanges[1]) {
        this.dynamic = false
        this.startTime = new Date().getTime() - 3600 * 1000
        this.endTime = new Date().getTime()
      } else if (value === this.timeRanges[2]) {
        this.dynamic = false
        this.startTime = new Date().getTime() - 3 * 3600 * 1000
        this.endTime = new Date().getTime()
      } else if (value === this.timeRanges[3]) {
        this.dynamic = false
        this.startTime = new Date().getTime() - 6 * 3600 * 1000
        this.endTime = new Date().getTime()
      } else if (value === this.timeRanges[4]) {
        this.dynamic = false
        this.startTime = new Date().getTime() - 12 * 3600 * 1000
        this.endTime = new Date().getTime()
      } else if (value === this.timeRanges[5]) {
        this.dynamic = false
        this.startTime = new Date().getTime() - 24 * 3600 * 1000
        this.endTime = new Date().getTime()
      }
      console.log(value, this.startTime, this.endTime)
    },
    disabledSelectedDate(time) {
      return time.valueOf() > Date.now().valueOf()
    },
    handlePanelChange(time, timeString) {
      this.dynamic = false
      this.running = true
      let startTime = new Date(new Date(timeString).setHours(0, 0, 0, 0))
      let endTime = new Date(new Date(timeString).setHours(23, 59, 59, 999));
      let start = new Date(startTime).getTime()
      let end = new Date(endTime).getTime()
      this.startTime = start
      this.endTime = end
      console.log(this.startTime, this.endTime)
    },
    removeKeyFromObjectAndSaveToArr(obj) {
      let arr = [];
      for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          arr.push(obj[key]);
        }
      }
      return arr;
    },
    updateEchartsData() {
      if (this.running === false) {
        return
      }
      console.log(this.dynamic)
      if (this.dynamic) {
        let types = this.$store.getters.getParaTypes
        this.$store.dispatch('getDeviceDataById', this.id).then(res => {
          if (this.id === '') return;
          if (this.lastDate.dynamicDate === res.time) {
            return
          } else {
            this.lastDate.dynamicDate = res.time
          }
          let tempTime = new Date(res.time)
          let time = tempTime.getFullYear() + '-' + (tempTime.getMonth() + 1) + '-' + tempTime.getDate() + ' ' + tempTime.getHours() + ':' + tempTime.getMinutes() + ':' + tempTime.getSeconds()
          for (let i = 0; i < types.length; i++) {
            console.log(res, this.tempData, this.Xtime)
            this.tempData[types[i]]['data'].push([time, res[types[i]]])
          }
          this.Xtime.push(time)

          // option.series = this.removeKeyFromObjectAndSaveToArr(this.tempData) //全部数据
          option.series = this.tempData[this.parameter];//某个参数数据
          option.xAxis.data = this.Xtime
          console.log(option)
          option && myChart.setOption(option);
          myChart.hideLoading()
        }).catch(err => {
          console.log(err)
        })
      } else {
        if (this.lastDate.startTime === this.startTime && this.lastDate.endTime === this.endTime && this.lastDate.id === this.id && this.lastDate.parameter === this.parameter) {
          return
        } else {
          this.lastDate.startTime = this.startTime
          this.lastDate.endTime = this.endTime
          this.lastDate.id = this.id
          this.lastDate.parameter = this.parameter
        }
        this.initTempData()
        let data = {
          id: this.id,
          startTime: this.startTime,
          endTime: this.endTime,
        }
        this.$store.dispatch('getDeviceDataHistoryByDate', data).then(res => {
          console.log(res)
          for (let tempD in res) {
            let temp = res[tempD]
            let tempTime = new Date(temp.time * 1000)
            let time = tempTime.getFullYear() + '-' + (tempTime.getMonth() + 1) + '-' + tempTime.getDate() + ' ' + tempTime.getHours() + ':' + tempTime.getMinutes() + ':' + tempTime.getSeconds()
            this.tempData[this.parameter]['data'].push([time, temp[this.parameter]])
            this.Xtime.push(time)
          }
          option.series = this.tempData[this.parameter];//某个参数数据
          option.xAxis.data = this.Xtime
          console.log(option)
          option && myChart.setOption(option);
          myChart.hideLoading()


        }).catch(err => {
          console.log(err)
        })
      }

    }
  },
  mounted() {
    this.drawLine()
  },
  created() {
    this.initTempData()
    this.timer = setInterval(() => {
      this.updateEchartsData()
    }, 1000)
  }
}
</script>

<style scoped>
.data-filter-container {
  background: #1BA46E;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 10px;
}

.data-filter-item {
  flex-direction: row;
  flex: 1;
}

.data-filter-title {
  color: black;
  font-size: 10px;
  text-align: left
}

.data-filter-content {
  width: 180px;
}
</style>

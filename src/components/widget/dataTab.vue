<template>
  <div>
    <div class="data-filter-container">
      <div class="data-filter-item">
        <span class="data-filter-title">
          设备
        </span><br>
        <a-select :default-value="devices[2].id"
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
        </span>
        <br>
        <a-select :default-value="parameters[0]"
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
        <a-select :default-value="timeRanges[0]"
                  @change="handleTimeRangeChange"
                  class="data-filter-content">
          <a-select-option v-for="timeRange in timeRanges"
                           :value="timeRange"
                           :key="timeRange">
            {{ timeRange }}
          </a-select-option>
        </a-select>
      </div>
      <div class="data-filter-item" style="flex:2">
        <span class="data-filter-title">
          自定义时间段
        </span><br>
        <a-date-picker
            v-model="startTime"
            :disabled-date="disabledStartDate"
            show-time
            format="YYYY-MM-DD HH:mm:ss"
            placeholder="开始时间"
            @change="handlePanelChange"
        />
        <a-date-picker
            v-model="endTime"
            :disabled-date="disabledEndDate"
            show-time
            format="YYYY-MM-DD HH:mm:ss"
            placeholder="结束时间"
            @change="handlePanelChange"
        />
      </div>
    </div>
    <div id="main" style="height: 400px;background: white"></div>
    {{ echartsData }}
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
      id: '106',
      parameter: '',
      startTime: null,
      endTime: null,
      devices: this.$store.getters.getDevices,
      parameters: this.$store.getters.getParaTypes,
      timeRanges: ['实时动态数据', '最近1小时', '最近3小时', '最近6小时', '最近12小时', '最近24小时'],
      timeRangeIndex: 0,
      echartsData: null,
      dynamic: false,
      tempData: {},
      Xtime: [],
      lastDataTime: null,
    }
  },
  methods: {
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
        legend: {
          data: this.$store.getters.getParaTypes
        },
        tooltip: {
          trigger: 'axis'
        },
        series: {},
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
      };
      myChart.showLoading();
    },
    handleIdChange(value) {
      console.log(value)
      this.startTime = ''
      this.endTime = ''
      this.id = value
      this.tempData = {}
      this.Xtime = []
      let types = this.$store.getters.getParaTypes
      for (let i = 0; i < types.length; i++) {
        console.log(this.tempData[types[i]])
        this.tempData[types[i]] = {
          name: types[i],
          type: 'line',
          stack: 'x',
          data: [],
          symbolSize: 1,
        }
      }
    },
    handleParaChange(value) {
      console.log(value)
      this.startTime = ''
      this.endTime = ''
      this.parameter = value
    },
    handleTimeRangeChange(value) {
      console.log(value)
      if (value === this.timeRanges[0]) {
        this.timeRangeIndex = 0
        this.dynamic = true
      }
      this.startTime = ''
      this.endTime = ''
      this.timeRange = value
    },
    disabledDate(time) {
      return time.getTime() > Date.now()
    },
    disabledStartDate(startTime) {
      const endTime = this.endTime;
      if (!startTime || !endTime) {
        return false;
      }
      return startTime.valueOf() > endTime.valueOf();
    },
    disabledEndDate(endTime) {
      const startTime = this.startTime;
      if (!endTime || !startTime) {
        return false;
      }
      return startTime.valueOf() >= endTime.valueOf();
    },
    handlePanelChange() {
      console.log(this.startTime, this.endTime)
      if (this.startTime && this.endTime) {
        let start = new Date(this.startTime).getTime()
        let end = new Date(this.endTime).getTime()
        let data = {
          id: this.id,
          startTime: start,
          endTime: end,
        }
        this.$store.dispatch('getDeviceDataHistoryByDate', data).then(res => {
          this.echartsData = res
        })
      }
    },
    transformJsonToEchartsData(JsonData) {
      let res = [];
      res.push(["id", "zd", "toc", "tpn", "tds", "tem2", "dom", "yl", "tem1", "ph", "cod", "odf", "an", "_do", "sw", "dd", "oid", "_v", "_u", "_d", "_T", "device", "time"])
      for (let item in JsonData) {
        let temp = []
        Object.keys(item).forEach(function (key) {
          temp.push(item[key])
        })
        res.push(temp)
      }
      return res
    },
    removeKeyFromObjectAndSaveToArr(obj) {
      let arr = [];
      for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          arr.push(obj[key]);
        }
      }
      return arr;
    }
  },
  mounted() {
    this.drawLine()
  },
  created() {
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
    this.timer = setInterval(() => {
      this.$store.dispatch('getDeviceDataById', this.id).then(res => {
        if (this.id === '') return;
        if (this.lastDataTime === null) {
          this.lastDataTime = res.time
        } else if (this.lastDataTime === res.time) {
          return
        } else if (this.lastDataTime !== res.time) {
          this.lastDataTime = res.time
        }
        let tempTime = new Date(res.time)
        let time = tempTime.getFullYear() + '-' + (tempTime.getMonth() + 1) + '-' + tempTime.getDate() + ' ' + tempTime.getHours() + ':' + tempTime.getMinutes() + ':' + tempTime.getSeconds()
        for (let i = 0; i < types.length; i++) {
          console.log(res, this.tempData, this.Xtime)
          this.tempData[types[i]]['data'].push([time, res[types[i]]])
        }
        this.Xtime.push(time)

        option.series = this.removeKeyFromObjectAndSaveToArr(this.tempData)
        option.xAxis.data = this.Xtime
        // myChart.setOption({
        //   XAxis: {
        //     data: this.Xtime
        //   },
        //   series: this.tempData,
        // })
        console.log(option)
        option && myChart.setOption(option);
        myChart.hideLoading()
      }).catch(err => {
        console.log(err)
      })
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

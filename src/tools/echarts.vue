<template>
  <div>
    <div id="main" style="height: 400px;"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

let chartDom = null;
let myChart = null;
let option;
export default {
  name: "echarts",
  data() {
    return {
      tempData: [],
    }
  },
  props: {
    deviceId: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
  },
  methods: {
    unique(arr) {
      let res = [];
      let json = {};
      for (let i = 0; i < arr.length; i++) {
        if (!json[arr[i].value]) {
          res.push(arr[i]);
          json[arr[i].value] = 1;
        }
      }
      return res;
    },
    reverse(arr) {
      let newArr = []
      for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
      }
      return newArr
    },
    drawLine: function () {
      chartDom = document.getElementById('main');
      myChart = echarts.init(chartDom);
      option = {
        xAxis: {
          type: 'time',
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.tempData,
            type: 'line'
          }
        ]
      };
      // option && myChart.setOption(option);
      myChart.showLoading();

      this.$store.dispatch('getDeviceDataHistory', this.deviceId).then(res => {
        for (let i = 0; i < res.length; i++) {
          let tempTime = new Date(res[i].time * 1000);
          this.tempData.push({
            //value: [new Date(tempTime), res[i].zd]
            value: [tempTime.getFullYear() + '-' + (tempTime.getMonth() + 1) + '-' + tempTime.getDate() + ' ' + tempTime.getHours() + ':' + tempTime.getMinutes() + ':' + tempTime.getSeconds(), res[i][this.type]]
          });
        }
        this.tempData = this.reverse(this.tempData);
        option = {
          xAxis: {
            type: 'time',
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: this.tempData,
              type: 'line'
            }
          ]
        };
        myChart.hideLoading();
        myChart.setOption(option);
      });
    }
  },
  mounted() {
    this.drawLine();
  },
  created() {
    this.timer = setInterval(() => {
      this.$store.dispatch('getDeviceDataHistory', this.deviceId).then(res => {
        for (let i = 0; i < res.length; i++) {
          let tempTime = new Date(res[i].time * 1000);
          this.tempData.push({
            //value: [new Date(tempTime), res[i].zd]
            value: [tempTime.getFullYear() + '-' + (tempTime.getMonth() + 1) + '-' + tempTime.getDate() + ' ' + tempTime.getHours() + ':' + tempTime.getMinutes() + ':' + tempTime.getSeconds(), res[i][this.type]]
          });
        }
        //console.log(this.unique(this.tempData, "value"));
        this.tempData = this.unique(this.tempData, "value")
        myChart.setOption({
          series: [
            {
              data: this.tempData
            }
          ]
        });
      });
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
}

</script>

<style scoped>
div {
  background: white;
}
</style>

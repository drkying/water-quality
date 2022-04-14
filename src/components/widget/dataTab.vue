<template>
  <div>
    <div class="data-filter-container">
      <div class="data-filter-item">
        <span class="data-filter-title">
          设备
        </span><br>
        <a-select :default-value="devices[0].id"
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
            @openChange="handleStartOpenChange"
        />
        <a-date-picker
            v-model="endTime"
            :disabled-date="disabledEndDate"
            show-time
            format="YYYY-MM-DD HH:mm:ss"
            placeholder="结束时间"
            :open="endOpen"
            @openChange="handleEndOpenChange"
        />
      </div>
    </div>
    <!--    {{ echartsData }}-->
    <div id="main" style="height: 400px;"></div>
  </div>
</template>

<script>
export default {
  name: "dataTab",
  data() {
    return {
      id: '',
      parameter: '',
      startTime: '',
      endTime: '',
      devices: this.$store.getters.getDevices,
      parameters: this.$store.getters.getParaTypes,
      timeRanges: ['实时动态数据', '最近1小时', '最近3小时', '最近6小时', '最近12小时', '最近24小时'],
      timeRangeIndex: 0,
      endOpen: false,
    }
  },
  methods: {
    handleIdChange(value) {
      this.startTime = ''
      this.endTime = ''
      this.id = value
    },
    handleParaChange(value) {
      this.startTime = ''
      this.endTime = ''
      this.parameter = value
    },
    handleTimeRangeChange(value) {
      this.startTime = ''
      this.endTime = ''
      this.timeRange = value
    },
    disabledDate(time) {
      return time.getTime() > Date.now()
    },
    disabledStartDate(startValue) {
      const endValue = this.endValue;
      if (!startValue || !endValue) {
        return false;
      }
      return startValue.valueOf() > endValue.valueOf();
    },
    disabledEndDate(endValue) {
      const startValue = this.startValue;
      if (!endValue || !startValue) {
        return false;
      }
      return startValue.valueOf() >= endValue.valueOf();
    },
    handleStartOpenChange(open) {
      if (!open) {
        this.endOpen = true;
      }
    },
    handleEndOpenChange(open) {
      this.endOpen = open;
    },
  },
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

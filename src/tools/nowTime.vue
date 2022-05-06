<template>
  <div>
    {{ now_date }}
    {{ now_time }}
  </div>
</template>

<script>
import * as dayjs from "dayjs";

export default {
  name: "nowTime",
  data() {
    return {
      now_date: dayjs().format('YYYY-MM-DD'),
      now_time: dayjs().format('HH:mm:ss')
    }
  },
  methods: {
    updateTime() {
      this.now_date = dayjs().format('YYYY-MM-DD');
      this.now_time = dayjs().format('HH:mm:ss');
    }
  },
  created() {
    this.timer = setInterval(() => {
      this.updateTime();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
}
</script>

<style scoped>
nowTime {
  margin-right: 15px;
  color: #999;
}
</style>

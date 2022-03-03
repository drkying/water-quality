<template>
  <div class="nowTime">
    {{ now_date }}
    {{ now_time }}
  </div>
</template>

<script>
import * as dayjs from "dayjs";

export default {
  name: "nowTime",
  data () {
    return {
      now_date: dayjs().format('YYYY-MM-DD'),
      now_time: dayjs().format('HH:mm')
    }
  },
}
</script>

<style scoped>
nowTime {
  margin-right: 15px;
  color: #999;
}
</style>
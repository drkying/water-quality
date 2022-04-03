<template>
  <button @click="sendWarn">Send SMS</button>
</template>

<script>
import axios from "axios";

export default {
  name: "sms",
  data() {
    return {
      message: "Hello World"
    };
  },
  methods: {
    sendWarn() {
      let ins = axios.create({
        baseURL: '/sms'
      })
      ins.get('/sendwarn', {
        params: {
          phone: '18685414361',
          deviceid: '102',
          paramtype: 'zd',
          th_value: '1',
          now_value: '20',
        }
      })

    },
  }
}
</script>

<style scoped>

</style>

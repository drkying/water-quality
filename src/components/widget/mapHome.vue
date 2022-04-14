<template>
  <div style="width: 100%; height: 350px;">
    <amap ref="mapHome"
          cache-key="home-map"
          map-style="amap://styles/normal"
          :center="center"
          :zoom="zoom">
      <amap-satellite-layer/>
      <div v-for="device in devices" :key="device.id">
        <amap-text v-if="device.alerted"
                   :position="[device.posx,device.posy]"
                   :text="device.name"
                   @click="changeMapCenter(device)"
                   :dom-style="{
        color: '#f00',
      }"/>
        <amap-text v-else
                   :position="[device.posx,device.posy]"
                   :text="device.name"
                   @click="changeMapCenter(device)"
                   :dom-style="{
        color: '#0f0',
      }"/>
      </div>
    </amap>
  </div>
</template>

<script>
import markerRun from '../../assets/running.png'
import markerWarn from '../../assets/warning.png'

export default {
  name: "mapHome",
  data() {
    return {
      zoom: 14,
      pitch: 45,
      rotation: 15,
      center: [122.22152, 37.390092],
      markerWarn: {
        image: markerWarn,
        imageSize: [32, 32],
      },
      markerRun: {
        image: markerRun,
        imageSize: [32, 32],
        anchor: 'top-left'
      },
    };
  },
  created() {
    this.$store.dispatch("getDevice");
  },
  methods: {
    onClick() {
      this.$store.dispatch("getDevice").then((res) => {
        console.log(this.$store.state.devices);
        console.log(res);
      });
    },
    changeMapCenter(device) {
      this.$refs.mapHome.$map.setCenter([device.posx, device.posy]);
    },
  },
  computed: {
    devices() {
      return this.$store.getters.getDevices;
    },
  },
}
</script>

<style scoped>
</style>

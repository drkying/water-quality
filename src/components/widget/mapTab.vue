<template>
  <div style="width: 100%; height: 200px;">
    <amap cache-key="home-map"
          map-style="amap://styles/whitesmoke">
      <div v-for="device in this.$store.state.devices" :key="device.id">
        <amap-text v-if="device.alerted"
                   :position="[device.posx,device.posy]"
                   :icon="markerWarn"
                   :text="device.name"
                   :dom-style="{
        color: '#f00',
      }"/>
        <amap-text v-else
                   :position="[device.posx,device.posy]"
                   :text="device.name"
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
  name: "map",
  data() {
    return {
      zoom: 14,
      pitch: 45,
      rotation: 15,
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
    }
  }
}
</script>

<style scoped>
amap-marker {
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid #000;
  width: 20px;
  height: 20px;
  box-shadow: 0 0 0 2px #fff;
}
</style>

<template>
  <div style="width: 100%; height: 800px;">
    <amap ref="mapTab"
          cache-key="home-map"
          map-style="amap://styles/whitesmoke"
          @map-click="onMapClick">
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
      <amap-info-window
          class="info-content"
          :position="activeDevice?[activeDevice.posx,activeDevice.posy]: null"
          :vislble="!!activeDevice"
          auto-move
          is-custom
      >
        <div slot="content" style="width: 100px;height: 100px">
          <h3>{{ activeDevice ? activeDevice.name : '' }}</h3>
          <p>{{ activeDevice ? activeDevice.id : '' }}</p>
        </div>
      </amap-info-window>
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
      activeDevice: null,
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
      this.$refs.mapTab.$map.setCenter([device.posx, device.posy]);
      this.activeDevice = device;
      // .setCenter([device.posx, device.posy]);
    },
    onMapClick() {
      this.activeDevice = null;
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
.info-content {
  position: relative;
  width: 220px;
}
</style>

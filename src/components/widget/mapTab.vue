<template>
  <div style="width: 100%; height: 800px;">
    <amap ref="mapTab"
          cache-key="home-map"
          map-style="amap://styles/whitesmoke"
          @click="closeInfoWindow">
      <div v-for="device in devices" :key="device.id">
        <amap-text v-if="device.alerted"
                   :position="[device.posx,device.posy]"
                   :text="device.name"
                   @click="changeMapCenter(device);openInfoWindow(device)"
                   :dom-style="{
        color: '#f00',
      }"/>
        <amap-text v-else
                   :position="[device.posx,device.posy]"
                   :text="device.name"
                   @click="changeMapCenter(device);openInfoWindow(device)"
                   :dom-style="{
        color: '#0f0',
      }"/>
      </div>
      <amap-info-window ref="info_window"
                        v-if="devices"
                        :position="activeDevice?[activeDevice.posx,activeDevice.posy]:null"
                        :vislble="this.activeDevice!==null"
                        auto-move
                        is-custom
                        :dom-style="{
        background: '#1B499E',
      }"
      >
        <div>
          <div v-if="activeDevice" style="background: #1BA46E">
            <a-descriptions bordered title="设备信息">

              <a-descriptions-item v-for="(value,key) in activeDevice" :key="key" :label="key">{{ value }}
              </a-descriptions-item>


            </a-descriptions>
          </div>
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
    openInfoWindow(device) {
      this.activeDevice = device;
      this.$refs.info_window.open();
    },
    changeMapCenter(device) {
      console.log('tab chang map')
      this.$refs.mapTab.$map.setCenter([device.posx, device.posy]);
      // .setCenter([device.posx, device.posy]);
    },
    closeInfoWindow() {
      this.activeDevice = null;
      this.$refs.info_window.close();
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

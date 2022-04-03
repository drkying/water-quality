<template>
  <div id="app">
    <Header/>
    <div class="content-bottom">

      <div class="main-left">
        <div class="wrap">
          <div class="title">
            设备列表
          </div>
          <div class="box-list">
            <div class="box">
              <div class="big-text">设备001</div>
              <div class="small-text">代用名001</div>
            </div>
            <div class="box" style="background-color: #1BA46E;">
              <div class="big-text">设备002</div>
              <div class="small-text">代用名002</div>
            </div>
            <div class="box" style="background-color: #1BA46E;">
              <div class="big-text">设备003</div>
              <div class="small-text">代用名003</div>
            </div>
            <div class="box" style="background-color: #1A4A9C;">
              <div class="big-text">设备004</div>
              <div class="small-text">代用名004</div>
            </div>
            <div class="box" style="background-color: #1BA46E;">
              <div class="big-text">设备005</div>
              <div class="small-text">代用名005</div>
            </div>
            <div class="box" style="background-color: #7F7F7F;">
              <div class="big-text">设备006</div>
              <div class="small-text">代用名006</div>
            </div>
          </div>
        </div>
        <div class="toggel-box">
          <div class="toggel">设备地图</div>
          <div class="toggel">报警管理</div>
        </div>
      </div>
      <div class="main-right">
        <devices-status/>
        <div class="right-middle">
          <div v-for="device in devices.slice(0,6)" :key="device.id"
               class="divce-list"
          >
            <device-card
                :device="device"
                :deviceData="deviceData[device.id]"
            />
          </div>
        </div>
        <div class="right-bottom">
          <mapHome/>
          <!--          <img src="../assets/bottom.jpg" alt="">-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import DevicesStatus from "@/components/widget/devicesStatus";
import DeviceCard from "@/components/widget/deviceCard";
import mapHome from "@/components/widget/mapHome";

export default {
  name: "Home",
  components: {
    DevicesStatus,
    Header: Header,
    DeviceCard: DeviceCard,
    mapHome: mapHome
  },
  computed: {
    devices() {
      return this.$store.state.devices;
    },
    deviceData() {
      return this.$store.state.deviceData;
    },
  }
}
</script>

<style scoped>


div {
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background-color: #303382;
}


.content-bottom {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.main-left {
  width: 9%;
  height: 100%;
  color: #fff;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
}

.wrap {
  width: 100%;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
}

.title {
  font-size: 14px;
  color: #35266d;
  font-weight: 700;
}

.box-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

.box {
  width: 90%;
  background-color: #e55c17;
  margin-bottom: 8px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2px 5px;
}

.big-text {
  font-size: 16px;
  font-weight: 700;
}

.small-text {
  font-size: 10px;
  transform: scale(0.8);
}

.toggel-box {
  margin-top: 15px;
  width: 100%;
}

.toggel {
  width: 100%;
  border-radius: 3px;
  background-color: #ccc;
  color: #303382;
  margin-bottom: 10px;
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.main-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3c3e3d;
  padding: 5px 8px;
  color: #fff;
}

.right-bottom {
  width: 100%;
  /* background-color: #303030; */
  height: 360px;
  padding: 3px 0;
}

.right-bottom img {
  width: 100%;
  height: 100%;
}

.right-middle {
  width: 100%;
  flex: 1;
  background-color: #3c3e3d;
  padding: 5px 0;
  display: flex;
}

.divce-list {
  width: 16.6%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 13px;
  margin-right: 0.5%;
  background-color: #303030;
  padding: 5px 8px;
  border-radius: 5px;
}

.params span {
  flex: 1;
}

.sub-param span {
  flex: 1;
}

</style>

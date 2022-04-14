<template>
  <div id="app">
    <Header :father-method="toggle"/>
    <div class="content-bottom">

      <div class="main-left">
        <div class="toggel-box">
          <div class="toggel" @click="toggle(0)">主页</div>
          <div class="toggel" @click="toggle(1)">设备地图</div>
          <div class="toggel" @click="toggle(2)">设备管理</div>
          <div class="toggel" @click="toggle(3)">数据管理</div>
        </div>
        <div class="wrap">
          <div class="title">
            设备列表
          </div>
          <div class="box-list">
            <div v-for="(device,index) in this.devices"
                 :key="device.id"
                 class="box"
                 :class="whichStatus(device.id)"
                 @click="changeHomeView(index)">
              <div class="big-text">{{ device.id }}</div>
              <div class="small-text">{{ device.name }}</div>
            </div>
          </div>
        </div>

      </div>
      <div class="main-right" v-if="isShow===0">
        <devices-status/>
        <div class="right-middle" v-if="showingDevices">
          <div v-for="device in showingDevices"
               :key="device.id"
               class="divce-list">
            <device-card
                :device="device"
                :deviceData="deviceData[device.id]"
            />
          </div>
        </div>
        <div v-else class="right-middle">
          <div v-for="device in HomeData"
               :key="device"
               class="divce-list">
            <device-card/>
          </div>
        </div>
        <div class="right-bottom">
          <mapHome ref="mapHome"/>
          <!--          <img src="../assets/bottom.jpg" alt="">-->
        </div>
      </div>

      <div class="main-right" v-else-if="isShow===1">
        <mapTab class="right-bottom"/>
      </div>
      <div class="main-right" v-else-if="isShow===2">
        <device-manage/>
      </div>
      <div class="main-right" v-else-if="isShow===3">
        <data-tab class="right-bottom"/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import DevicesStatus from "@/components/widget/devicesStatus";
import DeviceCard from "@/components/widget/deviceCard";
import mapHome from "@/components/widget/mapHome";
import DeviceManage from "@/components/widget/deviceManage";
import mapTab from "@/components/widget/mapTab";
import DataTab from "@/components/widget/dataTab";

export default {
  name: "Home",
  data() {
    return {
      isShow: 0,
      HomeData: [0, 1, 2, 3, 4, 5]
    };
  },
  components: {
    DataTab,
    DeviceManage,
    DevicesStatus,
    Header: Header,
    DeviceCard: DeviceCard,
    mapHome: mapHome,
    mapTab: mapTab,
  },
  methods: {
    dataInArr(arr, data) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === data) {
          return true;
        }
      }
      return false;
    },
    changeHomeView(index) {
      this.$refs.mapHome.changeMapCenter(this.devices[index]);
      if (this.dataInArr(this.HomeData, index))
        return;
      let temp = [];
      temp.push(index);
      for (let i = 0; i < 5; i++) {
        temp.push(this.HomeData[i]);
      }
      this.HomeData = temp;
    },
    toggle(v) {
      this.isShow = v;
    },

  },
  computed: {
    devices() {
      return this.$store.state.devices;
    },
    deviceData() {
      return this.$store.state.deviceData;
    },
    isHome() {
      return this.$route.path.includes("/home");
    },
    showingDevices() {
      if (this.devices.length === 0)
        return;
      let temp = [];
      for (let i = 0; i < this.HomeData.length; i++) {
        temp.push(this.devices[this.HomeData[i]]);
      }
      return temp;
    },
    whichStatus() {
      return function (id) {
        let res = "";
        let alerted = false;
        for (let i = 0; i < this.devices.length; i++) {
          if (this.devices[i].id === id) {
            if (this.devices[i].alerted) {
              alerted = true;
            }
          }
        }
        if (this.dataInArr(this.$store.getters.getStoppedDevices, id)) {
          res = 'outline';
        } else if (alerted) {
          res = 'warning';
        } else {
          res = 'running'
        }
        return res;
      }
    }
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

.running {
  background-color: #1BA46E;
}

.warning {
  background-color: #E25F17;
}

.pause {
  background-color: #1B499E;
}

.outline {
  background-color: #787878;
}

.box {
  width: 90%;
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

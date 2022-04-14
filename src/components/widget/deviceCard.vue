<!--
  a data-name
  b data
  c data-button
  -->
<template>
  <div v-if="device">
    <div class="divce-title">
      {{ device.name }}
    </div>
    <div class="params-list">
      <div class="params" v-if="deviceData.dom">
        <span class="a">DOM</span>
        <span class="b">{{ deviceData.dom }}</span>
        <span class="c" @click="showModal(0)">查看曲线</span>
      </div>
      <div class="params" v-else>
        <span class="a">DOM</span>
        <span class="b">暂无数据</span>
        <span class="c"></span>
      </div>
      <div class="params" v-if="deviceData.zd">
        <span class="a">ZD</span>
        <span class="b">{{ deviceData.zd }}</span>
        <span class="c" @click="showModal(1)">查看曲线</span>
      </div>
      <div class="params" v-else>
        <span class="a">ZD</span>
        <span class="b">暂无数据</span>
        <span class="c"></span>
      </div>
      <div class="params" v-if="deviceData.yl">
        <span class="a">YL</span>
        <span class="b">{{ deviceData.yl }}</span>
        <span class="c" @click="showModal(2)">查看曲线</span>
      </div>
      <div class="params" v-else>
        <span class="a">YL</span>
        <span class="b">暂无数据</span>
        <span class="c"></span>
      </div>
      <div class="params" v-if="deviceData.cod">
        <span class="a">COD</span>
        <span class="b">{{ deviceData.cod }}</span>
        <span class="c" @click="showModal(3)">查看曲线</span>
      </div>
      <div class="params" v-else>
        <span class="a">COD</span>
        <span class="b">暂无数据</span>
        <span class="c"></span>
      </div>
      <div class="params" v-if="deviceData.toc">
        <span class="a">TOC</span>
        <span class="b">{{ deviceData.toc }}</span>
        <span class="c" @click="showModal(4)">查看曲线</span>
      </div>
      <div class="params" v-else>
        <span class="a">TOC</span>
        <span class="b">暂无数据</span>
        <span class="c"></span>
      </div>
      <div class="params" v-if="deviceData.tds">
        <span class="a">TDS</span>
        <span class="b">{{ deviceData.tds }}</span>
        <span class="c" @click="showModal(5)">查看曲线</span>
      </div>
      <div class="params" v-else>
        <span class="a">TDS</span>
        <span class="b">暂无数据</span>
        <span class="c"></span>
      </div>
      <div class="params" v-if="deviceData.tem1">
        <span class="a">水温</span>
        <span class="b">{{ deviceData.tem1 }}</span>
        <span class="c" @click="showModal(6)">查看曲线</span>
      </div>
      <div class="params" v-else>
        <span class="a">水温</span>
        <span class="b">暂无数据</span>
        <span class="c"></span>
      </div>
      <div class="params" v-if="deviceData.ph">
        <span class="a">PH</span>
        <span class="b">{{ deviceData.ph }}</span>
        <span class="c" @click="showModal(7)">查看曲线</span>
      </div>
      <div class="params" v-else>
        <span class="a">PH</span>
        <span class="b">暂无数据</span>
        <span class="c"></span>
      </div>
      <div class="params" v-if="deviceData.an">
        <span class="a">氨氮</span>
        <span class="b">{{ deviceData.an }}</span>
        <span class="c" @click="showModal(8)">查看曲线</span>
      </div>
      <div class="params" v-else>
        <span class="a">氨氮</span>
        <span class="b">暂无数据</span>
        <span class="c"></span>
      </div>
      <div class="params" v-if="deviceData._do">
        <span class="a">溶解氧</span>
        <span class="b">{{ deviceData._do }}</span>
        <span class="c" @click="showModal(9)">查看曲线</span>
      </div>
      <div class="params" v-else>
        <span class="a">溶解氧</span>
        <span class="b">暂无数据</span>
        <span class="c"></span>
      </div>
      <div class="params" v-if="deviceData.sw">
        <span class="a">SW</span>
        <span class="b">{{ deviceData.sw }}</span>
        <span class="c" @click="showModal(10)">查看曲线</span>
      </div>
      <div class="params" v-else>
        <span class="a">SW</span>
        <span class="b">暂无数据</span>
        <span class="c"></span>
      </div>
      <div class="params" v-if="deviceData.dd">
        <span class="a">DD</span>
        <span class="b">{{ deviceData.dd }}</span>
        <span class="c" @click="showModal(11)">查看曲线</span>
      </div>
      <div class="params" v-else>
        <span class="a">DD</span>
        <span class="b">暂无数据</span>
        <span class="c"></span>
      </div>

    </div>
    <div class="divce-sub-title">
      油污检测参数
    </div>
    <div class="sub-params-list">
      <div class="sub-param">
        <span class="sub-a">油污种类</span>
        <span class="sub-b">暂无</span>
        <span class="sub-c"></span>
      </div>
      <div class="sub-param" v-if="deviceData.odf">
        <span class="sub-a">油厚度</span>
        <span class="sub-b">{{ deviceData.odf }}</span>
        <span class="sub-c" @click="showModal(12)">查看曲线</span>
      </div>
      <div class="sub-param" v-else>
        <span class="sub-a">油厚度</span>
        <span class="sub-b">暂无数据</span>
        <span class="sub-c"></span>
      </div>
      <div class="sub-param">
        <span class="sub-a">油强度</span>
        <span class="sub-b">暂无数据</span>
        <span class="sub-c"></span>
      </div>
    </div>
    <!--    <div class="bottom-dic">-->
    <!--      仪器参数-->
    <!--    </div>-->
    <a-modal
        :title="echartsTitle"
        :visible="echartsVisible"
        @cancel="handleCancel"
        @ok="handleCancel"
        destroyOnClose
        :width="700"
    >
      <echarts
          :device-id="this.device.id"
          :type="type">
      </echarts>
      <button @click="sendSms">
        记录最新数据
      </button>
    </a-modal>
  </div>
</template>

<script>
import axios from "axios";
import Echarts from "@/tools/echarts";

export default {
  name: "deviceCard",
  components: {Echarts},
  props: {
    device: {
      type: Object,
      default: function () {
        return {
          "id": "加载中...",
          "posx": 0,
          "posy": 0,
          "name": "加载中...",
          "th_zd": 0,
          "th_toc": 0,
          "th_tpn": 0,
          "th_tds": 0,
          "th_tem2": 0,
          "th_dom": 0,
          "th_yl": 0,
          "th_cod": 0,
          "th_tem1": 0,
          "th_ph": 0,
          "th_odf": 0,
          "th_an": 0,
          "th_do": 0,
          "th_orp": 0,
          "th_sw": 0,
          "th_dd": 0,
          "place": "",
          "belongs": "",
          "alerted": false,
          "paramsAlerted": []
        }
      }
    }
  },
  data() {
    return {
      echartsVisible: false,
      paraTypes: this.$store.getters.getParaTypes,
      type: '',
      echartsTitle: '',
      id: '',
      deviceData: {
        "id": null,
        "spectrumWithLaser": "",
        "spectrumBackground": "",
        "zd": "加载中...",
        "dom": "加载中...",
        "cod": "加载中...",
        "toc": "加载中...",
        "tpn": "加载中...",
        "yl": "加载中...",
        "tds": "加载中...",
        "tem2": "加载中...",
        "tem1": "加载中...",
        "ph": "加载中...",
        "odf": "加载中...",
        "an": "加载中...",
        "sw": "加载中...",
        "dd": "加载中...",
        "oid": "加载中...",
        "_do": "加载中...",
        "_v": "加载中...",
        "_u": "加载中...",
        "_d": "加载中...",
        "_T": "加载中...",
        "device": "108",
        "paramStr": "ZD 1.209# DOM 2.966# COD 4.296# TOC 0.398# YL 0.519# TDS 0.000# TEM1   -1# AN   -1# PH 0.000# OdF 0.113# DOA   -1# SW   -1# DD 0.000# OId 1.018# *v  25.7#*u  17.0#*d   8.0#*T  23.4#",
        "picStatus": "0",
        "picAddr": "https://guangpuhui.oss-cn-shanghai.aliyuncs.com/1640260767500",
        "spStatus": "0",
        "spaAddr": "https://guangpuhui.oss-cn-shanghai.aliyuncs.com/1638251967952",
        "spbAddr": "https://guangpuhui.oss-cn-shanghai.aliyuncs.com/1638251968321",
        "sendingType": "1",
        "time": "2022-03-08T21:56:28.944+0800"
      }
    }
  },
  methods: {
    showModal(t) {
      this.echartsVisible = true;
      this.type = this.paraTypes[t]
      this.id = this.device.id
      this.echartsTitle = '监测曲线: ' + this.device.name + ' ' + this.type;
    },
    handleCancel() {
      this.echartsVisible = false;
    },
    getDeviceData() {
      axios.get('/water/data/getSpectrum', {
        params: {
          device: this.device.id
        }
      }).then(res => {
        this.deviceData = res.data.data;
      })
    },
    sendSms() {
      let ins = axios.create({
        baseURL: '/sms'
      })
      ins.get('/sendsms', {
        params: {
          phone: '18685414361',
          deviceid: this.id,
          paramtype: this.type,
          now_value: this.deviceData[this.type],
        }
      })
    }
  },
  created() {
    this.timer = setInterval(() => {
      this.getDeviceData();
    }, 5000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
}
</script>

<style scoped>

.divce-title {
  width: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1BA46E;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 3px;
  transform: scale(0.9);
}

.params {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: scale(0.9);
}

.params span {
  flex: 1;
}

.a {
  font-weight: 700;
}

.b {
  color: #1ba46e;
  font-weight: 700;
  font-size: 14px;
}

.c {
  background-color: #1ba46e;
  border-radius: 1px;
  font-size: 12px;
  padding: 0px 5px;
  cursor: pointer;
  text-align: center;
}

.divce-sub-title {
  background-color: #1ba46e;
  font-size: 12px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3px 0;
  transform: scale(0.9);
}

.sub-param {
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: scale(0.9);
}

.sub-param span {
  flex: 1;
}

.sub-b {
  width: 90%;
  color: #1ba46e;
  font-weight: 700;
}

.sub-c {
  background-color: #1ba46e;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1px;
}

.bottom-dic {
  width: 80px;
  font-size: 12px;
  background-color: #9e9e9e;
  border-radius: 15px;
  text-align: center;
  margin: 0 auto;
}
</style>

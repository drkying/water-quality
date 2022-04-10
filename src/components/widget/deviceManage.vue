<template>
  <div>
    <a-table
        :columns="columns"
        :data-source="data"
        bordered
        size="middle"
        class="tttt"
        @expand="clickExpand">
      <a slot="operation" slot-scope="" @click="handleEdit">编辑
        <a-modal
            title="修改设备名称"
            :visible="visible"
            :confirm-loading="confirmLoading"
            @ok="handleOk"
            @cancel="handleCancel"
        >
          <p>{{ ModalText }}</p>
          <a-input
              v-model="ModalValue"
              placeholder="请输入设备名称"
              style="width: 300px;"
          ></a-input>
        </a-modal>
      </a>

      <a-table slot="expandedRowRender"
               :columns="innerColumns"
               :data-source="innerDataWithId"
               bordered size="middle">
      </a-table>

    </a-table>
  </div>
</template>

<script>
const columns = [
  {title: '设备编号', dataIndex: 'id', key: 'id'},
  {title: '设备名称', dataIndex: 'name', key: 'name'},
  {
    title: '位置', children: [
      {title: '经度', dataIndex: 'posx', key: 'posx'},
      {title: '纬度', dataIndex: 'posy', key: 'posy'}
    ]
  },
  {title: '是否报警', dataIndex: 'alerted', key: 'alerted'},
  {title: '报警参数', dataIndex: 'paramsAlerted', key: 'paramsAlerted'},
  {title: '电源电压', dataIndex: '_v', key: '_v'},
  {title: '启动电压', dataIndex: '_u', key: '_u'},
  {title: '关断电压', dataIndex: '_d', key: '_d'},
  {title: '仪器温度', dataIndex: '_T', key: '_T'},
  // {title: '断电重启', dataIndex: 'rst', key: 'rst'},
  // {title:'电压',dataIndex: 'vol',key: 'vol'},
  // {title: '温度', dataIndex: 'temp', key: 'temp'},
  // {title: '湿度', dataIndex: 'humi', key: 'humi'},
  {title: '操作', dataIndex: 'operation', key: 'operation', scopedSlots: {customRender: 'operation'}}
]
const innerColumns = [
  {title: '参数名称', dataIndex: 'name', key: 'name'},
  {title: '参数阈值', dataIndex: 'value', key: 'value'},
  {title: '参数描述', dataIndex: 'description', key: 'description'},
  {title: '操作', dataIndex: 'operation', key: 'operation', scopedSlots: {customRender: 'operation'}}
]

export default {
  name: "deviceManage",
  data() {
    return {
      columns: columns,
      innerColumns: innerColumns,
      visible: false,
      confirmLoading: false,
      ModalText: 'Content of the modal',
      innerDataWithId: [],
      ModalValue: '',
      describe: [
        '溶解有机物',
        '浊度',
        '叶绿素',
        '化学所需氧',
        '总有机碳',
        '总溶解性固体物质',
        '水温',
        'Ph值 酸碱度',
        '氨氮',
        '溶解氧',
        'SW',
        '电导率',
        '油膜厚度'
      ]
    }
  },

  computed: {
    data() {
      let devices = this.$store.getters.getDevices
      let devicesData = this.$store.getters.getAllDeviceData
      if (!this.$store.getters.isReady) return null
      if (devicesData == null || devices == null)
        return null
      let temp = []
      for (let i = 0; i < devices.length; i++) {
        let tempObj = {}
        let id = devices[i].id
        // if (id === '130' || id === '222') continue
        tempObj.id = devices[i].id
        tempObj.name = devices[i].name
        tempObj.posx = devices[i].posx
        tempObj.posy = devices[i].posy
        if (devices[i].alerted) {
          tempObj.alerted = '是'
          let str = '['
          for (let j = 0; j < devices[i].paramsAlerted.length - 1; j++) {
            str += devices[i].paramsAlerted[j] + ', '
          }
          str += devices[i].paramsAlerted[devices[i].paramsAlerted.length - 1] + ']'
          tempObj.paramsAlerted = str
        } else {
          tempObj.alerted = '否'
          tempObj.paramsAlerted = '无'
        }
        console.log(id)
        //console.log(devicesData[id])
        tempObj._v = devicesData[id]._v
        tempObj._u = devicesData[id]._u
        tempObj._d = devicesData[id]._d
        tempObj._T = devicesData[id]._T
        // tempObj.rst=devicesData[id].rst
        // tempObj.vol=devicesData[id].vol
        // tempObj.temp=devicesData[id].temp
        // tempObj.humi=devicesData[id].humi
        console.log(tempObj)

        temp.push(tempObj)

        console.log(temp)
      }
      this.$store.commit('setDeviceManageData', temp)

      return temp
      //return this.$store.getters.getDeviceManageData
    },
    innerData() {
      let devices = this.$store.getters.getDevices
      if (devices == null)
        return null
      let innerData = {}
      let paraTypes = this.$store.getters.getParaTypes
      for (let i = 0; i < devices.length; i++) {
        let id = devices[i].id
        innerData[id] = []
        for (let j = 0; j < paraTypes.length; j++) {
          if (paraTypes[j] === '_do')
            innerData[id].push({
              name: paraTypes[j],
              value: devices[i]['th' + paraTypes[j]],
              description: this.describe[j]
            })
          else
            innerData[id].push({
              name: paraTypes[j],
              value: devices[i]['th_' + paraTypes[j]],
              description: this.describe[j]
            })
        }
        // innerData[id].th_zd = devices[i].th_zd
        // innerData[id].th_toc = devices[i].th_toc
        // innerData[id].th_tpn = devices[i].th_tpn
        // innerData[id].th_tds = devices[i].th_tds
        // innerData[id].th_tem2 = devices[i].th_tem2
        // innerData[id].th_dom = devices[i].th_dom
        // innerData[id].th_yl = devices[i].th_yl
        // innerData[id].th_cod = devices[i].th_cod
        // innerData[id].th_tem1 = devices[i].th_tem1
        // innerData[id].th_ph = devices[i].th_ph
        // innerData[id].th_odf = devices[i].th_odf
        // innerData[id].th_an = devices[i].th_an
        // innerData[id].th_do = devices[i].th_do
        // innerData[id].th_orp = devices[i].th_orp
        // innerData[id].th_sw = devices[i].th_sw
        // innerData[id].th_dd = devices[i].th_dd
      }
      return innerData
    }
  },
  methods: {
    handleEdit() {
      this.visible = true;
    },
    handleOk() {
      this.ModalText = 'The modal will be closed after two seconds';
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel() {
      this.visible = false;
    },
    clickExpand(row, expandedRows) {
      console.log(row)
      console.log(expandedRows)
      this.innerDataWithId = this.innerData[expandedRows.id]
    },
  }
}
</script>

<style scoped>
a-table {
  margin-top: 20px;
  background: white;
}

.tttt {
  margin-top: 20px;

  background: white;
}
</style>

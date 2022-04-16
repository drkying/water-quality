<template>
  <div>
    <a-table :data-source="data"
             :defaultExpandAllRows="false"
             class="tttt">
      <a-table-column title="设备编号" data-index="id"/>
      <a-table-column title="设备名称" data-index="name"/>
      <a-table-column-group title="位置">
        <a-table-column title="经度" data-index="posx"/>
        <a-table-column title="纬度" data-index="posy"/>
      </a-table-column-group>
      <a-table-column title="是否报警" data-index="alerted"/>
      <a-table-column title="报警参数" data-index="paramsAlerted"/>
      <a-table-column title="电源电压" data-index="_v"/>
      <a-table-column title="启动电压" data-index="_u"/>
      <a-table-column title="关断电压" data-index="_d"/>
      <a-table-column title="仪器温度" data-index="_T"/>
      <a-table-column title="操作" data-index="operation">
        <template slot-scope="text,recordName">
          <a-button @click="handleEditName(recordName)">修改设备名称</a-button>
          <a-button @click="handleShowImage(recordName)">查看设备图片</a-button>
        </template>
      </a-table-column>


      <template v-slot:expandedRowRender="record">
        <a-table :data-source="record.nestedData"
                 :pagination="false">
          <a-table-column title="参数名称" data-index="name"/>
          <a-table-column title="参数阈值" data-index="value"/>
          <a-table-column title="参数描述" data-index="description"/>
          <a-table-column title="操作" data-index="operation">
            <template slot-scope="text,recordTh">
              <a-button type="primary" @click="handleEditTh(record.id,recordTh)">设置阈值</a-button>
            </template>
          </a-table-column>
        </a-table>
      </template>
    </a-table>
    <a-modal
        :title="modalTitle"
        :visible="visible!==''"
        :confirm-loading="confirmLoading"
        @ok="handleOk"
        @cancel="handleCancel"
    >
      <a-input
          v-model="modalValue"
          :placeholder="modalHint"
          style="width: 300px;"
      ></a-input>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: "tableT",
  data() {
    return {
      modalTitle: '',
      modalHint: '',
      modalValue: '',
      confirmLoading: false,
      visible: '',
      editingId: '',
      editingType: '',
      paraTypes: this.$store.getters.getParaTypes,
      describe: this.$store.getters.getParaDescribe,
      lastImage: {},
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
        if (id in this.$store.getters.getStoppedDevices) continue
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
        //console.log(id)
        //console.log(devicesData[id])
        if (devicesData[id] !== undefined) {
          tempObj._v = devicesData[id]._v
          tempObj._u = devicesData[id]._u
          tempObj._d = devicesData[id]._d
          tempObj._T = devicesData[id]._T
        }

        // tempObj.rst=devicesData[id].rst
        // tempObj.vol=devicesData[id].vol
        // tempObj.temp=devicesData[id].temp
        // tempObj.humi=devicesData[id].humi


        let tempNestedData = []
        let paraTypes = this.paraTypes
        for (let j = 0; j < paraTypes.length; j++) {
          if (paraTypes[j] === '_do')
            tempNestedData.push({
              name: paraTypes[j],
              value: devices[i]['th' + paraTypes[j]],
              description: this.describe[j]
            })
          else
            tempNestedData.push({
              name: paraTypes[j],
              value: devices[i]['th_' + paraTypes[j]],
              description: this.describe[j]
            })
        }

        tempObj.nestedData = tempNestedData
        // console.log(tempObj)

        temp.push(tempObj)

        //console.log(temp)
      }
      this.$store.commit('setDeviceManageData', temp)

      return temp
      //return this.$store.getters.getDeviceManageData
    },
  },
  methods: {
    handleEditName(scope) {
      this.modalTitle = '修改设备名称'
      this.modalHint = '请输入新的设备名称'
      this.visible = 'name'
      this.editingId = scope.id
      // console.log(scope)
      // alert(scope.id)
    },
    handleEditTh(id, scope) {
      this.modalTitle = '设置阈值'
      this.modalHint = '请输入新的阈值'
      this.visible = 'th'
      this.editingId = id
      this.editingType = scope.name
      // console.log(id)
      // console.log(scope)
    },
    handleOk() {
      this.confirmLoading = true
      if (this.visible === 'name') {
        let data = {
          id: this.editingId,
          name: this.modalValue
        }
        this.$store.dispatch('setDeviceName', data).then(() => {
          this.visible = '';
          this.confirmLoading = false;
          this.$message.success('修改成功' + this.editingId + ',' + this.modalValue);
          this.modalValue = ''
          this.updateData(data)
        }).catch(() => {
          this.visible = '';
          this.confirmLoading = false;
          this.$message.error('修改失败')
          this.modalValue = ''
        })
      } else if (this.visible === 'th') {
        let data = {
          id: this.editingId,
          type: this.editingType,
          value: this.modalValue
        }
        //console.log(data)
        this.$store.dispatch('setDeviceThreshold', data).then(() => {
          this.visible = '';
          this.confirmLoading = false;
          this.$message.success('修改成功' + this.editingId + ',' + this.editingType + ',' + this.modalValue)
          this.modalValue = ''
          this.updateData(data)
        }).catch(() => {
          this.visible = '';
          this.confirmLoading = false;
          this.$message.error('修改失败')
          this.modalValue = ''
        })
      }

    },
    handleCancel() {
      this.visible = ''
      this.modalValue = ''
    },
    updateData(data) {
      //let index =
      console.log(this.data.map(item => item).indexOf(data.id))
      // if (data.type) {
      //   this.data[index].nestedData[this.data[index].nestedData.map(item => item.name).indexOf(data.type)].value = data.value
      // } else if (data.name) {
      //   this.data[index].name = data.name
      // }
      this.$store.dispatch("getDevice").then(() => {
        this.$store.dispatch("getAllDeviceData").then(() => {
          this.$store.commit("setIsReady", true)
        });
      })
    },
    handleShowImage(scope) {
      this.getImage(scope.id)
    },
    getImage(id) {
      this.$store.dispatch('requestImage', id).then(() => {
        this.$store.dispatch("getDeviceDataById", id).then(res => {
          if (res["picAddr"]) {
            let image = res["picAddr"];
            if (this.lastImage[id] == null) {
              this.lastImage[id] = image
            } else if (this.lastImage[id] !== image) {
              this.lastImage[id] = image
            } else if (this.lastImage[id] === image) {
              this.$error({
                title: '图片查看错误',
                content: '未获取该设备的最新图片，请等待光谱仪上传图片后再查看'
              });
              return
            }
            this.$success({
              title: '图片获取成功',
              // JSX support
              content: (
                  <div>
                    <img src={image} style="width: 100%;height: 100%"/>
                  </div>
              ),
            });
            window.open(image)

          }
        }).catch(() => {
          this.$error({
            title: '图片查看错误',
            content: '该设备暂不支持查看图片',
          });
        });
      })
    }
  },
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

<template>
  <div>
    <a-table :data-source="warnData"
             :defaultExpandAllRows="false"
             class="tttt">
      <a-table-column title="设备编号" data-index="id"/>
      <a-table-column title="设备名称" data-index="name"/>
      <a-table-column title="报警参数" data-index="params"/>
      <a-table-column title="报警时阈值" data-index="th"/>
      <a-table-column title="报警时参数值" data-index="value"/>
      <a-table-column title="报警时间" data-index="time"/>
      <!--    <a-table-column title="操作" data-index="operation">-->
      <!--      <template slot-scope="text,recordName">-->
      <!--        <a-button type="primary" @click="handleEditName(recordName)">修改设备名称</a-button>-->
      <!--      </template>-->
      <!--    </a-table-column>-->
    </a-table>
    <a-button type="primary" @click="handleExport">导出数据</a-button>
  </div>
</template>

<script>
import * as XLSX from "xlsx";

export default {
  name: "warnTab",
  data() {
    return {
      dataGet: null,
    }
  },
  created() {
    this.$store.dispatch('getWarn').then(res => {
      this.dataGet = res;
      console.log(this.dataGet)
    })
  },
  computed: {
    warnData() {
      let res = []
      if (this.dataGet === null) return null;
      console.log(this.dataGet)
      for (let i = 0; i < this.dataGet.length; i++) {
        res.push({
          id: this.dataGet[i].id,
          name: this.dataGet[i].name,
          params: this.dataGet[i].type,
          th: this.dataGet[i].th,
          value: this.dataGet[i].now,
          time: this.dataGet[i].time
        })
      }
      return res;
    }
  },
  methods: {
    handleExport() {
      let data = this.warnData
      let ws = XLSX.utils.json_to_sheet(data);
      let wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
      XLSX.writeFile(wb, "报警记录.xlsx");
    }
  }

}
</script>

<style scoped>
h2 {
  padding: 5px;
  float: left
}

.tttt {
  margin-top: 20px;
  background: white;
}
</style>

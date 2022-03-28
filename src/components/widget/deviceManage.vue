<template>
  <div>
    <a-table
        :columns="columns"
        :data-source="data"
        bordered
        size="middle"
        class="tttt">
    </a-table>
  </div>
</template>

<script>
const columns = [
  {
    title: '设备编号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '设备名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '位置',
    children: [
      {
        title: '经度',
        dataIndex: 'posx',
        key: 'posx',
      },
      {
        title: '纬度',
        dataIndex: 'posy',
        key: 'posy',
      }
    ]
  }, {
    title: '是否报警',
    dataIndex: 'alerted',
    key: 'alerted',
  },
  {
    title: '报警参数',
    dataIndex: 'paramsAlerted',
    key: 'paramsAlerted',
  },

]

export default {
  name: "deviceManage",
  data() {
    return {
      columns: columns,
    }
  },
  computed: {
    data() {
      return this.$store.state.devices
    }
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

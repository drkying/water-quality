<template>
  <div class="access_code">
    <h1>在 线 水 质 监 测 预 警 系 统</h1>
    <a-input-password aria-placeholder="请输入授权码"
                      v-model="accesscode"
                      :value="accesscode"
                      @keyup.enter="doLogin"
                      style="width: 300px;"
    ></a-input-password>
    <p>code is: {{ accesscode }}</p>
    <br/>
    <a-button @click="doLogin">确定</a-button>
  </div>
</template>

<script>
export default  {
  data () {
    return {
      accesscode: '',
      message: '',
    }
  },
  methods: {
    doLogin () {
      // if (this.accesscode === '123') {
      //   this.$store.commit('setIsLogin',true)
      //   this.$router.push('/home')
      // } else {
      //   this.$message.error('授权码错误')
      // }
      this.$store.dispatch("checkCode", this.accesscode).then(res => {
        if (res.success) {
          this.$store.commit('setIsLogin', true)
          this.$store.commit('setFilter', res.message)
          this.$store.dispatch("getDevice").then(() => {
            this.$store.dispatch("getAllDeviceData").then(() => {
              this.$store.commit("setIsReady", true)
              this.$message.success('登录成功')
              this.$message.success('可查看的设备范围为：' + this.$store.getters.getFilter)
              this.$router.push('/home')
            });
          })
        } else {
          this.$message.error(res.message)
        }
      }).catch(err => {
        this.$message.error(err)
      })
    }
  }
}
</script>
<style>
.access_code {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
  flex-direction: column;
  /*background: url(../assets/login-back.jpg)*/
  background: white;
  padding: 50px;
}

h1 {
  color: #6CA6CD;
  font-weight: bold;
}

</style>

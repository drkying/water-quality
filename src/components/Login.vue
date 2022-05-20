<template>
  <div class="access_code">
    <div class="login_box">
      <h1>在 线 水 质 监 测 预 警 系 统</h1>
      <a>公司名：</a>
      <a-input style="width: 300px;"
               v-model="name"
               :value="name"
               @keyup.enter="doLogin"></a-input>
      <br/>
      <br/>
      <a>授权码：</a>
      <a-input-password aria-placeholder="请输入授权码"
                        v-model="accesscode"
                        :value="accesscode"
                        @keyup.enter="doLogin"
                        style="width: 300px;"
      ></a-input-password>
      <br/>
      <br/>
      <br/>
      <a-button @click="doLogin">确定</a-button>
    </div>
  </div>
</template>

<script>
export default  {
  data () {
    return {
      name: '',
      accesscode: '',
      message: '',
    }
  },
  methods: {
    doLogin () {
      this.$store.dispatch("checkCode", this.accesscode).then(res => {
        if (res.success) {
          if (res.message === this.name) {
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
            this.$message.error('公司名或授权码错误')
          }
        } else {
          this.$message.error(res.message)
        }
      }).catch(err => {
        this.$message.error(err)
      })
    }
  },
  beforeCreate() {
    document.body.style.backgroundColor = '#FFFFFF'
  }
}
</script>
<style>
.access_code {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 200px;
  background: url('../assets/login.jpg');
  position: fixed;
  background-size: 100% 100%;
}

.login_box {
  padding: 50px;
  background: rgba(0, 0, 0, .5);
  /*背景颜色为黑色，透明度为0.8*/
  box-sizing: border-box;
  /*box-sizing设置盒子模型的解析模式为怪异盒模型，
  将border和padding划归到width范围内*/
  box-shadow: 0px 15px 25px rgba(0, 0, 0, .5);
  /*边框阴影  水平阴影0 垂直阴影15px 模糊25px 颜色黑色透明度0.5*/
  border-radius: 15px;
  /*边框圆角，四个角均为15px*/
}

h1 {
  color: #6CA6CD;
  font-weight: bold;
}

</style>

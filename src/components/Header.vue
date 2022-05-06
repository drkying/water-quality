<template>
  <div class="content-header">
    <div class="logo" @click="showHome(0)">
      <img src="../assets/logo.jpg" alt="">
    </div>
    <div class="nav">
      <div class="nav-title" @click="showHome(0)">
        在线水质检测预警系统
      </div>
      <div class="nav-down">
        <div class="time">
          <nowTime/>
        </div>
        <div @click="doSignOut">
          <a-dropdown>
            <a-menu slot="overlay" @click="doSignOut">
              <a-menu-item key="1"> 退出登录</a-menu-item>
            </a-menu>
            <a-button style="margin-left: 8px">
              <a-icon type="user"/>
              用户: {{ this.$store.getters.getFilter }}
              <a-icon type="down"/>
            </a-button>
          </a-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import nowTime from "@/tools/nowTime";

export default {
  name: "Header",
  components: {
    nowTime: nowTime
  },
  props: {
    fatherMethod: {
      type: Function,
      default: null
    }
  },
  methods: {
    doSignOut() {
      this.$store.commit('setIsLogin', false)
      this.$message.info('登出成功')
      this.$router.push('/login')
    },
    showHome(v) {
      if (this.fatherMethod) {
        this.fatherMethod(v);
      }
    }
  },
}
</script>

<style scoped>
.content-header {
  height: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
}

.logo {
  width: 8%;
}
.logo img {
  width: 100px;
}
.nav {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-title {
  height: 100%;
  font-size: 24px;
  color: #303382;
  font-weight: 700;
  display: flex;
  align-items: center;
}
.nav-down {
  display: flex;
  /*align-items: flex-start;*/
  justify-content: space-between;
  align-items: center;
}
.time {
  margin-right: 15px;
  color: #999;
}
.mini{
  color: #333;
}
.user {
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c5c1c1;
  font-weight: 700;
  color: rgb(122, 118, 118);
  padding: 3px 10px;
  border-radius: 3px;
  font-size: 14px;
}
</style>

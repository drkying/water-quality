<template>
  <div class="right-top">
    <div class="status">
      仪器状态
    </div>
    <div class="statu-list">
      <div class="bot">
        <div class="point" style="background-color:#1BA46E;"></div>
        <div class="text">运行</div>
      </div>
      <div class="bot">
        <div class="point" style="background-color:#E25F17;"></div>
        <div class="text">报警</div>
      </div>
      <!--      <div class="bot">-->
      <!--        <div class="point" style="background-color:#1B499E;"></div>-->
      <!--        <div class="text">暂停</div>-->
      <!--      </div>-->
      <div class="bot">
        <div class="point" style="background-color:#787878;"></div>
        <div class="text">离线</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "devicesStatus"
}
</script>

<style scoped>
.right-top {
  width: 100%;
  height: 60px;
  background-color: #303030;
  padding: 3px 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 5px;
}
.status {
  background-color: #424242;
  height: 90%;
  width: 45px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin-right: 60px;
}

.statu-list {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.bot {
  margin-right: 100px;
  position: relative;
}
.point {
  position: absolute;
  content: '';
  width: 17px;
  height: 17px;
  top: 4px;
  left: -23px;
  border-radius: 50%;
  background-color: red;
}
</style>

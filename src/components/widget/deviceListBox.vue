<template>
  <div>
    <div class="wrap">
      <div class="title">
        设备列表
      </div>
      <div class="box-list">
        <div class="box">
          <div class="big-text">设备001</div>
          <div class="small-text">代用名001</div>
        </div>
        <div class="box" style="background-color: #1BA46E;">
          <div class="big-text">设备002</div>
          <div class="small-text">代用名002</div>
        </div>
        <div class="box" style="background-color: #1BA46E;">
          <div class="big-text">设备003</div>
          <div class="small-text">代用名003</div>
        </div>
        <div class="box" style="background-color: #1A4A9C;">
          <div class="big-text">设备004</div>
          <div class="small-text">代用名004</div>
        </div>
        <div class="box" style="background-color: #1BA46E;">
          <div class="big-text">设备005</div>
          <div class="small-text">代用名005</div>
        </div>
        <div class="box" style="background-color: #7F7F7F;">
          <div class="big-text">设备006</div>
          <div class="small-text">代用名006</div>
        </div>
      </div>
    </div>
    <div class="toggel-box">
      <div class="toggel">设备地图</div>
      <div class="toggel">报警管理</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "deviceListBox"
}
</script>

<style scoped>

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

.box {
  width: 90%;
  background-color: #e55c17;
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

</style>

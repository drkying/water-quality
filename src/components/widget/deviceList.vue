<!--
  a data-name
  b data
  c data-button
  -->
<template>
  <div class="divce-list">
    <div class="divce-title">
      设备001
    </div>
    <div class="params-list">
      <div class="params">
        <span class="a">COD</span>
        <span class="b" style="color: #E55C17;">10.88</span>
        <span class="c" style="background-color: #E55C17;">查看曲线</span>
      </div>
      <div class="params">
        <span class="a">氨氮</span>
        <span class="b">10.88</span>
        <span class="c">查看曲线</span>
      </div>
      <div class="params">
        <span class="a">ZD</span>
        <span class="b">10.88</span>
        <span class="c">查看曲线</span>
      </div>
      <div class="params">
        <span class="a">YL</span>
        <span class="b">10.88</span>
        <span class="c">查看曲线</span>
      </div>
      <div class="params">
        <span class="a">DOM</span>
        <span class="b">10.88</span>
        <span class="c">查看曲线</span>
      </div>
      <div class="params">
        <span class="a">TOC</span>
        <span class="b">10.88</span>
        <span class="c">查看曲线</span>
      </div>
      <div class="params">
        <span class="a">TDS</span>
        <span class="b">10.88</span>
        <span class="c">查看曲线</span>
      </div>
      <div class="params">
        <span class="a">TEM</span>
        <span class="b">10.88</span>
        <span class="c">查看曲线</span>
      </div>
      <div class="params">
        <span class="a">PH</span>
        <span class="b">10.88</span>
        <span class="c">查看曲线</span>
      </div>
      <div class="params">
        <span class="a">溶解氧</span>
        <span class="b">10.88</span>
        <span class="c">查看曲线</span>
      </div>
      <div class="params">
        <span class="a">SW</span>
        <span class="b">10.88</span>
        <span class="c">查看曲线</span>
      </div>
      <div class="params">
        <span class="a">DD</span>
        <span class="b">10.88</span>
        <span class="c">查看曲线</span>
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
      <div class="sub-param">
        <span class="sub-a">油厚度</span>
        <span class="sub-b">0.23</span>
        <span class="sub-c">查看曲线</span>
      </div>
      <div class="sub-param">
        <span class="sub-a">油强度</span>
        <span class="sub-b">0.23</span>
        <span class="sub-c">查看曲线</span>
      </div>
    </div>
    <div class="bottom-dic">
      仪器参数
    </div>
  </div>
</template>

<script>
export default {
  name: "deviceList"
}
</script>

<style scoped>

.divce-list {
  width: 16.6%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 13px;
  margin-right: 0.5%;
  background-color: #303030;
  padding: 5px 8px;
  border-radius: 5px;
}
.divce-title {
  width: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e45a17;
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
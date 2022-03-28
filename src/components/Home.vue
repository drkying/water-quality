<template>
  <div id="app">
    <Header/>
    <div class="content-bottom">
      <div class="main-left">
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
          <div class="toggel" @click="this.$router.push('/deviceManage')">报警管理</div>
        </div>
      </div>
      <div class="main-right">
        <devices-status/>
        <div class="right-middle">
          <div v-for="item in devices.slice(0,6)" :key="item.id"
               class="divce-list"
          >
            <device-card
                :device="item"
                :deviceData="deviceData[item.id]"
            />
          </div>
          <!--          <device-card-->
          <!--              :device="devices[0]"-->
          <!--              :deviceData="deviceData[devices[0].id]"-->
          <!--          />-->
          <!--          <div class="divce-list">-->
          <!--            <div class="divce-title">-->
          <!--              设备001-->
          <!--            </div>-->
          <!--            <div class="params-list">-->
          <!--              <div class="params">-->
          <!--                <span class="a">COD</span>-->
          <!--                <span class="b" style="color: #E55C17;">10.88</span>-->
          <!--                <span class="c" style="background-color: #E55C17;">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">氨氮</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">ZD</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">YL</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">DOM</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">TOC</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">TDS</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">TEM</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">PH</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">溶解氧</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">SW</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">DD</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--            <div class="divce-sub-title">-->
          <!--              油污检测参数-->
          <!--            </div>-->
          <!--            <div class="sub-params-list">-->
          <!--              <div class="sub-param">-->
          <!--                <span class="sub-a">油污种类</span>-->
          <!--                <span class="sub-b">暂无</span>-->
          <!--                <span class="sub-c"></span>-->
          <!--              </div>-->
          <!--              <div class="sub-param">-->
          <!--                <span class="sub-a">油厚度</span>-->
          <!--                <span class="sub-b">0.23</span>-->
          <!--                <span class="sub-c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="sub-param">-->
          <!--                <span class="sub-a">油强度</span>-->
          <!--                <span class="sub-b">0.23</span>-->
          <!--                <span class="sub-c">查看曲线</span>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--            <div class="bottom-dic">-->
          <!--              仪器参数-->
          <!--            </div>-->
          <!--          </div>-->

          <!--          <div class="divce-list">-->
          <!--            <div class="divce-title" style="background-color: #1BA46E;">-->
          <!--              设备002-->
          <!--            </div>-->
          <!--            <div class="params-list">-->
          <!--              <div class="params">-->
          <!--                <span class="a">COD</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">氨氮</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">ZD</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">YL</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">DOM</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">TOC</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">TDS</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">TEM</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">PH</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">溶解氧</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">SW</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">DD</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--            <div class="divce-sub-title">-->
          <!--              油污检测参数-->
          <!--            </div>-->
          <!--            <div class="sub-params-list">-->
          <!--              <div class="sub-param">-->
          <!--                <span class="sub-a">油污种类</span>-->
          <!--                <span class="sub-b">暂无</span>-->
          <!--                <span class="sub-c"></span>-->
          <!--              </div>-->
          <!--              <div class="sub-param">-->
          <!--                <span class="sub-a">油厚度</span>-->
          <!--                <span class="sub-b">0.23</span>-->
          <!--                <span class="sub-c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="sub-param">-->
          <!--                <span class="sub-a">油强度</span>-->
          <!--                <span class="sub-b">0.23</span>-->
          <!--                <span class="sub-c">查看曲线</span>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--            <div class="bottom-dic">-->
          <!--              仪器参数-->
          <!--            </div>-->
          <!--          </div>-->
          <!--          <div class="divce-list">-->
          <!--            <div class="divce-title" style="background-color: #1BA46E;">-->
          <!--              设备003-->
          <!--            </div>-->
          <!--            <div class="params-list">-->
          <!--              <div class="params">-->
          <!--                <span class="a">COD</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">氨氮</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">ZD</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">YL</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">DOM</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">TOC</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">TDS</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">TEM</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">PH</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">溶解氧</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">SW</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">DD</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--            <div class="divce-sub-title">-->
          <!--              油污检测参数-->
          <!--            </div>-->
          <!--            <div class="sub-params-list">-->
          <!--              <div class="sub-param">-->
          <!--                <span class="sub-a">油污种类</span>-->
          <!--                <span class="sub-b">暂无</span>-->
          <!--                <span class="sub-c"></span>-->
          <!--              </div>-->
          <!--              <div class="sub-param">-->
          <!--                <span class="sub-a">油厚度</span>-->
          <!--                <span class="sub-b">0.23</span>-->
          <!--                <span class="sub-c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="sub-param">-->
          <!--                <span class="sub-a">油强度</span>-->
          <!--                <span class="sub-b">0.23</span>-->
          <!--                <span class="sub-c">查看曲线</span>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--            <div class="bottom-dic">-->
          <!--              仪器参数-->
          <!--            </div>-->
          <!--          </div>-->
          <!--          <div class="divce-list list4">-->
          <!--            <div class="divce-title" style="background-color: #1A4A9C;">-->
          <!--              设备004-->
          <!--            </div>-->
          <!--            <div class="params-list">-->
          <!--              <div class="params">-->
          <!--                <span class="a">COD</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">氨氮</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">ZD</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">YL</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">DOM</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">TOC</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">TDS</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">TEM</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">PH</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">溶解氧</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">SW</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">DD</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--            <div class="divce-sub-title">-->
          <!--              油污检测参数-->
          <!--            </div>-->
          <!--            <div class="sub-params-list">-->
          <!--              <div class="sub-param">-->
          <!--                <span class="sub-a">油污种类</span>-->
          <!--                <span class="sub-b">暂无</span>-->
          <!--                <span class="sub-c"></span>-->
          <!--              </div>-->
          <!--              <div class="sub-param">-->
          <!--                <span class="sub-a">油厚度</span>-->
          <!--                <span class="sub-b">0.23</span>-->
          <!--                <span class="sub-c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="sub-param">-->
          <!--                <span class="sub-a">油强度</span>-->
          <!--                <span class="sub-b">0.23</span>-->
          <!--                <span class="sub-c">查看曲线</span>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--            <div class="bottom-dic">-->
          <!--              仪器参数-->
          <!--            </div>-->
          <!--          </div>-->
          <!--          <div class="divce-list">-->
          <!--            <div class="divce-title" style="background-color: #1BA46E;">-->
          <!--              设备005-->
          <!--            </div>-->
          <!--            <div class="params-list">-->
          <!--              <div class="params">-->
          <!--                <span class="a">COD</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">氨氮</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">ZD</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">YL</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">DOM</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">TOC</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">TDS</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">TEM</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">PH</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">溶解氧</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">SW</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">DD</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--            <div class="divce-sub-title">-->
          <!--              油污检测参数-->
          <!--            </div>-->
          <!--            <div class="sub-params-list">-->
          <!--              <div class="sub-param">-->
          <!--                <span class="sub-a">油污种类</span>-->
          <!--                <span class="sub-b">暂无</span>-->
          <!--                <span class="sub-c"></span>-->
          <!--              </div>-->
          <!--              <div class="sub-param">-->
          <!--                <span class="sub-a">油厚度</span>-->
          <!--                <span class="sub-b">0.23</span>-->
          <!--                <span class="sub-c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="sub-param">-->
          <!--                <span class="sub-a">油强度</span>-->
          <!--                <span class="sub-b">0.23</span>-->
          <!--                <span class="sub-c">查看曲线</span>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--            <div class="bottom-dic">-->
          <!--              仪器参数-->
          <!--            </div>-->
          <!--          </div>-->
          <!--          <div class="divce-list  list6">-->
          <!--            <div class="divce-title" style="background-color: #7F7F7F;">-->
          <!--              设备006-->
          <!--            </div>-->
          <!--            <div class="params-list">-->
          <!--              <div class="params">-->
          <!--                <span class="a">COD</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">氨氮</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">ZD</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">YL</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">DOM</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">TOC</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">TDS</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">TEM</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">PH</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">溶解氧</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">SW</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="params">-->
          <!--                <span class="a">DD</span>-->
          <!--                <span class="b">10.88</span>-->
          <!--                <span class="c">查看曲线</span>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--            <div class="divce-sub-title">-->
          <!--              油污检测参数-->
          <!--            </div>-->
          <!--            <div class="sub-params-list">-->
          <!--              <div class="sub-param">-->
          <!--                <span class="sub-a">油污种类</span>-->
          <!--                <span class="sub-b">暂无</span>-->
          <!--                <span class="sub-c"></span>-->
          <!--              </div>-->
          <!--              <div class="sub-param">-->
          <!--                <span class="sub-a">油厚度</span>-->
          <!--                <span class="sub-b">0.23</span>-->
          <!--                <span class="sub-c">查看曲线</span>-->
          <!--              </div>-->
          <!--              <div class="sub-param">-->
          <!--                <span class="sub-a">油强度</span>-->
          <!--                <span class="sub-b">0.23</span>-->
          <!--                <span class="sub-c">查看曲线</span>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--            <div class="bottom-dic">-->
          <!--              仪器参数-->
          <!--            </div>-->
          <!--          </div>-->
        </div>
        <div class="right-bottom">
          <img src="../assets/bottom.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import DevicesStatus from "@/components/widget/devicesStatus";
import DeviceCard from "@/components/widget/deviceCard";

export default {
  name: "Home",
  components: {
    DeviceCard,
    DevicesStatus,
    Header: Header,
  },
  computed: {
    devices() {
      return this.$store.state.devices;
    },
    deviceData() {
      return this.$store.state.deviceData;
    },
  }
}
</script>

<style scoped>


div {
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background-color: #303382;
}


.content-bottom {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

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

.main-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3c3e3d;
  padding: 5px 8px;
  color: #fff;
}

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

.right-bottom {
  width: 100%;
  /* background-color: #303030; */
  height: 360px;
  padding: 3px 0;
}

.right-bottom img {
  width: 100%;
  height: 100%;
}

.right-middle {
  width: 100%;
  flex: 1;
  background-color: #3c3e3d;
  padding: 5px 0;
  display: flex;
}

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

.list4 .b {
  color: #1a4a9c;
}

.list4 .c {
  background-color: #1a4a9c;
}

.list4 .divce-sub-title {
  background-color: #1a4a9c;
}

.list4 .sub-b {
  color: #1a4a9c;
}

.list4 .sub-c {
  background-color: #1a4a9c;
}

.list6 .b {
  color: #7f7f7f;
}

.list6 .c {
  background-color: #7f7f7f;
}

.list6 .divce-sub-title {
  background-color: #7f7f7f;
}

.list6 .sub-b {
  color: #7f7f7f;
}

.list6 .sub-c {
  background-color: #7f7f7f;
}

</style>

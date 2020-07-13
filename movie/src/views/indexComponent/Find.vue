<template>
  <div class="find animated fadeIn">
    <div class="find-box">
      <van-nav-bar title="发现" fixed/>

      <div class="find-bg">
        <van-icon name="warning-o" size="150px" />
        <p>暂无更多内容</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"find",
  
};
</script>

<style lang="less" scoped>
.find {
  .find-box {
    background-color: #fff;
    width: 100%;
    height: 100%;
    color: #ccc;
    position: fixed;
    top: 0px;
    bottom: 50px;
    > .van-nav-bar {
      background: #ea1e63;
      top: 0;
      left: 0;
      /deep/.van-nav-bar__title {
        color: #ffffff;
      }
    }
    .find-bg {
      text-align: center;
      margin-top: 240px;
      > p {
        font-size: 20px;
      }
    }
  }
}
</style>
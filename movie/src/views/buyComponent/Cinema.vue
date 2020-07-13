<template>
  <div class="cinema">
    <div class="cinema-box">
      <div class="cinema-bg">
        <van-icon name="warning-o" size="150px" />
        <p>暂无更多内容</p>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name:"cinema",
    
  }
</script>

<style lang="less" scoped>
.cinema{
  position: fixed;
  top: 40px;
  bottom: 50px;
  left: 0;
  right: 0;
  background-color: #fff;
  .cinema-box{
    color: #ccc;
     .cinema-bg {
      text-align: center;
      margin-top: 200px;
      > p {
        font-size: 20px;
      }
    }
  }
}
</style>
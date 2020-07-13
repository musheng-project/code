<template>
  <div class="banner animate__animated animate__fadeIn">
    <img src="@/assets/images/banner.jpg" alt />
    <div class="time" @click="homeGo">{{num}} | 跳过</div>
  </div>
</template>

<script>
export default {
  name: "banner",

  data() {
    return {
      num: 5,
      clearTimer: null
    };
  },

  methods: {
    homeGo() {
    //   跳转home页面
      this.$router.push("/home");
    }
  },

  created() {
    // 倒计时
    this.clearTimer = setInterval(() => {
      if (this.num == 0) {
        this.$router.push("/home");
      } else {
        this.num--;
      }
    }, 1000);
  },

  beforeDestroy() {
    // 清除定时器
    clearInterval(this.clearTimer);
  }
};
</script>

<style lang="less" scoped>
.banner {
  position: fixed;
  top: 0;
  left: 0;
  .time {
    width: 70px;
    height: 35px;
    background-color: rgba(0, 0, 0, 0.4);
    line-height: 35px;
    text-align: center;
    border-radius: 25px;
    font-size: 14px;
    color: #fff;
    position: absolute;
    top: 15px;
    right: 15px;
  }
}
</style>
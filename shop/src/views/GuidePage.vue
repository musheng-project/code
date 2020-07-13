<template>
  <div class="guidePage">
    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img class="animate__animated animate__zoomIn" v-show="flag" src="@/assets/images/guide-img1.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img class="animate__animated animate__zoomIn" v-show="flag" src="@/assets/images/guide-img2.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img class="animate__animated animate__zoomIn" v-show="flag" src="@/assets/images/guide-img3.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img class="animate__animated animate__zoomIn" v-show="flag" src="@/assets/images/guide-img4.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img class="animate__animated animate__zoomIn" v-show="flag" src="@/assets/images/guide-img5.jpg" alt />
          <button @click="homeGo" class="animate__animated animate__fadeInUp delay-1s" v-show="flag">立即体验</button>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  name: "guidePage",

  data() {
    return {
      flag: true
    };
  },
  methods: {
    // 按钮跳转
    homeGo() {
      localStorage.one = true;
      this.$router.push("/home");
    }
  },
  created() {
    // 判断是否执行引导页
    if (localStorage.one) {
      this.$router.push("/banner");
    } else {
      localStorage.one = true;
    }
  },
  mounted() {
    let _this = this;

    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination"
      },
      on: {
        // 轮播图跳转前
        slideChangeTransitionStart: function() {
          _this.flag = false;
        },
        // 轮播图跳转后
        slideChangeTransitionEnd: function() {
          _this.flag = true;
        }
      }
    });
  }
};
</script>

<style lang="less" scoped>
.swiper-container {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  .swiper-slide {
    text-align: center;
    display: block;
  }
  /deep/.swiper-pagination {
    .swiper-pagination-bullet{
      background-color: rgba(0, 0, 0, 0.9);
    }
    .swiper-pagination-bullet-active {
      background-color: #ff464e;
    }
  }
}

button {
  width: 200px;
  height: 45px;
  line-height: 45px;
  border: 1px solid #ff464e;
  background: #ff464e;
  color: #fff;
  font-size: 16px;
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 40px;
  margin: 0 auto;
}
</style>

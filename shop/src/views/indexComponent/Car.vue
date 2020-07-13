<template>
  <div class="car animate__animated animate__fadeIn">
    <van-nav-bar title="购物车" right-text="编辑" left-arrow fixed @click-left="back" />

    <div class="jp_car_box" v-show="isShow">
      <div>
        <img
          class="jp_car_img"
          src="https://jp.juancdn.com/jpwebapp_v1/images_v1/shopping/empty-cart.png"
          alt
        />
        <div class="jp_car_info">看到喜欢的就带回家吧</div>
        <van-button color="#ff464e" plain @click="homeGo">今日推荐</van-button>
      </div>
    </div>

    <van-checkbox-group class="card-goods" v-model="checkedGoods" v-show="!isShow">
      <van-checkbox
        class="card-goods-item"
        v-for="(item, index) in goodsData"
        :key="index"
        :name="item.id"
      >
        <van-card
          class="one-text"
          :num="item.num"
          :price="formatPrice(item.price)"
          :origin-price="formatPrice(item.price2)"
          :desc="item.type"
          :title="item.title"
          :thumb="item.sliderData[0]"
        />
      </van-checkbox>
    </van-checkbox-group>

    <!-- 底部导航 -->
    <van-submit-bar
      v-show="!isShow"
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "car",

  data() {
    return {
      isShow: true,

      checkedGoods: this.$store.state.car.checkedGoods
    };
  },

  computed: {
    ...mapState({
      goodsData: state => state.car.goodsData
    }),

    submitBarText() {
      const count = this.checkedGoods.length;
      return "结算" + (count ? `(${count})` : "");
    },
    totalPrice() {
      // reduce() 将数字元素计算为一个值（从左到右）
      // indexOf() 搜索数组中的元素，并返回它所在的位置
      return this.goodsData.reduce(
        (total, item) =>
          total +
          (this.checkedGoods.indexOf(item.id) !== -1
            ? item.price * item.num * 100
            : 0),
        0
      );
    }
  },

  methods: {
    homeGo() {
      this.$router.push("/home");
    },

    back() {
      this.$router.go(-1);
    },

    formatPrice(price) {
      return price.toFixed(2);
    },

    onSubmit() {
      this.$toast("点击结算");
    }
  },

  created() {
    this.isShow = true;

    let addCarData = localStorage.getItem("addCarData");

    if (addCarData) {
      addCarData = JSON.parse(addCarData);
      this.isShow = false;

      this.$toast.loading({
        duration: 1000,
        message: "加载中...",
        forbidClick: true
      });
    }
  },

  watch: {
    "$route.path": function(newValue, oldValue) {
      if (newValue === "/car") {
        this.isShow = true;

        let addCarData = localStorage.getItem("addCarData");

        if (addCarData) {
          addCarData = JSON.parse(addCarData);
          this.isShow = false;
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.car {
  background-color: #f4f4f8;
  // position: fixed;
  // top: 0;
  // left: 0;
  // width: 100%;
  // height: 100%;
  padding-top: 46px;
  padding-bottom: 50px;
  /deep/.van-nav-bar {
    .van-icon,
    .van-nav-bar__title {
      color: #333333;
      font-size: 18px;
    }
    .van-icon {
      font-size: 22px;
    }
    .van-nav-bar__text {
      color: #4a4a4a;
      font-size: 15px;
    }
  }

  .jp_car_box {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    padding-top: 25px;
    > div {
      text-align: center;
      .jp_car_img {
        width: 140px;
        height: 140px;
      }
      .jp_car_info {
        color: #333;
        font-size: 16px;
        margin-top: 8px;
      }
      /deep/.van-button {
        width: 140px;
        background-color: #f4f4f8;
        margin-top: 15px;
      }
    }
  }

  .card-goods {
    // padding: 10px 0;
    background-color: #f4f4f8;
    .card-goods-item {
      position: relative;
      background-color: #ffffff;
      padding: 0 10px;
      .van-checkbox__label {
        width: 100%;
        height: auto;
        padding: 0 10px 0 15px;
        box-sizing: border-box;
      }
      .van-checkbox {
        padding: 0 10px;
      }
      .van-checkbox__icon {
        top: 50%;
        left: 10px;
        z-index: 1;
        position: absolute;
        margin-top: -10px;
      }

      .van-card__price {
        color: #f44;
      }
    }
    .van-card {
      background-color: #ffffff;
      .van-card__title {
        width: 200px;
      }
      .van-multi-ellipsis--l2 {
        display: block;
      }
    }
  }
  .van-submit-bar {
    bottom: 50px !important;
  }

  /deep/.van-checkbox {
    margin-bottom: 10px;
  }
}
</style>

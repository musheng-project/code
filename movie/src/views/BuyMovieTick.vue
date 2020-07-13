<template>
  <div class="buy-movie-tick">
    <div class="bg" :style="{backgroundImage: 'url(' + data.image + ')'}">
      <van-nav-bar title="座位选择" left-text="返回" left-arrow @click-left="back"/>
    </div>
    <div class="seat-box">
      <div class="tick-box">
        <ul class="tick clearfix" :style="{width: width + 'px'}">
          <li ref="userchair" v-for="(item, index) in userChairData" :key="index">
            <span class="c c1"></span>
            <i class="r r1"></i>
            {{item.row}}排{{item.col}}座
            <span class="c c2"></span>
            <i class="r r2"></i>
          </li>
        </ul>
      </div>

      <!-- 银屏 -->
      <div class="screen">
        <div class="screen-arc"></div>
        <div class="screen-arc1"></div>
      </div>

      <!-- 座位 -->
      <div class="chair-box">
        <div
          class="chair"
          :class="index == 0 ? 'chair1' : index == 6 ? 'chair3' : 'chair2'"
          v-for="(item, index) in chairDatas"
          :key="index"
        >
          <span
            v-for="(value, key) in item"
            :key="key"
            :class="{s3: index > 0 && index < 6 && key == 2, s8: index > 0 && index < 6 && key == 7, buying: value.type == 'buying', selected: value.type == 'selected'}"
            @click="selectChair(value)"
          ></span>
        </div>
      </div>

      <!-- 座位标志 -->
      <div class="chair-flag clearfix">
        <div>
          <div class="c-box clearfix">
            <i class="c-bg fl c-bg1"></i>
            <span class="fl buyed">已售</span>
          </div>
        </div>

        <div>
          <div class="c-box clearfix m-box">
            <i class="c-bg fl c-bg2"></i>
            <span class="fl buyed">已选</span>
          </div>
        </div>

        <div>
          <div class="c-box clearfix fr">
            <i class="c-bg fl c-bg3"></i>
            <span class="fl buyed">可选</span>
          </div>
        </div>
      </div>

      <!-- 购票 -->
      <div class="buy-tick">
        <span class="fl total">合计：￥00.00</span>
        <van-button class="fr" color="#ea1e63" plain round>确认支付</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const {mapState, mapMutations} = createNamespacedHelpers("buyMovieTickModule")

export default {
  name: "buyMovieTick",

  methods: {
    ...mapMutations(["resetData"]),

    // 返回上一步
    back() {
      this.$router.go(-1);
    },

    selectChair(item){
    //   不能选择已经购买的
        if(item.type == "selected"){
            return;
        }

        // 没有选择的，高亮显示
        if(item.type == ""){
            // console.log("没有选择，高亮显示");

            item.type = "buying"
            this.$store.commit("buyMovieTickModule/changeChairData", item)
            
            this.$store.dispatch("buyMovieTickModule/addUserChairData", item).then(() => {
                // console.log("this.$refs ==>",this.$refs.userchair[0].offsetWidth);
                
                let firstLi = this.$refs.userchair[0];
                let width = firstLi.offsetWidth + 1;
                let marginRigth = parseInt(getComputedStyle(firstLi).marginRight);

                this.$store.commit("buyMovieTickModule/modifyUlWidth", (width + marginRigth) * this.userChairData.length);
            })

        }else if(item.type == "buying"){ 
            // 已选，取消选择
            item.type = ""
            this.$store.dispatch("buyMovieTickModule/deleteUserChairData", item).then(() => {
              let firstLi = this.$refs.userchair[0];

              if(!firstLi){
                this.$store.commit("buyMovieTickModule/modifyUlWidth", 0);
                return;
              }
                let width = firstLi.offsetWidth + 1;
                let marginRigth = parseInt(getComputedStyle(firstLi).marginRight);

                 this.$store.commit("buyMovieTickModule/modifyUlWidth", (width + marginRigth) * this.userChairData.length);
            })
        }

    }

  },

  computed: {
      ...mapState(["data", "chairDatas", "userChairData", "width"])
  },

  created() {
    // 清理背景图片
    this.resetData();

    // 截取查询参数id
    let queryId = this.$route.query.id;

    this.axios({
      method: "GET",
      url: "movie/movie/detail.api",
      params: {
        locationId: 365,
        movieId: queryId
      }
    })
      .then(result => {
        // console.log("result ==>", result);

        this.$store.commit("buyMovieTickModule/getData", result.data);
      })
      .catch(err => {
        // console.log("err ==>", err);
      });
  }
};
</script>

<style lang="less" scoped>
.buy-movie-tick {
  .bg {
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    top: 0;
    left: 0;
    .van-nav-bar {
      background-color: transparent;
    }
    /deep/.van-nav-bar__text,
    /deep/.van-nav-bar__title,
    /deep/.van-nav-bar .van-icon {
      color: #fff;
    }
    [class*="van-hairline"]::after {
      border: none;
    }
  }
  .seat-box {
    position: fixed;
    top: 180px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.9);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding-top: 30px;
  }
  .tick-box {
    overflow-x: auto;
    overflow-y: hidden;
    margin: 0 10px;
    .tick {
      height: 36px;
      > li {
        float: left;
        width: 80px;
        height: 32px;
        border: 1px solid #ea1e63;
        position: relative;
        text-align: center;
        font-size: 16px;
        line-height: 32px;
        background-color: #ea1e63;
        color: #fff;
        margin-right: 10px;
      }
      .r {
        position: absolute;
        width: 10px;
        height: 10px;
        border: 1px solid #ea1e63;

        top: 0;
        bottom: 0;
        margin: auto 0;
        border-radius: 50%;
        background-color: #fff;
        z-index: 1;
      }
      .r1 {
        left: -7px;
      }
      .c1 {
        left: -8px;
      }
      .r2 {
        right: -7px;
      }
      .c2 {
        right: -8px;
      }
      .c {
        position: absolute;
        top: 0;
        bottom: 0;
        background-color: #fff;
        width: 7px;
        z-index: 2;
      }
    }
  }
  .screen {
    width: 300px;
    height: 60px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    .screen-arc {
      width: 500px;
      height: 200px;
      border-radius: 50%;
      border: 3px solid #ea1e63;
      position: absolute;
      top: 15px;
      left: -100px;
    }

    .screen-arc1 {
      width: 500px;
      height: 200px;
      border-radius: 50%;
      border: 3px solid rgba(255, 243, 199, 0.6);
      position: absolute;
      top: 18px;
      left: -100px;
    }
  }
  .buy-tick {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 54px;
    line-height: 54px;
    width: calc(~"100% - 20px");
    background-color: #ea1e63;
    // box-shadow: 0px 0px 5px 1px #ccc;
    padding: 0 10px;
    color: #fff;
    .total {
      line-height: 54px;
      font-size: 16px;
    }
    > .van-button {
      height: 35px;
      margin-top: 9px;
      font-weight: bold;
    }
  }
  .chair-box {
    padding: 0 10px;
  }
  .chair {
    margin: 0 auto;
    height: 24px;
    margin-bottom: 8px;
    &.chair1 {
      width: 96px;
    }
    &.chair2 {
      width: 352px;
      > span {
        &.s3,
        &.s8 {
          margin-left: 36px;
        }
      }
    }
    &.chair3 {
      width: 160px;
    }
    > span {
      float: left;
      width: 24px;
      height: 24px;
      margin: 0 4px;
      background: url("../assets/images/chair2.png") no-repeat center center;
      background-size: 24px 24px;
      &.selected {
        background-image: url("../assets/images/chair1.png");
      }
      &.buying {
        background-image: url("../assets/images/chair3.png");
      }
    }
  }
  .chair-flag {
    margin: 20px 80px 0;
    .c-box {
      width: 50px;
    }
    .m-box {
      margin: 0 auto;
    }
    > div {
      float: left;
      width: calc(~"100% / 3");
      height: 30px;
      .c-bg {
        width: 12px;
        height: 8px;
        margin-top: 12px;
        &.c-bg1 {
          background-color: #cccccc;
        }
        &.c-bg2 {
          background-color: #ea1e63;
        }
        &.c-bg3 {
          background-color: #686258;
        }
      }
      .buyed {
        line-height: 30px;
        font-size: 10px;
        margin-left: 5px;
      }
    }
  }
}
</style>
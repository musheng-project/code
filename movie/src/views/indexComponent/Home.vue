<template>
  <div class="home animated fadeIn">
    <!-- 导航栏 -->
    <div class="search">
      <van-nav-bar title="首页" fixed>
        <van-icon name="search" slot="right" />
      </van-nav-bar>
    </div>

    <!-- 轮播图 -->
    <div class="slider">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in sliderData" :key="index">
          <img :src="item.src" alt />
          <div class="slider_info">
            <span>{{item.title}}</span>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 新片榜 -->
    <div class="new-movie">
      <div class="new-movie-title">
        <span class="fl">热片榜</span>
        <span class="fr" @click="changeNewMovieData">换一换</span>
      </div>
      <div class="new-movie-content">
        <div class="new-movie-box clearfix">
          <div
            class="new-movie-item"
            v-for="(item, index) in showNewMovieData.data" 
            :key="index"
            :id="item.id"
            @click="viewMovieDetail({name: 'movieDetail', params: {id: item.id}})"
          >
            <div class="new-movie-img">
              <img class="auto-img" :src="item.img" alt />
            </div>
            <div class="new-movie-name one-text">{{item.tCn}}</div>
            <div class="star-box">
              <div class="fl clearfix star-box-count">
                <!-- 粉星框 -->
                <div ref="noactivestar" class="noactive-star">
                  <span>
                    <van-icon name="star-o" />
                  </span>
                  <span>
                    <van-icon name="star-o" />
                  </span>
                  <span>
                    <van-icon name="star-o" />
                  </span>
                  <span>
                    <van-icon name="star-o" />
                  </span>
                  <span>
                    <van-icon name="star-o" />
                  </span>
                </div>
                <!-- 粉星 -->
                <div class="active-star" :style="{width: item.width + 'px'}">
                  <span>
                    <van-icon name="star" />
                  </span>
                  <span>
                    <van-icon name="star" />
                  </span>
                  <span>
                    <van-icon name="star" />
                  </span>
                  <span>
                    <van-icon name="star" />
                  </span>
                  <span>
                    <van-icon name="star" />
                  </span>
                </div>
              </div>
              <div class="fl star-score">{{item.r}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState } = createNamespacedHelpers("homeModule");

export default {
  name: "home",

  data() {
    return {
      sliderData: [
        {
          src:require("@/assets/images/slider1.jpg"),
          title: "<陆行鲨>变异巨鲨成陆地破坏王"
        },
        {
          src:require("@/assets/images/slider2.jpg"),
          title: "<叶问4>甄子丹咏春对决特种"
        },
        {
          src:require("@/assets/images/slider3.jpg"),
          title: "<传染病>全球联手世纪战“疫”"
        },
        {
          src:require("@/assets/images/slider4.jpg"),
          title: "<灰烬重生>罗晋辛鹏陷谜案罪途"
        },
        {
          src:require("@/assets/images/slider5.jpg"),
          title: "<云南虫谷>“鬼吹灯”IP归来"
        },

        {
          src:require("@/assets/images/slider6.png"),
          title: "<镇魂法师2>棺材大战斗丧尸"
        }
      ]
    };
  },

  computed: {
    ...mapState([
      "baseUrl",
      "newMovieData",
      "params",
      "showNewMovieData",
      "isHasData",
      "isInit"
    ])
  },

  methods: {
    // 换一换数据
    changeNewMovieData() {
      if(this.isHasData){
        this.$store.commit("homeModule/toggleNewMovieData");
      }
    },

    viewMovieDetail(o) {
      this.$router.push(o);
    }
  },

  created() {

    if(!this.isInit){
      return; 
    }

    // 开启加载提示
    this.$toast.loading({
      duration: 0,
      message: "加载中..."
    });

    this.axios({
      method: "GET",
      url: this.baseUrl,
      params: this.params
    }).then(result => {
        // console.log("res ==>", result);

        result.data.ms.forEach((v) => {
          v.width = 0
        })

        // 提交actions
        this.$store.dispatch("homeModule/getNewMovieData", result.data.ms).then(() => {
          let width = this.$refs.noactivestar[0].clientWidth
          // console.log("width ==>", width)


          this.$store.commit("homeModule/modifyNewMovieData", width)

          // 关闭提示
          this.$toast.clear();
        })
      })
      .catch(err => {
        // console.log("err ==> ", err);
      });
  }
};
</script>

<style lang="less" scoped>
.home {
  padding-top: 45px;
  // padding-bottom: 60px;
  background: #ffffff;

  .search {
    .van-nav-bar {
      background: #ea1e63;
      /deep/.van-nav-bar__title {
        font-weight: bold;
        color: #fff;
      }
      .van-icon {
        color: #fefefe;
        font-size: 20px;
        margin-top: -5px;
      }
    }
  }

  .slider {
    /deep/.van-swipe__indicators {
      left: 87%;
      bottom: 10%;
    }
    .slider_info {
      position: absolute;
      left: 4%;
      bottom: 7%;
      > span {
        font-size: 18px;
        color: #fff;
        overflow: hidden;
      }
    }
  }
  .star-box-count{
    position: relative;
    width: 90px;
    margin-right: 5px;
    span{
      position: absolute;
      width: 18px;
      height: 18px;
      top: 0;
      font-size: 16px;
      &:nth-child(1){
        left: 0;
      }
      &:nth-child(2){
        left: 18px;
      }
      &:nth-child(3){
        left: 36px;
      }
      &:nth-child(4){
        left: 54px;
      }
      &:nth-child(5){
        left: 72px;
      }
    }
  }
  .noactive-star{
    height: 18px;
    position: relative;
    color: #ea1e63;
  }

  .active-star{
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 18px;
    color: #ea1e63;
    overflow: hidden;
  }

  .star-score{
    width: 24px;
    height: 18px;
    text-align: center;
    line-height: 18px;
    font-size: 14px;
    color: #ea1e63;
  }

  .banner-box{
    background-color: #fff;
    padding: 10px;
  }
  .banner{
    border-radius: 10px;
    overflow: hidden;
  }
  .new-movie{
    padding: 0 10px 10px;
    margin-top: 10px;
    background-color: #fff;
  }
  .new-movie-title{
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #f2f2f2;
    >span:nth-child(1){
      color: #070707;
      font-size: 18px;
    }

    >span:nth-child(2){
      color: #a5a5a5;
      font-size: 14px;
    }
  }

  .new-movie-content{
    overflow-x: auto;
    margin-top: 10px;
    overflow-y: hidden;
  }
  .new-movie-box{
    width: 1040px;
    >.new-movie-item{
      float: left;
      width: 121.25px;
      margin-right: 10px;
    }
    >.new-movie-item:last-child{
      margin-right: 0px;
    }
  }
  .new-movie-img{
    border-radius: 10px;
    overflow: hidden;
    height: 162px;
  }
  .new-movie-name{
    padding: 5px 0;
    text-align: center;
    font-size: 14px;
    color: #282828;
  }
}
</style>
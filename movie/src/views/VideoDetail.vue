<template>
  <div class="video-detail animated fadeIn">
    <div>
      <van-nav-bar title="预告片/花絮" left-text="返回" left-arrow @click-left="back" fixed />
    </div>

    <div class="video-list" v-for="(item,index) in videoDetailData.data.videoList" :key="index">
      <div v-show="item.isShow">
        <van-icon name="play-circle-o" size="50px" color="#fff" @click="getControls(item)" />
        <img :src="item.image" alt  style="width:100%"/>
      </div>
      <div v-show="!item.isShow">
        <video :src="item.url"  autoplay controls muted width="100%"></video>
      </div>
      <div class="video-title">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("videoDetailModule");

export default {
  name: "videoDetail",

  methods: {
    // 返回上一层
    back() {
      this.$router.go(-1);
    },

    getControls(item) {
      item.isShow = !item.isShow
    }
  },

  computed: {
    ...mapState(["videoDetailData"])
  },
  created() {

    let id = this.$route.params.id;
    // console.log("id ==>", id);

    this.axios({
      method: "GET",
      url: "api/Movie/Video.api",
      params: {
        pageIndex: 1,
        movieId: id
      }
    })
      .then(result => {
        // console.log("result ==>", result);

        for(let i=0; i<result.data.videoList.length; i++){
          result.data.videoList[i].isShow = true
        }

        this.$store.commit("videoDetailModule/changeVideoList",
          result.data.videoList);
          
      })
      .catch(err => {
        // console.log("err ==>", err);
      });
      
  }
};
</script>

<style lang="less" scoped>
.video-detail {
  padding-top: 46px;
  /deep/.van-nav-bar {
    background-color: #ea1e63;
    z-index: 1000 !important;
    .van-nav-bar__text,
    .van-icon,
    .van-nav-bar__title {
      color: #ffffff;
    }
  }

  .video-list {
    > div {
      position: relative;
      &:nth-child(1) {
        > .van-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      &:nth-child(2) {
        width: 100%;
      }
      &:nth-child(3) {
        width: 100%;
        height: 40px;
        line-height: 40px;
        // padding: 0 20px;
        background-color: #fff;
        font-size: 16px;
        text-align: center;
      }
    }
  }
}
</style>
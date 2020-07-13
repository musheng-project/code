<template>
  <div class="movie-detail animated fadeIn">
    <div
      class="m-bg"
      :style="{'background-image': 'linear-gradient(to bottom, rgba(245,245,245, 0), rgba(245,245,245, .85) 50%, rgba(245,245,245, 1) 60%),url(' + movieDetailData.image + ')'}"
    ></div>

    <div>
      <van-nav-bar title="电影详情" left-text="返回" left-arrow @click-left="back" fixed />
    </div>

    <div class="movie-detail-info">
      <div class="movie-detail-box">
        <div class="movie-detail-t">
          <div class="movie-detail-img fl">
            <div class="m-img">
              <img class="auto-img" :src="movieDetailData.image" alt />
              <van-icon name="play-circle-o" size="30px" color="#fff" @click="viewVideoDetail({name:'videoDetail', params:{id: movieDetailData.id}})"/>
            </div>
          </div>
          <div class="movie-detail-msg fl">
            <div class="clearfix">
              <span class="fl m-title">{{movieDetailData.titleCn}}</span>
              <span
                @click="likeMovie(movieDetailData)"
                class="fr collection"
                :class="{active: likeActive}"
              >
                <van-icon name="like" class="like-icon" />
              </span>
            </div>
            <div class="m-type">{{movieDetailData.typeInfo}}</div>
            <div class="clearfix m-info">
              <div class="fl">{{movieDetailData.release.date}}</div>
              <div class="fl">{{movieDetailData.release.location}}</div>
              <div class="fl">{{movieDetailData.runTime}}</div>
            </div>
            <div class="star-box clearfix">
              <!-- 灰星 -->
              <div ref="notstar" class="not-star fl">
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
              <!-- 黄星 -->
              <div class="yes-star" :style="{width: movieDetailData.width + 'px'}">
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

              <!-- 评分 -->
              <div class="fl star-score">{{movieDetailData.rating}}</div>
            </div>
          </div>
        </div>
        <div class="movie-detail-b">
          <div class="mb-title">电影概括</div>
          <p class="m-text" :style="{display}">{{movieDetailData.content}}</p>
        </div>

        <!-- 箭头 -->
        <div class="arrow" @click="changeDisplay">
          <van-icon :name="name" />
        </div>
      </div>

      <div class="tab-box">
        <div class="actor-title">
          <div class="fl">演职人员</div>
          <div class="fr">
            <span>全部</span>
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="actor">
          <div
            class="actor-box clearfix"
            :style="{width: movieActorDetailData.length * movieActorDetailData.w + 'px'}"
          >
            <div
              ref="actor"
              class="actor-item"
              v-for="(item, index) in movieActorDetailData"
              :key="index"
            >
              <div class="name-img">
                <img class="auto-img" :src="item.image" alt />
              </div>
              <div class="name-info">
                <div class="name one-text">{{item.name}}</div>
                <div class="name one-text">{{item.nameEn}}</div>
                <div class="name one-text">饰 {{item.personate}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="buy-btn">
      <button @click="buyTick(movieDetailData.id)">选座购票</button>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapMutations } = createNamespacedHelpers("movieDetailModule");

export default {
  name: "movieDetail",

  computed: {
    ...mapState([
      "movieDetailData",
      "movieActorDetailData",
      "display",
      "likeActive",
      "name"
    ])
  },

  methods: {
    ...mapMutations(["changeDisplay", "resetState"]),

    // changeDisplay(){
    //   this.isarrow = this.isarrow
    // },

    // 返回上一步
    back() {
      this.$router.go(-1);
    },

    viewVideoDetail(o) {
      this.$router.push(o);
    },

    buyTick(id){
      this.$router.push({name:"buyMovieTick", query:{id}})
    },

    //收藏电影
    likeMovie(item) {
      // console.log("item ==> ", item);

      //获取用户登录状态
      let userStatus = localStorage.getItem("user");

      if (userStatus) {
        userStatus = JSON.parse(userStatus);

        if (!userStatus.isLogin) {
          // console.log("请先登录");
          return this.$router.push({ name: "login" });
        }

        //获取用户收藏的电影
        let likeMovieData = localStorage.getItem("likeMovieData");

        likeMovieData = likeMovieData ? JSON.parse(likeMovieData) : {};

        //记录当前用户收藏的电影
        let currentLikeMovieData = likeMovieData[userStatus.username];

        // console.log("currentLikeMovieData ==>",currentLikeMovieData)

        if (!currentLikeMovieData) {
          likeMovieData[userStatus.username] = [];
        }

        //收藏电影之前，根据电影的id判断是否已经收藏过该电影
        for (let i = 0; i < likeMovieData[userStatus.username].length; i++) {
          if (likeMovieData[userStatus.username][i].id == item.id) {
            //提示用户
            this.$toast("你已经收藏过该电影");
            return;
          }
        }

        this.$store.commit("movieDetailModule/changelikeActive", true);

        //将电影推进likeMovieData[userStatus.username]
        likeMovieData[userStatus.username].unshift(item);

        // console.log("likeMovieData ==> ", likeMovieData);

        localStorage.setItem("likeMovieData", JSON.stringify(likeMovieData));

        this.$toast.success("收藏成功");
      } else {
        // console.log("请先登录");
        this.$router.push({ name: "login" });
      }
    }
  },

  created() {
    //开启加载提示
    this.$toast.loading({
      duration: 0,
      message: "加载中..."
    });

    // 重置state
    this.resetState();

    //截取路由参数
    let id = this.$route.params.id;
    // console.log("id ==> ", id);

    this.axios({
      method: "GET",
      url: "api/movie/detail.api",
      params: {
        locationId: 365,
        movieId: id
      }
    })
      .then(result => {
        // console.log("result ==>", result);

        result.data.id = id;
        // console.log("result.data.id ==>", result.data.id);

        //将电影类型合并
        result.data.typeInfo = result.data.type.join(" / ");
        // console.log(result.data.typeInfo);

        //获取星星的宽度
        let notstarWidth = this.$refs.notstar.clientWidth;
        // console.log("notstarWidth ==> ", notstarWidth);

        result.data.width = (result.data.rating / 10) * notstarWidth;

        //获取演员的图片盒子宽度
        result.data.w = 0;

        this.$store.commit("movieDetailModule/getMovieDetailData", result.data);

        // 根据用户登录状态，判断该电影是否被该用户收藏
        let userStatus = localStorage.getItem("user");
        // console.log("userStatus ==>", userStatus);

        let isActive = userStatus && JSON.parse(userStatus).isLogin;

        // 如果用户登录
        if (isActive) {
          let username = JSON.parse(userStatus).username;
          // console.log("username ==>", username);

          // 所有用户收藏的电影
          let likeMovieData = localStorage.getItem("likeMovieData");
          // console.log("likeMovieData ==>", likeMovieData);

          likeMovieData = likeMovieData ? JSON.parse(likeMovieData) : {};

          // 获取当前用户收藏的电影
          let currentLikeMovieData = likeMovieData[username];
          // console.log("currentLikeMovieData ==>", currentLikeMovieData);

          currentLikeMovieData = currentLikeMovieData
            ? currentLikeMovieData
            : [];

          for (let i = 0; i < currentLikeMovieData.length; i++) {
            if (this.movieDetailData.id === currentLikeMovieData[i].id) {
              this.$store.commit("movieDetailModule/changelikeActive", true);
              return;
            }
          }
          this.$store.commit("movieDetailModule/changelikeActive", false);
        } else {
          this.$store.commit("movieDetailModule/changelikeActive", false);
        }
      })
      .catch(err => {
        // console.log("err ==>", err);
      });

    // 演员列表
    this.axios({
      methods: "GET",
      url: "api/Movie/MovieCreditsWithTypes.api",
      params: {
        movieId: id
      }
    })
      .then(res => {
        // console.log("res ==>", res.data.types[1].persons);

        // 获取演员的图片盒子宽度
        res.data.types[1].persons.w = 0;

        this.$store
          .dispatch(
            "movieDetailModule/getMovieActorDetailData",
            res.data.types[1].persons
          )
          .then(res => {
            this.$toast.clear();

            let actorBoxWidth = this.$refs.actor[0].clientWidth;
            // console.log("actorBoxWidth ==>", actorBoxWidth);

            this.$store.commit("movieDetailModule/changeW", actorBoxWidth);
          })
          .catch(err => {
            // console.log("err ==>", err);

            this.$toast.clear();
          });
      })
      .catch(err => {
        // console.log("err ==>", err);
      });
  }
};
</script>

<style lang="less" scoped>
.movie-detail {
  position: relative;
  padding-top: 42px;
  padding-bottom: 42px;
  .buy-btn {
    width: 100%;
    height: 40px;
    background-image: linear-gradient(to bottom, #ea1e63, #ea1e63);
    color: #fff;
    font-size: 16px;
    text-align: center;
    line-height: 40px;
    // margin: 20px auto;
    position: relative;
    z-index: 3;
    // border-radius: 10px;
    border-bottom: 2px solid #ea1e63;
    letter-spacing: 2px;
    position: fixed;
    left: 0px;
    bottom: 0px;
    > button {
      width: 100%;
      background: #ea1e63;
    }
  }
  .name-img {
    height: 135px;
    border-radius: 5px;
    overflow: hidden;
    > .auto-img {
      width: 100px;
      height: 135px;
    }
  }
  .name-info {
    margin: 10px 0;
    text-align: center;
    font-size: 12px;
    .name {
      margin-top: 5px;
      &:nth-child(1) {
        color: #000;
      }
      &:nth-child(2) {
        color: #999;
      }
      &:nth-child(3) {
        color: #999;
      }
    }
  }
  .actor {
    overflow-x: auto;
    overflow-y: hidden;
    margin-top: 1px;
  }
  .actor-title {
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
    > div {
      &:nth-child(1) {
        font-size: 18px;
        font-weight: bold;
      }
      &:nth-child(2) {
        font-size: 14px;
        color: #999;
        > span,
        .van-icon {
          vertical-align: middle;
        }
      }
    }
  }
  .actor-box {
    width: 450px !important;
    height: 220px;
    overflow-y: hidden;
  }
  .actor-item {
    float: left;
    width: 98px;
    padding: 0px 0px 10px 10px;
  }

  .tab-box {
    margin-top: 20px;
    background-color: #fff;
  }
  .arrow {
    position: absolute;
    width: 20px;
    height: 20px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    font-size: 16px;
    text-align: center;
    line-height: 20px;
    color: #ea1e63;
  }
  .mb-title {
    font-size: 16px;
    color: #222;
    padding: 10px 0;
  }
  .m-text {
    font-size: 10px;
    color: #666;
    line-height: 18px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .m-bg {
    background: #ea1e63;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
    filter: blur(5px);
    // opacity: .95;
  }
  /deep/.van-nav-bar {
    background-color: #ea1e63;
    z-index: 1000 !important;
    .van-nav-bar__text,
    .van-icon,
    .van-nav-bar__title {
      color: #ffffff;
    }
  }
  .movie-detail-info {
    padding: 10px;
    position: relative;
    z-index: 2;
  }
  .movie-detail-box {
    margin-top: 100px;
    background-color: #fff;
    // border-radius: 10px;
    padding: 10px 10px 30px;
    position: relative;
    .movie-detail-t {
      height: 120px;
    }

    .movie-detail-img {
      width: 100px;
      height: 120px;
      // background-color: #ddd;
    }

    .movie-detail-msg {
      width: calc(~"100% - 110px");
      height: 120px;
      // background-color: #aaa;
      margin-left: 10px;
    }
    .m-img {
      margin-top: -30px;
      overflow: hidden;
      border-radius: 5px;
      position: relative;
      > .van-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  .m-title {
    font-size: 16px;
    color: #222;
  }
  .m-type {
    color: #666;
    font-size: 12px;
    margin-top: 10px;
  }

  .m-info {
    font-size: 10px;
    margin-top: 10px;
    color: #555;
    height: 16px;
    line-height: 16px;
    > div {
      margin-right: 10px;
    }
  }

  .star-box {
    margin-top: 10px;
    position: relative;
    span {
      position: absolute;
      width: 18px;
      height: 18px;
      top: 0;
      font-size: 16px;
      &:nth-child(1) {
        left: 0;
      }
      &:nth-child(2) {
        left: 18px;
      }
      &:nth-child(3) {
        left: 36px;
      }
      &:nth-child(4) {
        left: 54px;
      }
      &:nth-child(5) {
        left: 72px;
      }
    }
  }

  .not-star {
    width: 90px;
    height: 18px;
    margin-right: 20px;
    color: #cccccc;
  }

  .yes-star {
    position: absolute;
    left: 0;
    top: 0;
    width: 60px;
    overflow: hidden;
    height: 18px;
    color: #ea1e63;
  }

  .star-score {
    font-size: 16px;
    font-weight: bold;
    background-image: linear-gradient(45deg, rgb(206, 28, 28), #ea1e63);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .collection {
    font-size: 16px;
    color: #ccc;
  }

  .collection.active {
    color: #ea1e63;
  }
}
</style>
<template>
  <div class="movie ">
    <van-tabs v-model="activeName" :border="false" color="#EA1E63" title-active-color="#EA1E63">
      <van-tab title="正在热映" name="a">
        <div class="movie-box">
          <div
            class="movie-item clearfix"
            v-for="(item, index) in movieData.data.ms"
            :key="index"
            :id="item.id"
            @click="viewMovieDetail({name: 'movieDetail', params: {id: item.id}})"
          >
            <div class="fl movie-img">
              <img class="auto-img" :src="item.img" alt />
            </div>
            <div class="fl movie-info">
              <div class="one-text">
                <span>{{item.t}}</span>
              </div>
              <div>{{item.movieType}}</div>
              <div class="one-text">{{item.actors}}</div>
            </div>
            <div class="fl buy-info">
              <div class="movie-score">
                {{item.r}}
                <span>分</span>
              </div>
              <div class="buy-btn">
                <van-button round size="mini" type="info" color="#ea1e63" @click.stop="buyTick(item.id)">购票</van-button>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="即将上映" name="b">
        <div class="movie-box">
          <div
            class="movie-item clearfix"
            v-for="(item, index) in movieData2.data.moviecomings"
            :key="index"
            :id="item.id"
            @click="viewMovieDetail({name: 'movieDetail', params: {id: item.id}})"
          >
            <div class="fl movie-img">
              <img class="auto-img" :src="item.image" alt />
            </div>
            <div class="fl movie-info">
              <div class="one-text">
                <span>{{item.title}}</span>
              </div>
              <div class="one-text">
                <span>{{item.wantedCount}}</span>
                <span>人想看 -</span>
                {{item.type}}
              </div>
              <div class="one-text">{{item.actor1}} / {{item.actor2}} / ...</div>
            </div>
            <div class="like-icon">
              <van-button color="#ea1e63" plain size="small" icon="like-o" type="primary">想看</van-button>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import $ from "jquery";

import { createNamespacedHelpers } from "vuex";

const { mapState } = createNamespacedHelpers("movieModule");

export default {
  name: "movie",

  data() {
    return {
      activeName: "a"
    };
  },

  computed: {
    ...mapState(["movieData", "movieData2", "params", "params2", "isInit"])
  },

  methods: {
    getMovieData() {
      
      if (!this.isInit) {
        return;
      }

      this.$toast.loading({
        duration: 0, // 持续展示 toast
        message: "加载中..."
      });

      //请求数据
      this.axios({
        //请求类型
        method: "GET",

        //请求地址
        url: "api/Showtime/LocationMovies.api",

        //请求参数
        params: this.params
      })
        .then(result => {
          // console.log("result.data.ms ==> ", result.data.ms);

          //提交修改movieData数据
          this.$store.commit("movieModule/changeMovieData", result);

          //取消加载提示
          this.$toast.clear();
        })
        .catch(err => {
          // console.log("err ==> ", err);

          this.$toast.clear();
        });

      this.axios({
        methods: "GET",
        url: "api/Movie/MovieComingNew.api",
        params: this.params2
      })
        .then(result => {
          // console.log("result2 ==>", result);

          this.$store.commit("movieModule/changeMovieData2", result);
        })
        .catch(err => {
          // console.log("err ==>", err);
        });
    },

    //查看电影详情
    viewMovieDetail(o) {
      this.$router.push(o);
    },

    buyTick(id){
      this.$router.push({name:"buyMovieTick",query:{id}})
    }
  },

  created() {
    // console.log("movie create");

    let self = this;

    //获取用户位置
    $.ajax({
      type: "GET",
      url: "https://apis.map.qq.com/ws/location/v1/ip",
      data: {
        key: "W75BZ-CPKCR-UETWQ-WT7TX-WONUO-CAFOY",
        output: "jsonp"
      },
      dataType: "jsonp",
      success: function(data) {
        // console.log("data ==> ", data);

        self.$store.commit(
          "movieModule/changeLocationCity",
          data.result.ad_info.city.replace(/市$/, "")
        );

        if(!self.isInit){
          return;
        }

        self.getMovieData();
      }
    });
  },

  watch: {
    "$route.path": function(newValue, oldValue){
      if(newValue == "/movie"){
        this.activeName = "a"
      }
    }
  },

};
</script>

<style lang="less" scoped>
.movie {
  position: fixed;
  top: 40px;
  bottom: 50px;
  left: 0;
  right: 0;

  /deep/.van-tabs__line {
    width: 60px !important;
  }

  .van-tabs {
    position: static;
  }

  .tip-text {
    color: #aaa;
    text-align: center;
    padding: 10px 0;
    font-size: 12px;
    background-color: #fff;
  }
  .movie-box {
    margin-top: 5px;
    background-color: #f5f5f5;
    position: absolute;
    top: 44px;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: auto;
  }
  .movie-item {
    margin-bottom: 5px;
    background-color: #fff;
  }
  .movie-img {
    width: 80px;
    height: 120px;
  }
  .movie-info {
    width: calc(~"100% - 140px - 40px");
    padding: 0 10px;
    > div {
      height: 40px;
      line-height: 40px;
      &:nth-child(1) {
        font-size: 18px;
        color: #333;
      }
      &:nth-child(2) {
        font-size: 14px;
        color: #999;
        > span {
          &:nth-child(1) {
            color: #ea1e63;
          }
        }
      }
      &:nth-child(3) {
        font-size: 14px;
        color: #b0b0b0;
      }
    }
  }
  .buy-info {
    width: 60px;
    height: 120px;
  }
  .movie-score {
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    color: #ea1e63;
    text-align: center;
    > span {
      font-size: 14px;
    }
  }
  .buy-btn {
    height: 40px;
    margin-top: 40px;
    text-align: center;
  }
  .like-icon{
    padding-top: 70px;
    text-align: center;
  }
}
</style>
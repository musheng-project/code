<template>
  <div class="mine animated fadeIn">
    <div class="mine_box">
      <div class="mine_bg clearfix">
        <div class="fl mine_bg_l_btn">
          <button @click="login">{{userInfo.loginText}}</button>
        </div>
        <div class="fr mine_bg_r_btn">
          <van-icon name="setting-o" />
        </div>
      </div>

      <div class="mine_content">
        <div class="mine_info">
          <div class="mine_info_top">
            <div class="mine_head_img">
              <div class="logo">
                <van-icon name="plus" color="#f5f5f5" v-show="userImg"/>

                <van-icon name="user-circle-o"  color="#f5f5f5" v-show="!userImg"/>
              </div>
            </div>
            <div class="mine_name">
              <p>{{userInfo.username}}</p>
            </div>

            <van-row>
              <van-col span="8">
                <van-icon name="video" />
                <div>电影</div>
              </van-col>
              <van-col span="8">
                <van-icon name="comment-circle" />
                <div>看过</div>
              </van-col>
              <van-col span="8">
                <van-icon name="browsing-history" />
                <div>影评</div>
              </van-col>
            </van-row>
          </div>

          <div class="mine_info_top_lists">
            <van-cell
              v-for="(item, index) in findListData"
              :key="index"
              :title="item.title"
              :class="item.class"
              @click="viewLikeMovie({name:item.name})"
            >
              <van-icon slot="right-icon" name="arrow" style="line-height: inherit;" />
            </van-cell>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState } = createNamespacedHelpers("mineModule");

export default {
  name: "mine",

  computed: {
    ...mapState(["findListData", "userInfo", "userImg"])
  },

  methods: {
    //退出或者登录
    login() {
      let userStatus = localStorage.getItem("user");

      if (userStatus) {
        let userInfo = JSON.parse(userStatus);

        if (userInfo.isLogin) {
          // console.log("清空登录状态");

          localStorage.removeItem("user");


          this.$store.commit("mineModule/changeUserInfo", {
            loginText: "登录",
            username: "未登录"
          });

          this.$store.commit("mineModule/changeUserImg", true);
        } else {
          this.$router.push({ name: "login" });
        }
      } else {
        this.$router.push({ name: "login" });
      }
    },

    //查看我的收藏电影
    viewLikeMovie(o) {
      //验证是否登录
      let userStatus = localStorage.getItem("user");

      if (userStatus) {
        let userInfo = JSON.parse(userStatus);

        //如果登录
        if (userInfo.isLogin) {
          // console.log("查看我的收藏电影");

          this.$router.push(o);
        } else {
          //如果未登录
          this.$toast("请先登录");
        }
      } else {
        //未登录
        this.$toast("请先登录");
      }
    }
  },

  created() {
    //获取用户信息
    let userStatus = localStorage.getItem("user");

    if (userStatus) {
      let user = JSON.parse(userStatus);
      if (user.isLogin) {
        this.$store.commit("mineModule/changeUserInfo", {
          loginText: "退出",
          username: user.username
        });
        this.$store.commit("mineModule/changeUserImg", false);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.mine_box {
  position: relative;
}
.mine_bg {
  background-color: #ea1e63;
  width: calc(~"100% - 40px");
  height: calc(~"250px - 20px");
  padding: 0 20px;
  padding: 20px 20px 0 20px;
  position: absolute;
  top: 0;
  left: 0;
  .mine_bg_l_btn {
    > button {
      border: 0;
      background: #ea1e63;
      font-size: 16px;
      color: #ffffff;
    }
  }
  .mine_bg_r_btn {
    color: #fff;
    font-size: 20px;
  }
}
.van-nav-bar {
  background-color: #ea1e63;
  border-bottom: 1px solid #ea1e63;
  // margin-bottom: -1px;
  .van-nav-bar__right {
    top: 0;
    .van-icon {
      font-size: 20px;
      color: #fff;
    }
  }
}

.mine_content {
  position: absolute;
  top: 100px;
  left: 50%;
  margin-left: -150px;
  z-index: 100;
  .mine_info {
    width: 300px;
    height: 470px;
    background: #ffffff;
    border-radius: 6px;
    position: relative;
    .mine_info_top {
      width: 300px;
      height: 150px;
      background: #ffffff;
      border-radius: 6px;
      .mine_head_img {
        width: 60px;
        height: 60px;
        background: #cccccc;
        border-radius: 100%;
        border: 2px solid #ffffff;
        overflow: hidden;
        position: absolute;
        top: -30px;
        left: 50%;
        margin-left: -30px;
        .logo {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          background-color: #ddd;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.3);
          overflow: hidden;
          .van-icon{
            font-size: 60px;
          }
        }
      }
      .mine_name {
        text-align: center;
        font-size: 14px;
        color: #ea1e63;
        padding-top: 40px;
      }
      .van-row {
        padding: 0 20px;
        margin-top: 10px;
        .van-col {
          height: 66px;
          text-align: center;
          color: #868686;
          .van-icon {
            font-size: 40px;
          }
        }
        .van-col:nth-child(1) {
          .van-icon {
            color: #ff7616;
          }
        }
        .van-col:nth-child(2) {
          .van-icon {
            color: #43bfff;
          }
        }
        .van-col:nth-child(3) {
          .van-icon {
            color: #fe4684;
          }
        }
      }
    }
  }
}

.mine_info_top_lists {
  .van-cell {
    .van-cell__title {
      > span {
        margin-left: 5px;
      }
    }
  }
}
</style>
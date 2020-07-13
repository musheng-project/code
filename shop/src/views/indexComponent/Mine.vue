<template>
  <div class="mine animate__animated animate__fadeIn">
    <div class="jp_mine_head">
      <van-nav-bar title="个人中心" :right-text="userInfo.loginText" @click-right="login" />
      <div class="jp_login clearfix" v-show="!isShow">
        <div class="jp_login_img fl">
          <van-icon name="user-circle-o" color="#ddd"></van-icon>
        </div>
        <div class="jp_login_info fl">
          <span>{{userInfo.userName}}</span>
          <div>
            <span>我的账户</span>
            <van-icon name="arrow" />
          </div>
        </div>
      </div>

      <van-row v-show="isShow">
        <van-col span="11">
          <span @click="routerGo({name:'register'})">注册</span>
        </van-col>
        <van-col span="2">
          <span>|</span>
        </van-col>
        <van-col span="11">
          <span @click="routerGo({name:'login'})">登录</span>
        </van-col>
      </van-row>
    </div>

    <div class="jp_mine_order">
      <van-cell-group>
        <van-cell title="我的订单" value="全部订单" />
      </van-cell-group>
    </div>

    <div class="jp_mine_item">
      <van-grid>
        <van-grid-item icon="pending-payment" text="待付款" />
        <van-grid-item icon="friends-o" text="待成团" />
        <van-grid-item icon="logistics" text="待收货" />
        <van-grid-item icon="after-sale" text="退款/售后" />
      </van-grid>
    </div>

    <div class="jp_mine_itmes">
      <van-cell-group>
        <van-cell title="我的优惠券" />
        <van-cell title="我的收藏" />
        <van-cell title="我的拼团" />
        <van-cell title="我的免单券" value="0张" />
        <van-cell title="借钱" value="新用户免费领1000元" />
      </van-cell-group>

      <van-cell-group>
        <van-cell title="客服中心" value="全部订单" />
        <van-cell title="关于卷皮" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,

      userInfo: {
        loginText: "",
        userName: ""
      }
    };
  },

  methods: {
    routerGo(o) {
      this.$router.push(o);
    },

    login() {
      this.isShow = true;
      this.userInfo.loginText = "";

      let user = localStorage.getItem("user");

      if (user) {
        user = JSON.parse(user);
        if (user.isLogin) {
          localStorage.removeItem("user");
        }
      }
    }
  },

  created() {
    this.$toast.loading({
      duration: 1000,
      message: "加载中...",
      forbidClick: true
    });

    let user = localStorage.getItem("user");

    if (user) {
      user = JSON.parse(user);
      if (user.isLogin) {
        this.userInfo.userName = user.username;
        this.userInfo.loginText = "退出";
        this.isShow = false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.mine {
  background: #f4f4f4;

  /deep/.van-cell {
    padding: 12px 20px;
    font-size: 15px;
    .van-cell__value {
      font-size: 14px;
    }
  }

  .jp_mine_head {
    background: url(https://jp.juancdn.com/jpwebapp_v1/images_v1/user/user_center_bg.png);
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center center;
    /deep/.van-nav-bar,
    .van-row {
      background: rgba(0, 0, 0, 0);
    }
    .van-hairline--bottom::after {
      border-bottom: 0 !important;
    }
    /deep/.van-nav-bar {
      .van-icon,
      .van-nav-bar__title {
        color: #ffffff;
      }
      .van-icon {
        font-size: 22px;
      }
      .van-nav-bar__title {
        font-size: 18px;
      }
      .van-nav-bar__text {
        color: #fff;
      }
    }
    .van-row {
      height: 100px;
      line-height: 100px;
      padding: 0 60px;
      .van-col {
        color: #ffffff;
        text-align: center;
        font-size: 20px;
      }
      .van-col:nth-child(2) {
        font-weight: 1;
      }
    }

    .jp_login {
      padding: 18px 0;
      margin-left: 20px;
      .jp_login_img {
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        background-color: #f5f5f5;
        border-radius: 100%;
        .van-icon {
          font-size: 60px;
        }
      }
      .jp_login_info {
        margin-top: 5px;
        margin-left: 10px;
        > span {
          color: #fefefe;
          font-size: 16px;
        }
        > div {
          margin: 10px;
          margin-left: -3px;
          padding: 0 2px 2px 5px;
          font-size: 11px;
          border: 0.1px solid #fff;
          border-radius: 15px;
          color: #fff;
          background-color: rgba(0, 0, 0, 0.1);
          > span {
            vertical-align: middle;
          }
          > .van-icon {
            vertical-align: middle;
          }
        }
      }
    }
  }

  .jp_mine_item {
    /deep/.van-grid-item__content {
      padding: 10px 0px;
      .van-icon {
        font-size: 30px;
        color: #666666;
      }
    }
  }

  .jp_mine_itmes {
    .van-cell-group {
      margin-top: 10px;
    }
  }
}
</style>
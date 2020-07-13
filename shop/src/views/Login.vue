<template>
  <div class="login animate__animated animate__fadeIn">
    <div class="jp_login_head">
      <van-nav-bar
        title="登录"
        right-text="注册"
        left-arrow
        @click-left="back"
        @click-right="registerGo({name:'register'})"
      />
    </div>

    <div class="jp_login_box">
      <van-field
        v-model="user.value"
        :type="user.type"
        label="用户名"
        placeholder="请输入用户名"
        :error-message="user.errorMessage"
        @input="validUsername(user.value)"
      />
      <van-field
        v-model="pwd.value"
        :type="pwd.type"
        label="密码"
        :right-icon="pwd.icon"
        placeholder="请输入密码"
        :error-message="pwd.errorMessage"
        @click-right-icon="checkPwd(pwd)"
        @input="validPwd(pwd.value)"
      />
      <van-button
        type="default"
        color="#ff464e"
        :loading="isLoading"
        @click="loginBtn"
        :disabled="!isValid"
      >登录</van-button>

      <div class="jp_login_other">
        <div class="jp_login_text">第三方账号快速登录</div>
        <van-row type="flex" justify="center" align="center">
          <van-col span="6" justify="center" align="center">
            <van-icon name="//jp.juancdn.com/jpwebapp_v1/images_v1/user/tencent.png" />
          </van-col>
          <van-col span="6" justify="center" align="center">
            <van-icon name="//jp.juancdn.com/jpwebapp_v1/images_v1/user/taobao.png" />
          </van-col>
          <van-col span="6" justify="center" align="center">
            <van-icon name="//jp.juancdn.com/jpwebapp_v1/images_v1/user/sina.png" />
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
import { validForm } from "../tool/validForm";

export default {
  name: "login",

  data() {
    return {
      user: {
        value: "",
        errorMessage: "",
        type: "text"
      },
      pwd: {
        value: "",
        errorMessage: "",
        type: "password",
        icon: "closed-eye"
      },
      isLoading: false,
      isValid: false
    };
  },

  methods: {
    // 返回上一层路由
    back() {
      this.$router.go(-1);
    },

    // 路由跳转
    registerGo(o) {
      this.$router.push(o);
    },

    // 输入验证表单
    validUsername(value) {
      let isValid = validForm.validUsername(value);

      this.user.errorMessage = isValid
        ? ""
        : "用户名支持4-8个(字母数字_)组合，必须字母开头";

      this.passForm();
    },

    // 输入验证密码
    validPwd(value) {
      let isValid = validForm.validPwd(value);

      this.pwd.errorMessage = isValid
        ? ""
        : "密码支持6-16个(字母数字_)组合，必须含有大小写字母";

      this.passForm();
    },

    // 点击显示密码
    checkPwd(value) {
      let isOpen = value.type == "password";

      value.type = isOpen ? "text" : "password";
      value.icon = isOpen ? "eye-o" : "closed-eye";
    },

    // 点击登录
    loginBtn() {
      let that = this;

      this.isLoading = true;
      // 获取所有用户
      let users = localStorage.getItem("users");

      users = users ? JSON.parse(users) : [];
      // console.log("users ==>", users);

      let randomTime = Math.random() * 4 * 1000;

      setTimeout(function() {
        // 查找用户
        for (let i = 0; i < users.length; i++) {
          if (users[i].username == that.user.value) {
            // 如果该用户存在
            // 匹配密码
            if (users[i].pwd == that.pwd.value) {
              // 登录成功提示
              that.$toast({
                duration: 2000,
                message: "登录成功"
              });

              // 改变按钮状态
              that.isValid = false;
              that.isLoading = false;

              // 记录登录用户状态
              let user = {
                isLogin: true,
                username: that.user.value
              }

              localStorage.setItem("user", JSON.stringify(user));

              // 登录成功后跳转首页
              return that.$router.push("/home");
            } else {
              // 用户名或者密码不正确提示
              that.$toast({
                duration: 2000,
                message: "用户名或者密码不正确"
              });

              // 改变按钮状态
              that.isValid = false;
              that.isLoading = false;

              // 清空输入框
              setTimeout(function() {
                that.emptyData();
              }, 2000);

              return;
            }
          }
        }
        // 用户不存在提示
        that.$toast({
          duration: 2000,
          message: "该用户不存在"
        });

        // 改变按钮状态
        that.isValid = false;
        that.isLoading = false;

        // 清空输入框
        setTimeout(function() {
          that.emptyData();
        }, 2000);
      }, randomTime);
    },

    // 输入内容不为空时开启注册按钮
    passForm() {
      this.isValid =
        this.user.errorMessage == "" &&
        this.user.value != "" &&
        this.pwd.errorMessage == "" &&
        this.pwd.value != "";
    },

    // 清空数据
    emptyData() {
      this.user.value = "";
      this.pwd.value = "";
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  bottom: 0;
  .jp_login_head {
    /deep/.van-nav-bar {
      background: #ff5a61;
      .van-icon,
      .van-nav-bar__title,
      .van-nav-bar__text {
        color: #ffffff;
        font-size: 18px;
      }
      .van-nav-bar__text {
        font-size: 15px;
      }
    }
  }

  .jp_login_box {
    background-color: #fff;
    .van-button {
      width: calc(100% - 20px);
      font-size: 18px;
      margin: 0 10px;
    }
  }

  .jp_login_other {
    margin-top: 50px;
    text-align: center;
    .jp_login_text {
      color: #999;
      padding: 30px 0;
    }
    /deep/.van-row {
      .van-col {
        height: 50px;
        line-height: 50px;
        .van-icon {
          font-size: 50px;
        }
      }
    }
  }
}
</style>

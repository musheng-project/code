<template>
  <div class="login">
    <div class="app-logo">
      <div class="logo">
        <van-icon class="logo-icon" name="plus" size="50px" color="#999"/>
      </div>
    </div>
    <div class="animated bounceInUp">
      <div class="login_content">
        <van-cell-group class="content_list">
          <van-field
            v-model="user.value"
            type="text"
            label="用户名"
            placeholder="请输入用户名"
            :error-message="user.errorMessage"
            @input="validUp(user.value, 'validUsername', {key: 'user', errorMessage: '用户名支持4-8个(字母数字_)组合，必须字母开头'})"
          />
          <van-field
            v-model="pwd1.value"
            :type="pwd1.type"
            label="密码"
            placeholder="请输入密码"
            :right-icon="pwd1.icon"
            :error-message="pwd1.errorMessage"
            @click-right-icon="checkPassword('pwd1')"
            @input="validUp(pwd1.value, 'validPwd', {key: 'pwd1', errorMessage: '密码支持6-16个(字母数字_)组合，必须含有大小写字母'})"
          />
        </van-cell-group>
      </div>

      <div class="login-form">
        <van-button
          class="login-btn"
          :loading="isLoading"
          type="primary"
          round
          color="#ea1e63"
          loading-text="登录中..."
          text="登录"
          @click="login"
          :disabled="!isValid"
        />
      </div>

      <div class="register-form">
        <van-button
          class="register-btn"
          type="default"
          round
          loading-text="注册中..."
          text="注册"
          to="/register"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { validForm } from "../tool/validForm";

import { createNamespacedHelpers } from "vuex";

//基于loginModule的命名空间导入mapState、mapMutations 辅助函数
const { mapState, mapMutations } = createNamespacedHelpers("loginModule");

export default {
  name: "login",

  computed: {
    ...mapState(["isLoading", "user", "pwd1", "isValid"])
  },

  methods: {
    ...mapMutations(["checkPassword"]),

    //登录
    login() {
      this.$store.commit("loginModule/login", true);

      let randomTime = Math.random() * 5 * 1000;
      setTimeout(() => {
        //获取所有用户
        let users = localStorage.getItem("users");

        users = users ? JSON.parse(users) : [];

        if (users.length === 0) {
          this.$toast({
            duration: 2000,
            message: "该用户不存在"
          });
          this.$store.commit("loginModule/login", false);
          return;
        }

        //查找用户
        for (let i = 0; i < users.length; i++) {
          if (users[i].username == this.user.value) {
            //如果该用户存在
            //匹配密码
            if (users[i].pwd == this.pwd1.value) {
              this.$toast({
                duration: 2000,
                message: "登录成功"
              });
              this.$store.commit("loginModule/login", false);

              //跳转到首页
              //记录用户登录状态
              let user = {
                isLogin: true,
                username: this.user.value
              };
              localStorage.setItem("user", JSON.stringify(user));

              return this.$router.push({ name: "home" });
            } else {
              this.$toast({
                duration: 2000,
                message: "用户名或者密码不正确"
              });
              this.$store.commit("loginModule/login", false);
              return;
            }
          }
        }

        //用户不存在
        this.$toast({
          duration: 2000,
          message: "该用户不存在"
        });
        this.$store.commit("loginModule/login", false);
      }, randomTime);
    },

    //验证用户名或者密码
    validUp(value, fnName, o) {
      let isValid = validForm[fnName](value);

      // console.log("isValid ==> ", isValid);

      o.isValid = isValid;

      this.$store.commit("loginModule/validUp", o);

      this.$store.commit("loginModule/passForm");
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url("../assets/images/bg.png")no-repeat;
  background-size: cover;
  position: fixed;
  .app-logo {
    height: 250px;
    position: relative;
    .logo {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      background-color: #ddd;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.3);
      overflow: hidden;
      .logo-icon{
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
      }
    }
  }

  .login_content {
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    .content_list {
      border-radius: 25px;
      border: 1px solid #ccc;
      opacity: 0.8;
      overflow: hidden;
      padding: 20px 0;
    }
  }
  .register-form,
  .login-form {
    padding: 0 12px;
  }
  .register-btn,
  .login-btn {
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: #fff;
  }
  .register-btn {
    margin-top: 15px;
    background: rgba(255, 255, 255, 0.2);
  }
  .login-btn {
    margin-top: 40px;
  }
}
</style>

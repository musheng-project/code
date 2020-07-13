<template>
  <div class="register">
    <div class="app-logo">
      <div class="logo">
        <van-icon name="plus" color="#999"/>
      </div>
    </div>
    <div class="animated bounceInUp">
      <div class="regsiter_content">
        <van-cell-group class="content_list">
          <van-field
            v-model="user.value"
            type="text"
            label="用户名"
            placeholder="请输入用户名"
            :error-message="user.errorMessage"
            @input="validUp(user.value, 'validUsername', {key:'user', errorMessage:'请输入4-8个(字母数字_)组合'})"
          />
          <van-field
            v-model="pwd1.value"
            :type="pwd1.type"
            label="密码"
            placeholder="请输入密码"
            :right-icon="pwd1.icon"
            :error-message="pwd1.errorMessage"
            @click-right-icon="checkPassword('pwd1')"
            @input="validUp(pwd1.value, 'validPwd', {key:'pwd1', errorMessage:'请输入6-16个(字母数字_)组合，必须含有大小写字母'})"
          />
          <van-field
            v-model="pwd2.value"
            :type="pwd2.type"
            label="确认密码"
            placeholder="请输入确认密码"
            :right-icon="pwd2.icon"
            :error-message="pwd2.errorMessage"
            @click-right-icon="checkPassword('pwd2')"
            @input="validEqual(pwd1.value, pwd2.value)"
          />
        </van-cell-group>
      </div>

      <div class="register-form">
        <van-button
          :loading="isLoading"
          class="register-btn"
          type="info"
          round
          loading-text="注册中..."
          text="注册"
          @click="register"
          :disabled="!isValid"
        />
      </div>

      <div class="login-form">
        <van-button
          class="login-btn"
          type="default"
          round
          loading-text="登录中..."
          text="登录"
          to="/login"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { validForm } from "../tool/validForm";

import { createNamespacedHelpers } from "vuex";

// 基于registerModule的命名空间导入mapState、mapMutations辅助函数
const { mapState, mapMutations } = createNamespacedHelpers("registerModule");

export default {
  name: "register",

  // 计算属性
  computed: {
    ...mapState(["user", "pwd1", "pwd2", "isLoading", "isValid"])
  },

  // 方法属性
  methods: {
    ...mapMutations(["checkPassword"]),

    register() {
      let self = this;

      // 注册
      self.$store.commit("registerModule/register", true);

      let randomTime = Math.random() * 5 * 1000;

      setTimeout(function() {
        // 获取所有用户信息
        let users = localStorage.getItem("users");

        users = users ? JSON.parse(users) : [];

        // console.log("users ==>", users);

        // 判断当前用户是否存在
        for (let i = 0; i < users.length; i++) {
          if (users[i].username == self.user.value) {
            self.$toast({
              duration: 1500,
              message: "用户已存在"
            });

            self.$store.commit("registerModule/register", false);
            return;
          }
        }

        self.$toast({
          duration: 1500,
          message: "注册成功"
        });

        self.$store.commit("registerModule/register", false);

        let time = new Date().getTime();

        // 记录用户信息
        let userInformation = {
          // 用户名
          username: self.user.value,
          // 密码
          pwd: self.pwd1.value,
          // 注册时间
          time
        };

        // 将当前用户信息推进users
        users.push(userInformation);

        // 写入本地存储，模拟数据库
        localStorage.setItem("users", JSON.stringify(users));

        // 跳转登录页面
        self.$router.push({name:"login"})

      }, randomTime);
    },

    // 输入验证表单

    // 验证用户名
    validUsername(value) {
      let isValid = validForm.validUsername(value);

      this.$store.commit("registerModule/validUsername", isValid);
    },

    // 验证密码
    validPwd(value) {
      let isValid = validForm.validPwd(value);

      this.$store.commit("registerModule/validPwd", isValid);
    },

    // 验证两值是否相等
    validEqual(v1, v2) {
      let isValid = validForm.validEqual(v1, v2);

      this.$store.commit("registerModule/validEqual", isValid);

      this.$store.commit("registerModule/passForm");
    },

    // 验证用户或者密码
    validUp(value, fnName, o) {
      let isValid = validForm[fnName](value);

      o.isValid = isValid;

      this.$store.commit("registerModule/validUp", o);

      this.$store.commit("registerModule/passForm");
    }
  }
};
</script>

<style lang="less" scoped>
.register {
  width: 100%;
  height: 100%;
  background: url("../assets/images/bg.png") no-repeat;
  background-size: cover;
  position: fixed;
  top: 0;
  bottom: 0;
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
      line-height: 130px;
      text-align: center;
      border-radius: 50%;
      box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.3);
      /deep/.van-icon{
        font-size: 60px;
      }
    }
  }

  .regsiter_content {
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
    margin-top: 40px;
  }
  .login-btn {
    margin-top: 15px;
    background: rgba(255, 255, 255, 0.2);
  }
}
</style>

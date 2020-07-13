<template>
  <div class="register animate__animated animate__fadeIn">
    <div class="jp_register_head">
      <van-nav-bar
        title="注册"
        left-arrow
        @click-left="back"
        @click-right="registerGo({name:'register'})"
      />
    </div>

    <div class="jp_register_box">
      <van-field
        v-model="user.value"
        type="text"
        label="用户名"
        placeholder="请输入用户名"
        :error-message="user.errorMessage"
        @input="validUsername(user.value)"
      />
      <van-field
        v-model="pwd1.value"
        :type="pwd1.type"
        label="密码"
        placeholder="请输入密码"
        :right-icon="pwd1.icon"
        :error-message="pwd1.errorMessage"
        @click-right-icon="checkPwd(pwd1)"
        @input="validPwd(pwd1.value)"
      />
      <van-field
        v-model="pwd2.value"
        :type="pwd2.type"
        label="确认密码"
        placeholder="请输入确认密码"
        :right-icon="pwd2.icon"
        :error-message="pwd2.errorMessage"
        @click-right-icon="checkPwd(pwd2)"
        @input="validEqual(pwd1.value,pwd2.value)"
      />

      <van-button
        color="#ff464e"
        type="default"
        block
        loading-text="注册中..."
        :loading="isLoading"
        @click="registerBtn"
        :disabled="!isValid"
      >点击注册</van-button>
    </div>
  </div>
</template>

<script>
import { validForm } from "../tool/validForm";

export default {
  name: "register",

  data() {
    return {
      //用户名
      user: {
        value: "",
        errorMessage: ""
      },
      // 密码
      pwd1: {
        type: "password",
        value: "",
        icon: "closed-eye",
        errorMessage: ""
      },
      // 确认密码
      pwd2: {
        type: "password",
        value: "",
        icon: "closed-eye",
        errorMessage: ""
      },
      //注册加载中
      isLoading: false,

      // 控制注册按钮的状态
      isValid: false
    };
  },

  methods: {
    // 返回上一层
    back() {
      this.$router.go(-1);
    },

    // 查看密码
    checkPwd(key) {
      let isOpen = key.type === "password";

      key.icon = isOpen ? "eye-o" : "closed-eye";
      key.type = isOpen ? "text" : "password";
    },

    // 点击注册
    registerBtn() {
      let that = this;

      // 注册
      that.isLoading = true;

      // // 保存数据
      // localStorage.setItem("key", "value");
      // // 读取数据
      // localStorage.getItem("key");
      // // 删除数据
      // localStorage.removeItem("key");

      let randomTime = Math.random() * 4 * 1000;

      setTimeout(function() {
        // 获取所有用户信息
        let users = localStorage.getItem("users");

        //将JSON.parse(users)解析出json对象
        users = users ? JSON.parse(users) : [];
        // console.log("users ==>", users);

        // 判断当前用户是否存在
        for (let i = 0; i < users.length; i++) {
          if (users[i].username == that.user.value) {
            // 注册成功提示
            that.$toast({
              duration: 2000,
              message: "该用户已存在"
            });

            that.isLoading = false;
            that.isValid = false;

            setTimeout(function() {
              that.emptyData();
            }, 2000);

            return;
          }
        }

        // 注册成功提示
        that.$toast({
          duration: 2000,
          message: "注册成功"
        });

        that.isLoading = false;

        // 获取时间戳
        let time = new Date().getTime();

        // 记录用户信息
        let userInfomation = {
          // 用户名
          username: that.user.value,
          // 密码
          pwd: that.pwd1.value,
          // 注册时间
          time
        };

        // 将当前用户信息推入users
        users.push(userInfomation);

        // 写入本地存储，模拟数据库
        localStorage.setItem("users", JSON.stringify(users)); //转换成json字符串序列

        that.$router.push("/login");
      }, randomTime);
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

      this.pwd1.errorMessage = isValid
        ? ""
        : "密码支持6-16个(字母数字_)组合，必须含有大小写字母";

      this.passForm();
    },
    // 输入验证两次密码是否相等
    validEqual(v1, v2) {
      let isValid = validForm.validEqual(v1, v2);

      this.pwd2.errorMessage = isValid ? "" : "两次密码不一致";

      this.passForm();
    },

    // 输入内容不为空时开启注册按钮
    passForm() {
      this.isValid =
        this.user.errorMessage == "" &&
        this.user.value != "" &&
        this.pwd1.errorMessage == "" && this.pwd1.value != "" &&
        this.pwd2.errorMessage == "" && this.pwd2.value != "" &&
        this.pwd1.value == this.pwd2.value;
    },

    // 清空数据
    emptyData() {
      this.user.value = "";
      this.pwd1.value = "";
      this.pwd2.value = "";
    }
  },

  created() {}
};
</script>

<style lang="less" scoped>
.register {
  width: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  bottom: 0;
  .jp_register_head {
    /deep/.van-nav-bar {
      // background: #ff5a61;
      .van-icon,
      .van-nav-bar__title,
      .van-nav-bar__text {
        color: #333;
        font-size: 18px;
      }
      .van-nav-bar__text {
        font-size: 15px;
      }
    }
  }

  .jp_register_box {
    background-color: #fff;
    .van-button {
      width: calc(100% - 20px);
      font-size: 18px;
      margin: 0 10px;
    }
  }
}
</style>
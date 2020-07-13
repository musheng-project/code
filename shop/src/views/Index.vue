<template>
  <div id="index">
    <div id="nav">
      <van-tabbar v-model="tabbarActive" active-color="#ff464e" v-show="showactiove">
        <van-tabbar-item
          v-for="(item, index) in tabbarlists"
          :key="index"
          :name="item.name"
          :icon="item.icon"
          @click="tabbarGo({name: item.name})"
        >{{item.title}}</van-tabbar-item>
      </van-tabbar>
    </div>

    <!-- 二级路由 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabbarActive: "home",
      showactiove: true,
      tabbarlists: [
        {
          name: "home",
          icon: "wap-home-o",
          title: "首页"
        },
        {
          name: "classify",
          icon: "apps-o",
          title: "分类"
        },
        {
          name: "car",
          icon: "cart-o",
          title: "购物车"
        },
        {
          name: "mine",
          icon: "contact",
          title: "我的"
        }
      ]
    };
  },
  methods: {
    tabbarGo(o) {
      this.$router.push(o);
    }
  },
  created() {
    this.tabbarActive = this.$route.name;
  },
  watch: {
    "$route.path": function(newValue, oldValue) {
      if (newValue == "/home") {
        this.tabbarActive = "home";
      }
    }
  },

  mounted() {
    // 跳转路由让页面回到顶部
    this.$router.afterEach((to, from) => {
      window.scrollTo(0, 0);
    });
  }
};
</script>

<style lang="less" scoped>
.van-tabbar {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10000 !important;
}
.van-tabbar-item__text {
  color: #333333;
}
</style>

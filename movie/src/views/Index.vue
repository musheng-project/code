<template>
  <div>
    <van-tabbar v-model="tabbarActive" fixed active-color="#EA1E63">
      <van-tabbar-item
        v-for="(item, index) in tabbarData"
        :key="index"
        :icon="item.icon"
        :name="item.name"
        @click="tabbarPage({name:item.name})"
      >{{item.title}}</van-tabbar-item>
    </van-tabbar>

    <div>
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("indexModule");

export default {
  name: "index",

  data() {
    return {
      tabbarActive: "home"
    };
  },

  computed: {
    ...mapState(["tabbarData"])
  },

  methods: {
    tabbarPage(o) {
      this.$router.push(o)
    }
  },

  created() {
    // console.log("this.$route ==>", this.$route);

    // 纠正底部导航的标签
    this.tabbarActive = this.$route.name;
  }
};
</script>

<style lang="less" scoped>
</style>
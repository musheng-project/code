<template>
  <div id="app">
    <!-- 一级路由 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="less">
//定义全局样式
body {
  background-color: #f5f5f5;
}
img {
  width: 100%;
}
p {
  margin: 0;
}

#app {
  padding-bottom: 50px;
}

.fl {
  float: left;
}
.fr {
  float: right;
}
.clearfix::after {
  display: block;
  content: "";
  clear: both;
}
.auto-img {
  width: 100%;
  display: block;
}
.one-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

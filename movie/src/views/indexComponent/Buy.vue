<template>
  <div class="buy animated fadeIn">
    <div class="buy-nav clearfix">
      <div class="fl location">广州</div>
      <div class="fl toggle">
        <div class="toggle-content">
          <div class="fl" :class="{active:active==item.name}" v-for="(item, index) in lists" :key="index" @click="jump(item.name)">{{item.title}}</div>
        </div>
      </div>
      <div class="fl search">
        <span class="fr search-icon">
          <van-icon name="search" />
        </span>
      </div>
    </div>

    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'buy',
    data(){
      return{
        active:"movie",
        lists:[
          {
            title:"影院",
            name:"movie"
          },
          {
            title:"电影",
            name:"cinema"
          },
        ]
      }
    },

    methods: {
      jump(i){
        this.active = i;
        this.$router.push(i);
      }
    },
  }
</script>

<style lang="less" scoped>
  .buy{
    width: calc(~"100% - 20px");
    padding: 0 10px;
    background-color: #EA1E63;
    position: fixed;
    top: 0;
    left: 0;
    .location{
      width: 60px;
      height: 40px;
      line-height: 40px;
      color: #ffffff;
      font-size: 14px;
    }

    .toggle{
      width: calc(~"100% - 120px");
      height: 40px;
      background: #EA1E63;
      .toggle-content{
        width: 120px;
        margin: 0 auto;
        background-color: #fff;
        text-align: center;
        border-radius: 12px;
        overflow: hidden;
        line-height: 24px;
        margin-top: 8px;
        font-size: 14px;
        >div{
          width: 60px;
          height: 24px;
          color: #EA1E63;
          &.active{
            background-color: #EA1E63;
            color: #ffffff;
          }
        }
        
      }
    }
    .search{
      width: 60px;
      height: 40px;
      .search-icon{
        width: 20px;
        height: 20px;
        margin-top: 10px;
        font-size: 20px;
        color: #ffffff;
      }
    }
  }
</style>
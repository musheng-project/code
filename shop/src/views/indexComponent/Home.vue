<template>
  <div class="home animate__animated animate__fadeIn">
    <!-- 搜索框 -->
    <div class="jp_search">
      <van-search v-model="value" placeholder="搜索" show-action label="卷皮" left-icon="search">
        <div slot="action">
          <img
            src="https://goods3.juancdn.com/bao/170421/4/9/58f9f3bca43d1f15ff678b8c_132x132.png"
            alt
            class="right-icon"
          />
        </div>
      </van-search>
    </div>
    <!-- 搜索框end -->

    <!-- 轮播图 -->
    <div class="jp_slider">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in sliderlists" :key="index">
          <img :src="item.src" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 轮播图end -->

    <!-- 导航栏 -->
    <div class="jp_nav">
      <van-row>
        <van-col span="6" v-for="(item, index) in navlists" :key="index">
          <img :src="item.src" alt :class="{img_h: index == 3}" />
        </van-col>
      </van-row>
    </div>
    <!-- 导航栏end -->

    <!-- 活动栏 -->
    <div class="jp_action">
      <van-row>
        <van-col span="12" v-for="(item, index) in actionlists" :key="index">
          <img :src="item.src" alt />
        </van-col>
      </van-row>
    </div>
    <!-- 活动栏end -->

    <!-- 广告 -->
    <div :class="item.class" v-for="(item, index) in adlists" :key="index">
      <a href="#">
        <img :src="item.src" alt />
      </a>
    </div>

    <!-- 广告end -->

    <!-- 商品列表 -->
    <div class="jp_goods">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-tabs
          v-model="activeName"
          line-width="70px"
          line-height="1.5px"
          title-active-color="#ff464e"
        >
          <van-tab
            v-for="(item, index) in goods"
            :key="index"
            :title="item.title"
            :name="item.name"
          >
            <van-row gutter="2">
              <van-col
                span="12"
                v-for="(value, key) in item.goodslist"
                :key="key"
                @click="goodsDetailGo(value.id)"
              >
                <img :src="value.src" alt />
                <div class="jp_goodslist_info">
                  <div class="jp_goodslist_price">
                    <span>￥{{value.price}}</span>
                    <span>￥{{value.price2}}</span>
                  </div>
                  <div class="jp_goodslist_name">{{value.title}}</div>
                </div>
              </van-col>
            </van-row>
          </van-tab>
        </van-tabs>
      </van-list>
    </div>
    <!-- 商品列表end -->

    <!-- 置顶 -->
    <div class="top_icon" v-show="backFlag" @click="backTop">
      <van-icon
        name="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593852075284&di=8cae2e3ef6e000450f87f135fcc09c21&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F02%2F46%2F63%2F59e5d8161f63e_610.jpg"
        size="40px"
        color="#fff"
      />
    </div>
    <!-- 置顶end -->
  </div>
</template>

<script>
export default {
  name: "home",

  data() {
    return {
      value: "",
      activeName: "special",
      // 轮播图数据
      sliderlists: [
        {
          src:
            "https://goods2.juancdn.com/jas/200629/3/7/5ef995edb6f8ea351d326023_1080x418.png"
        },
        {
          src:
            "https://goods7.juancdn.com/jas/200701/d/b/5efc045233b0890c187a51fb_1080x418.jpg"
        },
        {
          src:
            "https://goods1.juancdn.com/jas/200701/0/e/5efbf1ca33b0890df7783908_1080x418.jpg"
        },
        {
          src:
            "https://goods3.juancdn.com/jas/200629/5/0/5ef9818b33b08943333fee13_1080x418.jpg"
        },
        {
          src:
            "https://goods7.juancdn.com/jas/200629/d/4/5ef9cfae33b0897e1566d24a_1080x418.jpg"
        }
      ],
      // 导航数据
      navlists: [
        {
          src:
            "https://goods4.juancdn.com/jas/181119/7/6/5bf2524bb6f8ea534d206f83_270x241.png"
        },
        {
          src:
            "https://goods8.juancdn.com/jas/181228/f/e/5c25bd0d33b08962a220f3a6_270x241.png"
        },
        {
          src:
            "https://goods2.juancdn.com/jas/180201/3/d/5a727415a9fcf8280d24465a_270x241.png"
        },
        {
          src:
            "https://goods1.juancdn.com/jas/200528/1/5/5ecf19a833b0896bec6312db_270x259.png"
        }
      ],
      // 活动数据
      actionlists: [
        {
          src:
            "https://s2.juancdn.com/jas/200630/e/a/5efafac8b6f8ea02672b4743_540x656.gif"
        },
        {
          src:
            "https://goods4.juancdn.com/jas/200630/7/b/5efb221f33b0890c2c778a38_540x328.png"
        },
        {
          src:
            "https://goods8.juancdn.com/jas/200628/f/c/5ef87f51b6f8ea3838089ee1_540x328.png"
        }
      ],
      // 广告数据
      adlists: [
        {
          class: "jp_ad",
          src:
            "https://s2.juancdn.com/jas/200623/8/a/5ef1ac81b6f8ea75fe502c23_1080x315.gif"
        },
        {
          class: "jp_ad2",
          src:
            "https://goods7.juancdn.com/jas/180518/c/6/5afe2f0db6f8ea096f2bfb35_1080x138.png"
        }
      ],
      // 商品数据
      goods: [
        {
          name: "special",
          title: "精选专场",
          goodslist: [
            {
              src:
                "https://goods3.juancdn.com/goods/200529/4/6/5ed0af9b33b0890e615fdc92_800x800.jpg",
              price: 21,
              price2: 88,
              title: "夏装新款短袖T恤女",
              id: 1
            },
            {
              src:
                "https://goods1.juancdn.com/goods/200616/1/0/5ee857ecb6f8ea46f056d1df_800x800.jpg",
              price: 68,
              price2: 398,
              title: "时尚气质立领刺绣衬衫",
              id: 2
            },
            {
              src:
                "https://goods6.juancdn.com/goods/200629/b/7/5ef9aa9b33b0897d8b08ab44_800x800.jpg",
              price: 99,
              price2: 189,
              title: "印花条纹短袖连衣裙",
              id: 3
            },
            {
              src:
                "https://goods1.juancdn.com/tao/200630/0/f/5efb2848b6f8ea03ac3d106e_800x800.jpg",
              price: 55.3,
              price2: 299,
              title: "套装A8DZ920077",
              id: 4
            }
          ]
        },
        {
          name: "single",
          title: "精选单品",
          goodslist: [
            {
              src:
                "https://goods4.juancdn.com/goods/200530/6/0/5ed1fdd6b6f8ea7be85928ac_800x800.jpg",
              price: 158,
              price2: 399,
              title: "阿迪达斯（Adidas）杨幂同款T恤",
              id: 5
            },
            {
              src:
                "https://goods6.juancdn.com/goods/170913/b/b/59b8dd00a9fcf825c828d968_800x800.jpg",
              price: 329,
              price2: 559,
              title: "万斯正品板鞋",
              id: 6
            },
            {
              src:
                "https://goods6.juancdn.com/goods/191126/a/6/5ddd00dbb6f8ea113272334b_800x800.jpg",
              price: 32,
              price2: 89,
              title: "思尚四色轻盈定妆散粉",
              id: 7
            },
            {
              src:
                "https://goods4.juancdn.com/goods/170826/7/7/59a0fadf8150a176bb70c0e8_800x800.jpg",
              price: 18.8,
              price2: 69.9,
              title: "红豆沙蛋黄酥（6枚）",
              id: 8
            }
          ]
        }
      ],
      // 置顶图标显示/隐藏
      backFlag: false,

      loading: false,
      finished: false
    };
  },

  mounted() {
    //scroll 滚动事件
    window.addEventListener("scroll", this.showBtn);
  },

  created() {
    this.$toast.loading({
      duration: 1000,
      message: "加载中...",
      forbidClick: true
    });
  },

  methods: {
    showBtn() {
      let that = this;
      // 浏览器兼容
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
        that.scrollTop = scrollTop;

      // 计算距离顶部的高度，当高度大于40显示回顶部，小于40则隐藏（默认隐藏）
      if (that.scrollTop > 40) {
        let that = this;
        that.backFlag = true;
      } else {
        that.backFlag = false;
      }
    },

    backTop() {
      // 点击返回顶部方法，计时器是为了过渡顺滑
      let that = this;

      //scrollTop获取元素的滚动条的垂直位置，Math.floor() 向下取整
      let timer = setInterval(() => {
        let speed = Math.floor(-that.scrollTop / 10);

        //document.documentElement.scrollTop 获取当前页面的滚动条纵坐标位置
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + speed;

        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 20);
    },

    goodsDetailGo(id) {
      this.$router.push({ name: "goodsDetail", query: { id } });
    },

    onLoad() {
      setTimeout(() => {
        let item = [
          {
            src:
              "https://goods3.juancdn.com/goods/200529/4/6/5ed0af9b33b0890e615fdc92_800x800.jpg",
            price: 21,
            price2: 88,
            title: "夏装新款短袖T恤女",
            id: 1
          },
          {
            src:
              "https://goods1.juancdn.com/goods/200616/1/0/5ee857ecb6f8ea46f056d1df_800x800.jpg",
            price: 68,
            price2: 398,
            title: "时尚气质立领刺绣衬衫",
            id: 2
          },
          {
            src:
              "https://goods6.juancdn.com/goods/200629/b/7/5ef9aa9b33b0897d8b08ab44_800x800.jpg",
            price: 99,
            price2: 189,
            title: "印花条纹短袖连衣裙",
            id: 3
          },
          {
            src:
              "https://goods1.juancdn.com/tao/200630/0/f/5efb2848b6f8ea03ac3d106e_800x800.jpg",
            price: 55.3,
            price2: 299,
            title: "套装A8DZ920077",
            id: 4
          }
        ];
        let item2 = [
          {
            src:
              "https://goods4.juancdn.com/goods/200530/6/0/5ed1fdd6b6f8ea7be85928ac_800x800.jpg",
            price: 158,
            price2: 399,
            title: "阿迪达斯（Adidas）杨幂同款T恤",
            id: 5
          },
          {
            src:
              "https://goods6.juancdn.com/goods/170913/b/b/59b8dd00a9fcf825c828d968_800x800.jpg",
            price: 329,
            price2: 559,
            title: "万斯正品板鞋",
            id: 6
          },
          {
            src:
              "https://goods6.juancdn.com/goods/191126/a/6/5ddd00dbb6f8ea113272334b_800x800.jpg",
            price: 32,
            price2: 89,
            title: "思尚四色轻盈定妆散粉",
            id: 7
          },
          {
            src:
              "https://goods4.juancdn.com/goods/170826/7/7/59a0fadf8150a176bb70c0e8_800x800.jpg",
            price: 18.8,
            price2: 69.9,
            title: "红豆沙蛋黄酥（6枚）",
            id: 8
          }
        ];

        for (let i = 0; i < item.length; i++) {
          this.goods[0].goodslist.push(item[i]);
        }

        for (let i = 0; i < item2.length; i++) {
          this.goods[1].goodslist.push(item2[i]);
        }

        this.loading = false;

        if (
          this.goods[0].goodslist.length >= 20 &&
          this.goods[1].goodslist.length
        ) {
          this.finished = true;
        }
      }, 2000);
    }
  },

  watch: {
    "$route.path": function(newValue, oldValue) {
      if (newValue == "/home") {
        this.activeName = "special";
      }
    }
  },

  destroyed() {
    // 销毁监听事件,当我们离开这个页面的时候，便会调用这个函数
    window.removeEventListener("scroll", this.showBtn);
  }
};
</script>

<style lang="less" scoped>
.jp_search {
  .van-search__label {
    font-size: 14px;
    font-weight: bold;
    color: red;
  }
  .right-icon {
    width: 30px;
    height: 30px;
  }
  .van-search__action {
    line-height: 0;
  }
  .van-search__content {
    border-radius: 5px;
  }
}

.jp_slider {
  /deep/.van-swipe__indicator {
    width: 8px;
    height: 8px;
    background: rgba(0, 0, 0, 0.6);
  }
  /deep/.van-swipe__indicator--active {
    width: 15px;
    border-radius: 5px;
  }
}

.jp_nav {
  .img_h {
    height: 83.7px;
  }
}

.jp_action {
  .van-col {
    margin-bottom: -3px;
  }
}

.jp_ad,
.jp_ad2 {
  background: #f4f4f4;
}
.jp_ad2 {
  padding-bottom: 6px;
}

.jp_goods {
  /deep/.van-tabs__nav {
    padding-right: 200px;
    .van-tab__text {
      font-size: 16px;
    }
  }

  .jp_goodslist_info {
    padding: 5px 0px 15px 5px;
    margin-bottom: 1px;
    background-color: #fff;
    .jp_goodslist_price {
      :nth-child(1) {
        font-size: 14px;
        color: #ff464e;
        margin-right: 4px;
      }
      :nth-child(2) {
        font-size: 8px;
        color: #bbbbbb;
        text-decoration: line-through;
      }
    }
    .jp_goodslist_name {
      font-size: 12px;
      color: #3b3b3b;
      padding-right: 60px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}

.top_icon {
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 100%;
  background-color: #ccc;
  color: #333;
  position: fixed;
  right: 12px;
  bottom: 60px;
  overflow: hidden;
}
</style>
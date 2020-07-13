<template>
  <div class="classify animate__animated animate__fadeIn">
    <!-- 搜索框 -->
    <div class="jp_search2">
      <van-search placeholder="搜索商品" v-model="value" />
    </div>
    <!-- 搜索框end -->

    <!-- 商品选择列表 -->
    <div class="jp_treeselect">
      <van-tree-select height="150vw" :items="items" :main-active-index.sync="activeIndex">
        <template slot="content">
          <div v-for="(item, index) in items" :key="index">
            <van-row v-if="activeIndex === index">
              <van-col span="8" v-for="(value, key) in item.children" :key="key">
                <img :src="value.src" alt />
                <p class="one-text">{{value.name}}</p>
                <div :class="value.class">{{value.title}}</div>
              </van-col>
            </van-row>
          </div>
        </template>
      </van-tree-select>
    </div>
    <!-- 商品选择列表end -->
  </div>
</template>

<script>
export default {
  name: "classify",

  data() {
    return {
      value: "",
      activeIndex: 0,
      items: [
        {
          text: "女装",
          children: [
            {
              src:
                "https://s2.juancdn.com/bao/191101/4/1/5dbbe44433b089562c147214_200x200.png",
              name: "女士裙装",
              title: "NEW",
              class: "icon-new icon"
            },
            {
              src:
                "https://s2.juancdn.com/bao/191101/6/5/5dbbe72133b089554a1a7630_200x200.png",
              name: "羽绒棉服",
              title: "HOT",
              class: "icon-hot icon"
            },
            {
              src:
                "https://s2.juancdn.com/bao/191101/8/3/5dbbe91e33b08955ed35f212_200x200.png",
              name: "卫衣",
              title: "推荐",
              class: "icon-rec icon"
            },
            {
              src:
                "https://s2.juancdn.com/bao/191101/6/3/5dbbdfd0b6f8ea60fc7c333e_200x200.png",
              name: "衬衫雪纺",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/180510/f/6/5af4305c33b08974b25d97c5_200x200.png",
              name: "休闲裤",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/191101/a/c/5dbbe5f233b089554d6251e4_200x200.png",
              name: "外套大衣",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/191101/a/0/5dbbec4c33b08955ee6412f1_200x200.png",
              name: "懒人套装",
              title: "HOT",
              class: "icon-hot icon"
            },
            {
              src:
                "https://s2.juancdn.com/bao/191101/9/e/5dbbe4e1b6f8ea60f03bc297_200x200.png",
              name: "针织毛衫",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/191101/9/e/5dbbe4e1b6f8ea60f03bc297_200x200.png",
              name: "皮草",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/191101/2/a/5dbbea0f33b089564d680f24_200x200.png",
              name: "西装外套",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/191101/2/a/5dbbea0f33b089564d680f24_200x200.png",
              name: "风衣",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/190220/d/a/5c6cda8233b0891a8c2ff71a_200x200.jpg",
              name: "中老年女装",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/180517/b/0/5afd2b2133b08909906c57af_200x200.png",
              name: "牛仔裤",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/181106/4/a/5be163f1b6f8ea61f7712835_200x200.png",
              name: "职业套装",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/170502/3/2/5908496ca43d1f7f665137b7_200x200.png",
              name: "T恤",
              title: "",
              class: ""
            }
          ]
        },
        {
          text: "男装",
          children: [
            {
              src:
                "https://s2.juancdn.com/bao/170815/a/9/5992e3d18150a12e9903fc68_200x200.png",
              name: "夹克",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/190528/7/d/5cecdd8b33b08951d6492de9_200x200.png",
              name: "套装",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/190528/2/a/5cecd8c9b6f8ea5ae1362821_200x200.png",
              name: "T恤",
              title: "HOT",
              class: "icon-hot icon"
            },
            {
              src:
                "https://s2.juancdn.com/bao/190528/d/e/5cecdc3833b08955c532a6a4_200x200.png",
              name: "男士衬衫",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/171011/7/c/59ddcb028150a1342d541a29_200x200.png",
              name: "卫衣",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/190528/1/5/5cecd984b6f8ea5ca8567b37_200x200.png",
              name: "POLO衫",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/170828/2/a/59a3d51a8150a108c4711bc3_200x200.png",
              name: "牛仔裤",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/170828/6/a/59a3d4faa9fcf831ca0a6202_200x200.png",
              name: "休闲裤",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/170828/4/6/59a3d531a9fcf8337b0f195e_200x200.png",
              name: "西裤",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/170526/2/3/5927c3c9ad0a496da18b45cd_200x200.png",
              name: "内裤",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/170526/f/6/5927c3d8a43d1f4ca80c9b57_200x200.png",
              name: "袜子",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/170918/2/4/59bfc077a9fcf869cc021996_200x200.png",
              name: "背心/马甲",
              title: "",
              class: ""
            }
          ]
        },
        {
          text: "母婴",
          children: [
            {
              src:
                "https://s2.juancdn.com/bao/180228/f/0/5a9669b5a9fcf89c253b904b_200x200.png",
              name: "男童套装",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/180228/5/e/5a9677fea9fcf81fab76f155_200x200.png",
              name: "女童套装",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/180228/c/e/5a96783da9fcf8211b3f1944_200x200.png",
              name: "儿童裙装",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/180228/3/9/5a96726c8150a1463439c066_200x200.png",
              name: "儿童上衣",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/180228/0/4/5a96728da9fcf89c3959bf88_200x200.png",
              name: "儿童裤子",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/180228/3/f/5a9680e3a9fcf820232d051c_200x200.png",
              name: "内衣配饰",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/180228/4/9/5a9678cf8150a14543171d6a_200x200.png",
              name: "儿童帆布鞋",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/180228/4/9/5a9678cf8150a14543171d6a_200x200.png",
              name: "儿童运动鞋",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/180228/8/a/5a9673118150a146a518b4c4_200x200.png",
              name: "儿童皮鞋",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/180228/1/c/5a96734a8150a145ff079406_200x200.png",
              name: "婴幼服饰",
              title: "",
              class: ""
            }
          ]
        },
        {
          text: "鞋子",
          children: [
            {
              src:
                "https://s2.juancdn.com/bao/181009/3/4/5bbc0a07b6f8ea3a264b2077_200x200.png",
              name: "女休闲鞋",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/181009/d/f/5bbc0eae33b08916b93bc754_200x200.png",
              name: "中/高跟鞋",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/181009/9/6/5bbc0ec033b089152b0652f4_200x200.png",
              name: "平跟单鞋",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/181009/5/a/5bbc0a80b6f8ea7e81191c30_200x200.png",
              name: "男休闲鞋",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/181009/e/c/5bbc0a6f33b0891efa7703eb_200x200.png",
              name: "商务皮鞋",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/181009/6/d/5bbc0a5a33b08902bc378795_200x200.png",
              name: "坡跟厚底",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/181009/8/9/5bbc0a9fb6f8ea01c06bf3cd_200x200.png",
              name: "冬靴上新",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/181009/8/6/5bbc0e9cb6f8ea1d44488f82_200x200.png",
              name: "男士棉靴",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/181009/8/6/5bbc0e9cb6f8ea1d44488f82_200x200.png",
              name: "高跟凉鞋",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/181009/9/f/5bbc0af3b6f8ea02ae35dcff_200x200.png",
              name: "平底凉鞋",
              title: "",
              class: ""
            }
          ]
        },
        {
          text: "箱包",
          children: [
            {
              src:
                "https://s2.juancdn.com/bao/170925/6/3/59c86a82a9fcf8675e021186_200x200.png",
              name: "提挎包",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/170727/4/e/5979debca9fcf84de4585b35_200x200.png",
              name: "双肩包",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/170727/c/8/5979df388150a14a7507105c_200x200.png",
              name: "手提包",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/170727/c/4/5979e08ca9fcf8574d4ac70a_200x200.png",
              name: "拉杆箱",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/170925/f/b/59c86b6e8150a141ba202498_200x200.png",
              name: "斜挎包",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/170727/7/4/5979df528150a14aaa53e879_200x200.png",
              name: "单肩包",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/170727/d/f/5979e05fa9fcf893dd3778d6_200x200.png",
              name: "斜挎男包",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/170727/8/d/5979e076a9fcf8a881738ce4_200x200.png",
              name: "公文包",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/170727/4/b/5979dfcf8150a1493805bf2c_200x200.png",
              name: "胸/腰包",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/170727/0/d/5979df74a9fcf86c47329f65_200x200.png",
              name: "钱包",
              title: "",
              class: ""
            }
          ]
        },
        {
          text: "居家百货",
          children: [
            {
              src:
                "https://s2.juancdn.com/bao/160901/2/5/57c7fcba151ad1ae6b8b45d9_200x200.png",
              name: "床品套件",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160901/5/6/57c7fcd3151ad1c8728b458f_200x200.png",
              name: "卫生巾/纸",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160901/a/9/57c7fcaf151ad1d86c8b459b_200x200.png",
              name: "百货日杂",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160706/b/d/577c7f07151ad175048b45da_200x200.png",
              name: "清洁工具",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160901/5/c/57c7fcc4151ad12d6d8b45a8_200x200.png",
              name: "个护洗护",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160706/e/e/577c7f60151ad1f1038b45d5_200x200.png",
              name: "口腔护理",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160706/d/f/577c7f6b151ad19b038b45c2_200x200.png",
              name: "生活用品",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160706/f/8/577c7f7f151ad1f7158b4581_200x200.png",
              name: "浴室摆件",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160706/3/2/577c7f8e151ad14f028b45cf_200x200.png",
              name: "雨伞雨具",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160706/9/a/577c7f9f151ad157038b45d2_200x200.png",
              name: "整理收纳",
              title: "",
              class: ""
            }
          ]
        },
        {
          text: "家电数码",
          children: [
            {
              src:
                "https://s2.juancdn.com/bao/171218/6/9/5a375c6ba9fcf85fa238173d_200x200.png",
              name: "智能手机",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/171218/d/c/5a376373a9fcf896916c7124_200x200.png",
              name: "老人手机",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/171218/e/1/5a375d48a9fcf860eb39ad40_200x200.png",
              name: "手机配件",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/171218/0/4/5a3779188150a15a1110ee2d_200x200.png",
              name: "洗衣机",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/171218/3/f/5a37789ba9fcf80a8c7b51a1_200x200.png",
              name: "冰箱",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/170831/5/f/59a7b5588150a13ed92ce699_200x200.png",
              name: "大家电",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/171218/c/9/5a3773568150a1447b5b0204_200x200.png",
              name: "电饭煲",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/171218/5/1/5a375dbea9fcf87238068522_200x200.png",
              name: "电热水壶",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/171218/5/6/5a377ef08150a15aec027cdf_200x200.png",
              name: "吹风机",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/171218/f/c/5a375e50a9fcf8611a4d1784_200x200.png",
              name: "美容瘦身",
              title: "",
              class: ""
            }
          ]
        },
        {
          text: "内衣配饰",
          children: [
            {
              src:
                "https://s2.juancdn.com/bao/181106/9/5/5be166a933b0894dc0039175_200x200.png",
              name: "女士家居服",
              title: "HOT",
              class: "icon-hot icon"
            },
            {
              src:
                "https://s2.juancdn.com/bao/180615/3/6/5b232d3033b089655057e554_200x200.png",
              name: "文胸",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/180116/3/6/5a5dd4b6a9fcf83f9a6fe5e3_200x200.png",
              name: "文胸套装",
              title: "HOT",
              class: "icon-hot icon"
            },
            {
              src:
                "https://s2.juancdn.com/bao/171024/7/5/59ef2bfb8150a14fd56c099d_200x200.png",
              name: "保暖内衣",
              title: "推荐",
              class: "icon-rec icon"
            },
            {
              src:
                "https://s2.juancdn.com/bao/180117/b/3/5a5ecfc18150a15a3d5b20b3_200x200.png",
              name: "女士内裤",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/180116/b/6/5a5dd0dea9fcf865877b3633_200x200.png",
              name: "女士安全裤",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/180117/0/4/5a5ecfb2a9fcf870d37a5392_200x200.png",
              name: "男士内裤",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/180116/6/9/5a5dcf018150a11f0f73eefa_200x200.png",
              name: "美体塑形",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/180614/c/4/5b2211d933b0892243106f2d_200x200.png",
              name: "打底丝袜",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/181106/e/0/5be16993b6f8ea37cd765e57_200x200.png",
              name: "男士睡衣",
              title: "",
              class: ""
            }
          ]
        },
        {
          text: "美妆",
          children: [
            {
              src:
                "https://s2.juancdn.com/bao/160706/c/a/577c85d5151ad15d248b4597_200x200.png",
              name: "护肤品",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160706/5/9/577c85e9151ad1fe148b45c4_200x200.png",
              name: "彩妆香氛",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160706/7/a/577c85f6151ad168248b4588_200x200.png",
              name: "美容工具",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160706/f/9/577c8601151ad1ca158b45db_200x200.png",
              name: "身体护理",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160706/6/e/577c860e151ad1c6148b45e4_200x200.png",
              name: "头发护理",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160706/3/3/577c861a151ad1e9188b45be_200x200.png",
              name: "男士护理",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160706/5/9/577ca594151ad110798b45a7_200x200.png",
              name: "护肤洁面",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160706/0/6/577ca5a4151ad13b038b4584_200x200.png",
              name: "口碑面膜",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160706/3/e/577cac21151ad1100f8b4598_200x200.png",
              name: "BB防晒",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160706/b/9/577ca607151ad1d1048b457a_200x200.png",
              name: "补水保湿",
              title: "",
              class: ""
            }
          ]
        },
        {
          text: "运动户外",
          children: [
            {
              src:
                "https://s2.juancdn.com/bao/180308/0/a/5aa09cdb8150a1718206e940_200x200.png",
              name: "运动男鞋",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/171218/c/2/5a3738488150a13a4f00331a_200x200.png",
              name: "运动男装",
              title: "HOT",
              class: "icon-hot icon"
            },
            {
              src:
                "https://s2.juancdn.com/bao/180308/c/a/5aa0a65da9fcf8a83441f608_200x200.png",
              name: "健身器材",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/180907/7/8/5b921b0cb6f8ea7d8b5f5a37_200x200.png",
              name: "运动女鞋",
              title: "HOT",
              class: "icon-hot icon"
            },
            {
              src:
                "https://s2.juancdn.com/bao/180907/e/8/5b921a4b33b089156b69f46b_200x200.png",
              name: "运动女装",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/171218/8/e/5a373907a9fcf80d1961c9a6_200x200.png",
              name: "舞蹈瑜伽",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/180907/9/4/5b922675b6f8ea77c050a75f_200x200.png",
              name: "儿童运动鞋服",
              title: "HOT",
              class: "icon-hot icon"
            },
            {
              src:
                "https://s2.juancdn.com/bao/171218/a/7/5a373923a9fcf80cca192e68_200x200.png",
              name: "体育用品",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/180308/f/c/5aa0a2afa9fcf8aa097690e3_200x200.png",
              name: "户外男装",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/180308/3/1/5aa0a5f28150a170fb705768_200x200.png",
              name: "户外女装",
              title: "",
              class: ""
            }
          ]
        },
        {
          text: "美食",
          children: [
            {
              src:
                "https://s2.juancdn.com/bao/160901/1/c/57c7fcdc151ad1ea708b45a2_200x200.png",
              name: "坚果炒货",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160901/3/d/57c7f38a151ad16e518b45cb_200x200.png",
              name: "饼干糕点",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160901/7/9/57c7f3ab151ad10a508b45bf_200x200.png",
              name: "肉类熟食",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160901/6/4/57c7f40b151ad10b488b4642_200x200.png",
              name: "蜜饯果脯",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160901/a/5/57c7f3ed151ad170558b45a8_200x200.png",
              name: "糖果巧克力",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160901/d/f/57c7fc7d151ad1b95e8b4602_200x200.png",
              name: "进口美食",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160901/1/c/57c7fcf1151ad115758b4579_200x200.png",
              name: "精品茗茶",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/170623/f/0/594d0b58957b523757214115_200x200.png",
              name: "生鲜蔬果",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160901/8/3/57c7fd05151ad1af6c8b45b4_200x200.png",
              name: "南北干货",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160901/b/4/57c7fc96151ad1d2648b45fa_200x200.png",
              name: "方便食品",
              title: "",
              class: ""
            }
          ]
        },
        {
          text: "车品文娱",
          children: [
            {
              src:
                "https://s2.juancdn.com/bao/160706/b/c/577ca87a151ad1e0058b458f_200x200.jpg",
              name: "学习办公",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160706/1/8/577ca86f151ad1d00e8b4567_200x200.jpg",
              name: "文娱用品",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160706/9/5/577ca81b151ad12a738b4603_200x200.jpg",
              name: "座套脚垫",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160706/5/a/577ca7f8151ad10d748b45e8_200x200.jpg",
              name: "汽车装饰",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160706/f/a/577ca804151ad18f018b45ac_200x200.jpg",
              name: "汽车美容",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160706/e/3/577ca83f151ad1017a8b45f8_200x200.jpg",
              name: "头枕腰靠",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160706/8/a/577ca826151ad1af068b4594_200x200.jpg",
              name: "功能小件",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160706/0/e/577ca857151ad10e728b45e4_200x200.jpg",
              name: "维修保养",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160706/3/3/577ca831151ad15b038b45b2_200x200.jpg",
              name: "电子导航",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160706/f/1/577ca810151ad13e018b45ba_200x200.jpg",
              name: "车载电器",
              title: "",
              class: ""
            },
            {
              src:
                "https://s2.juancdn.com/bao/160706/1/f/577ca84c151ad127718b4610_200x200.jpg",
              name: "安全驾驶",
              title: "",
              class: ""
            }
          ]
        }
      ]
    };
  },

  created() {
    this.$toast.loading({
      duration: 1000,
      message: "加载中...",
      forbidClick: true
    });
  },

  watch: {
    "$route.path": function(newValue, oldValue) {
      // console.log("newValue ==>", newValue)
      // console.log("oldValue ==>", oldValue)

      if (newValue == "/classify") {
        this.activeIndex = 0;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.van-tree-select__nav {
  flex: 0.7;
}
.van-tree-select__content {
  padding-left: 4%;
  padding-top: 3%;
}

.van-row {
  .van-col {
    padding: 0px 15px;
    padding-bottom: 20px;
    position: relative;
    > img {
      width: 100%;
    }
    > p {
      text-align: center;
      font-size: 12px;
    }
    .icon {
      width: 30px;
      height: 30px;
      line-height: 30px;
      border-radius: 100%;
      font-size: 10px;
      font-weight: 500;
      text-align: center;
      color: #ffffff;
      position: absolute;
      top: -10px;
      right: 2px;
    }
    .icon-new {
      background: #5698f3;
    }
    .icon-hot {
      background: #ff464e;
    }
    .icon-rec {
      background: #f5a623;
    }
  }
}
</style>

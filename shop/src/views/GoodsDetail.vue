<template>
  <div class="details animate__animated animate__fadeIn">
    <!-- 轮播图 -->
    <div class="jp_details_slider">
      <van-swipe @change="onChange">
        <van-swipe-item v-for="(item, index) in goodsData.sliderData" :key="index">
          <img :src="item" alt />
        </van-swipe-item>

        <div
          class="custom-indicator"
          slot="indicator"
        >{{ current + 1 }}/{{goodsData.sliderData.length}}</div>
      </van-swipe>
      <div class="jp_details_slider_licon">
        <van-icon name="arrow-left" @click="back" />
      </div>
      <div class="jp_details_slider_ricon">
        <van-icon name="more" />
      </div>
    </div>
    <!-- 轮播图end -->

    <!-- 商品价格、信息 -->
    <div class="jp_details_list1">
      <div class="jp_details_price">
        <span>￥</span>
        <span>{{goodsData.price}}</span>
        <span>{{goodsData.price2}}</span>
        <span>{{goodsData.express}}</span>
        <span>{{goodsData.sales}}</span>
      </div>

      <div class="jp_details_info">
        <van-row>
          <van-col span="22">
            <span>{{goodsData.title}}</span>
          </van-col>
          <van-col span="2">
            <van-icon name="like-o" />
          </van-col>
        </van-row>
      </div>
    </div>
    <!-- 商品价格、信息end -->

    <!-- 商品优惠券、售后 -->
    <div class="jp_details_list2">
      <div class="jp_details_coupon">
        <van-cell is-link>
          <template slot="title">
            <span class="custom-title">{{goodsData.custom}}</span>
            <span class="custom-title">{{goodsData.customInfo}}</span>
          </template>
          <van-icon slot="right-icon" name="ellipsis" style="line-height: inherit;" />
        </van-cell>
      </div>

      <div class="jp_details_after">
        <van-cell is-link>
          <template slot="title">
            <span class="custom-title">●</span>
            <span class="custom-title">24小时发货</span>
            <span class="custom-title">●</span>
            <span class="custom-title">7天包退</span>
            <span class="custom-title">●</span>
            <span class="custom-title">售后补贴</span>
          </template>
          <van-icon slot="right-icon" name="ellipsis" style="line-height: inherit;" />
        </van-cell>
      </div>
    </div>
    <!-- 商品优惠券、售后end -->

    <!-- 商品类型选择 -->
    <div class="jp_details_choice">
      <van-cell is-link>
        <template slot="title">
          <span class="custom-title">请选择：{{goodsData.type}}</span>
        </template>
        <van-icon slot="right-icon" name="arrow" style="line-height: inherit;" />
      </van-cell>
    </div>
    <!-- 商品类型选择end -->

    <!-- 商品店铺 -->
    <div class="jp_details_shop">
      <van-row>
        <van-col span="4">
          <img :src="goodsData.shopImg" alt />
        </van-col>
        <van-col span="15">
          <p>{{goodsData.shopName}}</p>
          <p>{{goodsData.shopSales}}</p>
        </van-col>
        <van-col span="5">
          <span>进入店铺</span>
          <van-icon name="arrow" />
        </van-col>
      </van-row>
    </div>
    <!-- 商品店铺end -->

    <!-- 商家提醒 -->
    <div class="jp_details_remind">
      <span>商家提醒：</span>
      <div>
        此商品由品牌商从
        <span>【{{goodsData.location}}】</span>
        发货。
      </div>
    </div>
    <!-- 商家提醒end -->

    <!-- 商品图片 -->
    <div class="jp_details_img">
      <img v-for="(item, index) in goodsData.imgData" :key="index" :src="item" alt />
    </div>
    <!-- 商品图片end -->

    <!-- 购买商品 -->
    <div class="jp_details_buy">
      <van-goods-action>
        <van-goods-action-icon
          color="#6b6b6b"
          icon="wap-home-o"
          text="首页"
          @click="routerGo('/home')"
        />
        <van-goods-action-icon color="#6b6b6b" icon="cart-o" text="购物车" @click="routerGo('/car')" />
        <van-goods-action-button color="#fff" type="warning" text="立即购买" class="buy-text" />
        <van-goods-action-button
          color="#ff464e"
          type="danger"
          text="加入购物车"
          class="add-car-text"
          @click="addCar(goodsData)"
        />
      </van-goods-action>
    </div>
    <!-- 购买商品end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      goodsData: [],
      goodsDetailData: [
        {
          id: 1,
          title: "中长款短袖T恤女宽松夏装新款短袖T恤女",
          price: 21,
          price2: 88,
          express: "包邮",
          sales: 1812,
          custom: "满件减",
          customInfo: "下单立减4元",
          type: "浅绿色M",
          num: 1,
          shopImg:
            "https://goods5.juancdn.com/bao/170713/8/b/5967244da9fcf86581605f36_180x90.png",
          shopName: "形象茗模女装夏季专场",
          shopSales: "37.3人已购买",
          location: "广东汕头",
          sliderData: [
            "https://goods3.juancdn.com/goods/200529/4/6/5ed0af9b33b0890e615fdc92_800x800.jpg",

            "https://goods1.juancdn.com/goods/200529/1/7/5ed0afee33b08907df6ec2ef_800x800.jpg",

            "https://goods8.juancdn.com/goods/200529/e/5/5ed0aff133b0897ffd1899e6_800x800.jpg",

            "https://goods2.juancdn.com/goods/200529/2/1/5ed0afefb6f8ea7abe5e7bf9_800x800.jpg",

            "https://goods2.juancdn.com/goods/200529/3/e/5ed0afec33b08908400a57dc_800x800.jpg",

            "https://goods8.juancdn.com/goods/200529/e/8/5ed0aff3b6f8ea7b02539e8c_800x800.jpg"
          ],
          imgData: [
            "https://goods7.juancdn.com/goods/200331/d/a/5e82ca2033b089567966c5b8_790x838.jpg",

            "https://goods6.juancdn.com/goods/200529/a/9/5ed0affeb6f8ea7afc4c78e3_800x800.jpg",

            "https://goods8.juancdn.com/goods/200529/e/5/5ed0aff133b0897ffd1899e6_800x800.jpg",

            "https://goods1.juancdn.com/goods/200529/1/a/5ed0b00833b089017120e6e5_800x800.jpg",

            "https://goods2.juancdn.com/goods/200529/3/e/5ed0afec33b08908400a57dc_800x800.jpg",

            "https://goods8.juancdn.com/goods/200529/e/8/5ed0aff3b6f8ea7b02539e8c_800x800.jpg",

            "https://goods1.juancdn.com/goods/200529/0/2/5ed0b016b6f8ea7b34469bda_800x800.jpg",

            "https://goods7.juancdn.com/goods/200529/d/c/5ed0b01833b089597c11b38a_800x800.jpg",

            "https://goods2.juancdn.com/goods/200529/2/e/5ed0afa5b6f8ea7a6c1ceb29_800x800.jpg",

            "https://goods1.juancdn.com/goods/200529/1/7/5ed0afee33b08907df6ec2ef_800x800.jpg"
          ]
        },
        {
          id: 2,
          title: "衬衫女夏季2020新款淑女气质立领刺绣褶皱减龄粉色上衣",
          price: 68,
          price2: 398,
          express: "包邮",
          sales: 2260,
          custom: "满件减",
          customInfo: "下单立减10元",
          type: "粉色M",
          num: 1,
          shopImg:
            "https://goods6.juancdn.com/seller/180119/a/7/5a61b4b8a9fcf82dd013edf2_180x90.png",
          shopName: "思曼莉服饰女装尖货专场",
          shopSales: "25人已购买",
          location: "广东广州",
          sliderData: [
            "https://goods1.juancdn.com/goods/200616/1/0/5ee857ecb6f8ea46f056d1df_800x800.jpg",

            "https://goods6.juancdn.com/goods/200616/b/d/5ee857f933b089120338476e_800x800.jpg",

            "https://goods5.juancdn.com/goods/200616/9/4/5ee8582a33b08912473663e0_800x800.jpg",

            "https://goods1.juancdn.com/goods/200616/1/d/5ee8582fb6f8ea68622e4c51_800x800.jpg",

            "https://goods6.juancdn.com/goods/200616/a/b/5ee8583633b0895df7472d0a_800x800.jpg",

            "https://goods5.juancdn.com/goods/200616/9/1/5ee8583cb6f8ea2bfe2800d2_800x800.jpg"
          ],
          imgData: [
            "https://goods6.juancdn.com/goods/200616/a/3/5ee8584333b0891c5345d8e6_800x689.jpg",

            "https://goods3.juancdn.com/goods/200616/4/7/5ee85855b6f8ea473d35497a_800x596.jpg",

            "https://goods3.juancdn.com/goods/200616/4/b/5ee8585633b089125878815e_800x597.jpg",

            "https://goods1.juancdn.com/goods/200616/0/5/5ee8585733b089126f23bdba_800x596.jpg",

            "https://goods7.juancdn.com/goods/200616/d/9/5ee8585933b089124e48c7f1_800x596.jpg",

            "https://goods3.juancdn.com/goods/200616/4/1/5ee8585a33b0893e3f1c8009_800x596.jpg",

            "https://goods2.juancdn.com/goods/200616/3/1/5ee8585bb6f8ea47404f06da_800x597.jpg",

            "https://goods5.juancdn.com/goods/200616/9/3/5ee8585d33b0890ec3772e81_800x596.jpg",

            "https://goods8.juancdn.com/goods/200616/f/d/5ee8585f33b08912881ee3bb_800x596.jpg",

            "https://goods5.juancdn.com/goods/200616/9/9/5ee85860b6f8ea474a22e8a4_800x596.jpg",

            "https://goods1.juancdn.com/goods/200616/1/0/5ee8586133b0891285248be4_800x597.jpg",

            "https://goods4.juancdn.com/goods/200616/7/a/5ee8586333b0893f62761b45_800x596.jpg",

            "https://goods3.juancdn.com/goods/200616/4/9/5ee85864b6f8ea446844c176_800x596.jpg",

            "https://goods2.juancdn.com/goods/200616/3/9/5ee8586533b0890211404047_800x596.jpg",

            "https://goods1.juancdn.com/goods/200616/1/f/5ee8586733b089124a4d782e_800x597.jpg",

            "https://goods5.juancdn.com/goods/200616/9/9/5ee85868b6f8ea447c5063d2_800x596.jpg",

            "https://goods3.juancdn.com/goods/200616/4/9/5ee85869b6f8ea474338aaa7_800x596.jpg",

            "https://goods8.juancdn.com/goods/200616/f/d/5ee858fc33b089135c571ad1_800x596.jpg",

            "https://goods3.juancdn.com/goods/200616/5/4/5ee858fdb6f8ea447f669932_800x597.jpg",

            "https://goods7.juancdn.com/goods/200616/d/3/5ee858fe33b08913667ca481_800x596.jpg",

            "https://goods4.juancdn.com/goods/200616/6/7/5ee85900b6f8ea478d0bbbb3_800x596.jpg",

            "https://goods1.juancdn.com/goods/200616/1/0/5ee857ecb6f8ea46f056d1df_800x800.jpg"
          ]
        },
        {
          id: 3,
          title:
            "艾路丝婷印花条纹短袖连衣裙女2020夏装新款显瘦T恤裙中长款裙子5822",
          price: 99,
          price2: 189,
          express: "包邮",
          sales: 1833,
          custom: "满件减",
          customInfo: "满2件8折",
          type: "紫色条纹XXL",
          num: 1,
          shopImg:
            "https://goods5.juancdn.com/bao/170420/8/2/58f86720a43d1f0671769a5a_180x90.png",
          shopName: "艾路丝婷女装小店",
          shopSales: "共200+件商品",
          location: "广东广州",
          sliderData: [
            "https://goods6.juancdn.com/goods/200629/b/7/5ef9aa9b33b0897d8b08ab44_800x800.jpg",

            "https://goods5.juancdn.com/tao/200629/9/e/5ef9a96133b0897e7e780e73_800x800.jpg",

            "https://goods2.juancdn.com/tao/200629/2/b/5ef9a960b6f8ea7737547d12_800x800.jpg",

            "https://goods5.juancdn.com/tao/200629/9/e/5ef9a961b6f8ea77384b2c73_800x800.jpg",

            "https://goods3.juancdn.com/tao/200629/4/c/5ef9a967b6f8ea773f1d5563_800x800.jpg"
          ],
          imgData: [
            "https://goods4.juancdn.com/goods/200629/6/1/5ef9aab5b6f8ea757b5b2f73_790x1071.jpg",

            "https://goods7.juancdn.com/goods/200629/d/9/5ef9aab7b6f8ea759f043ef3_790x486.jpg",

            "https://goods7.juancdn.com/goods/200629/d/c/5ef9aab933b0897dbf22a073_790x830.jpg",

            "https://goods3.juancdn.com/goods/200629/4/6/5ef9aabbb6f8ea75a35893f4_790x1065.jpg",

            "https://goods5.juancdn.com/goods/200629/9/4/5ef9aaca33b0897e203e9a25_790x1132.jpg",

            "https://goods4.juancdn.com/goods/200629/7/1/5ef9aacc33b0897e1f3791f6_790x973.jpg",

            "https://goods2.juancdn.com/goods/200629/2/b/5ef9aace33b0897e23534f04_790x973.jpg",

            "https://goods1.juancdn.com/goods/200629/0/5/5ef9aad133b0897e21474c76_790x964.jpg",

            "https://goods3.juancdn.com/goods/200629/5/2/5ef9aae033b0897e340749a4_790x1226.jpg",

            "https://goods6.juancdn.com/goods/200629/b/7/5ef9aae3b6f8ea769a3421a3_790x961.jpg",

            "https://goods2.juancdn.com/goods/200629/2/9/5ef9aae5b6f8ea769d36c814_790x1086.jpg",

            "https://goods5.juancdn.com/goods/200629/8/3/5ef9aae833b0897e3e737cc2_790x822.jpg",

            "https://goods2.juancdn.com/goods/200629/3/6/5ef9aaeab6f8ea76d00f4a32_790x987.jpg",

            "https://goods2.juancdn.com/goods/200629/3/f/5ef9aaecb6f8ea76eb6012b2_790x981.jpg",

            "https://goods8.juancdn.com/goods/200629/e/d/5ef9aaef33b0897e6360b543_790x1234.jpg"
          ]
        },
        {
          id: 4,
          title: "套装A8DZ920077",
          price: 55.3,
          price2: 299,
          express: "包邮",
          sales: 1812,
          custom: "满件减",
          customInfo: "下单立减4元",
          type: "黄色M",
          num: 1,
          shopImg:
            "https://goods8.juancdn.com/bao/170316/e/e/58ca5adfa43d1f508304d374_180x90.png?imageMogr2/quality/88!/format/png",
          shopName: "美丽衣橱女装旗舰店",
          shopSales: "共182件商品",
          location: "四川成都",
          sliderData: [
            "https://goods1.juancdn.com/tao/200630/0/f/5efb2848b6f8ea03ac3d106e_800x800.jpg",

            "https://goods6.juancdn.com/tao/200630/a/d/5efb284933b0890d761c8035_800x800.jpg",

            "https://goods6.juancdn.com/tao/200630/a/8/5efb2840b6f8ea03a97a3fb8_800x800.jpg",

            "https://goods2.juancdn.com/tao/200630/3/d/5efb2841b6f8ea03a56ce1e9_800x800.jpg",

            "https://goods2.juancdn.com/tao/200630/2/d/5efb2841b6f8ea03ab405eca_800x800.jpg"
          ],
          imgData: [
            "https://goods4.juancdn.com/goods/200701/7/1/5efbe60c33b0890d735b45a1_750x960.jpg",

            "https://goods1.juancdn.com/goods/200701/1/0/5efbe60db6f8ea4f2d7bb03d_750x358.jpg",

            "https://goods4.juancdn.com/goods/200701/7/9/5efbe60fb6f8ea4f1c51c091_750x960.jpg",

            "https://goods1.juancdn.com/goods/200701/1/c/5efbe61033b0890d8710d99f_750x404.jpg",

            "https://goods6.juancdn.com/goods/200701/b/8/5efbe61233b0890d7d36fff0_750x960.jpg",

            "https://goods6.juancdn.com/goods/200701/b/8/5efbe18733b0890ba8488e3e_750x960.jpg",

            "https://goods1.juancdn.com/goods/200629/0/4/5ef9bbf1b6f8ea77a54ea256_750x714.jpg",

            "https://goods8.juancdn.com/goods/200701/f/9/5efbe621b6f8ea077516bd66_750x960.jpg",

            "https://goods5.juancdn.com/goods/200701/9/c/5efbe62333b0890da0660c2c_750x960.jpg",

            "https://goods3.juancdn.com/goods/200701/5/a/5efbe62433b0890d8d25c2eb_750x98.jpg",

            "https://goods4.juancdn.com/goods/200701/7/e/5efbe63e33b0890dbc406dae_750x960.jpg",

            "https://goods3.juancdn.com/goods/200701/4/3/5efbe64033b0890dbd134caf_750x960.jpg",

            "https://goods3.juancdn.com/goods/200701/4/5/5efbe64133b0890d857b0210_750x960.jpg",

            "https://goods5.juancdn.com/goods/200701/9/b/5efbe64333b0890dcb252bcf_750x960.jpg",

            "https://goods4.juancdn.com/goods/200701/7/b/5efbe644b6f8ea02e60690d0_750x960.jpg",

            "https://goods2.juancdn.com/goods/200701/2/a/5efbe64633b0890dc50c649f_750x960.jpg",

            "https://goods6.juancdn.com/goods/200701/a/4/5efbe648b6f8ea07685fb4d1_750x960.jpg",

            "https://goods3.juancdn.com/goods/200701/4/a/5efbe649b6f8ea02e534a3a0_750x960.jpg",

            "https://goods6.juancdn.com/goods/200701/b/a/5efbe64b33b0890d9d450a72_750x960.jpg",

            "https://goods4.juancdn.com/goods/200630/6/8/5efa8fb0b6f8ea7487716516_750x653.jpg"
          ]
        },
        {
          id: 5,
          title: "阿迪达斯（Adidas）杨幂同款T恤",
          price: 158,
          price2: 399,
          express: "包邮",
          sales: 1757,
          custom: "满减",
          customInfo: "满99元减30元，上不封顶",
          type: "白天使M /建议高165-170CM重110-125斤",
          num: 1,
          shopImg:
            "https://goods1.juancdn.com/bao/170727/1/8/59799e54a9fcf820071f75f6_180x90.png",
          shopName: "风驰体育专营店",
          shopSales: "共200+件商品",
          location: "上海",
          sliderData: [
            "https://goods4.juancdn.com/goods/200530/6/0/5ed1fdd6b6f8ea7be85928ac_800x800.jpg",

            "https://goods8.juancdn.com/goods/200531/f/9/5ed341eeb6f8ea3aec44b0a6_800x800.jpg",

            "https://goods8.juancdn.com/goods/200530/e/6/5ed1ff1933b0891f0a58aa84_800x800.jpg",

            "https://goods4.juancdn.com/goods/200530/7/c/5ed1ff16b6f8ea27c648b6a3_800x800.jpg",

            "https://goods4.juancdn.com/goods/200530/6/b/5ed1ff1833b0896418027e41_800x800.jpg"
          ],
          imgData: [
            "https://goods8.juancdn.com/goods/200530/f/1/5ed1ff67b6f8ea7e295d6e6a_640x504.png",

            "https://goods4.juancdn.com/goods/200530/6/0/5ed1fdd6b6f8ea7be85928ac_800x800.jpg",

            "https://goods5.juancdn.com/goods/200530/9/0/5ed1ff15b6f8ea7cd84de2fa_800x800.jpg",

            "https://goods4.juancdn.com/goods/200530/7/c/5ed1ff16b6f8ea27c648b6a3_800x800.jpg",

            "https://goods6.juancdn.com/goods/200530/a/0/5ed1ff69b6f8ea0496578bda_790x576.jpg",

            "https://goods4.juancdn.com/goods/200530/6/b/5ed1ff1833b0896418027e41_800x800.jpg",

            "https://goods1.juancdn.com/goods/200531/0/2/5ed3417433b089181002e1d9_800x800.jpg",

            "https://goods4.juancdn.com/goods/200531/7/8/5ed341e4b6f8ea4598066070_1080x979.jpg",

            "https://goods8.juancdn.com/goods/200531/f/9/5ed341eeb6f8ea3aec44b0a6_800x800.jpg",

            "https://goods6.juancdn.com/goods/200531/a/2/5ed341f0b6f8ea2cb26e3172_2160x2160.jpg",

            "https://goods4.juancdn.com/goods/200531/7/5/5ed341ecb6f8ea300f50a6da_2160x2160.jpg",

            "https://goods5.juancdn.com/goods/200531/9/e/5ed341e8b6f8ea2caf5c1416_2160x3840.jpg",

            "https://goods3.juancdn.com/goods/200531/5/1/5ed341e633b0894139116e09_800x800.jpg",

            "https://goods8.juancdn.com/goods/200531/e/b/5ed341e2b6f8ea380947fd4d_800x800.jpg"
          ]
        },
        {
          id: 6,
          title: "万斯正品中性轻量款板鞋休闲鞋帆布鞋",
          price: 329,
          price2: 559,
          express: "包邮",
          sales: 1705,
          custom: "满减",
          customInfo: "满99元减30元，上不封顶",
          type: "全白44",
          num: 1,
          shopImg:
            "https://goods1.juancdn.com/bao/170727/1/8/59799e54a9fcf820071f75f6_180x90.png",
          shopName: "风驰体育专营店",
          shopSales: "共200+件商品",
          location: "上海",
          sliderData: [
            "https://goods6.juancdn.com/goods/170913/b/b/59b8dd00a9fcf825c828d968_800x800.jpg",

            "https://goods8.juancdn.com/goods/170913/e/7/59b8dd3f8150a1571437a3a2_800x800.jpg",

            "https://goods4.juancdn.com/goods/170913/6/8/59b8dd458150a1575108e570_800x800.jpg",

            "https://goods3.juancdn.com/goods/170913/5/4/59b8dd4aa9fcf825b33d9898_800x800.jpg",

            "https://goods7.juancdn.com/goods/170913/d/1/59b8dd4fa9fcf826412f24a7_800x800.jpg"
          ],
          imgData: [
            "https://goods6.juancdn.com/goods/170913/b/b/59b8dd00a9fcf825c828d968_800x800.jpg",

            "https://goods4.juancdn.com/goods/170913/6/8/59b8dd458150a1575108e570_800x800.jpg",

            "https://goods3.juancdn.com/goods/170913/5/4/59b8dd4aa9fcf825b33d9898_800x800.jpg",

            "https://goods7.juancdn.com/goods/170913/d/1/59b8dd4fa9fcf826412f24a7_800x800.jpg",

            "https://goods7.juancdn.com/goods/170913/c/a/59b8dd61a9fcf814094c7ef6_800x800.jpg",

            "https://goods8.juancdn.com/goods/170913/e/7/59b8dd3f8150a1571437a3a2_800x800.jpg",

            "https://goods8.juancdn.com/goods/170913/e/7/59b8dd3f8150a1571437a3a2_800x800.jpg"
          ]
        },
        {
          id: 7,
          title: "思尚四色轻盈定妆散粉定妆控油粉质细腻透气亲肤",
          price: 32,
          price2: 89,
          express: "包邮",
          sales: 1867,
          custom: "满件减",
          customInfo: "此商品8折特惠",
          type: "2＃薄纱玫瑰12g",
          num: 1,
          shopImg:
            "https://goods1.juancdn.com/seller/191111/0/0/5dc92209b6f8ea183a320ce7_180x90.png",
          shopName: "思尚美妆小店",
          shopSales: "共83件商品",
          location: "广东广州",
          sliderData: [
            "https://goods6.juancdn.com/goods/191126/a/6/5ddd00dbb6f8ea113272334b_800x800.jpg",

            "https://goods8.juancdn.com/goods/191122/e/2/5dd7f73633b08939a452035b_800x800.jpg",

            "https://goods1.juancdn.com/goods/191122/0/0/5dd7f7b733b0893ad04ca554_800x800.jpg",

            "https://goods4.juancdn.com/goods/191122/7/4/5dd7f735b6f8ea085a439a5c_800x800.jpg",

            "https://goods5.juancdn.com/goods/191122/9/4/5dd7f82533b08939947fde79_800x800.jpg"
          ],
          imgData: [
            "https://goods4.juancdn.com/goods/191122/6/6/5dd7f83333b08939b967e346_790x1111.jpg",

            "https://goods5.juancdn.com/goods/191122/9/4/5dd7f83533b0897e247030db_790x324.jpg",

            "https://goods1.juancdn.com/goods/191122/1/d/5dd7f83733b08939b10dff4d_790x1334.jpg",

            "https://goods4.juancdn.com/goods/191122/6/5/5dd7f839b6f8ea08a4437f39_790x759.jpg",

            "https://goods7.juancdn.com/goods/191122/c/1/5dd7f83ab6f8ea08a6133938_790x955.jpg",

            "https://goods8.juancdn.com/goods/191122/f/d/5dd7f83d33b08939bf06b3aa_790x959.jpg",

            "https://goods7.juancdn.com/goods/191122/c/2/5dd7f83f33b08939c35c269a_790x1141.jpg",

            "https://goods2.juancdn.com/goods/191122/2/2/5dd7f84033b08939dc137d97_790x774.jpg",

            "https://goods6.juancdn.com/goods/191122/a/2/5dd7f84233b08916d62ad188_790x698.jpg",

            "https://goods5.juancdn.com/goods/191122/8/e/5dd7f84ab6f8ea08ab0311f7_790x694.jpg",

            "https://goods2.juancdn.com/goods/191122/3/0/5dd7f84c33b08939d74564a5_790x504.jpg",

            "https://goods1.juancdn.com/goods/191122/0/8/5dd7f84db6f8ea08a951f3c8_790x953.jpg",

            "https://goods5.juancdn.com/goods/191122/8/e/5dd7f84db6f8ea08ac47b689_790x914.jpg",

            "https://goods1.juancdn.com/goods/191122/0/f/5dd7f84f33b08939d338895e_790x1243.jpg"
          ]
        },
        {
          id: 8,
          title: "零食点心特产食品小吃美食糕点红豆沙蛋黄酥（6枚）",
          price: 18.8,
          price2: 69.9,
          express: "包邮",
          sales: 1812,
          custom: "满减",
          customInfo: "满39元减3元，上不封顶",
          type: "红豆沙蛋黄酥330g / 6枚",
          num: 1,
          shopImg:
            "https://goods8.juancdn.com/bao/170324/f/1/58d4e1f7ad0a4991748b459f_180x90.png",
          shopName: "鑫辰食品休闲零食热卖专场",
          shopSales: "31.1万人已购",
          location: "广东韶关",
          sliderData: [
            "https://goods4.juancdn.com/goods/170826/7/7/59a0fadf8150a176bb70c0e8_800x800.jpg",

            "https://goods1.juancdn.com/goods/170826/1/6/59a0fae08150a163c777ca8d_800x800.jpg",

            "https://goods5.juancdn.com/goods/170826/8/5/59a0fae38150a176b1251657_800x800.jpg",

            "https://goods6.juancdn.com/goods/170826/a/e/59a0fae4a9fcf8164003ce0d_800x800.jpg",

            "https://goods6.juancdn.com/goods/170826/a/9/59a0fae2a9fcf815bb6c0e20_800x800.jpg"
          ],
          imgData: [
            "https://goods1.juancdn.com/goods/170826/1/a/59a0fae68150a176c304ee2d_790x575.jpg",

            "https://goods5.juancdn.com/goods/170826/8/d/59a0fae78150a164842ea91e_790x695.jpg",

            "https://goods4.juancdn.com/goods/170826/6/1/59a0fae8a9fcf8149e28ebe3_790x514.jpg",

            "https://goods4.juancdn.com/goods/170826/6/d/59a0fae9a9fcf8088c62e4ac_790x557.jpg",

            "https://goods7.juancdn.com/goods/170826/c/6/59a0faeba9fcf815fc1e393c_790x559.jpg",

            "https://goods5.juancdn.com/goods/170826/9/c/59a0faeca9fcf814c5364cf3_790x575.jpg"
          ]
        }
      ]
    };
  },

  methods: {
    // 拖动轮播图改变页数
    onChange(index) {
      this.current = index;
    },

    // 返回上一层路由
    back() {
      this.$router.go(-1);
    },

    // 首页、购物车路由跳转
    routerGo(o) {
      this.$router.push(o);
    },

    // 加入购物车
    addCar(data) {
      let that = this;

      let user = localStorage.getItem("user");

      if (user) {
        user = JSON.parse(user);

        if (!user.isLogin) {
          // 提示用户
          this.$toast({
            duration: 1000,
            message: "用户未登录，请先登录"
          });
          // 延时跳转
          setTimeout(function() {
            that.$router.push("/login");
          }, 2000);
        }

        // 获取用户加入购物车的商品
        let addCarData = localStorage.getItem("addCarData");
        addCarData = addCarData ? JSON.parse(addCarData) : {};

        // 记录当前用户加入购物车的商品
        let currentAddCarData = addCarData[user.username];

        if (!currentAddCarData) {
          addCarData[user.username] = [];
        }
        // console.log("currentAddCarData =>", currentAddCarData);

        // 将商品推入addCarData[user.username]
        addCarData[user.username].unshift(data);
        
        // 保存商品数据
        localStorage.setItem("addCarData", JSON.stringify(addCarData));

        // this.$store.commit("addCar", {
        //   id: this.goodsData.id,
        //   num: this.goodsData.num,
        //   title: this.goodsData.title,
        //   price: this.goodsData.price,
        //   price2: this.goodsData.price2,
        //   type: this.goodsData.type,
        //   img: this.goodsData.sliderData[0]
        // });

        this.$store.commit("addCar", addCarData[user.username][0]);

        this.$toast.success("添加成功");
      } else {
        this.$toast({
          duration: 1000,
          message: "用户未登录，请先登录"
        });

        setTimeout(function() {
          that.$router.push("/login");
        }, 2000);
      }
    }
  },

  created() {
    this.goodsData = this.goodsDetailData[this.$route.query.id - 1];
  }
};
</script>

<style lang="less" scoped>
.details {
  background: #f4f4f4;
}

.jp_details_buy {
  /deep/.van-goods-action {
    height: 48px;
    .van-goods-action-icon {
      min-width: 75px;
      color: #6b6b6b;
      .van-goods-action-icon__icon {
        font-size: 25px;
      }
    }
    .van-goods-action-button {
      flex: none;
      height: 48px;
      line-height: 48px;
    }
    .van-goods-action-button--first {
      width: 90px;
    }
    .van-goods-action-button--last {
      width: 140px;
    }
    .van-goods-action-button--first,
    .van-goods-action-button--last {
      margin: 0;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .van-button__content {
      display: block;
    }
    .buy-text {
      color: #333 !important;
    }
    .add-car-text {
      color: #fff !important;
    }
  }
}

.jp_details_slider {
  position: relative;
  .custom-indicator {
    width: 35px;
    height: 20px;
    line-height: 20px;
    background: #000000;
    opacity: 0.4;
    border-radius: 5px;
    text-align: center;
    font-size: 10px;
    color: #ffffff;
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
  .jp_details_slider_licon,
  .jp_details_slider_ricon {
    opacity: 0.4;
    position: absolute;
    top: 10px;
  }
  .jp_details_slider_licon {
    font-size: 30px;
    left: 7px;
  }
  .jp_details_slider_ricon {
    font-size: 35px;
    right: 12px;
  }
}

.jp_details_list1 {
  background: #ffffff;
  padding: 10px;
  .jp_details_price {
    margin-bottom: 10px;
    > span {
      color: #ff464e;
    }
    span:nth-child(1) {
      font-size: 16px;
    }
    span:nth-child(2) {
      font-size: 22px;
      margin-right: 5px;
    }
    span:nth-child(3) {
      color: #bbbbbb;
      text-decoration: line-through;
      font-size: 12px;
      margin-right: 10px;
    }
    span:nth-child(4) {
      background: #ff464e;
      border-left: 2px solid #ff464e;
      border-right: 2px solid #ff464e;

      color: #ffffff;
      font-size: 8px;
    }
    span:nth-child(5) {
      color: #999999;
      font-size: 12px;
      margin-left: calc(100% - 180px);
    }
  }
  .jp_details_info {
    .van-row {
      .van-col {
        color: #333333;
        > span {
          font-size: 16px;
        }
        .van-icon {
          font-size: 22px;
          margin-left: 6px;
        }
      }
    }
  }
}

.jp_details_list2 {
  margin-top: 10px;
  .jp_details_coupon {
    span:nth-child(1) {
      border-left: 2px solid #ff464e;
      border-right: 2px solid #ff464e;
      border-bottom: 1px solid #ff464e;
      background: #ff464e;
      color: #ffffff;
      font-size: 8px;
      margin-right: 10px;
    }
    span:nth-child(2) {
      font-size: 12px;
    }
    .van-icon {
      font-size: 25px;
      color: #bbbbbb;
    }
  }

  .jp_details_after {
    span:nth-child(odd) {
      color: #ff464e;
      margin-right: 5px;
    }
    span:nth-child(even) {
      font-size: 12px;
      color: #666666;
      margin-right: 10px;
    }
    .van-icon {
      font-size: 25px;
      color: #bbbbbb;
    }
  }
}

.jp_details_choice {
  margin-top: 10px;
}

.jp_details_shop {
  background: #ffffff;
  padding: 15px;
  margin-top: 10px;
  .van-row {
    .van-col:nth-child(1) {
      width: 45px;
      height: 45px;
      border: 1px solid #e7e7e7;
      position: relative;
      > img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
      }
    }
    .van-col:nth-child(2) {
      padding-left: 10px;
      p:nth-child(1) {
        font-size: 15px;
        color: #333333;
      }
      p:nth-child(2) {
        font-size: 12px;
        color: #999999;
        margin-top: 5px;
      }
    }
    .van-col:nth-child(3) {
      border: 1px solid #4a4a4a;
      padding: 5px 0px 5px 6px;
      margin-top: 8px;
      > span {
        font-size: 12px;
        color: #333333;
      }
    }
  }
}

.jp_details_remind {
  font-size: 14px;
  text-align: center;
  padding: 10px;
  background: #ffffff;
  margin-top: 10px;
  > span {
    color: #ff7700;
  }
  > div {
    display: inline-block;
    color: #9b9b9b;
    > span {
      color: #4a4a4a;
    }
  }
}

.jp_details_img {
  margin-top: 10px;
  > img {
    margin-bottom: -4px;
  }
}
</style>
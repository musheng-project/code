import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "lib-flexible/flexible";

import "animate.css";

import "swiper/css/swiper.css";

import { 
  Button,
  Tabbar, 
  TabbarItem,
  Search,
  Swipe, 
  SwipeItem,
  Row, 
  Col,
  Tab, 
  Tabs,
  TreeSelect,
  Icon,
  Cell, 
  CellGroup,
  NavBar,
  Grid,
  GridItem,
  Field,
  Checkbox, 
  CheckboxGroup, 
  Card, 
  SubmitBar, 
  Toast,
  GoodsAction,
  GoodsActionButton,
  GoodsActionIcon,
  List
 } from 'vant';

Vue.use(Button)
   .use(Tabbar)
   .use(TabbarItem)
   .use(TabbarItem)
   .use(Search)
   .use(Swipe)
   .use(SwipeItem)
   .use(Row)
   .use(Col)
   .use(Tab)
   .use(Tabs)
   .use(TreeSelect)
   .use(Icon)
   .use(Cell)
   .use(CellGroup)
   .use(NavBar)
   .use(Grid)
   .use(GridItem)
   .use(Field)
   .use(Checkbox)
   .use(CheckboxGroup)
   .use(Card)
   .use(SubmitBar)
   .use(Toast)
   .use(GoodsAction)
   .use(GoodsActionButton)
   .use(GoodsActionIcon)
   .use(List)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

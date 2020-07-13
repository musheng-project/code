import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {
  Field,
  CellGroup,
  Button,
  Toast,
  Tabbar,
  TabbarItem,
  Tab,
  Tabs,
  Icon,
  NavBar,
  Swipe, 
  SwipeItem,
  Tag,
  Row, 
  Col,
  Grid, 
  GridItem,
  Cell
} from 'vant'

import axios from 'axios'

import VueAxios from 'vue-axios'

import 'lib-flexible/flexible'

import 'animate.css'

import '@/assets/font/iconfont.css'

Vue.use(VueAxios, axios)

Vue
  .use(Field)
  .use(CellGroup)
  .use(Button)
  .use(Toast)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Tab)
  .use(Tabs)
  .use(Icon)
  .use(NavBar)
  .use(Swipe)
  .use(SwipeItem)
  .use(Tag)
  .use(Row)
  .use(Col)
  .use(Grid)
  .use(GridItem)
  .use(Cell)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

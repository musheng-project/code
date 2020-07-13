import Vue from 'vue'
import Vuex from 'vuex'

import {registerModule} from "./registerStore/registerModule"
import {loginModule} from "./loginStore/loginModule"
import {indexModule} from "./indexStore/indexModule"
import {homeModule} from "./homeStore/homeModule"
import {movieDetailModule} from "./movieDetailStore/movieDetailModule"
import {movieModule} from "./movieStore/movieModule"
import {likeMovieModule} from "./likeMovieStore/likeMovieModule"
import {mineModule} from "./mineStore/mineModule"
import {videoDetailModule} from "./videoDetailStore/videoDetailModule"
import {buyMovieTickModule} from "./buyMovieTickStore/buyMovieTickModule"

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    registerModule,
    loginModule,
    indexModule,
    homeModule,
    movieDetailModule,
    movieModule,
    likeMovieModule,
    mineModule,
    videoDetailModule,
    buyMovieTickModule
  }
})

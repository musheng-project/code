export const state = {
    baseUrl: 'api/Showtime/LocationMovies.api',

    // 接口数据
    newMovieData: [],

    // 接口参数 城市id
    params: {
      locationId: 365
    },

    // 展示热片榜数据
    showNewMovieData:{
      start: 0,
      end: 8,
      data: []
    },

    // 是否存在换一换数据
    isHasData: true,

    //是否初始化
    isInit: true
  };
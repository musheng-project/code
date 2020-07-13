export const mutations = {
    // 详情页数据
    getMovieDetailData(state, data) {
      state.movieDetailData = data;
      
      // console.log('state.movieDetailData ==> ', state.movieDetailData);
    },

    // 演员数据
    getMovieActorDetailData(state, data){
      state.movieActorDetailData = data;
    },

    // 修改行数
    changeW(state, w) {
      state.movieActorDetailData.w = w;
    },

    changeDisplay(state) {
      state.display = state.display == 'block' ? '-webkit-box' : 'block';
      
      state.name = state.name == 'arrow-down' ? 'arrow-up' : 'arrow-down';
    },

    // 重置state
    resetState(state) {
      state.movieDetailData = {
        release: {},
        actorList: [],
        width: 0
      }

      state.movieActorDetailData = {
        persons: []
      }
      
      state.likeActive = false;
    },
  
    changelikeActive(state, isActive) {
      state.likeActive = isActive;
    }
  };
export const mutations = {
    
    changeMovieData(state, result) {
      //将每次请求的数据推进state.movieData.data.ms数组中
      state.movieData.data.ms.push(...result.data.ms);
    },

    changeMovieData2(state, result){
      if(state.isInit){
        state.isInit = false
      }
      state.movieData2.data.moviecomings.push(...result.data.moviecomings);
    },
  
    // 修改定位城市
    changeLocationCity(state, city) {
      state.params.city = city;
  
      // console.log('state.params.city ==> ', state.params.city);
    }
  
  };
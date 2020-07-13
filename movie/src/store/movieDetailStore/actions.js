export const actions = {
  // 详情页数据
  getMovieDetailData(context, data) {
    context.commit('getMovieDetailData', data);
  },

  // 演员数据
  getMovieActorDetailData(context, data) {
    context.commit('getMovieActorDetailData', data);
  }
};
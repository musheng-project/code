export const actions = {
    // 获取热片榜数据
    getNewMovieData(context, result) {
        // 提交mutations
        context.commit('getNewMovieData', result);
    }
}
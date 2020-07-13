export const actions = {
    // 选择座位
    addUserChairData(context, data) {
        context.commit('addUserChairData', data);
    },

    // 删除选座
    deleteUserChairData(context, data){
        context.commit("deleteUserChairData",data)
    }
}
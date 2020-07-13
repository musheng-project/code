export const car = {
    state: {
        goodsData: [],
        checkedGoods: []
    },

    mutations: {
        addCar(state, data) {
            // 如果添加商品id已经存在商品列表，不添加商品，添加数量
            // findindex() 返回符合传入测试（函数）条件的数组元素索引
            let index = state.goodsData.findIndex(value => value.id == data.id);
            console.log("index ==>", index);


            if (index == -1) {
                // 添加商品数据
                state.goodsData.push(data);

                // 返回数据id
                // map() 通过制定函数处理数组的每个元素，并返回处理后的数组
                state.checkedGoods = state.goodsData.map(value => value.id);
                // console.log("state.checkeGoods ==>", state.checkedGoods);
            } else {
                // 同个商品数量加一
                state.goodsData[index].num += 1;
            }
        }
    }
}
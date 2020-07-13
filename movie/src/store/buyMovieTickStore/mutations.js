export const mutations = {

  getData(state, data) {
    state.data = data;
    
  },
  
  resetData(state) {
    state.data = {
      image: ""
    },
    
    state.chairDatas = [
      [
        {row: 1, col: 1, type: ''}, 
        {row: 1, col: 2, type: ''}, 
        {row: 1, col: 3, type: ''}
      ],
      [
        {row: 2, col: 1, type: ''}, 
        {row: 2, col: 2, type: ''}, 
        {row: 2, col: 3, type: ''},
        {row: 2, col: 4, type: ''},
        {row: 2, col: 5, type: ''},
        {row: 2, col: 6, type: ''},
        {row: 2, col: 7, type: ''},
        {row: 2, col: 8, type: ''},
        {row: 2, col: 9, type: ''},
      ],
      [
        {row: 3, col: 1, type: ''}, 
        {row: 3, col: 2, type: ''}, 
        {row: 3, col: 3, type: ''},
        {row: 3, col: 4, type: ''},
        {row: 3, col: 5, type: ''},
        {row: 3, col: 6, type: ''},
        {row: 3, col: 7, type: ''},
        {row: 3, col: 8, type: ''},
        {row: 3, col: 9, type: ''},
      ],
      [
        {row: 4, col: 1, type: ''}, 
        {row: 4, col: 2, type: ''}, 
        {row: 4, col: 3, type: ''},
        {row: 4, col: 4, type: ''},
        {row: 4, col: 5, type: ''},
        {row: 4, col: 6, type: ''},
        {row: 4, col: 7, type: ''},
        {row: 4, col: 8, type: ''},
        {row: 4, col: 9, type: ''},
      ],
      [
        {row: 5, col: 1, type: ''}, 
        {row: 5, col: 2, type: ''}, 
        {row: 5, col: 3, type: ''},
        {row: 5, col: 4, type: ''},
        {row: 5, col: 5, type: ''},
        {row: 5, col: 6, type: ''},
        {row: 5, col: 7, type: ''},
        {row: 5, col: 8, type: ''},
        {row: 5, col: 9, type: ''},
      ],
      [
        {row: 6, col: 1, type: ''}, 
        {row: 6, col: 2, type: ''}, 
        {row: 6, col: 3, type: ''},
        {row: 6, col: 4, type: ''},
        {row: 6, col: 5, type: ''},
        {row: 6, col: 6, type: ''},
        {row: 6, col: 7, type: ''},
        {row: 6, col: 8, type: ''},
        {row: 6, col: 9, type: ''},
      ],
      [
        {row: 7, col: 1, type: ''}, 
        {row: 7, col: 2, type: ''}, 
        {row: 7, col: 3, type: ''},
        {row: 7, col: 4, type: ''},
        {row: 7, col: 5, type: ''}
      ]
    ],
    
    state.userChairData = []
  },

  //改变座位状态
  changeChairData(state, data) {
    state.chairDatas[data.row - 1][data.col - 1].type = data.type;
  },

  //添加用户选择座位数据
  addUserChairData(state, data) {
    state.userChairData.push(data);
  },

  //删除用户选择的座位
  deleteUserChairData(state, data) {
    
    for (let i = 0; i < state.userChairData.length; i++) {
      if (state.userChairData[i].row == data.row && state.userChairData[i].col == data.col) {
        state.userChairData.splice(i, 1);
        break;
      }
    }
  },

  //修改显示票据ul的宽度
  modifyUlWidth(state, width) {
    state.width = width;
  }

};
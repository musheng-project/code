export const mutations = {
    // 点击登录
    login(state, pass) {
      state.isLoading = pass;
    },
    
    // 验证用户名、验证密码
    validUp(state, o) {
      state[o.key].errorMessage = o.isValid ? '' : o.errorMessage;
    },
  
    // 查看密码
    checkPassword(state, key) {

      let isOpen = state[key].type === 'password';
  
      state[key].type = isOpen ? 'text' : 'password';
  
      state[key].icon = isOpen ? 'eye-o' : 'closed-eye';
    },
    
    // 输入内容不能为空
    passForm(state) {
      state.isValid = (state.user.errorMessage == '' && state.user.value != '') && (state.pwd1.errorMessage == '' && state.pwd1.value != '');
    }
  
  };
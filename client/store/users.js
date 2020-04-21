import { registerUser, loginUser } from '@/api/user';

export const state = () => ({
  token: '',
});

// function 통해서 세션에 저장, 로그인 로그아웃 처리해줘야 한다.
export const getters = {
  isLogin(state) {
    return state.token !== '';
  },
};

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  clearToken(state) {
    state.token = '';
  },
};

export const actions = {
  // 회원가입
  async SIGNUP({ commit }, userData) {
    const { data } = await registerUser(userData);
    console.log(data.user.nickname);
    alert(`${data.user.nickname} 님이 가입되었습니다.`);
  },
  // 로그인
  async LOGIN({ commit }, userData) {
    const { data } = await loginUser(userData);
    alert(`${data.nickname} 님, 환영합니다 :)`);
    commit('setToken', data.token);
  },
};

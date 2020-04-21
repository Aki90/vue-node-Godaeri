import { registerUser, loginUser } from '@/api/user';
export const state = () => ({
  token: undefined,
});

export const getters = {
  // 로그인 확인
  isLogin(state) {
    return state.token !== undefined;
  },
};

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  clearToken(state) {
    state.token = undefined;
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
    commit('setToken', data.token);
    // COOKIE
    this.$cookies.set('godaeri_auth', data.token, {
      maxAge: 60 * 60 * 24 * 7,
    });
    alert(`${data.nickname} 님, 환영합니다 :)`);
  },
  /* 로그아웃은 Header Component */
};

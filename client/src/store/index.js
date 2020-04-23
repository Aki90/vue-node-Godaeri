import Vue from 'vue';
import Vuex from 'vuex';
import { registerUser, loginUser } from '@/api/user';
import { getAuthFromCookie, saveAuthToCookie } from '@/utils/cookies';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: getAuthFromCookie() || '',
  },
  getters: {
    isLogin(state) {
      return state.token !== '';
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = '';
    },
  },
  actions: {
    /* AUTH */

    // 회원가입
    async SIGNUP({ commit }, userData) {
      const { data } = await registerUser(userData);
      alert(`${data.user.nickname} 님이 가입되었습니다.`);
    },
    // 로그인
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      commit('setToken', data.token);
      // COOKIE
      saveAuthToCookie(data.token);
      alert(`${data.nickname} 님, 환영합니다 :)`);
    },
    // 로그아웃은 Header Component
  },
});

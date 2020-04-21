export const state = () => ({});

export const getters = {};

export const mutations = {};

export const actions = {
  async nuxtServerInit({ commit }) {
    // 쿠키 값 state 세팅
    const cookieToken = await this.$cookies.get('godaeri_auth');
    commit('users/setToken', cookieToken);
  },
};

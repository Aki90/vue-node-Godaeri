// const { data } = await createPost(postData);
import { createPost } from '@/api/posts';

export const state = () => ({});

export const getters = {};

export const mutations = {};

export const actions = {
  // POST 생성
  async CREATE() {
    // const cookie = await this.$cookies.get('godaeri_auth');
    // await createPost(postData, {
    //   headers: { authorization: cookie },
    // });
    await createPost(postData);
  },
};

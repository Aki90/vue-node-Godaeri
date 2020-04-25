import axios from 'axios';
import { setInterceptors } from '@/utils/common/interceptors.js';

// Axios 초기화
function createInstance(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });

  return setInterceptors(instance);
}

export const instanceUser = createInstance('/user');
export const instancePosts = createInstance('/posts');

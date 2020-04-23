import axios from 'axios';
import { setInterceptors } from '@/utils/common/interceptors.js';

// Axios 초기화
function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });

  return setInterceptors(instance);
}

export const instance = createInstance();

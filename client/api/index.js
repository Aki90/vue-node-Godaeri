import axios from 'axios';
import { setInterceptors } from '@/utils/common/interceptors.js';

// Axios 초기화
function createInstance() {
  const instance = axios.create(
    {
      baseURL: process.env.baseUrl,
    },
    { withCredentials: true },
  );

  return setInterceptors(instance);
}

export const instance = createInstance();

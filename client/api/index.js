import axios from 'axios';
import { setInterceptors } from '@/utils/common/interceptors.js';

// Axios 초기화
function createInstance() {
  const instance = axios.create(
    {
      baseURL: process.env.baseUrl,
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqanNoaDkwOTVAbmF2ZXIuY29tIiwibmlja25hbWUiOiJha2k5MCIsImlhdCI6MTU4NzQ0NDg1MSwiZXhwIjoxNTk2MDg0ODUxfQ.vBopbj8_vW9bSrYY4b6vZ34LyaJM0lkPvkaXR-JEe5A',
      },
    },
    { withCredentials: true },
  );

  // return setInterceptors(instance);
  return instance;
}

export const instance = createInstance();

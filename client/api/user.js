import { instance } from './index';

// 회원정보
export function getUser() {
  return instance.get('/user');
}

// 회원가입 API
export function registerUser(userData) {
  return instance.post('/user', userData);
}

// 로그인 API
export function loginUser(userData) {
  return instance.post('/user/login', userData);
}

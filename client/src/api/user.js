import { instanceUser } from './index';

// 회원정보
export function getUser() {
  return instanceUser.get('/');
}

// 회원가입 API
export function registerUser(userData) {
  return instanceUser.post('/', userData);
}

// 로그인 API
export function loginUser(userData) {
  return instanceUser.post('/login', userData);
}

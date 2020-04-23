import { instance } from './index';

// POST 조회
export function fetchPosts() {
  return instance.get('/posts');
}

// POST 생성
export function createPost(postData) {
  return instance.post('/posts', postData);
}

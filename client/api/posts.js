import { instance } from './index';

// POST 조회
export function fetchPosts() {
  return instance.get('/posts');
}

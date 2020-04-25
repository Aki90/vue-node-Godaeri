import { instancePosts } from './index';

// POST 조회
export function fetchPosts() {
  return instancePosts.get('/');
}

// 특정 POST 조회
export function fetchPost(postId) {
  return instancePosts.get(`/${postId}`);
}

// POST 생성
export function createPost(postData) {
  return instancePosts.post('/', postData);
}

// POST 삭제

export function deletePost(postId) {
  return instancePosts.delete(`/${postId}`);
}

// POST 수정
export function editPost(postId, postData) {
  return instancePosts.put(`/${postId}`, postData);
}

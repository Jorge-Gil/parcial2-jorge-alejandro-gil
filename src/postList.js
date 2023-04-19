import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './fetchPosts';

function PostList() {
  const dispatch = useDispatch();
  const  posts  = useSelector(state => state.posts || []);




  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h2>Lista de posts</h2>
     
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}{post.userId}{post.body}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;

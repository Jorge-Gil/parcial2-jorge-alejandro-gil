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
    <div className="bg-gray-200 p-4">
    <h2 className="font-semibold">Lista de posts</h2>
      
    <ul>
      {posts.map(post => (
        <li className="text-center font-bold text-red-600" key={post.id}>
          {post.title} {post.userId} {post.body}
        </li>
      ))}
    </ul>
  </div>
  
  );
}

export default PostList;

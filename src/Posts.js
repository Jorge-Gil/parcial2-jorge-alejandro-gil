import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./postsSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold">Posts</h1>
      {loading && <p>Cargando posts...</p>}
      {posts.map((post) => (
        <div key={post.id} className="bg-slate-300 shadow overflow-hidden sm:rounded-md mt-4">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium">{post.title}</h2>
            <p className="text-gray-600 mt-1">{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;

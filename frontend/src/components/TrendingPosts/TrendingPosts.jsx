import React, { useState, useEffect } from 'react';
import axios from '../../Actions/axios.config';
import TrendingPostCard from '../PostCard/TrendingPostCard';

function TrendingPosts() {
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    axios.get(`/posts/getPosts`)
      .then((response) => {
        const posts = response.data.posts;
        const trending = posts.slice(0, 5);
        setTrendingPosts(trending);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="bg-blue-100 py-8 px-4 sm:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">Trending Posts</h2>
        <div className="flex flex-wrap justify-center gap-6 sm:justify-center sm:gap-8 overflow-x-auto">
          {trendingPosts.map((post) => (
            <div key={post.id} className="min-w-[300px]">
              <TrendingPostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendingPosts;

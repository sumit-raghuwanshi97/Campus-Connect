import React from 'react';
import { Link } from 'react-router-dom';

function TrendingPostCard({ post }) {
  return (
    <div className="bg-blue-50 rounded-md shadow-md hover:shadow-lg hover:shadow-blue-200 p-3 mb-4">
      <Link to={`/post/${post._id}`} className="text-lg font-semibold">
        <h2>{post.caption}</h2>
      </Link>
      <div className="text-gray-600 mt-2 flex items-center space-x-2">
        <span className="text-xs uppercase tracking-wide bg-gray-200 px-2 py-1 rounded-md">{post.company}</span>
        {post.type === 'Full Time' && (
          <span className="text-xs bg-yellow-500 text-white px-2 py-1 rounded-md">Full Time</span>
        )}
        {post.status === 'Selected' && (
          <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-md">Selected</span>
        )}
      </div>
    </div>
  );
}

export default TrendingPostCard;

import React from 'react';
import Hero from '../components/Home/Hero'; // Adjust the path as needed
import Footer from '../components/Layouts/Footer';
import HorizontalScroll from '../components/HorizontalScroll/HorizontalScroll';
import TrendingPosts from '../components/TrendingPosts/TrendingPosts';

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
    <div className="flex-grow bg-[#219EBC] p-4">
      <Hero />
      {/* Other content for the HomePage */}
      <HorizontalScroll/>
      <TrendingPosts/>
    </div>
    <Footer className="bg-gray-300 p-4 mt-auto" />
  </div>
  );
}

export default HomePage;

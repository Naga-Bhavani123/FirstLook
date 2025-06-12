import React from 'react';
import UpcomingMovies from '../UpcomingMovies/UpcomingMovies';
import TrendingSection from '../TrendingSection/TrendingSection';
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="main-content">
      <UpcomingMovies />
      <TrendingSection />
    </div>
  );
};

export default HomePage;

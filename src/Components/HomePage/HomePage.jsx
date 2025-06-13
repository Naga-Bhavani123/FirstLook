import React from 'react';
import UpcomingMovies from '../UpcomingMovies/UpcomingMovies';
import TrendingSection from '../TrendingSection/TrendingSection';
import './HomePage.css'
import HeroSection from '../HeroSection/HeroSection';

const HomePage = () => {
  return (
    <div className="main-content">
      <HeroSection/>
      <UpcomingMovies />
      <TrendingSection />
    </div>
  );
};

export default HomePage;

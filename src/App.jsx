import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import TrendingSection from "./Components/TrendingSection/TrendingSection";
import UpcomingMovies from "./Components/UpcomingMovies/UpcomingMovies";
import HomePage from "./Components/HomePage/HomePage";
import ReactContext from './ReactContext/ReactContext';
import { useState } from 'react';
import WishList from './Components/WishList/WishList';
function App() {
  const [wishlistArr ,setwishlistArr] = useState([])
  const addWish = (movie) => {
    if (!wishlistArr.find(m => m.id === movie.id)) {
      setwishlistArr(prev => [...prev, movie]);
    }
  };
  console.log(wishlistArr)
  return (
    <BrowserRouter>
    <ReactContext value={{wishlist: wishlistArr,WishlistAdd:addWish}}>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/upcoming' element={<UpcomingMovies />} />
        <Route path='/trending' element={<TrendingSection />} />
        <Route path='/wishlist' element={<WishList/>}/>
      </Routes>
    </ReactContext>
    </BrowserRouter>
  );
}

export default App;

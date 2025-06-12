import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import TrendingSection from "./Components/TrendingSection/TrendingSection";
import UpcomingMovies from "./Components/UpcomingMovies/UpcomingMovies";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/upcoming' element={<UpcomingMovies />} />
        <Route path='/trending' element={<TrendingSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

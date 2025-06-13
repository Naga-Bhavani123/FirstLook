import React from 'react';
import './Navbar.css'; 
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-title">
        <h1>TraiFlix</h1>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({isActive}) => isActive ? 'active-link' : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/tv-shows" className={({isActive}) => isActive ? 'active-link' : ''}>
            TV Shows
          </NavLink>
        </li>
        <li>
          <NavLink to="/wishlist" className={({isActive}) => isActive ? 'active-link' : ''}>
            WishList
          </NavLink>
        </li>
        <li>
          <NavLink to="/watch-later" className={({isActive}) => isActive ? 'active-link' : ''}>
            Watch Later
          </NavLink>
        </li>
      </ul>
      <div className="nav-btn">
        <div className="signin-div">
          <button className="signin-btn">Sign In</button>
        </div>
        <div className="signup-div">
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

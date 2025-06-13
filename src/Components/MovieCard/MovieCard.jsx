import React from 'react'
import './MovieCard.css'
import ReactContext from '../../ReactContext/ReactContext'
import { use } from 'react'
import { useState } from 'react'

const MovieCard = ({ movie }) => {
  const { WishlistAdd, WishListRemove, wishlist } = use(ReactContext)
  const isAdded = wishlist.find(item => item.id === movie.id);

  const toggleWishlist = () => {
    if (isAdded) {
      WishListRemove(movie);
    } else {
      WishlistAdd({ ...movie });
    }

  };
  return (
    <div className="imageDiv">
      <img
        className="imagePoster"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="imageOverlay">
        <div className="overlay">
          <h1>{movie.title}</h1>
          <div className="Playbuttons">
            <button className="addtowish" onClick={toggleWishlist}>
              <i className="bi bi-heart"></i> {isAdded ? 'Unwish it!' : 'Wish it!'}
            </button>
            <button className="watchlater">
              <i className="bi bi-stopwatch"></i> Watch Later
            </button>
          </div>
          <div className="rateDiv">
            <p>⭐ {movie.vote_average.toFixed(2)}</p>
            <h2>{movie.release_date?.slice(0, 4)}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard

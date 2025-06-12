import React from 'react'
import './MovieCard.css'

const MovieCard = ({ movie }) => {
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
                    <button className="addtowish">
                        <i className="bi bi-heart"></i> Add to Wishlist
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

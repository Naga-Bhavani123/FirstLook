import React, { use, useEffect, useState } from 'react'
import './MovieDetails.css'
import { useLocation, useParams } from 'react-router-dom';
import ReactContext from '../../ReactContext/ReactContext';

const MovieDetails = () => {
    const { state } = useLocation();
    const { WishlistAdd, watchlistAdd,wishlist ,watchlist,WishListRemove,watchlistRemove} = use(ReactContext)

    const { id } = useParams();
    const movie = state?.movie;
   
    const isAdded = wishlist.find(item => item.id === movie.id);
     const isWatched = watchlist.find(item=>item.id===movie.id)

    const detailWish = (e) => {
        e.stopPropagation();
        if (isAdded) {
            WishListRemove(movie);
        } else {
            WishlistAdd(movie);
        }
    };

    const detailWatch = (e) => {
        e.stopPropagation();
        if (isWatched) {
            watchlistRemove(movie);
        } else {
            watchlistAdd(movie);
        }
    };


    const backdropUrl = `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`
    const streamfetchURl = `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=ce676c654868e1fb7c7f39a2391400dc`
    const [movieStream, setMovieStream] = useState({})
    const notAvailable = <p className='nostrem'>No streaming platforms found</p>
    useEffect(() => {
        const fetchStream = async () => {
            const res = await fetch(streamfetchURl)
            const resData = await res.json()
            setMovieStream(resData.results.CA.rent)
        }
        fetchStream()
    }, [])
    return (
        <div className="backdrop-bg" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backdropUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 20px',
            flexWrap: 'wrap',
        }}>
            <div className="posterDiv">
                <img className="posterr" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Sinners Poster" />
            </div>
            <div className="movieDetails">
                <h1 className="movietitleHead">{movie.title || movie.original_name}</h1>
                <p>⭐ {movie.vote_average?.toFixed(1)} <i className="bi bi-calendar-event"></i> {(movie.release_date || movie.first_air_date)?.slice(0, 4)} </p>
                <p className="movieDescription">
                    {movie.overview || 'No description available.'}
                </p>
                <div className='streaminigplatforms'>
                    {movieStream.length > 0 ? (
                        movieStream.map((item) => (
                            <img
                                key={item.provider_id}
                                src={`https://www.themoviedb.org/t/p/original${item.logo_path}`}
                                alt={item.provider_name}
                            />
                        ))
                    ) : notAvailable}
                </div>
                <div className="button-group">
                    <button className="btn btn-trailer">
                        <i className="bi bi-play"></i> Watch Trailer
                    </button>
                    <button className="btn btn-glass" onClick={detailWish}>
                        <i className="bi bi-heart"></i> {isAdded ? 'Unwish it!' : 'Wish it!'}
                    </button>
                    <button className="btn btn-glass" onClick={detailWatch}>
                        <i className="bi bi-clock"></i> {isWatched ? 'UnWatch' : 'Watch Later'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails
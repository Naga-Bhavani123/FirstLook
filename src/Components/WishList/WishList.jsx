import React from 'react'
import './WishList.css'
import ReactContext from '../../ReactContext/ReactContext'
import MovieCard from '../MovieCard/MovieCard'
import { use } from 'react'

const WishList = () => {
  const {wishlist}  = use(ReactContext)
  const name = <h1 className='wishDes'>Your favorite movies will appear here. Start exploring and add movies to your wishlist!</h1>
  return (
    <div className='wishmainDiv'>
      <h1 className='wishHead'>WishList</h1>
      {wishlist.length >0 ? <div className='wishDiv'>
        {wishlist.map((movie)=>(
          <MovieCard key={movie.id} movie={movie}/>
        ))}
      </div>: name}
      
    </div>
  )
}

export default WishList
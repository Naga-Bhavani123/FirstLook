import React from 'react'
import './WishList.css'
import ReactContext from '../../ReactContext/ReactContext'
import MovieCard from '../MovieCard/MovieCard'
import { use } from 'react'

const WishList = () => {
  const {wishlist}  = use(ReactContext)
  return (
    <div className='wishmainDiv'>
      <h1 className='wishHead'>WishList</h1>
      <div className='wishDiv'>
        {wishlist.map((movie)=>(
          <MovieCard key={movie.id} movie={movie}/>
        ))}
      </div>
    </div>
  )
}

export default WishList
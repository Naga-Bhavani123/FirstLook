import React from 'react'
import ReactContext from '../../ReactContext/ReactContext'
import {use} from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './WatchList.css'
const WatchList = () => {
    const {watchlist} = use(ReactContext)
    const name = <h1 className='watchDes'>Your saved movies will show up here. Start watching and keep track of what you love!</h1>
  return (
     <div className='watchmainDiv'>
      <h1 className='watchHead'>Watch Later</h1>
      {watchlist.length >0 ? <div className='watchDiv'>
        {watchlist.map((movie)=>(
          <MovieCard key={movie.id} movie={movie}/>
        ))}
      </div>: name}
      
    </div>
  )
}

export default WatchList
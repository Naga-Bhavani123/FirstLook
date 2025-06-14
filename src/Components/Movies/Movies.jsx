import React from 'react'
import TopRatedMovies from '../TopRatedMovies/TopRatedMovies'
import LatestMovie from '../LatestMovie/LatestMovie'
import PopularMovies from '../PopularMovies/PopularMovies'
import { ClipLoader } from 'react-spinners'
import { useState, useEffect } from 'react'

const Movies = () => {
  const [isloadeds, setLoadeds] = useState(false)
  useEffect(() => {
      const timer = setTimeout(() => {
        setLoadeds(true)
      }, 500) 
      return () => clearTimeout(timer)
    }, [])
  return (
    <>
      {!isloadeds ? (
        <div className="spinner-container">
          <ClipLoader color="#FF0000" size={60} />
        </div>
      ) : (
        <div>
          <TopRatedMovies/>
        <PopularMovies/>
        <LatestMovie/>
        </div>
      )}
    </>
  )
}

export default Movies
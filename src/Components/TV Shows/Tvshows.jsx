import React, { useState, useEffect } from 'react'
import Tvtrend from '../Trending Tv Shows/Tvtrend'
import PopularTVShows from '../Popular Tv Shows/PopularTVShows'
import TopRated from '../TopRated/TopRated'
import { ClipLoader } from 'react-spinners'
import './Tvshows.css'  

const Tvshows = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true)
    }, 500) 
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {!loaded ? (
        <div className="spinner-container">
          <ClipLoader color="#FF0000" size={60} />
        </div>
      ) : (
        <div>
          <TopRated />
          <PopularTVShows />
          <Tvtrend />
        </div>
      )}
    </>
  )
}

export default Tvshows

import React from 'react'
import Tvtrend from '../Trending Tv Shows/Tvtrend'
import PopularTVShows from '../Popular Tv Shows/PopularTVShows'
import TopRated from '../TopRated/TopRated'

const Tvshows = () => {
  return (
    <div>
        <TopRated/>
        <Tvtrend/>
        <PopularTVShows/>
    </div>
  )
}

export default Tvshows
import React, { use, useEffect, useState } from 'react'
import './SearchRoot.css'
import ReactContext from '../../ReactContext/ReactContext'
import MovieCard from '../MovieCard/MovieCard'
const SearchRoot = () => {
  const {searchname} = use(ReactContext)
  const [result, setResult] = useState([])
    useEffect(()=>{
        const filteredSearch = async()=>{
            const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=ce676c654868e1fb7c7f39a2391400dc&query=${searchname}`)
            const resData  = await res.json()
            setResult(resData.results)
        }
        filteredSearch()
    },[searchname])
  return (
    <div style = {{color:"white", paddingTop: "100px"}}>
        <div className='searchResults'>
          {result.map((movie)=>(
            <MovieCard movie={movie} key={movie.id}/>
          ))}
        </div>
    </div>
  )
}

export default SearchRoot
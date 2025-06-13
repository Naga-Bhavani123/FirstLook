import React, { useEffect } from 'react'
import './SearchRoot.css'
const SearchRoot = () => {
    useEffect(()=>{
        const filteredSearch = async()=>{
            const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=ce676c654868e1fb7c7f39a2391400dc&query=${movie_name}`)
            const resData  = await res.json()
        }
    },[])
  return (
    <div style = {{color:"white", paddingTop: "100px"}}>
        SearchRoot
    </div>
  )
}

export default SearchRoot
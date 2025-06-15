import React, { use } from 'react'
import './Search.css'
import SearchRoot from '../SearchRoot/SearchRoot'
import { useNavigate } from 'react-router-dom'
import ReactContext from '../../ReactContext/ReactContext'

const Search = () => {
    const navigate = useNavigate()
    const {search} = use(ReactContext)
    const SearchRoot = ()=>{
        navigate('./search-results')

    }
    const handleSearchChange = (e) => {
      e.preventDefault()
    search(e.target.value); 
  };
  return (
    <div className="searchInput">
                <input type="search" placeholder="Seach Trailers..." className="searchBox" onChange={handleSearchChange}/>
                <i className="bi bi-search" onClick={SearchRoot}></i>
            </div>
  )
}

export default Search
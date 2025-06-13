import React from 'react'
import './Search.css'
import SearchRoot from '../SearchRoot/SearchRoot'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const navigate = useNavigate()
    const SearchRoot = ()=>{
        navigate('./search-results')
    }
  return (
    <div className="searchInput">
                <input type="search" placeholder="Discover stories..." className="searchBox"/>
                <i className="bi bi-search" onClick={SearchRoot}></i>
            </div>
  )
}

export default Search
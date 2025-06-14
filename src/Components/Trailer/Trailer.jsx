import React, { useEffect, useState } from 'react'
import './Trailer.css'
import { useLocation } from 'react-router-dom'
const Trailer = () => {
    const {state} = useLocation 
    const movie = state?.movie;
    const { id } = useParams();
    const [trailerMovie, setTrailer] = useState({})
    useEffect(()=>{
        const trailerFetch = async()=>{
            const res= await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=ce676c654868e1fb7c7f39a2391400dc`)
            const resData = await res.json()
            setTrailer(resData.results)
        }
        trailerFetch()
    },[])
    console.log(trailerMovie)
    return (
        <div>
            <iframe
            src={`https://www.youtube.com/watch?v=${trailerMovie.id}`}
            width="600"
            height="400"
            title="Example iframe"
            style={{ border: 'none' }}/>
        </div>
    )
}

export default Trailer
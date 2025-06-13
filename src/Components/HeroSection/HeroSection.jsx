import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className='trailerDiv'>
            <video autoPlay muted loop className='trailer'>
                <source src='/trailer.mp4' />
            </video>
            <div class="trailerName">
                <span>Y</span><span>o</span><span>u</span><span>r</span><span style={{ width: '20px', display: 'inline-block' }}></span><span>F</span>
                <span>a</span><span>u</span><span>l</span><span>t</span>
            </div>

        </div>
    )
}

export default HeroSection
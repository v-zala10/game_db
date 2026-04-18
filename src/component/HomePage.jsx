import React from 'react'
import './HomePage.css'
import PopularGames from './PopularGames'
import Library from './Library'
import './BrowsePage.jsx'



function HomePage() {
  return (
    <div className='mainHomePage'>
      <div className="herosection">
        <h2>Welcome To Cyborg</h2>
        <h1> <span style={{ color: '#e75e8d'}}>Browse</span> Our Popular <br></br> Games Here</h1>
        <button className='btn'>Browse now</button>
      </div>
      <PopularGames />    
      <Library />
    </div >
  )
}

export default HomePage

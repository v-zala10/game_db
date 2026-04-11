import React from 'react'
import './HomePage.css'
import PopularGames from './PopularGames'
import Library from './Library'
import './BrowsePage.jsx'



function HomePage() {
  return (
    <div className='mainHomePage'>
      <div className="herosection">
        <h3>Welcome To Cyborg</h3>
        <h1>Browse Our Popular <br></br> Games Here</h1>
        <button><a href="/browse">Browse now</a></button>
      </div>
      <PopularGames />    
      <Library />
    </div >
  )
}

export default HomePage

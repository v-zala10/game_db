import React from 'react'
import './Home.css'
import popular1 from '../IMAGE/popular-01.jpg'

function Home() {
  return (

    <div>
      <div className="home">
        <div className="banner">
          <div className="text">
            <h6>Welcome To Cyborg</h6>
            <h4><span>Browse</span> Our Popular Games Here</h4>
            <a href="browse.html" className='browse'>Browse Now</a>
          </div>
        </div>


        {/* Hero section start */}



        <div className="hero">
          <h4>MOST POPULAR <span>RIGHT NOW</span></h4>
        </div>

        <div className="card">
          <div className="card1">
            <img src={popular1} alt="" />
            <div className="details">
              <p> fortnite</p>
              <p>Sandbox</p>
            </div>
            <div className="ratings">
              <p>stars</p>
              <p>Downloads</p>
            </div>
          </div>



        </div>



      </div>
    </div>


  )
}

export default Home

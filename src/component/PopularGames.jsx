import React, { useState, useEffect } from 'react'
import { FaStar } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import axios from 'axios'

function PopularGames() {
  const [data, setData] = useState([])

  let filterData = data.filter((e) => e.isPopular == true)
  const api_url = "http://localhost/v/game.php"
  
  
  const fetchDatta = async () => {
    const apidata = await axios.get(api_url)
    setData(apidata.data)
  }

  useEffect(() => {
    fetchDatta()
  }, [])

  return (

    <div>
      <div className="hero">
        <h4 className='popular'><u>Most Popular</u> <span>Right Now</span></h4>
        <div className="cards">
          {data
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 8)
            .map((game) => (
              <div className="card" key={game.id}>
                <img src={game.image} alt={game.title} />
                <div className="content">

                  <div className="left">
                    <h3>{game.title}</h3>
                    <p>{game.genre}</p></div>
                  <div className="right">
                    <p> <FaStar /> {game.rating}</p>
                    <p><FaDownload /> {game.downloads}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default PopularGames
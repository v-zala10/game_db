import React, { useState } from 'react'
import data from '../GameData.json'
import { FaStar } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import './Hero.css'

function PopularGames() {

  // console.log(data.length)
  // let d = []
  // for (let i = 0; i < data.length; i++) {
  //   d.push(data[i].downloads)
  // }

  // let a;
  // let b;
  // let sorted = d.sort((a, b) => a - b)
  // let Sorted = sorted.reverse()
  // Sorted.pop()
  // Sorted.pop()
  // Sorted.pop()
  // Sorted.pop()
  // console.log("---->", Sorted)


  let filterData = data.filter((e) => e.isPopular == true)

  return (
    
     <div>
          <div className="hero">
            <h4 className='popular'>Most Popula <span>Right Now</span></h4></div>
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
                  <p>{game.rating}</p>
                  <p>{game.downloads}</p></div>
                </div>
                </div>
              ))
            }
          </div>
        </div>
  )
}

export default PopularGames
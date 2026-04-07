import React, { useEffect } from 'react'
import './BrowsePage.css'
import data from '../GameData.json'
import { useState } from 'react'
import { FaDownload, FaStar } from 'react-icons/fa'



function BrowsePage() {
  const [carasoulData, setCarasoulData] = useState([])
  const [downloadsData, setSownloadsData] = useState([])

  useEffect(() => {
    let filterData = data.filter((e) => e.is_feature_game)
    setCarasoulData(filterData)
    // let sortDowland = 

    // console.log(sortDowland)
    // let dDaya = data.filter((e)=>e.downloads)

    // let arr = []
    // for (let i in data) {
    //   arr.push(data[i].downloads)
    // }

    data.sort((a, b) => b.downloads - a.downloads)
    let topDow = data.slice(0, 3)
    console.log("---", topDow)
    setSownloadsData(topDow)
  }, [])


  return (
    <div className='main_browse_page'>
      <div className="heroSection">
        <div className="games">
          <h1>Featured <span>Games</span> </h1>
          <div className="carosule">
            {
              carasoulData.map((e) => {
                return (
                  <>
                    <div className="carasoul_card">
                      <img src={e.thumbnail} alt="image1" />
                      <div className="firstRow">
                        <div className="name">{e.gameName}</div>
                        <div className="ratings"><FaStar className='star' />{e.ratings}</div>
                      </div>
                      <div className="secondRow">
                        <div className="title">{e.title}</div>
                        <div className="downloads"><FaDownload className='download' />{e.downloads}M</div>
                      </div>
                    </div>
                  </>
                )
              })
            }


          </div>
        </div>
        <div className="topDownloads">
          <h1>Top Downloaded</h1>
          {
            downloadsData.map((e) => {
              return (
                <div className='gCard' key={e.id}>
                  <div className="img">
                    <img src={e.image} alt="image" />
                  </div>
                  <div className="rows">

                    <div className="firstRow">
                      <div className="name">{e.gameName}</div>
                    </div>
                    <div className="title">{e.title}</div>
                    <div className="secondRow" style={{ gap: "20px" }}>
                      <div className="ratings"><FaStar className='star' />{e.ratings}</div>
                      <div className="downloads"><FaDownload className='download' />{e.downloads}M</div>
                    </div>


                  </div>
                  <div className="downloadsicon"><FaDownload className='download' /></div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default BrowsePage
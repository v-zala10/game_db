import React, { useEffect, useRef, useState } from 'react'
import './BrowsePage.css'
import { FaDownload, FaStar } from 'react-icons/fa'
import { TbDeviceGamepad2 } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { RiVideoOnAiLine } from "react-icons/ri";
import streamdata from './StreamData.json'
import { FaEye } from "react-icons/fa";
import { CiStreamOn } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import axios from 'axios';

function BrowsePage() {

  const [carasoulData, setCarasoulData] = useState([])
  const [downloadsData, setSownloadsData] = useState([])
  const [data, setData] = useState([])
  const [isDataChanged, setIsDataChanged] = useState(false)
  const scrollRef = useRef(null)

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: 'smooth'
    })
  }

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: 'smooth'
    })
  }

  const fetchData = async () => {
    try {
      const api_url = "http://localhost/v/game.php"
      const apidata = await axios.get(api_url)
      if (apidata.data) {
        setData(apidata.data)
        setIsDataChanged(true)
      }
    } catch (error) {
      console.log("Error fetching data:", error)
    }

  }



  useEffect(() => {
    fetchData()
    let featured = [...data]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 6)
    setCarasoulData(featured)


    let topDownloads = [...data]
      .map((game) => {
        let value = game.downloads

        if (typeof value === "string") {
          value = parseFloat(value.replace("M+", ""))
        }
        return { ...game, downloadsValue: value }
      })
      .sort((a, b) => b.downloadsValue - a.downloadsValue)
      .slice(0, 5)
    setSownloadsData(topDownloads)
  }, [isDataChanged])



  let streamers = streamdata.filter((v) => v.viewers > 15000)
  if (streamers.length > 8) {
    streamers = streamers.slice(0, 3)
  }

  return (
    <div className='main_browse_page'>

      <div className="heroSection">

        {/* LEFT SIDE */}
        <div className="games">
          <h1><u>Featured</u> <span>Games</span></h1>

          <div className="carouselWrapper">
            <button className="scrollBtn left" onClick={scrollLeft}>‹</button>

            <div className="carosule" ref={scrollRef}>
              {carasoulData.map((e) => (
                <div className="carasoul_card" key={e.id}>
                  <img src={e.image} alt={e.title} />

                  <div className="firstRow">
                    <div className="name">{e.title}</div>
                    <div className="ratings">
                      <FaStar className='star' /> {e.rating}
                    </div>
                  </div>

                  <div className="secondRow">
                    <div className="title">{e.genre}</div>
                    <div className="downloads">
                      <FaDownload className='download' />
                      {typeof e.downloads === "number"
                        ? `${e.downloads}M`
                        : e.downloads}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="scrollBtn right" onClick={scrollRight}>›</button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="topDownloads">
          <h1><u>Top</u> <span>Downloads</span></h1>

          {downloadsData.map((e) => (
            <div className='gCard' key={e.id}>

              <img src={e.image} alt={e.title} />

              <div className="rows">
                <div className="firstRow">
                  <div className="name">{e.title}</div>
                </div>

                <div className="title">{e.genre}</div>

                <div className="secondRow1">
                  <div className="ratings">
                    <FaStar className='star' /> {e.rating}
                  </div>
                  <div className="downloads">
                    <FaDownload className='download' />
                    {typeof e.downloads === "number"
                      ? `${e.downloads}M`
                      : e.downloads}
                  </div>
                </div>
              </div>

              <div className="downloadsicon">
                <FaDownload />
              </div>

            </div>
          ))}
        </div>

      </div>


      <div className="liveStreamSection">
        <h1>How To Start Your <span>Live Stream</span></h1>

        <div className="streamCards">

          <div className="streamCard">
            <div className="icon"><CgProfile /></div>
            <h3>Go To Your Profile</h3>
            <p>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.</p>
          </div>

          <div className="streamCard">
            <div className="icon"><TbDeviceGamepad2 /></div>
            <h3>Live Stream Button</h3>
            <p>If you wish to support us, you can make a small contribution via PayPal to info [at] templatemo.com</p>
          </div>

          <div className="streamCard">
            <div className="icon"><RiVideoOnAiLine /></div>
            <h3>You Are Live</h3>
            <p>You are not allowed to redistribute this template's downloadable ZIP file on any other template collection website.</p>
          </div>

        </div>

        <button className="goLiveBtn">Go To Profile</button>
      </div>


      <div className="streamerwrapper">
        <h1><u>Most Popular</u> <span>Live Streams</span></h1>

        <div className="streamerCards">
          {streamers.map((v) => (
            <div className="live" key={v.id}>


              <div className="thumbnailWrapper">
                <img src={v.thumbnail} alt={v.name} />


                <div className="overlay">
                  <span className="viewers"><FaEye />{v.viewers} </span>
                  <span className='streamTime'><CiStreamOn />{v.streamTime}</span>
                  <span className="liveTag">LIVE</span>
                </div>
              </div>


              <div className="streamInfo">
                <img src={v.avatar} alt={v.name} />

                <div>
                  <h3><FaCheckCircle />{v.name}</h3>
                  <p>{v.title}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BrowsePage
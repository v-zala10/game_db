import React, { useEffect, useState } from 'react'
import data from '../GameData.json'


function Library() {
  const [LibraryData, setLibraryData] = useState([]);


  const lodeMoreData = () => {
    setLibraryData(data);
  }

  useEffect(() => {
    let filteredData = data.filter(game => game.id <= 3);
    console.log(filteredData);
    setLibraryData(filteredData);
  }, [])

  return (
    <div className='libraryGames'>
      <h1>Your Gaming <span>Library</span></h1>

      <div className="dataList">
        {LibraryData.map((game) => (
          <div className="gameCard" key={game.id}>
            <div className="image">
              <img src={game.image} alt={game.title} />
            </div>
            <div className="title">
              <h4>{game.gameName}</h4>
              <p>{game.title}</p>

            </div>
            <div className="date">
              <h4>Date Added</h4>
              <p>{game.dateAdded}  </p>
            </div>
            <div className="playingTime">
              <h4>Hours Played</h4>
              <p>{game.hoursPlayed}</p>
            </div>
            <div className="download">
              <h4>Currently</h4>
              <p>{game.installed ? "Installed" : "Not Installed"}</p>
            </div>
            <div className="downloadButton">
              <button className='button1'>Download</button>
            </div>
          </div>
        ))}
      </div>
      <button className='button2' onClick={() => { lodeMoreData() }}> More Games</button>
    </div>
  )
}

export default Library
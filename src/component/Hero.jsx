// import React from 'react'
// import './Hero.css'
// import data from './GameData.json'


// function Hero() {
//   return (
//     <div>
//       <div className="hero">
//         <h4 className='popular'>Most Popula <span>Right Now</span></h4></div>
//       <div className="cards">
//         {data
//           .sort((a, b) => b.rating - a.rating)
//           .slice(0, 8)
//           .map((game) => (
//             <div className="card" key={game.id}>
//               <img src={game.image} alt={game.title} />
//              <div className="content"> 
              
//               <div className="left">
//                 <h3>{game.title}</h3>
//               <p>{game.genre}</p></div>
//              <div className="right"> 
//               <p>{game.rating}</p>
//               <p>{game.downloads}</p></div>
//             </div>
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// export default Hero
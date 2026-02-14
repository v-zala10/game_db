import React from 'react'
import "./Navbar.css"
import logo from "../IMAGE/logo.png"
import profile from "../IMAGE/profile-header.jpg"
import { FaSearch } from "react-icons/fa";


function Navbar() {
  return (
    <div className='nav'>
      
      <div className='logo'>
        <img src={logo} alt="logo" />
      </div>

      <div className="search">
        <FaSearch />
        
        <input type="text" placeholder='Type Something' />
      </div>

      <div className="link">
        <a href="index.html" className="active">Home</a>
        <a href="browse.html">Browse</a>
        <a href="details.html">Details</a>
        <a href="streams.html">Streams</a>

        <a href="profile.html" className='pro'>
          <p>Profile</p>
          <img src={profile} alt="profile" />
        </a>
      </div>

    </div>
  )
}

export default Navbar



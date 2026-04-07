import React from 'react'
import logo from '../images/logo.png'
import profileImage from '../images/profile-header.jpg'
import './Navbar.css'
import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <div className='navbarContainer'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="search">
        <FaSearch className='searchIcon' />
        <input type="text" placeholder='Type somthing' name="" id="" />
      </div>
      <div className="navlink">
        <NavLink className={({ isActive }) => isActive ? 'active-link-class' : 'inactive-link-class'} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'active-link-class' : 'inactive-link-class'} to="/browse">Browse</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'active-link-class' : 'inactive-link-class'} to="/details">Details</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'active-link-class' : 'inactive-link-class'} to="/stream">Stream</NavLink>

        <NavLink to="/profile" className={({ isActive }) => isActive ? 'active-link-class profile' : 'inactive-link-class profile'}><span>Profile</span><img src={profileImage} alt="" /></NavLink>
      </div>
    </div>
  )
}

export default Navbar
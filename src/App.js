import React from 'react'
import './App.css'
import Navbar from './component/Navbar.jsx'
import HomePage from './component/HomePage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BrowsePage from './component/BrowsePage'
import DetailsPage from './component/DetailsPage'
import StreamPage from './component/StreamPage'
import ProfilePage from './component/ProfilePage'

function App() {
  return (
    <BrowserRouter>
      <div className='mainApp'>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/stream" element={<StreamPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

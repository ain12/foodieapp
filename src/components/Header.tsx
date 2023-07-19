import React, { useState } from 'react'
import Navbar from './Navbar';
import Home from './Home';
import '../assets/css/header.scss'

function Header() {
  return (
    <div className='wrapper'>
        <Navbar />
        <Home />
    </div>
  )
}

export default Header;
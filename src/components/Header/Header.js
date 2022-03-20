import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header-section'>
      <div className='hero-text'>
        <span className='hero-text-title'> MarketPlace</span>
        <span className='hero-text-subtitle'> welcome </span>
      </div>
      <img className='hero-firstimage' src='https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='pic-2' />
    
    </div>
  )
}

export default Header
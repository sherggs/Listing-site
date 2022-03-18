import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header-section'>
      <div className='hero-text'>
        <span className='hero-text-title'> header app</span>
        <span className='hero-text-subtitle'> header</span>
      </div>
      <img className='hero-firstimage' src='https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='pic-2' />
    
    </div>
  )
}

export default Header
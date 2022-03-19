import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar-section'>
    <div className='sidebar-subsection'>
        <span className='sidebar-titles'>About me </span>
        <img className='sidebar-image' src='https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='pic-sidebar2' />
        <p className='sidebar-about-text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..</p>
    </div>
    <div className='sidebar-subsection'>
        <span className='sidebar-titles'>Categories </span>
        <ul className='sidebar-category'>
            <li className='sidebar-category-item'> Buy</li>
            <li className='sidebar-category-item'> Sell</li>
            <li className='sidebar-category-item'>Rent</li>
            <li className='sidebar-category-item'> Residential</li>
            <li className='sidebar-category-item'>Commercial </li>
            <li className='sidebar-category-item'>SchoolAccom </li>
        </ul>
    </div>
    <div className='sidebar-subsection'>
    <span className='sidebar-titles'>Follow us on:</span>
    <div className='sidebar-socials-icon'>
        <i className="sidebar-socials-icon fa-brands fa-twitter"></i>
        <i className="sidebar-socials-icon fa-brands fa-linkedin"></i>
        <i className="sidebar-socials-icon fa-brands fa-instagram"></i>  
        <i className="sidebar-socials-icon fa-brands fa-facebook"></i>
        <i className="sidebar-socials-icon fa-brands fa-twitch"></i>

    </div>


    </div>


    </div>
  )
}

export default Sidebar
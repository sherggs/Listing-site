import React from 'react'
import './HeaderBar.css'

function HeaderBar() {
    return (
    <div className='headerbar'>
        <div className='header-left'>
        <i className="header-socials fa-brands fa-twitter"></i>
        <i className="header-socials fa-brands fa-twitch"></i>
        <i className="header-socials fa-brands fa-linkedin"></i>
        <i className="header-socials fa-brands fa-instagram"></i>  
        <i className="header-socials fa-brands fa-facebook"></i>
        </div>
        <div className='header-center'>
        <ul className='header-center-list'>
            <li className='header-list-item'> HOME</li>header-socials 
            <li className='header-list-item'> ABOUT</li>
            <li className='header-list-item'> CONTACT </li>
            <li className='header-list-item'> CREATE LISTING</li> 
            <li className='header-list-item'> LOGOUT</li> 
        </ul>
        </div>

        <div className='header-right'>
        <img className='header-right-profile' src='https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='image' /> 
        <i  className="header-right-search fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
)
}

export default HeaderBar



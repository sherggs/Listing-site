import React from 'react'
import './Topbar.css'

function HeaderBar() {
    return (
    <div className='topbar'>
        <div className='topbar-left'>
        <i className="topbar-socials-icon fa-brands fa-twitter"></i>
        <i className="topbar-socials-icon fa-brands fa-linkedin"></i>
        <i className="topbar-socials-icon fa-brands fa-instagram"></i>  
        <i className="topbar-socials-icon fa-brands fa-facebook"></i>
        <i className="topbar-socials-icon fa-brands fa-twitch"></i>

        </div>
        <div className='topbar-center'>
        <ul className='topbar-list'>
            <li className='topbar-list-item'> HOME</li>
            <li className='topbar-list-item'> ABOUT</li>
            <li className='topbar-list-item'> CONTACT </li>
            <li className='topbar-list-item'> CREATE LISTING</li> 
            <li className='topbar-list-item'> LOGOUT</li> 
        </ul>
        </div>

        <div className='topbar-right'>
        <img className='topbar-profile-picture' src='https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='pic_1' /> 
        <i  className="topbar-search fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
)
}

export default HeaderBar



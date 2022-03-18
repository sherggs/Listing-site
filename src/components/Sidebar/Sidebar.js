import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar-section'>
    <div className='sidebar-subsection'>
        <span className='sidebar-titles'>About me </span>
        <img className='sidebar-image' src='https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='pic-sidebar2' />
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div className='sidebar-subsection'>
        <span className='sidebar-titles'>Categories </span>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'> </li>
            <li className='sidebar-list-item'> </li>
            <li className='sidebar-list-item'> </li>
            <li className='sidebar-list-item'> </li>
            <li className='sidebar-list-item'> </li>
        </ul>
    </div>

    </div>
  )
}

export default Sidebar
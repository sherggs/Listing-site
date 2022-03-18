import React from 'react'
import Header from '../../Header/Header'
import Listing from '../../Listing/Listing'
import Sidebar from '../../Sidebar/Sidebar'
import './Home.css'

function Home() {
  return (
    <div>
    <Header />
      <div className='Homepage'>
       <Listing />
       <Sidebar />
      </div>
    </div>
  )
}

export default Home
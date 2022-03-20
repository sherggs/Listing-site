import React from 'react'
import './Listingdetail.css'

function Listingdetail() {
  return (
    <div className='Listing-Detail-Section'>
    <div className='Listing-Detail-section-container'>
    <img className='Listing-detail-section-image' src='https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='detail-pic' />
    <h1 className='Listing-detail-list-title'> 
    Awesome Property
        <div className='Listing-detail-list-actions'>
        <i class="Listing-detail-list-actions-icon fa-solid fa-pen-to-square"></i>
        <i class="Listing-detail-list-actions-icon fa-solid fa-trash"></i>
        </div>
    </h1>
    <div className='Listing-detail-list-info'>
        <span className='Listing-detail-list-author'> Author - <strong>Ademola Jegede</strong></span>
        <span className='Listing-detail-list-time'> 1 day ago</span>
        
    </div>
    <p className='Listing-detail-list-description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at auctor elit. Proin et cursus tortor. Donec non augue posuere, faucibus sapien vel, maximus lorem. Aliquam erat est, convallis in sem nec, tincidunt pellentesque lacus. Pellentesque sagittis volutpat ullamcorper. Etiam imperdiet imperdiet nisi at semper. Etiam eget urna sed eros consequat euismod id sit amet nisi. In eleifend, velit nec hendrerit tempor, velit urna finibus ipsum, vel gravida nisl lorem ut eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet lectus at lectus facilisis consectetur eget vitae dolor.

    Sed convallis tellus et ante elementum congue. Maecenas ipsum diam, interdum ut purus a, luctus semper leo. Praesent condimentum        dolor nec lacus accumsan, quis efficitur elit vulputate. Nullam in dictum tortor, eu pellentesque magna. Etiam egestas eget orci    at sollicitudin. Duis sollicitudin nisi eget varius vehicula. Sed sollicitudin pharetra nibh nec pharetra. Integer ipsum turpis,   vestibulum eu massa ut, vehicula pellentesque urna. In malesuada non libero placerat placerat. Nulla consequat dolor at mollis     laoreet. Ut et pharetra risus, quis placerat leo. Pellentesque at cursus mi. Nulla facilisi. Ut a magna elit. Maecenas non enim non enim finibus volutpat. consequat aliquet     eros, nec luctus magna gravida a. Sed sed tristique ligula. Phasellus sagittis iaculis efficitur.</p>
    </div>

</div>
  )
}

export default Listingdetail
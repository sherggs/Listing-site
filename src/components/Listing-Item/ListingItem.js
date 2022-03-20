import React from 'react';
import './ListingItem.css';

function ListingItem() {
    return (
        <div className="listing-item">
            <img className="listing-img" src="https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt='picgit ' />
            <div className="listing-details">
                <div className="listing-categories">
                    <span className="listing-category">Buy</span>
                    <span className="listing-category">Sell</span>
                </div>
                <span className="listing-title">Awesome property</span>
                <hr />
                <span className="listing-time">2 days ago</span>
            </div>
            <p className="listing-description">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs</p>
        </div>
    )
}

export default ListingItem
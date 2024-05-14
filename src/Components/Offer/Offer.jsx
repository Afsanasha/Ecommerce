import React from 'react'
import "./Offer.css"
import exclusive_image from "../Assests/exclusive_image.png"

const Offer = () => {
  return (
    <div className='MainContainer'>
    <div className='Left'>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>Only on Best Seller Product</p>
        <button>Check Now</button>
    </div>
    <div className='Right'>
        <img src={exclusive_image} alt=''/>
    </div>
    </div>
  )
}

export default Offer
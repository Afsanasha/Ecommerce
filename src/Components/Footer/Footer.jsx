import React from 'react'
import "./Footer.css"
import logo_big from "../Assests/logo_big.png"
import  whatsapp_icon  from '../Assests/whatsapp_icon.png'
import instagram_icon from "../Assests/instagram_icon.png"
import pinterest_icon from "../Assests/pintester_icon.png"

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='logosection'>
            <img src={logo_big} alt=''/>
            <p>SHOPPER</p>
        </div>
        <div className='details'>
            <ul >
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='socialicon'>
           <img src={instagram_icon} alt=''/>
           <img src={pinterest_icon} alt=''/>
           <img src={whatsapp_icon} alt=''/>
        </div>
    </div>
  )
}

export default Footer
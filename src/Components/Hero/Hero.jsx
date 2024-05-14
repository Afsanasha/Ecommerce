import React from 'react'
import "./Hero.css"
import hand_icon from "../../Components/Assests/hand_icon.png"
import arrow from "../../Components/Assests/arrow.png"
import hero_image from "../../Components/Assests/hero_image.png"

const Hero = () => {
  return (
    <div className='Hero-Container'>
        <div className='Hero-Left'>
            <p>NEW ARRIVALS ONLY</p>
            <div className='handimage'>
            <h1>new</h1>
            <img src={hand_icon} alt=''/>
            </div>
            <h1>collections</h1>
            <h1>for everyone</h1>
            <div className='mainbtn'>
            <button className="latestbtn">Latest Collection</button>
            <img  className="arrowimage" src={arrow} alt=''/>
            </div>
        </div>
        <div className='Hero-Right'>
            <img class="Imagehero" src={hero_image} alt=''/>
        </div>
    </div>
  )
}

export default Hero
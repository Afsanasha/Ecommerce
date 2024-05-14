import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../../Components/Assests/logo.png"
import cart_icon from "../../Components/Assests/cart_icon.png"
import { Link } from 'react-router-dom'; 

const Navbar = () => {
    const[menu, setMenu] = useState("shop")
  return (
    <>
    <div className='Navbar'>
        <div className='Nav-logo'>
            <img src={logo} alt=''/>
            <p >SHOPPERS</p>
        </div>
        
        <ul className='Nav-menu'>
            <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration: "none"}} to='/'>Shop</Link>{menu === "shop" ? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration: "none"}} to='/mens'>Men</Link>{menu === "men" ? <hr/> : <></>}</li>
            <li onClick={() =>{setMenu("women")}}><Link style={{textDecoration: "none"}} to='/womens'>Women</Link>{menu ==="women" ? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: "none"}} to='/kids'>Kids</Link>{menu === "kids" ? <hr/> : <></>}</li>
        </ul>
        <div className='Nav-cart'>
            <Link to='/login'><button className='loginbtn'>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt=''/></Link>
            <div className='Cart-count'>
                0
            </div>
        </div>
        
    </div>
    
    </>
  )
}

export default Navbar
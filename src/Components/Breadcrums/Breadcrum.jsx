import React from 'react'
import "./Breadcrum.css"
import breadcrum_arrow from "../Assests/breadcrum_arrow.png"


const Breadcrum = (props) => {
    const {product} = props;
    if (!product) {
        return null; // Return null or any other fallback UI
    }

  return (
    <div className='Breadcrum'>
        Home<img src={breadcrum_arrow} alt=''/>Shop<img src={breadcrum_arrow} alt=''/>{product.category}<img src={breadcrum_arrow} alt=''/>{product.name}
    </div>
  )
}

export default Breadcrum

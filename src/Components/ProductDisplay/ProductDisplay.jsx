import React from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assests/star_icon.png"
import star_dull_icon from "../Assests/star_dull_icon.png"


const ProductDisplay = (props) => {
    const {product} = props;
    console.log(product);
  return (
    <div className='ProductDisplay'>
        <div className='Left'>
            <div className='Small-image'>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            </div>
            <div className='big-image'>
            <img src={product.image} alt=''/>   
            </div>
        </div>
        <div className='Right'>
            <h1>{product.name}</h1>
            <div className='ratings'>
                <img src={star_icon} alt=''/>
                <img src={star_icon}  alt=''/>
                <img src={star_icon}  alt=''/>
                <img src={star_icon}  alt=''/>
                <img src={star_dull_icon} alt=''/>
            </div>
        </div>

    </div>
  )
}

export default ProductDisplay
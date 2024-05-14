import React from 'react'
import "./Item.css"
import {Link} from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}><img className='itemimage' src={props.image} alt="props.name"/></Link>
        <p className='itemname'>{props.name}</p>
        <div className='pricetag'>
            <div className='newprice'>₹{props.new_price}</div>
            <div className='oldprice'>₹{props.old_price}</div>
        </div>
    </div>
  )
}

export default Item

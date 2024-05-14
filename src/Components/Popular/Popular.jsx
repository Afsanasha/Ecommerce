import React from 'react'
import Item from '../Item/Item'
import data_product from '../Assests/data'
import "./Popular.css"



const Popular = () => {
  return (
    <div className='Popular'>
        <h1>POPULAR IN WOMENS</h1>
        <hr/>
        <div className='mainitem'>
        {data_product.map((items,id) =>{
            return <Item key={id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price} />
        })}
        </div>
        </div>
  )
}

export default Popular
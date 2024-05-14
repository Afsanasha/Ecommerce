import React, { useContext } from 'react'
import "./CSS/ShopCategory.css"
import {ShopContext} from "../Context/ShopContext"
import dropdown_icon from "../Components/Assests/dropdown_icon.png"
import Item from '../Components/Item/Item'



const Shopcategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='ShopCategory'>
        <img className='shopcategorybanner' src={props.banner} alt=''/>
        <div className='ShopCategory-Indexsort'>
          <p>
            <span><b>Showing 1-12</b></span> out of 36 Products
          </p>
          <div className='shopCategory-sort'>
            Sort by <img src={dropdown_icon} alt=''/>
          </div>
        </div>
        <div className='Category'>
          {all_product.map((items, id) =>{
            if(props.category === items.category)
              return <Item key={id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price} />
            else
              return null;
          })}

        </div>
        <div className='loadbtn'>
          <button>Explore More</button>
        </div>
        
    </div>
  )
}

export default Shopcategory
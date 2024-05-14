import React from 'react'
import "./NewCollection.css"
import new_collections from "../Assests/new_collections"
import Item from '../Item/Item'

const NewCollection = () => {
  return (
    <div className='NewCollections'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className='mainCollection'>
            {new_collections.map((items, id) =>{
                return <Item key={id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price} />
            })}

        </div>
    </div>
  )
}

export default NewCollection
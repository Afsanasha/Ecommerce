import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';

const Product = (match) => {
  const { all_product } = useContext(ShopContext);
  console.log("All Product:", all_product);

  
const {productId} = useParams(0);
// Check if productId is correctly retrieved
  
  // Find the product by matching the ID
  const product = all_product.find((e) => e.id === parseInt(productId));
  console.log("Product:", product); // Check the product retrieved
  
  return (
    <div>
      <Breadcrum product={product} />
    </div>
  );
}

export default Product;
import React from 'react'
import { productsData } from '../../assets/data'
import { useParams } from 'react-router-dom'
import './ProductDetails.css'

const ProductDetails = () => {
  const {id} = useParams();
  const product = productsData.find(product => {
    return product.id === parseInt(id);
  });

  return (
    <div>
      <div className='products-details'>
        <div className='details-left'>
          <img src={product.image} alt='product-img'/>
        </div>
        <div className='details-right'>
          <h2>{product.title}</h2>
          <p className='product_price'>${product.price}</p>
          <p className='desc'>{product.description}</p> 
          <button>ADD TO CART</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
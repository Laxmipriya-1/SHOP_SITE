import React, { useContext } from 'react'
import { ShopContext } from '../ShopContext/ShopContext'
import { FiTrash2 } from 'react-icons/fi';
import CartDetails from './CartDetails';
import './Cart.css';

const Cart = () => {
    const {cart, total, quantity , clearCart} = useContext(ShopContext) ;
  return (
    <div>
       <div className='cart_container'>
         <div className='cart_left'>
            <div className='cart_header'>
                <h1>Shopping Cart</h1>
                <h1>Items : ({quantity})</h1>
                <FiTrash2 onClick={clearCart} className='delete_cart'/>
            </div>
            <div className='cart_header'>
                <span>Product Description</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Total</span>
            </div>
            <div className='cart_detail'>
                {cart.length > 0 ? (
                    cart.map((item) =>{
                    return <CartDetails item={item} key={item.id}/>;
                   })
                ) : (
                  <p>YOUR CART IS EMPTY</p>
                )}
            </div>
         </div>
         <div className='cart_right'>
          <h2>Cart Summary</h2>
           <div className='summary_item'>
            <span>Items: </span>
            <span>{quantity}</span>
           </div>
           <div className='cart_summary'>
             <div className='summary_item'>
              <span>Subtotal</span>
              <span>${isNaN(total) ? 0 : total}</span>
             </div>
             <div className='summary_item'>
              <span>Shipping Fee</span>
              <span>Free</span>
             </div>
             <div className='summary_item'>
              <span>Promo Code</span>
              <span>No Code</span>
             </div>
             <div className='summary_item total_cost'>
              <span>Total Cost</span>
              <span>${isNaN(total) ? 0 : total}</span>
             </div>
             <button className='checkout'>CHECKOUT</button>
           </div>
         </div>
       </div>
    </div>
  )
}

export default Cart
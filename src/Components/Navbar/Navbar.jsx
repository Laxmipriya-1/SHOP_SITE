// import React, { useContext } from 'react'
// import { BiCart, BiUser } from 'react-icons/bi'
// import './Navbar.css'
// import { Link } from 'react-router-dom'
// import { ShopContext } from '../ShopContext/ShopContext'

// const Navbar = () => {
//    const {quantity} = useContext(ShopContext);

//   return (
//     <div>
//       <div className='navbar'>
//         <div className='logo'>
//           <h2>ShopSite</h2>
//         </div>

//         <div className='link'>
//         <ul>
//           <li>HOME</li>
//           <li>PRODUCTS</li>
//           <li>CONTACT</li>
//           <li>APP</li>
//         </ul>
//         </div>

//         <div className='nav_icon_wrapper'>
//         <Link to='/cart'>
//            <div className='nav_cart'>
//              <BiCart className='nav_icon'/>
//              <p className='cart_qty'>{quantity}</p>
//            </div>
//         </Link>
//               <BiUser className='nav_icon'/>

//         </div>
         

//       </div>
//     </div>
//   )
// }

// export default Navbar

import React, { useContext, useState } from 'react'
import { BiCart, BiUser, BiMenu, BiX } from 'react-icons/bi'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../ShopContext/ShopContext'

const Navbar = () => {
   const {quantity} = useContext(ShopContext);
   const [open, setOpen] = useState(false);

  return (
    <div>
      <div className='navbar'>
        
        <div className='logo'>
          <h2>ShopSite</h2>
        </div>

        {/* Hamburger */}
        <div className='hamburger' onClick={() => setOpen(!open)}>
          {open ? <BiX /> : <BiMenu />}
        </div>

        <div className={`link ${open ? 'active' : ''}`}>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li>PRODUCTS</li>
          <li>CONTACT</li>
          <li>APP</li>
        </ul>
        </div>

        <div className='nav_icon_wrapper'>
        <Link to='/cart'>
           <div className='nav_cart'>
             <BiCart className='nav_icon'/>
             <p className='cart_qty'>{quantity}</p>
           </div>
        </Link>
              <BiUser className='nav_icon'/>
        </div>

      </div>
    </div>
  )
}

export default Navbar
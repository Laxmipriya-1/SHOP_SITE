// import React, { useContext } from 'react'
// import { ShopContext } from '../ShopContext/ShopContext'
// import './ProductList.css'
// import { Link } from 'react-router-dom';

// const ProductList = () => {
//   const {products , addToCart} = useContext(ShopContext);

//   return (
//     <div>
//       <div className="product-list" id="products">
//        <h2>Our Elegant Collections</h2>

//         <div className='product-grid'>
//           {
//             products.map((product)=>{
//               const {id, image, title, price, category} = product
//               return(
//                 <div className='product-card' key={id}>
//                 <Link to={`/product/${product.id} `}>
//                 <img src={image} alt='' className='product-image'/>
//                  <div className='product-info'>
//                   <h4>{title}</h4>
//                   <h4>{category}</h4>
//                   <p>${price}</p>
//                  </div>
//                  </Link>
//                  <button className='add-to-cart' onClick={()=> addToCart(product, id)}>Add To Cart</button>

//                 </div>
//               )
//             })
//           }
//         </div>

//       </div>
//     </div>
//   )
// }

// export default ProductList


// import React, { useContext, useState } from 'react'
// import { ShopContext } from '../ShopContext/ShopContext'
// import './ProductList.css'
// import { Link } from 'react-router-dom';
// import CategoryFilter from '../CategoryFilter/CategoryFilter';

// const ProductList = () => {
//   const { products, addToCart } = useContext(ShopContext);

//   // ✅ State for selected category
//   const [selectedCategory, setSelectedCategory] = useState("all");

//   // ✅ Get unique categories dynamically
//   const categories = ["all", ...new Set(products.map(p => p.category))];

//   // ✅ Filter products based on selected category
//   const filteredProducts =
//     selectedCategory === "all"
//       ? products
//       : products.filter((product) => product.category === selectedCategory);

//   return (
//     <div>
//       <div className="product-list" id="products">
//         <h2>Our Elegant Collections</h2>

//         {/* ✅ Category Filter Component */}
//         <CategoryFilter
//           categories={categories}
//           selectedCategory={selectedCategory}
//           setSelectedCategory={setSelectedCategory}
//         />

//         <div className='product-grid'>
//           {
//             filteredProducts.map((product) => {
//               const { id, image, title, price, category } = product;
//               return (
//                 <div className='product-card' key={id}>
                  
//                   {/* ✅ Fixed Link (removed extra space) */}
//                   <Link to={`/product/${id}`}>
//                     <img src={image} alt='' className='product-image' />
//                     <div className='product-info'>
//                       <h4>{title}</h4>
//                       <h4 id='category'>{category}</h4>
//                       <p>${price}</p>
//                     </div>
//                   </Link>

//                   <button
//                     className='add-to-cart'
//                     onClick={() => addToCart(product, id)}
//                   >
//                     Add To Cart
//                   </button>

//                 </div>
//               )
//             })
//           }
//         </div>

//       </div>
//     </div>
//   )
// }

// export default ProductList;

import React, { useContext, useState } from 'react'
import { ShopContext } from '../ShopContext/ShopContext'
import './ProductList.css'
import { Link } from 'react-router-dom';

import CategoryFilter from '../CategoryFilter/CategoryFilter';
import PriceSort from '../CategoryFilter/PriceSort';

const ProductList = () => {
  const { products, addToCart } = useContext(ShopContext);

  //  States
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  // Get categories dynamically
  const categories = ["all", ...new Set(products.map(p => p.category))];

  // Filter by category
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  //  Sort by price
  const sortedProducts = [...filteredProducts];

  if (sortOption === "lowToHigh") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "highToLow") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div>
      <div className="product-list" id="products">
        <h2>Our Elegant Collections 😍</h2>

        {/* ✅ Category Filter */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* ✅ Price Sort */}
        <PriceSort
          sortOption={sortOption}
          setSortOption={setSortOption}
        />

        <div className='product-grid'>
          {
            sortedProducts.map((product) => {
              const { id, image, title, price, category } = product;

              return (
                <div className='product-card' key={id}>

                  {/* ✅ Product Link */}
                  <Link to={`/product/${id}`}>
                    <img src={image} alt='' className='product-image' />
                    <div className='product-info'>
                      <h4>{title}</h4>
                      <h4>{category}</h4>
                      <p>${price}</p>
                    </div>
                  </Link>

                  {/* ✅ Add to Cart */}
                  <button
                    className='add-to-cart'
                    onClick={() => addToCart(product, id)}
                  >
                    Add To Cart
                  </button>

                </div>
              )
            })
          }
        </div>

      </div>
    </div>
  )
}

export default ProductList;

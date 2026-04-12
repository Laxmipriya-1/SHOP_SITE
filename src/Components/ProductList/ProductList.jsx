

import React, { useContext, useState } from 'react'
import { ShopContext } from '../ShopContext/ShopContext'
import './ProductList.css'
import { Link } from 'react-router-dom';

import CategoryFilter from '../CategoryFilter/CategoryFilter';
import PriceSort from '../CategoryFilter/PriceSort';

import PriceRange from '../CategoryFilter/PriceRange';
import RatingFilter from '../CategoryFilter/RatingFilter';

const ProductList = () => {
  const { products, addToCart } = useContext(ShopContext);

  //  States
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  const [priceRange, setPriceRange] = useState([0, 100]);
  const [minRating, setMinRating] = useState(0);
  

  // Get categories dynamically
  const categories = ["all", ...new Set(products.map(p => p.category))];

  // Filter by category
  // const filteredProducts =
  //   selectedCategory === "all"
  //     ? products
  //     : products.filter((product) => product.category === selectedCategory);

  // const filteredProducts = products
  // .filter((product) =>
  //   selectedCategory === "all"
  //     ? true
  //     : product.category === selectedCategory
  // )
  // .filter((product) =>
  //   product.price >= priceRange[0] &&
  //   product.price <= priceRange[1]
  // )
  // .filter((product) =>
  //   product.rating >= minRating
  // );



  const filteredProducts = products.filter((product) => {
  // Category filter
  const categoryMatch =
    selectedCategory === "all" ||
    product.category === selectedCategory;

  // Price filter
  const priceMatch =
    product.price >= priceRange[0] &&
    product.price <= priceRange[1];

  // Rating filter
  const ratingMatch =
    product.rating >= minRating;

  // Return only if all conditions match
  return categoryMatch && priceMatch && ratingMatch;
});



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

       <div className="filters-container">

     <CategoryFilter
      categories={categories}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      />
 
      <PriceSort
       sortOption={sortOption}
       setSortOption={setSortOption}
      />

      <PriceRange
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />

       <RatingFilter
         minRating={minRating}
         setMinRating={setMinRating}
       />

    </div>
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
                      <div className="rating">
                        {"⭐".repeat(Math.floor(product.rating))}
                          <span className="rating-number"> ({product.rating})</span>
                      </div>
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

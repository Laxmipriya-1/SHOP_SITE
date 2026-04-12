import React from "react";

const PriceRange = ({ priceRange, setPriceRange }) => {
  return (
    <div className="filter-box">
      <h4>Price Range</h4>

      <input
        type="range"
        min="0"
        max="100"
        value={priceRange[1]}
        onChange={(e) =>
          setPriceRange([0, Number(e.target.value)])
        }
      />

      <p>Up to ${priceRange[1]}</p>
    </div>
  );
};

export default PriceRange;
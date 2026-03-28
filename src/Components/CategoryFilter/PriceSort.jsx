import React from "react";
import './PriceSort.css'; // you can reuse same CSS

const PriceSort = ({ sortOption, setSortOption }) => {
  return (
    <div className="filter-buttons">
      <button
        onClick={() => setSortOption("default")}
        className={sortOption === "default" ? "active" : ""}
      >
        Default
      </button>

      <button
        onClick={() => setSortOption("lowToHigh")}
        className={sortOption === "lowToHigh" ? "active" : ""}
      >
        Price: Low to High
      </button>

      <button
        onClick={() => setSortOption("highToLow")}
        className={sortOption === "highToLow" ? "active" : ""}
      >
        Price: High to Low
      </button>
    </div>
  );
};

export default PriceSort;
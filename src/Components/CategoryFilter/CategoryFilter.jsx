import React from "react";
import './CategoryFilter.css'

const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="filter-buttons">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={selectedCategory === cat ? "active" : ""}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
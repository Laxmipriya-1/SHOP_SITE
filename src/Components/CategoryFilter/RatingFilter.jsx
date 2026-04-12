import React from "react";

const RatingFilter = ({ minRating, setMinRating }) => {
  return (
    <div className="filter-box">
      <h4>Ratings</h4>

      <select
        value={minRating}
        onChange={(e) => setMinRating(Number(e.target.value))}
      >
        <option value={0}>All</option>
        <option value={4}>⭐ 4 & above</option>
        <option value={3}>⭐ 3 & above</option>
        <option value={2}>⭐ 2 & above</option>
      </select>
    </div>
  );
};

export default RatingFilter;



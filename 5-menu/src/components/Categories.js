import React from "react";

export default function Categories({ categories, filterItems }) {
  return (
    <div className="btn-container">
      {/* <button onClick={() => filterItems("all")}>All</button>
      <button onClick={() => filterItems("breakfast")}>Breakfast</button>
      <button onClick={() => filterItems("lunch")}>Lunch</button>
      <button onClick={() => filterItems("shakes")}>Shakes</button> */}

      {categories.map((category, index) => {
        return (
          <button key={index} onClick={() => filterItems(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
}

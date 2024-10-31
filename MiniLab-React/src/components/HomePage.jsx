import React from "react";

export const HomePage = ({ items, onDelete }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {items.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Price:${item.price}</p>
            <p>Stock:{item.stock}</p>

            <span>In Stock: {item.stock > 0 ? "✅" : "❌"}</span>
            <button onClick={() => onDelete(item.id)}> </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

import React from "react";
import "./ProductList.css";

export default function ProductList({ category }) {
  const products = [
    {
      name: "Metal Gate",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      type: "Window Making",
    },
    {
      name: "Iron Gate",
      img: "https://images.unsplash.com/photo-1600585154084-4e5fe7c4613a",
      type: "Hackery Making",
    },
    {
      name: "Steel Welding",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      type: "MIG Welding",
    },
    {
      name: "Metal Work",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      type: "Metal Coat Making",
    },
    {
      name: "Car Welding",
      img: "https://images.unsplash.com/photo-1581382575275-97901c35e7c3",
      type: "Car Part Repair",
    },
  ];

  const filtered = category
    ? products.filter((p) => p.type === category)
    : products;

  return (
    <div className="simple-container">
      {filtered.map((item, index) => (
        <div className="simple-card" key={index}>
          <img src={item.img} alt={item.name} />
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  );
}

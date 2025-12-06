import React from "react";
import "./ProductList.css";

export default function ProductList() {
  const categories = [
    // ----------- ROW 1 -----------
    {
      name: "Garden Gate fabrication",
      img: "./images/Garden gate fabrication.jpeg"
    },
    {
      name: "Grass Cutting Machine",
      img: "./images/grass cutting machine.jpeg"
    },
    {
      name: "Hackery Making",
      img: "./images/Hackery Making.jpeg"
    },
    {
      name: "Iron Building Design",
      img: "./images/Iron building design.jpeg"
    },
    {
      name: "Iron Sturdy Frame Cupboard",
      img: "./images/Iron sturdy frameCoupboard.jpeg"
    },
    {
      name: "Steel Gate Making",
      img: "./images/Steel Gate Making.jpeg"
    },

    // ----------- ROW 2 (NEW) -----------
    {
      name: "Stainless Steel Welding",
      img: "./images/Stainless steel Weilding.jpeg"
    },
    {
      name: "Grill Fabrication",
      img: "./images/Grill Fabrication.jpeg"
    },
    {
      name: "Balcony Making",
      img: "./images/Balcony Making.jpeg"
    },
    {
      name: "Grill Staircase Design",
      img: "./images/Grill stairs Design.jpeg"
    },
    {
      name: "Machine Part Welding",
      img: "./images/Machine Part Weilding.jpeg"
    },
    {
      name: "Custom Metal Design",
      img: "./images/Custom Metal Design.jpeg"
    }
  ];

  return (
    <div className="category-container">
      {categories.map((item, index) => (
        <div className="category-card" key={index}>
          <img src={item.img} alt={item.name} />
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  );
}

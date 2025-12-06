import React from "react";
import ProductList from "./ProductList";

export default function Home() {
  return (
    <div style={{ padding: "30px" }}>
      <h1
        style={{
          fontSize: "45px",
          fontWeight: "900",
          textAlign: "center",
          color: "#333",
          marginBottom: "30px"
        }}
      >
        ⚒Bhaveshwari Welding Works ⚒
      </h1>

      <ProductList />
    </div>
  );
}

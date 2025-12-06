import React from "react";

function Gallery() {
  const images = [
    "/images/Garden gate fabrication.jpeg",
    "/images/grass cutting machine.jpeg",
    "/images/Hackery Making.jpeg",
    "/images/Iron building design.jpeg",
    "/images/Iron sturdy frameCoupboard.jpeg",
    "/images/Steel Gate Making.jpeg"
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", justifyContent: "center", padding: "20px" }}>
      {images.map((img, index) => (
        <div key={index} style={{ textAlign: "center" }}>
          <img
            src={img}
            alt={`img-${index}`}
            style={{ width: "200px", height: "150px", objectFit: "cover", borderRadius: "8px" }}
          />
          <p>{img.split("/").pop().replace(".jpeg", "")}</p>
        </div>
      ))}
    </div>
  );
}

export default Gallery;

import React from "react";
import "./Gallery.css";

function Gallery() {
  const galleryImages = [
    "src/assets/images/Gallery/img1.jpg",
    "src/assets/images/Gallery/img2.jpeg",
    "src/assets/images/Gallery/img3.jpeg",
    "src/assets/images/Gallery/img4.jpeg",
    "src/assets/images/Gallery/img5.jpeg",
    "src/assets/images/Gallery/img6.jpeg",
    "src/assets/images/Gallery/img7.jpeg",
    "src/assets/images/Gallery/img8.jpeg",
    "src/assets/images/Gallery/img9.jpeg",
    "src/assets/images/Gallery/img10.jpeg",
    "src/assets/images/Gallery/img11.jpeg",
    "src/assets/images/Gallery/img3.jpeg"
  ];

  return (
    <div className="gallery-page">
      <h1 className="gallery-title">Bridal & Beauty Gallery</h1>
      <p style={{ maxWidth: 900, margin: '0 auto 20px', color: '#333' }}>
        A selection of looks we've created for clients. Images are for inspiration — we craft custom looks to fit your style.
      </p>
      <div className="gallery-grid">
        {galleryImages.map((img, index) => (
          <img key={index} src={`${img}?q=80&w=900&auto=format&fit=crop`} alt={`gallery-${index}`} className="gallery-img" />
        ))}
      </div>
    </div>
  );
}

export default Gallery;

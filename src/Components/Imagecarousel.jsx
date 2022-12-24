import React, { useState } from "react";
import "./Imagecarousel.css";

function Imagecarousel({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    const nextIndex = currentImage + 1;
    if (nextIndex >= images.length) {
      setCurrentImage(0);
    } else {
      setCurrentImage(nextIndex);
    }
  };

  const prevImage = () => {
    const prevIndex = currentImage - 1;
    if (prevIndex < 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage(prevIndex);
    }
  };

  return (
    <div className="product-container">
      <button className="pre-btn" onClick={prevImage}>
        <p>&lt;</p>
      </button>

      <button className="next-btn" onClick={nextImage}>
        <p>&gt;</p>
      </button>

      <div className="product-carousel">
        <img src={images[currentImage]} alt="carouselimage" />
      </div>
    </div>
  );
}

export default Imagecarousel;

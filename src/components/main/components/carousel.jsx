import React, { useState } from "react";
import "./carousel.css"; 

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/assets/images/logo.svg",
    "/assets/images/logo.svg",
    "/assets/images/logo.svg",
    "/assets/images/logo.svg",
    "/assets/images/logo.svg",
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="carousel-container">
      <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 375}px)` }}>
        {images.map((image, index) => (
          <div className="carousel-item" key={index}>
            <img src={image} alt={`Работа ${index + 1}`} draggable="false" />
            <button className="more_buttons hover">Узнать больше</button>
          </div>
        ))}
      </div>

      <div className="carousel-controls">
        <button
          id="prev"
          className="arrow_buttons hover"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <span className="svg_wrapper">
            <img
              src="/assets/images/Arrow1.svg"
              width="36"
              draggable="false"
              alt="иконка стрелки влево"
            />
          </span>
        </button>

        <div className="progress-bar">
          <div id="progress" className="progress" style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}></div>
        </div>

        <button
          id="next"
          className="arrow_buttons hover"
          onClick={handleNext}
          disabled={currentIndex === images.length - 1}
        >
          <span className="svg_wrapper">
            <img
              src="/assets/images/Arrow2.svg"
              width="36"
              draggable="false"
              alt="иконка стрелки вправо"
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;

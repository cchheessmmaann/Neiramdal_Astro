import React from "react";
import Carousel from "../components/carousel.jsx";
import "./works.css"; 

const Works = () => {
  return (
    <div className="works">
      <div className="container">
        <h2>Наши работы</h2>
      </div>
      <Carousel />
    </div>
  );
};

export default Works;

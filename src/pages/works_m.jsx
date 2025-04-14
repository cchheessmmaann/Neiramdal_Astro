import React, { useEffect } from "react";
import WorksHeader from "../components/WorksHeader";
import "./works.css";

const Works = () => {
  useEffect(() => {
    const overlay = document.querySelector(".overlay");
    setTimeout(() => {
      overlay.classList.add("hidden");
    }, 200);

    window.addEventListener("pageshow", () => {
      setTimeout(() => {
        overlay.classList.add("hidden");
      }, 200);
    });
  }, []);

  return (
    <main id="works">
      <WorksHeader />
      <div className="container">
        <div className="center">
          <video
            id="background-video"
            autoplay
            muted
            loop
            height="700"
            width="700"
          >
            <source src="/assets/videos/intro.mp4" />
          </video>
        </div>
      </div>

      <div className="overlay">
        <div className="overlay-strip"></div>
        <div className="overlay-strip"></div>
        <div className="overlay-strip"></div>
        <div className="overlay-strip"></div>
        <div className="overlay-strip"></div>
      </div>
    </main>
  );
};

export default Works;

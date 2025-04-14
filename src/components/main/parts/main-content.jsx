import React, { useEffect, useState } from "react";
import "./main-content.css";

const MainContent = () => {
  const [typedText, setTypedText] = useState("");
  const text = "Neiramdal";
  const speed = 100;
  const delay = 2500;
  let i = 0;

  useEffect(() => {
    const typeEffect = () => {
      if (text.charAt(i) === "l") {
        setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, 500);
        setTimeout(() => {
          setTypedText(typedText + "l");
        }, 1000);
        return;
      }
      if (i < text.length) {
        setTypedText(typedText + text.charAt(i));
        i++;
        setTimeout(typeEffect, speed);
      }
    };
    setTimeout(() => {
      typeEffect();
    }, delay);
  }, [typedText]);

  return (
    <div className="main-content">
      <div className="main-title">{typedText}</div>
      <h1 className="main-text">
        Neiramdal — Ваш партнер <br />
        в мире цифровых технологий!
      </h1>
      <button className="main-button hover" id="button-contacts">
        Связаться
      </button>
    </div>
  );
};

export default MainContent;

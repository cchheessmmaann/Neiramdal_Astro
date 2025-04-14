import React, { useState } from "react";
import "./main-order.css";

const MainOrder = () => {
  const [isContactVisible, setIsContactVisible] = useState(false);

  const handleButtonClick = () => {
    setIsContactVisible(true);
  };

  return (
    <div className="content">
      <div className="title reveal-type">
        Готовы реализовать<br />проект вместе с нами?
      </div>
      <div className="subtitle reveal-type">Контакты на 80 пикселей ниже</div>

      <button className="button hover" id="contact_button" onClick={handleButtonClick}>
        Связаться
      </button>

      {isContactVisible && (
        <div id="blur-splash">
          <div id="contacts-card">
            <div className="title">Напишите нам</div>
            <div className="icons">
              <a href="https://t.me/Neiramdal" className="hover" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/tg.svg" alt="tg" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=89245699299" className="hover" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/whatsapp.svg" alt="whatsapp" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainOrder;

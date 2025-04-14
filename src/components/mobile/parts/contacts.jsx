import React, { useState } from "react";
import "./Contacts.css"; // Подключаем стили

const Contacts = () => {
  const [isContactVisible, setIsContactVisible] = useState(false);

  const handleButtonClick = () => {
    setIsContactVisible(true);
  };

  return (
    <div id="contacts">
      <p className="title">Готовы реализовать <br /> проект вместе с нами?</p>
      <p className="subtitle">Контакты 40 пикселей ниже</p>
      <button type="button" id="contact_button" onClick={handleButtonClick}>
        Контакты
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

export default Contacts;

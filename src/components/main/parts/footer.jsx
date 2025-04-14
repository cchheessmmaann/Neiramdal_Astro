import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="number_div">
        <a href="tel:+79245699299" className="number hover"> +7 (924) 569-92-99</a>
      </div>

      <div className="col">
        <div className="title">Соцсети</div>
        <a href="https://t.me/Neiramdal" className="text hover" target="_blank" rel="noopener noreferrer">
          Telegram
        </a>
        <a href="https://api.whatsapp.com/send?phone=89245699299" className="text hover" target="_blank" rel="noopener noreferrer">
          Whatsapp
        </a>
      </div>

      <div className="col">
        <div className="title">Сайт</div>
        <a href="/" className="text hover">Главная</a>
        <p id="worksPage2" className="text hover">Работы</p>
      </div>

      <div className="col2">
        <a href="mailto:neiramdal@mail.ru" className="email hover">neiramdal@mail.ru</a>
        <div className="copyright">©2024-2025, Neiramdal Company</div>
      </div>
    </div>
  );
};

export default Footer;

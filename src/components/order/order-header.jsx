import React, { useState } from "react";
import "./order-header.css";

const OrderHeader = () => {
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  return (
    <header id="order-header">
      <div className="header-logo-a"
           onMouseEnter={() => setIsLogoHovered(true)}
           onMouseLeave={() => setIsLogoHovered(false)}>
        <img
          alt="Neiramdal logo"
          className={`header-logo ${isLogoHovered ? 'hidden' : ''}`}
          src="/assets/images/logo.svg"
          width="102"
          height="56"
          draggable="false"
        />
        <img
          alt="Neiramdal logo"
          className={`header-logo-hover ${isLogoHovered ? 'visible' : ''}`}
          src="/assets/images/logo-hover.svg"
          width="102"
          height="56"
          draggable="false"
        />
      </div>
      <div className="wrapper">
        <nav>
          <a href="/" className="nav-button hover">Главная</a>
          <a href="/works" className="nav-button hover">Работы</a>
          <a id="order-lang-button" className="hover">RU</a>
        </nav>
      </div>
    </header>
  );
};

export default OrderHeader;

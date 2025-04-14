import React, { useState } from "react";
import "./main-header.css";

const Header = () => {
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  return (
    <header id="main-header">
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
          <a id="main-nav-button">Главная</a>
          <a className="nav-button hover" id="worksPage">Работы</a>
          <a id="lang-button" className="hover">RU</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

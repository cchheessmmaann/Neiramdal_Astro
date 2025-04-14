import React, { useState } from "react";
import "./main-island.css";

const Island = () => {
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  return (
    <div id="island">
      <div
        className="header-logo-a hover"
        id="island-logo"
        onMouseEnter={() => setIsLogoHovered(true)}
        onMouseLeave={() => setIsLogoHovered(false)}
      >
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
      <div className="button-container">
        <div id="nav-who-we-are" className="nav hover">Кто мы</div>
        <div id="nav-skills" className="nav hover">Навыки</div>
        <div id="nav-projects" className="nav hover">Проекты</div>
        <div id="nav-contacts" className="nav hover">Контакты</div>
        <div className="hover-bg"></div>
      </div>
    </div>
  );
};

export default Island;

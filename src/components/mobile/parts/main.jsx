import React from "react";
import Who from "../parts/who.jsx";
import WhoEnd from "../parts/who-end.jsx";
import Skills from "../parts/skills.jsx";
import Works from "../parts/works.jsx";
import Contacts from "../parts/contacts.jsx";
import "./Main.css";

const Main = () => {
  return (
    <main>
      <div className="MainInf">
        <h1 className="m_15">Neiramdal</h1>
        <p className="mLeftNone m_30">
          Neiramdal — Ваш партнер <br />
          в мире цифровых технологий!
        </p>
        <button className="orderBtn" id="button-contacts" type="button">
          Заказать
        </button>
      </div>

      <div id="who">
        <div className="container">
          <Who />
          <WhoEnd />
        </div>
      </div>

      <Skills />
      <Works />
      <Contacts />
    </main>
  );
};

export default Main;

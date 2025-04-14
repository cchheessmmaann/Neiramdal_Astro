import React, { useState } from "react";
import "./who-end.css";

const WhoEnd = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId);
  };

  return (
    <div>
      <h2 className="who-title" id="who-title2">/Почему именно мы?</h2>
      <div className="grid-container">
        <div className="card" id="card-one" onClick={() => handleCardClick(1)}>
          <div className="card-title" id="card-one-title">Индивидуальный <br />подход</div>
          <div className={`card-content ${activeCard === 1 ? "open" : ""}`}>
            Анализируем бизнес и разрабатываем продукт,<br />соответствующий Вашим
            целям
          </div>
        </div>
        <div className="card" id="card-two" onClick={() => handleCardClick(2)}>
          <div className="card-title" id="card-two-title">Гарантия<br />результата</div>
          <div className={`card-content ${activeCard === 2 ? "open" : ""}`}>
            Наши проекты проходят тщательное <br /> тестирование на каждом этапе, что
            обеспечивает уверенность в конечном продукте
          </div>
        </div>
        <div className="card" id="card-three" onClick={() => handleCardClick(3)}>
          <div className="card-title" id="card-three-title">
            Соответствие<br />мировым стандартам
          </div>
          <div className={`card-content ${activeCard === 3 ? "open" : ""}`}>
            В нашем арсенале только передовые <br /> инструменты и фреймворки, необходимые
            для надежных и адаптируемых решений
          </div>
        </div>
        <div className="card" id="card-four" onClick={() => handleCardClick(4)}>
          <div className="card-title" id="card-four-title">
            Комплексная поддержка<br />на каждом этапе
          </div>
          <div className={`card-content ${activeCard === 4 ? "open" : ""}`}>
            Сопровождаем проекты и после их запуска, <br /> помогая адаптироваться к
            быстро меняющимся потребностям бизнеса
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoEnd;

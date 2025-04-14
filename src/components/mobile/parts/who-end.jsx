import React from "react";
import "./WhoEnd.css";

const WhoEnd = () => {
  return (
    <div className="whoEnd">
      <h2>Почему именно мы?</h2>
      <div className="WhoCards">
        <div className="WhoCard">
          <h2 className="h2who" id="card1">Индивидуальный подход</h2>
          <p>
            Анализируем бизнес и разрабатываем <br />
            продукт, соответствующий Вашим целям
          </p>
        </div>

        <div className="WhoCard">
          <h2 className="h2who" id="card2">
            Соответствие мировым <br />
            стандартам
          </h2>
          <p>
            В нашем арсенале только передовые инструменты и фреймворки, необходимые
            для надежных и адаптируемых решений
          </p>
        </div>

        <div className="WhoCard">
          <h2 className="h2who" id="card3">Гарантия результата</h2>
          <p>
            Наши проекты проходят тщательное тестирование на каждом этапе, что
            обеспечивает уверенность в конечном продукте
          </p>
        </div>

        <div className="WhoCard">
          <h2 className="h2who" id="card4">
            Комплексная поддержка <br />
            на каждом этапе
          </h2>
          <p>
            Сопровождаем проекты и после их запуска, помогая адаптироваться к быстро
            меняющимся потребностям бизнеса
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoEnd;

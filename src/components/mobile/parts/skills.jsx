import React, { useState } from "react";
import "./skills.css";

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const toggleSkill = (skillId) => {
    setActiveSkill(activeSkill === skillId ? null : skillId);
  };

  return (
    <div className="skills generalMargin60 container">
      <h2>Что мы умеем?</h2>
      <div className="skills1 skills_paragraph">
        <div className="skills-header" onClick={() => toggleSkill(1)}>
          <p>
            Разработка <br />
            кроссплатформенных <br />
            приложений
          </p>
          <img
            className={`skills-icon ${activeSkill === 1 ? "rotate" : ""}`}
            src="/assets/images/arrow_down.svg"
            alt="arrow_down"
          />
        </div>
        {activeSkill === 1 && (
          <div className="skills-price">
            <div className="skills-price-first">
              <div className="skills-price-first-content">
                <p>Стоимость:</p>
                <p>
                  от 50.000 руб. мобильная разработка*<br />
                  от 30.000 руб. десктопная разработка*
                </p>
              </div>
              <div className="skills-price-first-content">
                <p>Сроки:</p>
                <p>от 3 месяцев*</p>
              </div>
              <p className="grey">*Цена и сроки зависят от тех. требований</p>
            </div>
            <div className="platforms">
              <div className="platforms-card">IOS</div>
              <div className="platforms-card">Android</div>
              <div className="platforms-card">Desktop</div>
            </div>
            <p>
              Сегодня важно создавать цифровые решения, которые работают
              на разных устройствах и операционных системах. В Neiramdal
              мы специализируемся на разработке кроссплатформенных приложений,
              обеспечивая их эффективность, универсальность и высокое качество
              работы.
            </p>
          </div>
        )}
      </div>
      <div className="skills2 skills_paragraph">
        <div className="skills-header" onClick={() => toggleSkill(2)}>
          <p>
            Создание <br />
            веб-приложений <br />
            и веб-сайтов
          </p>
          <img
            className={`skills-icon ${activeSkill === 2 ? "rotate" : ""}`}
            src="/assets/images/arrow_down.svg"
            alt="arrow_down"
          />
        </div>
        {activeSkill === 2 && (
          <div className="skills-price">
            <div className="skills-price-first">
              <div className="skills-price-first-content">
                <p>Стоимость:</p>
                <p>
                  от 10.000 руб. сайт,<br />
                  от 40.000 руб. веб-приложение
                </p>
              </div>
              <div className="skills-price-first-content">
                <p>Сроки:</p>
                <p>от 2 недель до 2 месяцев*</p>
              </div>
              <p className="grey">*Цена и сроки зависят от тех. требований</p>
            </div>
            <div className="platforms">
              <div className="platforms-card">Web</div>
              <div className="platforms-card">Mobile</div>
              <div className="platforms-card">Desktop</div>
            </div>
            <p>
              В современном цифровом мире веб-решения играют ключевую роль
              в развитии бизнеса и взаимодействии с клиентами. В Neiramdal
              мы предлагаем полный спектр услуг по разработке веб-приложений
              и сайтов, создавая продукты, которые работают безотказно
              и привлекают внимание.
            </p>
          </div>
        )}
      </div>
      <div className="skills3 skills_paragraph">
        <div className="skills-header" onClick={() => toggleSkill(3)}>
          <p>
            Разработка <br />
            чат-ботов
          </p>
          <img
            className={`skills-icon ${activeSkill === 3 ? "rotate" : ""}`}
            src="/assets/images/arrow_down.svg"
            alt="arrow_down"
          />
        </div>
        {activeSkill === 3 && (
          <div className="skills-price">
            <div className="skills-price-first">
              <div className="skills-price-first-content">
                <p>Стоимость:</p>
                <p>от 1.000 руб.*</p>
              </div>
              <div className="skills-price-first-content">
                <p>Сроки:</p>
                <p>от 5 дней*</p>
              </div>
              <p className="grey">*Цена и сроки зависят от тех. требований</p>
            </div>
            <div className="platforms">
              <div className="platforms-card">Web</div>
              <div className="platforms-card">Mobile</div>
              <div className="platforms-card">Desktop</div>
            </div>
            <p>
              Автоматизация общения с клиентами — ключ к улучшению
              пользовательского опыта и повышению эффективности бизнеса.
              В Neiramdal мы разрабатываем умных и функциональных чат-ботов,
              которые помогают вам оставаться на связи с клиентами 24/7.
            </p>
          </div>
          
        )}
        <div class="skills-content">
        <p>
          <b>Что умеют наши чат-боты?</b>

          <div class="skills-list">
            <p>
              <b>1. Интеграция с системами</b>
              <br />
              Подключение к CRM, ERP, базам данных или другим сервисам для быстрого
              получения информации.
            </p>
            <p>
              <b>2. Персонализация</b>
              <br />
              Чат-боты адаптируются под индивидуальные потребности пользователей,
              повышая их вовлеченность.
            </p>
            <p>
              <b>3. Уникальный веб-дизайн</b>
              <br />
              Поддержка на нескольких платформах
            </p>
            <p>
              <b>4. Уникальный дизайн</b>
              <br />
              Разработка для мессенджеров (Telegram, WhatsApp), веб-сайтов и мобильных
              приложений.
            </p>
          </div>
        </p>
        <p>
          Сделайте общение с клиентами быстрее, удобнее и продуктивнее с помощью
          чат-ботов от Neiramdal. Мы создадим решение, которое станет
          незаменимым помощником для вашего бизнеса и принесет вам
          дополнительные конкурентные преимущества.
        </p>
      </div>
    </div>
  </div>
  );
};

export default Skills;

import React, { useState } from "react";
import "./skills-content.css";

const SkillsContent = () => {
  const [activePart, setActivePart] = useState(null);

  const handlePartToggle = (partId) => {
    setActivePart(activePart === partId ? null : partId);
  };

  return (
    <div class="container">
  <h2 class="skills-title reveal-type">/Что мы умеем?</h2>
  <div class="skills-parts">
    <div class="skills-part hover">
      <div class="skills-part-header">
        <div class="skills-part-title">
          Разработка кроссплатформенных приложений
        </div>
        <img
          alt="arrow down"
          class="skills-part-icon"
          src="assets/images/arrow_down.svg"
          width="30"
          height="18"
          draggable="false"
        />
      </div>

      <div class="skills-part-content">
        <div class="row">
          <div class="col">
            <div class="price-title">Стоимость:</div>
            <div class="price">
              от 50.000 руб. мобильная разработка*<br />от 30.000 руб.
              десктопная разработка*
            </div>
            <div class="date-title">Сроки:</div>
            <div class="date">от 3 месяцев*</div>
            <div class="footer">
              *Цена и сроки зависят от тех. <br />требований
            </div>
          </div>
          <div class="col">
            <div class="tags">
              <div class="tag">IOS</div>
              <div class="tag">Android</div>
              <div class="tag">Desktop</div>
            </div>
            <div class="text">
              Сегодня важно создавать цифровые решения, которые <br />работают
              на разных устройствах и операционных <br />системах. В Neiramdal
              мы специализируемся <br /> на разработке кроссплатформенных приложений,
              <br />
              обеспечивая их эффективность, универсальность <br /> и высокое качество
              работы.
            </div>
          </div>
        </div>
        <div class="part2-title">
          Что включает разработка кроссплатформенных приложений с нами:
        </div>
        <div class="part2-content">
          <div class="part2-content-title">1. Скорость разработки</div>
          <div class="part2-content-text">
            Один код для двух платформ, что значительно экономит время и
            ресурсы.
          </div>
        </div>
        <div class="part2-content">
          <div class="part2-content-title">2. Гибкость и масштабируемость</div>
          <div class="part2-content-text">
            Легкая интеграция новых функций и адаптация под любые изменения.
          </div>
        </div>
        <div class="part2-content">
          <div class="part2-content-title">3. Высокая производительность</div>
          <div class="part2-content-text">
            Плавная работа приложений и естественный пользовательский интерфейс.
          </div>
        </div>
        <div class="part2-content">
          <div class="part2-content-title">4. Уникальный дизайн</div>
          <div class="part2-content-text">
            Мы создаем визуально привлекательные интерфейсы, подчеркивающие
            индивидуальность вашего бренда.
          </div>
        </div>
        <div class="part2-footer">
          Позвольте вашему бизнесу шагнуть в цифровую эпоху с помощью
          кроссплатформенных <br /> приложений от Neiramdal! Мы готовы превратить
          вашу идею в универсальное решение, <br /> которое будет доступно миллионам
          пользователей.
        </div>
      </div>
    </div>

    <div class="skills-part hover">
      <div class="skills-part-header">
        <div class="skills-part-title">
          Создание веб-приложений и веб-сайтов
        </div>
        <img
          alt="arrow down"
          class="skills-part-icon"
          src="assets/images/arrow_down.svg"
          width="30"
          height="18"
          draggable="false"
        />
      </div>

      <div class="skills-part-content">
        <div class="row">
          <div class="col">
            <div class="price-title">Стоимость:</div>
            <div class="price">
              от 10.000 руб. сайт,<br />
              от 40.000 руб. веб-приложение
            </div>
            <div class="date-title">Сроки:</div>
            <div class="date">от 2 недель до 2 месяцев*</div>
            <div class="footer">
              *Цена и сроки зависят от тех. <br />требований
            </div>
          </div>
          <div class="col">
            <div class="tags">
              <div class="tag">Web</div>
              <div class="tag">Mobile</div>
              <div class="tag">Desktop</div>
            </div>
            <div class="text">
              В современном цифровом мире веб-решения играют <br /> ключевую роль
              в развитии бизнеса и взаимодействии <br /> с клиентами. В Neiramdal
              мы предлагаем полный спектр <br /> услуг по разработке веб-приложений
              и сайтов, <br /> создавая продукты, которые работают безотказно <br
              /> и привлекают внимание.
            </div>
          </div>
        </div>
        <div class="part2-title">Что мы предлагаем?</div>
        <div class="part2-content">
          <div class="part2-content-title">1. Разработка веб-сайтов</div>
          <div class="part2-content-text">
            От одностраничных лендингов до сложных корпоративных порталов — мы
            создаем сайты, которые привлекают и конвертируют посетителей.
          </div>
        </div>
        <div class="part2-content">
          <div class="part2-content-title">2. Веб-приложения</div>
          <div class="part2-content-text">
            Интерактивные, высокопроизводительные решения для управления
            бизнес-процессами, онлайн-сервисами и взаимодействия <br /> с клиентами.
          </div>
        </div>
        <div class="part2-content">
          <div class="part2-content-title">3. Уникальный веб-дизайн</div>
          <div class="part2-content-text">
            Мы разрабатываем интерфейсы, которые сочетают эстетику и
            функциональность, делая ваш продукт заметным.
          </div>
        </div>
        <div class="part2-content">
          <div class="part2-content-title">4. Интеграция и API</div>
          <div class="part2-content-text">
            Подключаем веб-решения к сторонним системам, обеспечивая их
            бесшовное взаимодействие.
          </div>
        </div>
        <div class="part2-footer">
          Сделайте ваш бизнес ближе к клиентам с помощью веб-приложений и сайтов
          от Neiramdal. <br /> Мы готовы воплотить вашу идею в жизнь, создавая продукт,
          который выделяется среди <br /> конкурентов!
        </div>
      </div>
    </div>
    <div class="skills-part hover">
      <div class="skills-part-header">
        <div class="skills-part-title">Разработка чат-ботов</div>
        <img
          alt="arrow down"
          class="skills-part-icon"
          src="assets/images/arrow_down.svg"
          width="30"
          height="18"
          draggable="false"
        />
      </div>

      <div class="skills-part-content">
        <div class="row">
          <div class="col">
            <div class="price-title">Стоимость:</div>
            <div class="price">от 1.000 руб.*</div>
            <div class="date-title">Сроки:</div>
            <div class="date">от 5 дней*</div>
            <div class="footer">
              *Цена и сроки зависят от тех. <br />требований
            </div>
          </div>
          <div class="col">
            <div class="tags">
              <div class="tag">Web</div>
              <div class="tag">Mobile</div>
              <div class="tag">Desktop</div>
            </div>
            <div class="text">
              Автоматизация общения с клиентами — ключ к улучшению
              пользовательского опыта и повышению эффективности бизнеса. <br />  В
              Neiramdal мы разрабатываем умных и функциональных чат-ботов,
              которые помогают вам оставаться на связи с клиентами 24/7.
            </div>
          </div>
        </div>
        <div class="part2-title">Что умеют наши чат-боты?</div>
        <div class="part2-content">
          <div class="part2-content-title">1. Интеграция с системами</div>
          <div class="part2-content-text">
            Подключение к CRM, ERP, базам данных или другим сервисам для
            быстрого получения информации.
          </div>
        </div>
        <div class="part2-content">
          <div class="part2-content-title">2. Персонализация</div>
          <div class="part2-content-text">
            Чат-боты адаптируются под индивидуальные потребности пользователей,
            повышая их вовлеченность.
          </div>
        </div>
        <div class="part2-content">
          <div class="part2-content-title">3. Уникальный веб-дизайн</div>
          <div class="part2-content-text">
            Мы разрабатываем интерфейсы, которые сочетают эстетику и
            функциональность, делая ваш продукт заметным.
          </div>
        </div>
        <div class="part2-content">
          <div class="part2-content-title">
            4. Поддержка на нескольких платформах
          </div>
          <div class="part2-content-text">
            Разработка для мессенджеров (Telegram, WhatsApp), веб-сайтов и
            мобильных приложений.
          </div>
        </div>
        <div class="part2-footer">
          Сделайте общение с клиентами быстрее, удобнее и продуктивнее с помощью
          чат-ботов <br /> от Neiramdal. Мы создадим решение, которое станет незаменимым
          помощником для вашего <br /> бизнеса и принесет вам дополнительные конкурентные
          преимущества.
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default SkillsContent;

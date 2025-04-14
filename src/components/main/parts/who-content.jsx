import React, { useEffect, useState } from "react";
import "./who-content.css";

const WhoContent = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsContentVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2 id="who-title">/Кто мы?</h2>

      <p className={`reveal-type ${isContentVisible ? "visible" : ""}`}>
        Neiramdal — команда молодых профессионалов. <br />
        Мы специализируемся на разработке программного <br />
        обеспечения, кроссплатформенных приложений <br />
        и интеллектуальных чат-ботов.
      </p>

      <div className={`who-content1 reveal-type ${isContentVisible ? "visible" : ""}`}>
        Команда Neiramdal создаёт и внедряет инновационные <br />
        продукты, которые позволят Вашему бизнесу всегда быть <br />
        на шаг впереди конкурентов!
      </div>
    </div>
  );
};

export default WhoContent;

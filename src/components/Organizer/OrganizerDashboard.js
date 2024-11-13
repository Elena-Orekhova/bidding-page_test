import React, { useState } from "react";

const OrganizerDashboard = () => {
  const [isTradingActive, setIsTradingActive] = useState(false);

  const startTrading = () => {
    setIsTradingActive(true);
    // Здесь может быть логика для начала торгов, например, запуск таймера
  };

  const endTrading = () => {
    setIsTradingActive(false);
    // Логика для завершения торгов
  };

  return (
    <div>
      <h2>Панель Организатора</h2>
      <p>{isTradingActive ? "Торги активны" : "Торги завершены"}</p>
      <button onClick={startTrading} disabled={isTradingActive}>
        Начать торги
      </button>
      <button onClick={endTrading} disabled={!isTradingActive}>
        Завершить торги
      </button>
    </div>
  );
};

export default OrganizerDashboard;

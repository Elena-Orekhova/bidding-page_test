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
    <div className="organizer-dashboard">
      <h2 className="organizer-dashboard__title">Панель Организатора</h2>
      <p className="organizer-dashboard__status">
        {isTradingActive ? "Торги активны" : "Торги завершены"}
      </p>
      <button
        className="organizer-dashboard__button organizer-dashboard__button--start"
        onClick={startTrading}
        disabled={isTradingActive}
      >
        Начать торги
      </button>
      <button
        className="organizer-dashboard__button organizer-dashboard__button--end"
        onClick={endTrading}
        disabled={!isTradingActive}
      >
        Завершить торги
      </button>
    </div>
  );
};

export default OrganizerDashboard;

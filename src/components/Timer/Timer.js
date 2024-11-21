import React from "react";
import "./timer.css";

const Timer = ({ auctionTime, moveTime }) => {
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="timer">
      <div className="timer__auction">
        <span className="timer__label">Время до закрытия торгов:</span>
        <span className="timer__value">{formatTime(auctionTime)}</span>
      </div>
      <div className="timer__move">
        <span className="timer__label">Оставшееся время хода:</span>
        <span className="timer__value">{formatTime(moveTime)}</span>
      </div>
    </div>
  );
};

export default Timer;

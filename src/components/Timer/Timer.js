import React from "react";

const Timer = ({ auctionTime, moveTime }) => {
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="main__timer">
      <div className="main__timer_timer-auction">
        Время до закрытия торгов: {formatTime(auctionTime)}
      </div>
      <div className="main__timer_timer-move">
        Оставшееся время хода: {formatTime(moveTime)}
      </div>
    </div>
  );
};

export default Timer;

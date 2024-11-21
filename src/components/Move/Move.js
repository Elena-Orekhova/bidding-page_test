import React from "react";

const Move = ({ onMove, currentPlayer }) => {
  return (
    <div className="move">
      <p className="move__message">{currentPlayer.name}, ваш ход!</p>
      <button className="move__button" onClick={onMove}>
        Передать ход
      </button>
    </div>
  );
};

export default Move;

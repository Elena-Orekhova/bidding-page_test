import React from "react";

const Move = ({ onMove, currentPlayer }) => {
  return (
    <div>
      <p>{currentPlayer.name}, ваш ход!</p>
      <button className="main__button_button-move" onClick={onMove}>
        Передать ход
      </button>
    </div>
  );
};

export default Move;

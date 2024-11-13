import React from "react";

const Price = ({ onPrice }) => {
  return (
    <button className="main__button_button-price" onClick={onPrice}>
      Снизить цену
    </button>
  );
};

export default Price;

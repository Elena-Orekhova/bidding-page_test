import React from "react";
import { tradeName } from "../mockData";

import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Ход торгов</h1>
      <h2 className="header__subtitle">Тестовые торги на {tradeName}</h2>
      <hr className="header__divider" />
    </header>
  );
};

export default Header;

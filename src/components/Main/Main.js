import React, { useState, useEffect } from "react";
import Move from "../Move/Move";
import Price from "../Price/Price";
import Timer from "../Timer/Timer";
import Table from "../Table/Table";
import { mockData } from "../mockData";

import "./main.css";

const Main = () => {
  const [discount, setDiscount] = useState(0);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0); // Состояние для отслеживания текущего игрока
  const [auctionTime, setAuctionTime] = useState(15 * 60); // Торги идут 15 минут (в секундах)
  const [moveTime, setMoveTime] = useState(30); // Время хода игрока 30 секунд
  const [isAuctionOver, setIsAuctionOver] = useState(false);

  // Функция для уменьшения скидки только для активного игрока
  const applyDiscount = () => {
    if (discount < mockData[currentPlayerIndex].manufacturingCost) {
      setDiscount((prevDiscount) => prevDiscount + 25000); // увеличиваем скидку на 25,000
    }
  };

  // Функция для передачи хода
  const moveToNextPlayer = () => {
    if (!isAuctionOver) {
      setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % mockData.length);
      setMoveTime(30); // сбрасываем время хода на 30 секунд для следующего игрока
    }
  };

  // Таймер для отсчета общего времени торгов
  useEffect(() => {
    const auctionInterval = setInterval(() => {
      if (auctionTime > 0) {
        setAuctionTime((prevTime) => prevTime - 1);
      } else {
        setIsAuctionOver(true);
        clearInterval(auctionInterval);
      }
    }, 1000);

    return () => clearInterval(auctionInterval); // Очистка интервала при размонтировании компонента
  }, [auctionTime]);

  // Таймер для отсчета времени хода текущего игрока
  useEffect(() => {
    if (!isAuctionOver && moveTime > 0) {
      const moveInterval = setInterval(() => {
        setMoveTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(moveInterval); // Очистка интервала
    } else if (moveTime === 0) {
      moveToNextPlayer(); // Автоматический переход к следующему игроку, если время на ход истекло
    }
  }, [moveTime, isAuctionOver]);

  return (
    <main className="main">
      <p className="main__main-text_text-warning">
        Уважаемые участники, во время своего хода вы не можете изменить параметры товаров, указанных в таблице:
      </p>
      <Move onMove={moveToNextPlayer} currentPlayer={mockData[currentPlayerIndex]} />
      <Price onPrice={applyDiscount} />
      <Timer auctionTime={auctionTime} moveTime={moveTime} />
      <Table discount={discount} activePlayerIndex={currentPlayerIndex} />
    </main>
  );
};

export default Main;

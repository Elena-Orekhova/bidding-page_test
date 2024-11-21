import React from "react";
import { mockData } from "../mockData";
import "./table.css";

// Функция для генерации строк таблицы
const generateTableRows = (dataKey) => {
  return mockData.map((participant) => {
    return (
      <td key={participant.id} className="table__cell">
        {participant[dataKey]}
      </td>
    );
  });
};

const Table = ({ discount, activePlayerId }) => {
  return (
    <table className="table">
      <thead className="table__head">
        <tr className="table__header-row">
          <th rowSpan={2} className="table__cell">
            Параметры и требования
          </th>
          {mockData.map((participant, index) => (
            <th key={participant.id} className="table__cell">
              Участник {index + 1}
            </th>
          ))}
        </tr>
        <tr className="table__header-row">
          {mockData.map((participant) => (
            <th
              key={participant.id}
              className={`table__cell ${activePlayerId === participant.id ? "table__cell--highlight" : ""}`}
            >
              {participant.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Строки с данными */}
        <tr className="table__row">
          <td className="table__cell">Наличие комплекса мероприятий</td>
          {generateTableRows("complexActivities")}
        </tr>
        <tr className="table__row">
          <td className="table__cell">Срок изготовления (дни)</td>
          {generateTableRows("productionTimeDays")}
        </tr>
        <tr className="table__row">
          <td className="table__cell">Гарантийное обязательство (месяцы)</td>
          {generateTableRows("warrantyMonths")}
        </tr>
        <tr className="table__row">
          <td className="table__cell">Условия оплаты (%)</td>
          {generateTableRows("paymentTermsPercent")}
        </tr>

        {/* Стоимость изготовления */}
        <tr className="table__row">
          <td rowSpan={3} className="table__cell">
            Стоимость изготовления
          </td>
          {mockData.map((participant, index) => (
            <td
              key={`${participant.id}-originalPrice-${index}`}
              className="table__cell"
            >
              {participant.manufacturingCost}
            </td>
          ))}
        </tr>

        {/* Скидка */}
        <tr className="table__row">
          {mockData.map((participant, index) => {
            const discountPrice = discount[index] > 0 ? discount[index] : 0;
            return (
              <td
                key={`${participant.id}-discountPrice-${index}`}
                className="table__discount"
              >
                {discountPrice > 0 ? `- ${discountPrice}` : 0}
              </td>
            );
          })}
        </tr>

        {/* Итоговая стоимость */}
        <tr className="table__row">
          {mockData.map((participant, index) => {
            const originalPrice = participant.manufacturingCost;
            const discountPrice = discount[index] > 0 ? discount[index] : 0;
            const finalPrice = originalPrice - discountPrice;
            return (
              <td
                key={`${participant.id}-finalPrice-${index}`}
                className="table__price"
              >
                {finalPrice}
              </td>
            );
          })}
        </tr>
      </tbody>
    </table>
  );
};

export default Table;

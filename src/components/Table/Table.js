import React from "react";
import { mockData } from "../mockData";
import "./table.css";

// Функция для генерации строк таблицы
const generateTableRows = (dataKey) => {
  return mockData.map((participant) => {
    return <td key={participant.id}>{participant[dataKey]}</td>;
  });
};

const Table = ({ discount }) => {
  return (
    <table className="main__main-table">
      <thead className="main__main-table_table-head">
        <tr className="main__main-table_table-row-head">
          <th rowSpan={2}>Параметры и требования</th>
          {mockData.map((participant, index) => (
            <th key={participant.id}>Участник {index + 1}</th>
          ))}
        </tr>
        <tr className="main__main-table_table-row-head">
          {mockData.map((participant) => (
            <th key={participant.id}>{participant.name}</th>
          ))}
        </tr>
      </thead>
      <hr></hr>
      <tbody>
        {/* Строки с данными */}
        <tr className="main__main-table_table-row">
          <td>Наличие комплекса мероприятий</td>
          {generateTableRows("complexActivities")}
        </tr>
        <tr className="main__main-table_table-row">
          <td>Срок изготовления (дни)</td>
          {generateTableRows("productionTimeDays")}
        </tr>
        <tr className="main__main-table_table-row">
          <td>Гарантийное обязательство (месяцы)</td>
          {generateTableRows("warrantyMonths")}
        </tr>
        <tr className="main__main-table_table-row">
          <td>Условия оплаты (%)</td>
          {generateTableRows("paymentTermsPercent")}
        </tr>

        {/* Строки для стоимости изготовления, каждая в своей строке */}
        <tr className="main__main-table_table-row">
          <td rowSpan={3}>Стоимость изготовления</td>
          {mockData.map((participant, index) => {
            const originalPrice = participant.manufacturingCost;
            return <td key={`${participant.id}-originalPrice-${index}`}>{originalPrice}</td>;
          })}
        </tr>

        {/* Строки для скидки */}
        <tr className="main__main-table_table-row">
          {mockData.map((participant, index) => {
            const discountPrice = discount > 0 ? discount : 0;
            return <td className="main__main-table_table-data" key={`${participant.id}-discountPrice-${index}`}>{discountPrice > 0 ? `- ${discountPrice}` : 0}</td>;
          })}
        </tr>

        {/* Строки для итоговой стоимости */}
        <tr className="main__main-table_table-row">
          {mockData.map((participant, index) => {
            const originalPrice = participant.manufacturingCost;
            const discountPrice = discount > 0 ? discount : 0;
            const finalPrice = originalPrice - discountPrice;
            return <td key={`${participant.id}-finalPrice-${index}`}>{finalPrice}</td>;
          })}
        </tr>
      </tbody>
    </table>
  );
};

export default Table;

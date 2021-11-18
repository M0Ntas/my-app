import React from "react";
import "./Main-style.css";

const Main = () => {
  return (
    <div className="container">
      <div className="list">
        <div className="filtr">
          <ul>
            <li>Список</li>
            <li>Напоминания</li>
            <li>Ещё</li>
          </ul>
        </div>
        <div className="poisk">
          <input id="input" type="text" placeholder="Введите текст" />
          <button id="button">Добавить +</button>
        </div>
      </div>
      <div className="listing">
        <ul id="list">
          <li className="li">
            <span>Выбрать хостинг для сайта</span>
            <button className="del">&times;</button>
          </li>
          <li className="li">
            <span>Записаться к стоматологу</span>
            <button className="del">&times;</button>
          </li>
          <li className="li">
            <span>Записаться на курсы по Английскому</span>
            <button className="del">&times;</button>
          </li>
          <li className="li">
            <span>Навести порядок на кухне</span>
            <button className="del">&times;</button>
          </li>
          <li className="li">
            <span>Подготовить одежду к поездке</span>
            <button className="del">&times;</button>
          </li>
          <li className="li">
            <span>Подготовиться к выступлению в понедельник</span>
            <button className="del">&times;</button>
          </li>
          <li className="li">
            <span>Помыть машину</span>
            <button className="del">&times;</button>
          </li>
          <li className="li">
            <span>Купить продукты</span>
            <button className="del">&times;</button>
          </li>
          <li className="li">
            <span>Отдать проект на проверку</span>
            <button className="del">&times;</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;

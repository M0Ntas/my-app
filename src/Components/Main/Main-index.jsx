import React, { useState, useEffect } from "react";
import "./Main-style.css";

const Main = () => {
   const listFormLS = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []

  const [value, setValue] = useState('')


  const [list, setList] = useState(listFormLS)
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])


  const click = () => {
    setList([...list, {
      id: Math.random().toString(36).substr(2, 9),
      name: value
    }])
  }
  const handleDelete = (li) => {
    setList(list.filter(item => item.id !== li.id))
  }
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      click(e)
    }
  }

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
          <input id="input"
                 type="text"
                 placeholder="Введите текст"
                 value={value}
                 onChange={(e) => setValue(e.target.value)}
                 onKeyDown={handleKeyPress}/>
          <button onClick={click} id="button">Добавить +</button>
        </div>
      </div>
      <div className="listing">
        <ul id="list">
          {list.map(el => {
            return (
              <li className="li" key={el.id}>
                <span>{el.name}</span>
                <button onClick={() => handleDelete(el)} className="del">&times;</button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
};

export default Main;

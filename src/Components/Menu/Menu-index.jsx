import React from 'react';
import './Menu-style.css';

const Menu = (props) => {
    const list = ['Главная', 'Список', 'Друзья', 'Контакты']
    
    return (
        <ul className={props.color}>
            {list.map((el,index) => {
                return <li onClick={()=>console.log('====>el<====', el)} key={index} className={'item'}>{el}</li>
            })}
        </ul>
    );
};

export default Menu;
import React from "react";
import "./Header-style.css";
import bell from "../../assets/img/bell.png";
import avatar from "../../assets/img/avatar.png";
import Menu from "../Menu/Menu-index";

const Header = (props) => {
  return (
    <div className="all">
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <p>JUSTICE</p>
            </div>
            <div className="menu">
              <Menu color={'black'} />
              <div className="mine-right">
                <button className="exit">Выйти</button>
                <img src={bell} alt="bell" />
                <img src={avatar} alt="avatar" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;

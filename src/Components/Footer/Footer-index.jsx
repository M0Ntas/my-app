import React from "react";
import "./Footer-style.css";
import Menu from "../Menu/Menu-index";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content-top">
          <div className="logo2">
            <p>JUSTICE</p>
          </div>
          <div className="menu">
            <Menu color={'white'} />
          </div>
        </div>
        <hr className="line" />
        <div className="footer-content-bottom">
          <p>© 2021 Justice-team. All rights reserved.</p>
          <div className="text-last">
            <p>Terms & conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

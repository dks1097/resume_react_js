import * as React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <nav className="navbar">
      <ul className="menu">
        <li className="menu-list">
          <a
            href="#"
          >
            <i className="fas fa-home fa-lg"></i>
            <span className="text">HOME</span>
          </a>
        </li>
        <li className="menu-list">
          <a href="#">
            <i className="fa-solid fa-address-card fa-lg"></i>
            <span className="text">ABOUT</span>
          </a>
        </li>
        <li className="menu-list">
          <a href="#">
            <i className="fas fa-folder fa-lg"></i>
            <span className="text">PROJECTS</span>
          </a>
        </li>
        <li className="menu-list">
          <a href="#">
            <i className="fas fa-briefcase fa-lg"></i>
            <span className="text">EXPERIENCE</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

//WIP

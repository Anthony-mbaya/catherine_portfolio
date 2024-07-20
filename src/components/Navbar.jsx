import React, { useState } from "react";
import { FiMenu, FiXSquare } from "react-icons/fi";
import "./styles.css";

export const Navbar = ({ scrollTo, homeref, aboutref, techref,projectsref }) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="nav-wrapper">
      <h1 className="name">Tonny's Portfolio</h1>
      <ul className="nav-links">
        <li onClick={() => scrollTo(homeref)}> Home</li>
        <li onClick={() => scrollTo(aboutref)}>About</li>
        <li onClick={() => scrollTo(techref)}> Technologies</li>
        <li onClick={() => scrollTo(projectsref)}> Projects</li>
      </ul>
      <span className="menu-icon">
        <FiMenu
          onClick={handleMenu}
          id="icon"
          className={showMenu ? "hidden" : "block"}
        />
      </span>
      {showMenu && (
        <div className="menu-overlay">
          <span className="menu-icon">
            <FiXSquare onClick={handleMenu} id="icon" />
          </span>
          <ul>
            <li
              onClick={() => {
                if (handleMenu) handleMenu();
                scrollTo(homeref);
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                if (handleMenu) handleMenu();
                scrollTo(aboutref);
              }}
            >
              {" "}
              About
            </li>
            <li
              onClick={() => {
                if (handleMenu) handleMenu();
                scrollTo(techref);
              }}
            >
              {" "}
              Technologies
            </li>
            <li
              onClick={() => {
                if (handleMenu) handleMenu();
                scrollTo(projectsref);
              }}
            >
              {" "}
              Projects
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

import React, { useState } from "react";
import { FiMenu, FiXSquare, FiArrowUpRight } from "react-icons/fi";
import "./styles.css";
import { Link } from "react-router-dom";

export const Navbar = ({
  scrollTo,
  homeref,
  servicesref,
  aboutref,
  techref,
  projectsref,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="nav-wrapper">
      <h1 className="name">Catherine Migwi</h1>
      <ul className="nav-links">
        <li onClick={() => scrollTo(homeref)}> Home</li>
        <li onClick={() => scrollTo(servicesref)}> Services</li>
       {/* <li onClick={() => scrollTo(projectsref)}> Work</li>*/}
        <li onClick={() => scrollTo(techref)}> Technologies</li>
        <li onClick={() => scrollTo(aboutref)}>About</li>
        {/*<Link to={'/hire_me'} className="border-2 hover:bg-white px-2 rounded-md flex items-center justify-center">
           Hire Me <FiArrowUpRight />
        </Link>
        */}
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
                scrollTo(servicesref);
              }}
            >
              Services
            </li>
            {/*
            <li
              onClick={() => {
                if (handleMenu) handleMenu();
                scrollTo(projectsref);
              }}
            >
              {" "}
              Work
            </li>
            */}
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
                scrollTo(aboutref);
              }}
            >
              {" "}
              About
            </li>
            {/*}
            <Link to={'/hire_me'} className="flex items-center gap-2 text-orange-400">
              Hire Me <FiArrowUpRight />
            </Link>
            */}
          </ul>
        </div>
      )}
    </div>
  );
};

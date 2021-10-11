import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../resources/logo2.png";
import "./Navigation.css";

const Navigation = (props) => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="this is logo" />
      </div>

      <ul className="navlinks">
        <li>
          <NavLink
            activeStyle={{ backgroundColor: "#e7c2aa", color: "#443d3e" }}
            to="/"
            exact
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{ backgroundColor: "#e7c2aa", color: "#443d3e" }}
            to="/retrorecords"
          >
            Retro
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{ backgroundColor: "#e7c2aa", color: "#443d3e" }}
            to="/rarelps"
          >
            RareLPs
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{ backgroundColor: "#e7c2aa", color: "#443d3e" }}
            to="/usedrecords"
          >
            UsedRecords
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{ backgroundColor: "#e7c2aa", color: "#443d3e" }}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="closeBtn2" onClick={props.navbarHandler}>
        ON/OFF
      </div>
    </div>
  );
};

export default Navigation;

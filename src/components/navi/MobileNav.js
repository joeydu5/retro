import React from "react";
import { NavLink } from "react-router-dom";
// import logo from "../../resources/logo2.png";
import "./MN.css";

const MobileNav = (props) => {
  return (
    <>
      <div className={props.navbarToggle ? "mn-navbar active" : "mn-navbar"}>
        <ul className="mn-navlinks">
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
      </div>
    </>
  );
};

export default MobileNav;

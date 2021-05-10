import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PROFILE from "../profile.js";

export default function Menu() {
  const { profile } = PROFILE;
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <nav className="navBar">
      <button onClick={handleToggle}>
        {navbarOpen ? (
          <div className="notHamburger">
            <span className="close-x"></span>
          </div>
        ) : (
          <div className="hamburger">
            <span /> <span /> <span />
          </div>
        )}
      </button>{" "}
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        <li>
          <NavLink
            to={"/"}
            activeClassName="active-link"
            onClick={() => closeMenu()}
            exact
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/loan-programs"
            activeClassName="active-link"
            onClick={() => closeMenu()}
            exact
          >
            Loan Programs
          </NavLink>
        </li>
        <li>
          <a
            href="https://nexamortgage.com/privacy-policy/"
            activeClassName="active-link"
            onClick={() => closeMenu()}
            exact
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          {profile.map((p) => (
            <a
              className="applyNowNav"
              href={p.loanLink}
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
              target="_blank"
              rel="noreferrer"
            >
              Apply Now
            </a>
          ))}
        </li>
      </ul>{" "}
    </nav>
  );
}

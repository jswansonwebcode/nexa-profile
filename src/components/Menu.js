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
            activeclassname="active-link"
            onClick={() => closeMenu()}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/loan-programs"
            activeclassname="active-link"
            onClick={() => closeMenu()}
          >
            Loan Programs
          </NavLink>
        </li>
        <li>
          <a
            href="https://nexamortgage.com/privacy-policy/"
            activeclassname="active-link"
            onClick={() => closeMenu()}
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
              key={p.id}
              href={p.loanLink}
              activeclassname="active-link"
              onClick={() => closeMenu()}
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

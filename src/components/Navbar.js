import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              src={require("../img/logo-white.png").default}
              alt=""
              className="gallery-image"
            />
          </NavLink>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-links"
                activeClassName="nav-active"
                onClick={closeMobileMenu}
              >
                על עצמי
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/services"
                className="nav-links"
                activeClassName="nav-active"
                onClick={closeMobileMenu}
              >
                טיפולים
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/testimonials"
                className="nav-links"
                activeClassName="nav-active"
                onClick={closeMobileMenu}
              >
                ממליצים
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                צור קשר
              </NavLink>
            </li>
          </ul>
          {button && (
            <Button buttonStyle="btn--outline" pathway="./contact">
              צור קשר
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

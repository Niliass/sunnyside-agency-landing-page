import React, { useState } from "react";

const Header = () => {
  const [state, setState] = useState(false);
  return (
    <header>
      <div className="container">
        <a href="/" className="header__logo">
          <img
            src="./images/logo.svg"
            alt="sunnyside logo"
            aria-hidden={true}
            className="header__logo--img"
          />
        </a>
        <button
          className={`nav__btn ${state ? "active" : ""}`}
          onClick={() => setState(!state)}
        >
          <img
            src="./images/icon-hamburger.svg"
            alt="nav icon"
            className="nav__icon"
          />
        </button>
        <nav>
          <ul className="nav__links">
            <li>
              <a href="#" className="nav__link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="nav__link">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="nav__link">
                Projects
              </a>
            </li>
          </ul>
          <a href="#" className="contact__btn">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

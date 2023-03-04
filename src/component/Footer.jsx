import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <a href="#" className="footer__logo">
          <img src="./images/footer-logo.svg" alt="foo" />
        </a>
        <nav className="footer__nav">
          <ul className="footer__nav__links">
            <li>
              <a href="#" className="footer__nav__link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="footer__nav__link">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="footer__nav__link">
                Projects
              </a>
            </li>
          </ul>
        </nav>
        <ul className="social__links">
          <li>
            <a href="#" className="social__link">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#" className="social__link">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#" className="social__link">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" className="social__link">
              <i className="fa-brands fa-pinterest"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

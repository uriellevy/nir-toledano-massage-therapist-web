import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">
        <p className="copyright">copyright &copy; 2021, All rights reserved</p>
        <p className="copyright">Made by Uriel Levy</p>
      </div>
      <div className="media">
        <ul>
          <li>
            <a href="https://www.facebook.com/ToledanoMassage" target="_blank">
              <i className="fab fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/toledanonir/" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

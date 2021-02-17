import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import LanguageIcon from "@material-ui/icons/Language";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__image">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>
      </div>
      <div>
        <button className="footer__language">
          <LanguageIcon />
          English
        </button>
      </div>
      <div>
        <button className="footer__currency"> USD- U.S. Dollars </button>
      </div>
      <div>
        <button className="footer__country"> United States</button>
      </div>
    </div>
  );
}

export default Footer;

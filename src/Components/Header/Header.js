import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="showcase">
      <div className="showcase-top">
        <img src="https://i.ibb.co/r5krrdz/logo.png" alt="logo" />
        <Link to="/" className="btn-header btn-rounded">
          Sign In
        </Link>
      </div>
      <div className="showcase-content">
        <h1>Unlimited Movies, TV shows and more</h1>
        <p>Watch anywhere. Cancel Anytime</p>

        <Link to="/netflix-show-case" className="btn-header btn-xl">
          Watch Free For 30 Days
          <i className="fas fa-chevron-right btn-icon"></i>
        </Link>
      </div>
    </header>
  );
};

export default Header;

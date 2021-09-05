import React, { useState } from "react";
import { Menu } from "react-feather";
import { Link } from "react-router-dom";
import logo from "./../../images/logo.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <nav className="top_nav_bar">
        <div className="logo_area">
          <img alt="logo" src={logo} />
        </div>
        <ul className="nav_links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/joinus" className="big_btn">
              Create Account
            </Link>
          </li>
        </ul>

        <Menu
          className="menu_toggle"
          size={39}
          onClick={() => setToggle(!toggle)}
        />
      </nav>
      <div className={`sidebar ${toggle ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>

        <ul className="fix_bottom">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/joinus">Create Account</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

import React from "react";
import { Seacrch } from "../../../assates/icons/Icons";
import { IconUser, Logo, NewIcon1, NewIcon2 } from "../../utilities/icons";
import "./header1.scss";

function Header1() {
  return (
    <div className="background">
      <div className="header-top">
        <div className="container header-top">
          <div className="site-header">
            <span>Onlayn do'konimizga xush kelibsiz</span>
          </div>
          <div className="site-header_content">
            <span>English (USD)</span> | <span>Login or Sign up</span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="header-main">
          <div className="site-header_logo">
            <Logo />
          </div>
          <div className="site-header_form">
            <input
              className="header-search-input "
              type="search"
              placeholder="Qidirish"
              aria-label="Search here..."
            />
            <select name="" id="" className="header-select">
              <option value="Categories">Categories</option>
              <option value="Categories">Categories</option>
              <option value="Categories">Categories</option>
            </select>
            <span>
              <Seacrch />
            </span>
          </div>
          <div className="site-header_icon d-flex gap-3">
            <span>
              <NewIcon1 />
              <span className="icon">4</span>
            </span>
            <span>
              <NewIcon2 />
            </span>
            <span>
              <IconUser />
            </span>
          </div>
        </div>
      </div>
      <div className="navbar-content ">
        <div className="container d-flex">
          <button className="btn btn-success">All Collections</button>
          <nav className="navbar_link">
            <ul>
              <li className="nav-items">
                <a href="#">Home</a>
              </li>{" "}
              <li className="nav-items">
                <a href="#">Shop</a>
              </li>{" "}
              <li className="nav-items">
                <a href="#">Blog </a>
              </li>
              <li className="nav-items">
                <a href="#">About</a>
              </li>
              <li className="nav-items">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header1;

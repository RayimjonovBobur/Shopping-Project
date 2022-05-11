import React from "react";
import { Seacrch } from "../../../assates/icons/Icons";
import { Logo } from "../../utilities/icons";
import Basket from "../Basket/Basket";
import "./header1.scss";
// import { headerTemplate } from "./headerTemplate";

function Header1() {
  return (
    <div className="background">
      {/* <div className="header-top">
        <div className="container header-top">
          <div className="site-header">
            <span>Onlayn do'konimizga xush kelibsiz</span>
          </div>
          <div className="site-header_content">
            <span>2
              <select>
                <option>English (USD)</option>
                <option>English (USD)</option>
              </select>
            </span>{" "}
            | <span>Login or Sign up</span>
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="header-main">
          <div className="site-header_logo">
            <Logo />
          </div>
          <div className="site-header_form">
            <input
              className="header-search-input"
              type="search"
              placeholder="Qidirish"
              aria-label="Search here..."
            />
            <span>
              <Seacrch />
            </span>
          </div>
          <div className="site-header_icon d-flex gap-3">
            <Basket />
          </div>
        </div>
      </div>
      {/* <div className="navbar-content ">
        <div className="container d-flex">
          <button className="btn ">
            <div class="header-button">
              <span></span>
              <span></span>
              <span></span>
            </div>
            All Collections
          </button>

          <nav className="navbar_link">
            <ul>
              {headerTemplate?.map((page, i) => (
                <li className="nav-items">
                  <a href="#">{page.text}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div> */}
    </div>
  );
}

export default Header1;

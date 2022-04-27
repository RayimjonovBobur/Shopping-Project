import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../../assates/icons/Icons";
import { Avatar, Cart, Language, Treker } from "../../utilities/icons";

const Test = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <Logo />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <form className="d-flex">
            <input
              className="header-search-input"
              type="search"
              placeholder="Qidirish"
              aria-label="Search"
            />
            <button className="btn btn-primary header-search-btn">
              Qidirish
            </button>
          </form>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav header-top-list">
              <li class="nav-item">
                <div className="trek">
                  <Link to="/trek">
                    <Treker /> <br />
                  </Link>
                  <span>Trek</span>
                </div>
              </li>
              <li class="nav-item">
                <div className="lan">
                  <Language /> <br />
                  <span>O'zbekcha</span>
                </div>
              </li>
              <li class="nav-item">
                <Link to="/">
                  <div lassName="cart">
                    <Cart /> <br />
                    <span>Savatcha</span>
                  </div>
                </Link>
              </li>
              <li class="nav-item">
                <div className="user">
                  <Avatar /> <br />
                  <span>Кабинет</span>
                </div>{" "}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Test;

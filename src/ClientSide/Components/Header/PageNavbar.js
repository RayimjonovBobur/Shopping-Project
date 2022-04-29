import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../../assates/icons/Icons";
import { Avatar, Cart, Language, Treker } from "../../utilities/icons";
import "../../../App.scss";

const PageNavbar = () => {
  return (
    <div>
      <nav class="navbar navbar-light bg-light ">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <Logo />
          </a>
          <form className="d-flex">
            <input
              className="header-search-input form-control"
              type="search"
              placeholder="Qidirish"
              aria-label="Search"
            />
            <button className="btn btn-primary header-search-btn">
              Qidirish
            </button>
          </form>{" "}
          <div className="cart">
            <Cart /> <br />
            <span>Savatcha</span>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ marginLeft: "-248px" }}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* <div
                class="collapse1 navbar-collapse justify-content-end "
                id="navbarNav"
            >
                <ul class="navbar-nav header-top-list ">
               
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
            </div> */}
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Offcanvas
              </h5>

              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
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
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default PageNavbar;

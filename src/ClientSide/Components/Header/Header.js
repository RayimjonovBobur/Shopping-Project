import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setActive } from "../../../Redux/stored_reducer";
import {Logo } from "../../utilities/icons";
import "./Header.scss";
import { headerTemplate } from "./headerTemplate";
import "../../../App.scss";
import Basket from "../Basket/Basket";

const Header = () => {
  const { active } = useSelector((state) => state?.users_reducer);
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(setActive(e));
  }

  const handleClick = () => {
    console.log("I working");
  }

  return (
    <div className="header">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <div className="companyalogo">
            <Logo />
          </div>
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
          </form>
          <div className="header-top-list ">
            <div lassName="cart">
              <Basket />
            </div>
          </div>
        </div>
      </nav>
      <hr />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className=" navbar-collapsse  " id="navbarNavDropdown">
            <div className="hidden2">
              <ul className="navbar-nav">
                {headerTemplate?.map((page, i) => {
                  return (
                    <li className="nav-item">
                      <Link
                        to={page.to}
                        className={`nav-link  ${active === i ? "active" : ""}`}
                        onClick={() => handleChange(i)}
                      >
                        {page?.text}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="hidden1">
              <button
                className="hidden"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{ marginLeft: "-248px", border: "none" }}
              >
                <div class="main-header_menu">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </button>
              <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div class="offcanvas-header">
                  <Logo />
                  <button
                    type="button"
                    class="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    style={{ marginTop: "-42px", marginLeft: "24px" }}
                  ></button>
                </div>
                <div class="offcanvas-body">
                  <ul className="navbar-nav ">
                    {headerTemplate?.map((page, i) => {
                      return (
                        <li className="nav-item">
                          <Link
                            to={page.to}
                            className={`nav-link  ${
                              active === i ? "active" : ""
                            }`}
                            onClick={() => handleChange(i)}
                          >
                            {page?.text}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

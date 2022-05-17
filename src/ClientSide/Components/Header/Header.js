import React, { useState } from "react";
import { Link } from "react-router-dom";
import { XIcon } from "../../../assates/icons/Icons";
import { NewIcon1, NewIcon3, SearchHr } from "../../utilities/icons";
import MaskGroup from "../../../assates/images/MaskGroup.png";
import "./headerShop.scss";

function Header() {
  const [search, setSearch] = useState(false);
  const [active, setActive] = useState(false);
  const [header, setHeader] = useState(false);

  const handleMenu = () => {
    setActive(!active);
  };

  const handleClick = () => {
    setSearch(!search);
  };

  window.onscroll = () => {
    if (window.pageYOffset > 62) {
      setHeader(true);
      console.log("true");
    } else {
      setHeader(false);
    }
  };

  return (
    <>
      <div className={`new-header ${header ? "header" : ""} `}>
        <div className="container">
          <div className="header-main">
            <div class="hidden ">
              <div
                class={`main-header_menu ${active ? "active" : ""}`}
                onClick={handleMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <Link to={"/"} className="site-header_logo">
              <strong>Onlayn</strong> <span>savdo</span>
            </Link>
            {search ? (
              <div className="site-header_form">
                <input
                  className="header-search-input "
                  type="search"
                  placeholder="Qidirish"
                  aria-label="Search here..."
                />
                <span onClick={handleClick}>
                  <XIcon />
                </span>
              </div>
            ) : (
              <div className="site-header_link">
                <ul className={`nav ${active ? "active_nav" : ""}`}>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Elektronika
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Ehtiyot qismlari
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <select
                        className="site-form-select"
                        aria-label="Default select example"
                      >
                        <option selected> Gildiraklar</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Akustikalar
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Qurilmalar{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Gadjetlar
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Gadjetlar
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Boshqalar
                    </a>
                  </li>
                </ul>
              </div>
            )}
            <div className="site-header_icon d-flex gap-3 align-items-center">
              <span
                className="maskGroup"
                style={{ color: "#939EB4", fontSize: ".8rem" }}
              >
                UZ
              </span>
              <span onClick={handleClick}>
                <SearchHr />
              </span>
              <NewIcon3 />
              <Link to={"/products_basket"} className="d-flex gap-2">
                <NewIcon1 />
              </Link>
              <span className="icon">4</span>
              <img className="maskGroup" src={MaskGroup} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

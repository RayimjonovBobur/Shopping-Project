import React, { useState } from "react";
import { NewIcon3, SearchHr } from "../../utilities/icons";
import Basket from "../Basket/Basket";
import "./headerShop.scss";

function Header() {
  const [search, setSearch] = useState(false);

  const handleClick = () => {
    setSearch(!search);
  };

  return (
    <>
      <div className="new-header">
        <div className="container">
          <div className="header-main">
            <div className="site-header_logo">
              <strong>Onlayn</strong> <span>savdo</span>
            </div>
            {search ? (
              <div className="site-header_form">
                <input
                  className="header-search-input "
                  type="search"
                  placeholder="Qidirish"
                  aria-label="Search here..."
                />
                <span>
                  <SearchHr />
                </span>
              </div>
            ) : (
              <div className="site-header_link">
                <ul className="nav">
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
                        class="site-form-select"
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
              <span onClick={handleClick}>
                <SearchHr />
              </span>
              <NewIcon3 />
              <Basket />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

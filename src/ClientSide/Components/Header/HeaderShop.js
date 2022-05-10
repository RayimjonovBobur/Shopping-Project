import React from "react";
import { Logo, SearchHr } from "../../utilities/icons";
import Basket from "../Basket/Basket";
import "./HeaderShopp.scss";

const HeaderShop = () => {
  return (
    <div className="background">
      <div className="container">
        <div className="header-main">
          <div className="site-header_logo">
            <strong>Onlayn</strong> <span>savdo</span>
          </div>
          <div className="site-header-input-container">
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
          <div className="site-header_icon d-flex gap-3">
            <Basket />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderShop;

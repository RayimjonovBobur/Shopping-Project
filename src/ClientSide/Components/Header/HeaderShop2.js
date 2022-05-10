import React from "react";
import { NewIcon4, SearchHr } from "../../utilities/icons";
import Basket from "../Basket/Basket";
import "./headerShop2.scss";

function HeaderShop2() {
  return (
    <>
      <div className="background2">
        <div className="container">
          <div className="header-main">
            <div className="site-header_logo">
              <strong>Onlayn</strong> <span>savdo</span>
            </div>
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
            {/* <NewIcon4 /> */}
            <div className="site-header_icon d-flex gap-3">
              <Basket />
            </div>
          </div>
        </div>
      </div>
      <div className="site-background_img">
        <div className="container">
          <div className="site-content">
            <h2>Cinturato</h2>
            <p>
              CINTURATO WHEELS shinalariniSG959 promokodi orqali 50%chegirma
              bilan harid qiling!
            </p>
            <button className="btn btn-secondary">Batafsil</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderShop2;

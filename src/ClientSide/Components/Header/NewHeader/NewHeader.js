import React from "react";
import { SearchHr } from "../../../utilities/icons";
import AboutTires from "../../AboutTires/AboutTires";
import Basket from "../../Basket/Basket";
import "./newHeader.scss";

function NewHeader() {
  return (
    <>
      <div className="new-header">
        <div className="container">
          <div className="header-main">
            <div className="site-header_logo">
              <strong>Onlayn</strong> <span>savdo</span>
            </div>
            <div className="site-header_form">
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
            <div className="site-header_icon d-flex gap-3 align-items-center">
              <SearchHr />
              <Basket />
            </div>
          </div>
        </div>
      </div>
      <AboutTires />
    </>
  );
}

export default NewHeader;

import React, { useState } from "react";
import Kon from "../../../assates/images/konditsaner.jpg";
import Maxsus from "../../../assates/images/maxsus.jpg";
import Books from "../../../assates/images/kitob.jpg";
import { XIcon } from "../../../assates/icons/Icons";
import "../../../App.scss";
import "./new.scss";

const FilterData = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <div className="container">
        <div className="d-flex">
          <div className="navbar_header">
            <div className="site-navbar">
              <button className="btn button-icon " onClick={handleClick}>
                <div class="header-button">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                All Collections
              </button>
            </div>
            <ul className={`${active ? "active" : ""}`}>
              <button className="header_icon " onClick={handleClick}>
                <XIcon />
              </button>
              <li>
                <a href="#">All</a>
              </li>
              <li>
                <a href="#">New Arrivals</a>
              </li>
              <li>
                <a href="#">Hot Sale</a>
              </li>
              <li>
                <a href="#">Furniture</a>
              </li>
              <li>
                <a href="#">Amrature</a>
              </li>
              <li>
                <a href="#">Tabble</a>
              </li>

              <li>
                <a href="#">Chair</a>
              </li>
              <li>
                <a href="#">Sofa</a>
              </li>
              <li>
                <a href="#">Mirrors</a>
              </li>
              <li>
                <a href="#">Stools</a>
              </li>
              <li>
                <a href="#">Benches</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-9">
          <div className="properties-page">
            <div
              id="carouselExampleFade"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={Kon} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={Maxsus} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={Books} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterData;

import React from "react";
import Kon from "../../../assates/images/konditsaner.jpg";
import Maxsus from "../../../assates/images/maxsus.jpg";
import Books from "../../../assates/images/kitob.jpg";
import "../../../App.scss";
import Card from "../Card/Card";
const FilterData = () => {
  return (
    <div>
      <div className="container">
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
  );
};

export default FilterData;

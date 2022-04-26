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
        <div className="row">
          <div className="col-md-3 filer-content">
            <div className="blog-asside-right pr0">
              <div className="panel panel-default sidebar-menu wow fadeInRight animated">
                <div className="panel-heading">
                  <h5 className="panel-title text-center ">Smart search</h5>
                </div>
                <div className="panel-body search-widget">
                  <form action="" className=" form-inline">
                    <fieldset>
                      <div className="row" style={{ paddingBottom: "1rem" }}>
                        <div className="col-xs-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Key word"
                          />
                        </div>
                      </div>
                    </fieldset>

                    <fieldset>
                      <div className="row">
                        <div className="col-xs-6">
                          <select
                            id="basic"
                            className="selectpicker show-tick form-control"
                          >
                            <option> -Status- </option>
                            <option>Rent </option>
                            <option>Boy</option>
                            <option>used</option>
                          </select>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
              <div className="checkbox-container">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label className="form-check-label" for="flexCheckChecked">
                    Yangiliklar
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Yangi kelganlar
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label className="form-check-label" for="flexCheckChecked">
                    Chegirmalar
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Bo'lib to'lash
                  </label>
                </div>{" "}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label className="form-check-label" for="flexCheckChecked">
                    Kitoblar
                  </label>
                </div>{" "}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Telefonlar va gadjetlar
                  </label>
                </div>{" "}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label className="form-check-label" for="flexCheckChecked">
                    Konditsionerlar
                  </label>
                </div>
              </div>
              <div className="panel panel-default sidebar-menu wow fadeInRight animated">
                <div className="panel-heading">
                  <h3 className="panel-title">Recommended</h3>
                </div>
                <div className="panel-body recent-property-widget">
                  <ul>
                    <li>
                      <div className="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                        <a href="single.html">
                          <img src="assets/img/demo/small-property-2.jpg" />
                        </a>
                        <span className="property-seeker">
                          <b className="b-1">A</b>
                          <b className="b-2">S</b>
                        </span>
                      </div>
                      <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                        <h6>
                          {" "}
                          <a href="single.html">Super nice villa </a>
                        </h6>
                        <span className="property-price">3000000$</span>
                      </div>
                    </li>
                    <li>
                      <div className="col-md-3 col-sm-3  col-xs-3 blg-thumb p0">
                        <a href="single.html">
                          <img src="assets/img/demo/small-property-1.jpg" />
                        </a>
                        <span className="property-seeker">
                          <b className="b-1">A</b>
                          <b className="b-2">S</b>
                        </span>
                      </div>
                      <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                        <h6>
                          {" "}
                          <a href="single.html">Super nice villa </a>
                        </h6>
                        <span className="property-price">3000000$</span>
                      </div>
                    </li>
                    <li>
                      <div className="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                        <a href="single.html">
                          <img src="assets/img/demo/small-property-3.jpg" />
                        </a>
                        <span className="property-seeker">
                          <b className="b-1">A</b>
                          <b className="b-2">S</b>
                        </span>
                      </div>
                      <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                        <h6>
                          {" "}
                          <a href="single.html">Super nice villa </a>
                        </h6>
                        <span className="property-price">3000000$</span>
                      </div>
                    </li>

                    <li>
                      <div className="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                        <a href="single.html">
                          <img src="assets/img/demo/small-property-2.jpg" />
                        </a>
                        <span className="property-seeker">
                          <b className="b-1">A</b>
                          <b className="b-2">S</b>
                        </span>
                      </div>
                      <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                        <h6>
                          {" "}
                          <a href="single.html">Super nice villa </a>
                        </h6>
                        <span className="property-price">3000000$</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9  properties-page">
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
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterData;

import React from "react";
import Kon from "../../../assates/images/konditsaner.jpg";
import Maxsus from "../../../assates/images/maxsus.jpg";
import Books from "../../../assates/images/kitob.jpg";
import homi from "../../../assates/images/homi.png";
import homi2 from "../../../assates/images/homi2.png";
import homi3 from "../../../assates/images/homi3.png";
import "../../../App.scss";
import Card from "../Card/Card";
import Test from "../Card/Test";
import Tests from "../Card/Tests";

const FilterData = () => {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-3 filer-content">
            <div class="blog-asside-right pr0">
              <div class="panel panel-default sidebar-menu wow fadeInRight animated">
                <div class="panel-heading">
                  <h5 class="panel-title text-center ">Smart search</h5>
                </div>
                <div class="panel-body search-widget">
                  <form action="" class=" form-inline">
                    <fieldset>
                      <div class="row" style={{ paddingBottom: "1rem" }}>
                        <div class="col-xs-12">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Key word"
                          />
                        </div>
                      </div>
                    </fieldset>

                    <fieldset>
                      <div class="row">
                        <div class="col-xs-6">
                          <select
                            id="basic"
                            class="selectpicker show-tick form-control"
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
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Yangiliklar
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Yangi kelganlar
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Chegirmalar
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Bo'lib to'lash
                  </label>
                </div>{" "}
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Kitoblar
                  </label>
                </div>{" "}
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Telefonlar va gadjetlar
                  </label>
                </div>{" "}
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Konditsionerlar
                  </label>
                </div>
              </div>
              <div class="panel panel-default sidebar-menu wow fadeInRight animated">
                <div class="panel-heading">
                  <h3 class="panel-title">Recommended</h3>
                </div>
                <div class="panel-body recent-property-widget">
                  <ul>
                    <li>
                      <div class="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                        <a href="single.html">
                          <img src="assets/img/demo/small-property-2.jpg" />
                        </a>
                        <span class="property-seeker">
                          <b class="b-1">A</b>
                          <b class="b-2">S</b>
                        </span>
                      </div>
                      <div class="col-md-8 col-sm-8 col-xs-8 blg-entry">
                        <h6>
                          {" "}
                          <a href="single.html">Super nice villa </a>
                        </h6>
                        <span class="property-price">3000000$</span>
                      </div>
                    </li>
                    <li>
                      <div class="col-md-3 col-sm-3  col-xs-3 blg-thumb p0">
                        <a href="single.html">
                          <img src="assets/img/demo/small-property-1.jpg" />
                        </a>
                        <span class="property-seeker">
                          <b class="b-1">A</b>
                          <b class="b-2">S</b>
                        </span>
                      </div>
                      <div class="col-md-8 col-sm-8 col-xs-8 blg-entry">
                        <h6>
                          {" "}
                          <a href="single.html">Super nice villa </a>
                        </h6>
                        <span class="property-price">3000000$</span>
                      </div>
                    </li>
                    <li>
                      <div class="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                        <a href="single.html">
                          <img src="assets/img/demo/small-property-3.jpg" />
                        </a>
                        <span class="property-seeker">
                          <b class="b-1">A</b>
                          <b class="b-2">S</b>
                        </span>
                      </div>
                      <div class="col-md-8 col-sm-8 col-xs-8 blg-entry">
                        <h6>
                          {" "}
                          <a href="single.html">Super nice villa </a>
                        </h6>
                        <span class="property-price">3000000$</span>
                      </div>
                    </li>

                    <li>
                      <div class="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                        <a href="single.html">
                          <img src="assets/img/demo/small-property-2.jpg" />
                        </a>
                        <span class="property-seeker">
                          <b class="b-1">A</b>
                          <b class="b-2">S</b>
                        </span>
                      </div>
                      <div class="col-md-8 col-sm-8 col-xs-8 blg-entry">
                        <h6>
                          {" "}
                          <a href="single.html">Super nice villa </a>
                        </h6>
                        <span class="property-price">3000000$</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-9  properties-page">
            <div
              id="carouselExampleFade"
              class="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={Kon} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={Maxsus} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={Books} class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            {/* <Test /> */}
            <Tests />
            {/* <Card /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterData;

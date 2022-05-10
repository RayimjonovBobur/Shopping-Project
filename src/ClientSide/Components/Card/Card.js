import React, { useState } from "react";
import "../../../App.scss";
import { Link } from "react-router-dom";
import { CardData } from "./CardData";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../../../Redux/stored_reducer";

const Card = () => {
  const { product } = useSelector((state) => state?.users_reducer);
  const dispatch = useDispatch();

  const hanldeSubmit  = (item) => {
    const data = product.find((list) => list.id == item.id);
    if (data) {
      return data;
    } else {
      dispatch(setProduct([...product, item]));
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 filer-content mb-3 mt-5">
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
            {/* <div className="panel panel-default sidebar-menu wow fadeInRight animated">
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
              </div> */}
          </div>
        </div>
        <div className="col-md-9 card-container mb-3 mt-4">
          <div className="d-flex">
            <h6 className="card-title m-3">Jaziramadagi xaloskor</h6>
          </div>
          <div className="card-content">
            {CardData.map((product) => (
              <div className="card hovereffect">
                <div className="card-body">
                  <img className="card-img" src={product.image} alt="" />
                </div>
                <ul className="list-group list-group-flush">
                  <h6 className="product-item-model">{product.name}</h6>
                  <h6 className="card-info">{product.description}</h6>
                  <div className="product-item-price">
                    <span className="product-item-old-price">
                      {product.oldprice} сум
                    </span>
                    <span className="product-item-price-new">
                      {product.nowprice} сум
                    </span>
                  </div>
                </ul>
                <div className="card-movement overlay">
                  {/* <Link to="/" className="card-link"> */}
                  <button className="btn product-item-btn info">
                    Sotib Olish
                  </button>
                  {/* </Link> */}
                  <Link
                    to="/"
                    className="product-item-basket"
                    onClick={() => hanldeSubmit(product)}
                  >
                    <i className="fa-solid fa-basket-shopping"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

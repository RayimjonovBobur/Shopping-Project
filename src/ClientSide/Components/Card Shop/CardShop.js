import React, { useState } from "react";
import "../../../App.scss";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../../../Redux/stored_reducer";
import img1 from "../../../assates/images/img1.png";
import { Combined, Combined2 } from "../../../assates/icons/Icons";
import { Link, useLocation } from "react-router-dom";

const CardShop = () => {
  const { product } = useSelector((state) => state?.users_reducer);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const hanldeSubmit = (item) => {
    const data = product.find((list) => list.id == item.id);
    if (data) {
      return data;
    } else {
      dispatch(setProduct([...product, item]));
    }
  };

  return (
    <div className="container">
      <div className="card-container mb-3 mt-4">
        <div className="d-flex">
          {pathname == "/header_shop" ? (
            <h6 className="card-title m-3">
              <strong>O’xshahs</strong> maxsulotlar
            </h6>
          ) : (
            <h6 className="card-title m-3">
              <strong>Mashhur</strong> maxsulotlar
            </h6>
          )}
        </div>
        <div className="card-content">
          <div class="card-shop">
            <div className="card-body">
              <img className="card-img" src={img1} alt="" />
            </div>
            <ul class="list-group list-group-flush">
              <h5 class="card-title">Advan RT whel R18</h5>
              <p className="category-type">G’ildiraklar bo’limi</p>
              <h6 className="card-price">47 450 000 cўм</h6>
              <div className="combined">
                <li>
                  <Combined />
                </li>
                <li>
                  <Combined />
                </li>{" "}
                <li>
                  <Combined />
                </li>{" "}
                <li>
                  <Combined />
                </li>{" "}
                <li>
                  <Combined2 />
                </li>
              </div>
              <Link to="header_shop" className=" card-more-btn">
                Batafsil
              </Link>
            </ul>
          </div>{" "}
          <div class="card-shop">
            <div className="card-body">
              <img className="card-img" src={img1} alt="" />
            </div>
            <ul class="list-group list-group-flush">
              <h5 class="card-title">Advan RT whel R18</h5>
              <p className="category-type">G’ildiraklar bo’limi</p>
              <h6 className="card-price">47 450 000 cўм</h6>
              <div className="combined">
                <li>
                  <Combined />
                </li>
                <li>
                  <Combined />
                </li>{" "}
                <li>
                  <Combined />
                </li>{" "}
                <li>
                  <Combined />
                </li>{" "}
                <li>
                  <Combined2 />
                </li>
              </div>
              <button className=" card-more-btn">Batafsil</button>
            </ul>
          </div>{" "}
          <div class="card-shop">
            <div className="card-body">
              <img className="card-img" src={img1} alt="" />
            </div>
            <ul class="list-group list-group-flush">
              <h5 class="card-title">Advan RT whel R18</h5>
              <p className="category-type">G’ildiraklar bo’limi</p>
              <h6 className="card-price">47 450 000 cўм</h6>
              <div className="combined">
                <li>
                  <Combined />
                </li>
                <li>
                  <Combined />
                </li>{" "}
                <li>
                  <Combined />
                </li>{" "}
                <li>
                  <Combined />
                </li>{" "}
                <li>
                  <Combined2 />
                </li>
              </div>
              <button className=" card-more-btn">Batafsil</button>
            </ul>
          </div>{" "}
          <div class="card-shop">
            <div className="card-body">
              <img className="card-img" src={img1} alt="" />
            </div>
            <ul class="list-group list-group-flush">
              <h5 class="card-title">Advan RT whel R18</h5>
              <p className="category-type">G’ildiraklar bo’limi</p>
              <h6 className="card-price">47 450 000 cўм</h6>
              <div className="combined">
                <li>
                  <Combined />
                </li>
                <li>
                  <Combined />
                </li>{" "}
                <li>
                  <Combined />
                </li>{" "}
                <li>
                  <Combined />
                </li>{" "}
                <li>
                  <Combined2 />
                </li>
              </div>
              <button className=" card-more-btn">Batafsil</button>
            </ul>
          </div>
          <div class="card-shop">
            <div className="card-body">
              <img className="card-img" src={img1} alt="" />
            </div>
            <ul class="list-group list-group-flush">
              <h5 class="card-title">Advan RT whel R18</h5>
              <p className="category-type">G’ildiraklar bo’limi</p>
              <h6 className="card-price">47 450 000 cўм</h6>
              <div className="combined">
                <li>
                  <Combined />
                </li>
                <li>
                  <Combined />
                </li>{" "}
                <li>
                  <Combined />
                </li>{" "}
                <li>
                  <Combined />
                </li>{" "}
                <li>
                  <Combined2 />
                </li>
              </div>
              <button className=" card-more-btn">Batafsil</button>
            </ul>
          </div>
          <div class="card-shop">
            <div className="card-body">
              <img className="card-img" src={img1} alt="" />
            </div>
            <ul class="list-group list-group-flush">
              <h5 class="card-title">Advan RT whel R18</h5>
              <p className="category-type">G’ildiraklar bo’limi</p>
              <h6 className="card-price">47 450 000 cўм</h6>
              <div className="combined">
                <li>
                  <Combined />
                </li>
                <li>
                  <Combined />
                </li>{" "}
                <li>
                  <Combined />
                </li>{" "}
                <li>
                  <Combined />
                </li>{" "}
                <li>
                  <Combined2 />
                </li>
              </div>
              <button className=" card-more-btn">Batafsil</button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardShop;

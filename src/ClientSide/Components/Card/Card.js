import React, { useState } from "react";
import komp from "../../../assates/images/komp.jpg";
import komp1 from "../../../assates/images/komp1.jpeg";
import komp2 from "../../../assates/images/komp2.webp";
import komp3 from "../../../assates/images/komp3.jpg";
import "../../../App.scss";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="card-container mb-3 mt-4">
      <div className="d-flex">
        <h6 className="card-title m-3">Jaziramadagi xaloskor</h6>
      </div>
      <div className="card-content">
        <div className="card">
          <div className="card-body">
            <img className="card-img" src={komp} alt="" />
          </div>
          <ul className="list-group list-group-flush">
            <h6 className="product-item-model">Model - MacBook</h6>
            <h6 className="card-info">
              Ноутбук Apple MacBook Pro 16 with Retina display and Touch Bar
              Late Core i7 16/512 GB 2019 (Gray, Silver)
            </h6>
            <div className="product-item-price">
              <span className="product-item-old-price">34 200 000 сум</span>
              <span className="product-item-price-new">25 650 000 сум</span>
            </div>
          </ul>
          <div className="card-movement">
            <Link to="/" className="card-link">
              <button className="btn product-item-btn primary ">
                Sotib Olish
              </button>
            </Link>
            <Link to="/" className="product-item-basket">
              <i className="fa-solid fa-basket-shopping"></i>
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <img className="card-img" src={komp1} alt="" />
          </div>
          <ul className="list-group list-group-flush">
            <h6 className="product-item-model">Model - MacBook</h6>
            <h6 className="card-info">
              Ноутбук Apple MacBook Air 13 8GB/256GB 2020 (Gold) (процессор M1)
              (Русская клавиатура)
            </h6>
            <div className="product-item-price">
              <span className="product-item-old-price">14 200 000 сум</span>
              <span className="product-item-price-new">13 650 000 сум</span>
            </div>
          </ul>
          <div className="card-movement">
            <Link to="/" className="card-link">
              <button className="btn product-item-btn">Sotib Olish</button>
            </Link>
            <Link to="/" className="product-item-basket">
              <i className="fa-solid fa-basket-shopping"></i>
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <img className="card-img" src={komp2} alt="" />
          </div>
          <ul className="list-group list-group-flush">
            <h6 className="product-item-model">Model - Dell</h6>
            <h6 className="card-info">
              Ноутбук DELL Latitude 3510 / Core i5-10210U / DDR4 8GB / HDD
              1000GB / 15.6" IPS
            </h6>
            <div className="product-item-price">
              <span className="product-item-old-price">10 200 000 сум</span>
              <span className="product-item-price-new">9 650 000 сум</span>
            </div>
          </ul>
          <div className="card-movement">
            <Link to="/" className="card-link">
              <button className="btn product-item-btn">Sotib Olish</button>
            </Link>
            <Link to="/" className=" product-item-basket">
              <i className="fa-solid fa-basket-shopping"></i>
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <img className="card-img" src={komp3} alt="" />
          </div>
          <ul className="list-group list-group-flush">
            <h6 className="product-item-model">Model - Honor</h6>
            <h6 className="card-info">
              Ноутбук Honor MagicBook X 15 Core-i3, 8GB/256GB SSD (Space Gray)
            </h6>
            <div className="product-item-price">
              <span className="product-item-old-price">7 500 000 сум</span>
              <span className="product-item-price-new">7 150 000 сум</span>
            </div>
          </ul>
          <div className="card-movement">
            {/* <Link to="/" className="card-link"> */}
            <button className="btn product-item-btn">Sotib Olish</button>
            {/* </Link> */}
            <Link to="/" className="product-item-basket">
              <i className="fa-solid fa-basket-shopping"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

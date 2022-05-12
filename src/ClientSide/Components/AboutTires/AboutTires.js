import React, { useState } from "react";
import tire from "../../../assates/images/tire.png";
import CardShop from "../Card Shop/CardShop";
import Footer from "../Footer/Footer";
import "./style.scss";

function AboutTires() {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(100);
  const [activePrice, setActivePrice] = useState(100);

  let incrementCount = () => {
    if (count < 5) {
      setCount(count + 1);
      setActivePrice(activePrice + price);
    }
  };

  let decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
      setActivePrice(activePrice - price);
    }
  };

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-evenly mt-2">
          <div className="site-tire">
            <div className="site-tire_title">
              <img src={tire} alt="" />
            </div>
          </div>
          <div className="site-tire_content mt-3">
            <h2>
              FONDMETAL
              <br /> Makhai (new)
            </h2>
            <p className="text">
              Диск FONDMETAL Makhai 9 x 21 5*112 Et: 25 Dia: 66,5 Black Glossy
              Machined
            </p>
            <p>Ранги</p>
            <div className="site-tire_color">
              <div>
                <p className="qora"></p>
                <p>Черная</p>
              </div>
              <div>
                <p className="oq"></p>
                <p>Стальная</p>
              </div>
            </div>
            <div className="site-tire_item">
              <div>
                <button className="site_btn" onClick={decrementCount}>
                  -
                </button>
                <span>{count}</span>
                <button className="site_btn" onClick={incrementCount}>
                  +
                </button>
              </div>
            </div>
            <div className="site-price">
              <p>7 450 000 so’m</p>
              <p className="site-text">8 000 000 so’m</p>
            </div>
            <button className="btn_add">Korzinaga qo’shish</button>
          </div>
        </div>
      </div>
      <CardShop />
      <Footer />
    </>
  );
}

export default AboutTires;

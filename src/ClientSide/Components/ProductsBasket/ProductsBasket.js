import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import img from "../../../assates/images/img3.png";
import "./tire.scss";
import { Combined, Combined2, Delete } from "../../../assates/icons/Icons";
import { useNavigate } from "react-router-dom";

function ProductsBasket() {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(100);
  const [activePrice, setActivePrice] = useState(100);
  const navigate = useNavigate();

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

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="basket">
      <Header />
      <div className="container">
        <div className="site-container">
          <h3>
            <strong>Savatchadagi</strong> maxsulotlar
          </h3>
          <div className="site-container_basket">
            <div className="content">
              <hr />
              <div className="site-basket">
                <div className="site-basket_content">
                  <div className="site-tire_img">
                    <img src={img} alt="" />
                  </div>
                  <div className="site-tire-items">
                    <h5>PZERO</h5>
                    <span>Shinalar bo’limi</span>
                    <p>7 450 000 cўм</p>
                    <div>
                      <Combined />
                      <Combined />
                      <Combined />
                      <Combined />
                      <Combined2 />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="site-tire_count">
                    <div>
                      <button className="site_btn" onClick={decrementCount}>
                        -
                      </button>
                      <spa>{count}</spa>
                      <button className="site_btn" onClick={incrementCount}>
                        +
                      </button>
                    </div>
                    <p className="site-cost">7 450 000 so’m</p>
                    <button>
                      <Delete />
                    </button>
                  </div>
                </div>
              </div>
              <div className="site-basket">
                <div className="site-basket_content">
                  <div className="site-tire_img">
                    <img src={img} alt="" />
                  </div>
                  <div className="site-tire-items">
                    <h5>PZERO</h5>
                    <span>Shinalar bo’limi</span>
                    <p>7 450 000 cўм</p>
                    <div>
                      <Combined />
                      <Combined />
                      <Combined />
                      <Combined />
                      <Combined2 />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="site-tire_count">
                    <div>
                      <button className="site_btn" onClick={decrementCount}>
                        -
                      </button>
                      <spa>{count}</spa>
                      <button className="site_btn" onClick={incrementCount}>
                        +
                      </button>
                    </div>
                    <p className="site-cost">7 450 000 so’m</p>
                    <button>
                      <Delete />
                    </button>
                  </div>
                </div>
              </div>
              <div className="site-basket">
                <div className="site-basket_content">
                  <div className="site-tire_img">
                    <img src={img} alt="" />
                  </div>
                  <div className="site-tire-items">
                    <h5>PZERO</h5>
                    <span>Shinalar bo’limi</span>
                    <p>7 450 000 cўм</p>
                    <div>
                      <Combined />
                      <Combined />
                      <Combined />
                      <Combined />
                      <Combined2 />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="site-tire_count">
                    <div>
                      <button className="site_btn" onClick={decrementCount}>
                        -
                      </button>
                      <spa>{count}</spa>
                      <button className="site_btn" onClick={incrementCount}>
                        +
                      </button>
                    </div>
                    <p className="site-cost">7 450 000 so’m</p>
                    <button>
                      <Delete />
                    </button>
                  </div>
                </div>
              </div>
              <hr />
            </div>
            <div className="site-payment">
              <div className="d-flex justify-content-between">
                <p className="payment_text">Maxsulot: (2)</p>
                <p>14 900 000</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="payment_text">Chegirma:</p>
                <p>0%</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="payment_text">Barchasi:</p>
                <p>14 900 000</p>
              </div>
              <button className="btn_payment">To’lovga o’tish</button>
              <div className="btn_home" onClick={handleHome}>
                Bosh menyuga qaytish
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductsBasket;

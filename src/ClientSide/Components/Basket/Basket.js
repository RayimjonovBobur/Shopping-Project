import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Delete } from "../../../assates/icons/Icons";
import { setActive } from "../../../Redux/stored_reducer";
import { Cart, NewIcon1 } from "../../utilities/icons";
import "./basket.scss";

const Basket = () => {
  const { active, product } = useSelector((state) => state?.users_reducer);
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
      <button
        type="button"
        class="basket-btn"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <div className="korzinka">
          <NewIcon1 />
          <span>Savatcha</span>
        </div>
        <span className="icon">{product?.length}</span>
      </button>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" style={{ width: "800px" }}>
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Savatcha
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {product?.length == 0 ? (
                <>
                  <div className="site-korzinka">
                    <NewIcon1 />
                    <p>Savatchada hozirda hech nima yo'q</p>
                  </div>
                </>
              ) : (
                <>
                  {product?.map((item) => (
                    <div className="site-product_content">
                      <div className="site-product_img">
                        <img src={item?.image} alt="" />
                      </div>
                      <div className="site-product_items">
                        <div>
                          <p>{item?.name}</p>
                          <h6>{item?.nowprice}</h6>
                        </div>
                        <div className="site-product_item">
                          <div>
                            <button
                              className="site_btn"
                              onClick={decrementCount}
                            >
                              -
                            </button>
                            <span>{count}</span>
                            <button
                              className="site_btn"
                              onClick={incrementCount}
                            >
                              +
                            </button>
                          </div>
                          <button className="site_btn delete_btn">
                            <Delete />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="text-center">
                    <button
                      className="btn btn-outline-secondary"
                      data-bs-toggle="modal"
                    >
                      Xaridlarni davom ettirish
                    </button>
                    <button className="btn btn-outline-primary mx-4">
                      Sotib olish
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basket;

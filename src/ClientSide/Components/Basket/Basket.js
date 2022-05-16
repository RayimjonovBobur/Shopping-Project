import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Delete } from "../../../assates/icons/Icons";
import { setDelete } from "../../../Redux/stored_reducer";
import { FullIcon, NewIcon1 } from "../../utilities/icons";
import ImageCr from "../Carusel/ImageCr";
import "./basket.scss";

const Basket = () => {
  const { active, product } = useSelector((state) => state?.users_reducer);
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(100);
  const [activePrice, setActivePrice] = useState(100);
  const dispatch = useDispatch();

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

  const handleDelete = (item) => {
    dispatch(setDelete(item));
  };

  return (
    <div className="modal_client">
      <button
        type="button"
        class="basket-btn btnSavatcha"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <span className="slider-icon">
          <FullIcon />
        </span>
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
        <div class="modal-dialog" style={{ width: "100%" }}>
          <div class="modal-content">
            <div class="modal-body">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;

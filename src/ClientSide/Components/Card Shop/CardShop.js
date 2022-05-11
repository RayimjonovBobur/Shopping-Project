import React, { useState } from "react";
import "../../../App.scss";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../../../Redux/stored_reducer";
import img1 from "../../../assates/images/img1.png";

const CardShop = () => {
  const { product } = useSelector((state) => state?.users_reducer);
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
          <h6 className="card-title m-3">Jaziramadagi xaloskor</h6>
        </div>
        <div className="card-content">
          <div class="card-shop">
            <div className="card-body">
              <img className="card-img" src={img1} alt="" />
            </div>
            <ul
              class="list-group list-group-flush"
              style={{ marginLeft: "20px" }}
            >
              <h5 class="card-title">Advan RT whel R18</h5>
              <p className="category-type">G’ildiraklar bo’limi</p>
              h6.
            </ul>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default CardShop;

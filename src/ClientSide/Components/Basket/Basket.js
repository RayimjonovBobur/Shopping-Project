import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setActive } from "../../../Redux/stored_reducer";
import { Cart } from "../../utilities/icons";

const Basket = ({ headerTemplate }) => {
  const { active } = useSelector((state) => state?.users_reducer);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setActive(e));
  };
  return (
    <>
      <button
        className="basket-btn"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <Cart /> <br />
        <span>Savatcha</span>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        style={{ margin: "auto" }}
      >
        <div class="offcanvas-header">
          <h1>Savatda bor maxsulotlar royxati</h1>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul className="navbar-nav ">
            <li className="nav-item">MacBook i7 maxsulotlar</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Basket;

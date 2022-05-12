import React from "react";
import { Link } from "react-router-dom";
import "./Reference.scss";

const Reference = () => {
  return (
    <div>
      <div className="container">
        <div className="row reference">
          <div className="col-md-6 reference-content">
            <div className="reference-content-item">
              <h3 className="cart-product-name">Cinturato</h3>
              <p className="cart-product-description">
                “Cinturato wheels” shinalarini “OS777” promokod orqali 80%
                chegirma bilan qo’lga kiriting!
              </p>
              <Link to={"/header"} className="reference-btn">
                Batafsil
              </Link>
              <div className="reference-background"></div>
            </div>
            <div className="reference-background2"></div>
            <div className="reference-background3"></div>
          </div>
          <div className="col-md-6 reference-content cart-2">
            <div className="reference-content-item-1">
              <h3 className="cart-product-name">GENUINE MOTOR</h3>
              <p className="cart-product-description">
                “Genuine Motor Oils” moylari <br /> uchun 50% chegirma. <br />{" "}
                Hoziroq sotib oling!
              </p>
              <button className="reference-btn">Batafsil</button>
              {/* <div className="reference-background-1"></div>     */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reference;

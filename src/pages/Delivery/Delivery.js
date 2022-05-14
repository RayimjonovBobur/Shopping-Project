import React from "react";
import CardShop from "../../ClientSide/Components/Card Shop/CardShop";
import Footer from "../../ClientSide/Components/Footer/Footer";
import { DeliveryIcon } from "../../ClientSide/utilities/icons";

const Delivery = () => {
  return (
    <>
      <div className="container">
        <div className="delivery-container">
          <h1 className="delivery-title">
            <strong> Onlayn savdo</strong> turli xil yuqori sifatli yetkazib
            berish xizmatlarini taklif etadi.
          </h1>
          <div className="deliver-content">
            <i className="deliver-icon">
              <DeliveryIcon />
            </i>
            <h5 className="deliver-type">Yetkazib berish</h5>
            <p className="deliver-text">
              O'zbekiston bo'ylab yetkazib berish (1 500 000 so'mdan yuqori
              xaridlar uchun) - Bepul Aksessuarlarni yetkazib berish (g'iloflar,
              naushniklar, klaviaturalar, sichqonlar va boshqalar) - 30 000 so'm
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Delivery;

import React from "react";
import Footer from "../../ClientSide/Components/Footer/Footer";
import Header from "../../ClientSide/Components/Header/Header";
import { DeliveryIcon, DeliveryIcon_2 } from "../../ClientSide/utilities/icons";
import "./Delivery.scss";

const Delivery = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="delivery-container justify-content-center m-auto m-xl-5">
          <h3 className="delivery-title fs-4 mb-5">
            <span className="online-savdo"> Onlayn savdo</span> turli xil yuqori
            sifatli yetkazib berish xizmatlarini taklif etadi.
          </h3>
          <div className="deliver-content">
            <div className="delivery-content-item_1 d-flex">
              <div>
                <i className="deliver-icon">
                  <DeliveryIcon />
                </i>
              </div>
              <div>
                <h5 className="deliver-type">Yetkazib berish</h5>
                <p className="deliver-text">
                  O'zbekiston bo'ylab yetkazib berish (1 500 000 so'mdan yuqori
                  xaridlar uchun) - Bepul <br /> Aksessuarlarni yetkazib berish
                  (g'iloflar, naushniklar, klaviaturalar, sichqonlar va
                  boshqalar) - 30 000 so'm
                </p>
              </div>
            </div>{" "}
            <div className="delivery-content-item_2 d-flex">
              <div>
                <i className="deliver-icon">
                  <DeliveryIcon_2 />
                </i>
              </div>
              <div>
                <h5 className="deliver-type">Ekspres yetkazib berish</h5>
                <p className="deliver-text">
                  Tezlashtirilgan yetkazib berish buyurtma tasdiqlangan paytdan
                  boshlab 1,5 soat ichida amalga oshiriladi. <br /> Toshkent
                  shahri ichida tez yetkazib berish narxi 50 000 so‘m. <br />
                  Batafsil ma'lumotni MacBro do'konining call-markaziga{" "}
                  <span className="fw-light">+998 (xx) xxx-xx-xx</span> raqamiga
                  qo'ng'iroq qilib olishingiz mumkin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Delivery;

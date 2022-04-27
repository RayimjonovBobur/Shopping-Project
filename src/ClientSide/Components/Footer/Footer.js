import React from "react";
import { Logo } from "../../../assates/icons/Icons";
import app from "../../../assates/images/app.png";
import {
  AppStore,
  Email,
  Fecebook,
  GooglePlay,
  Instagram,
  Location,
  Phone,
  Telegram,
} from "../../utilities/icons";
import "./Footer.scss";
import SliderFooter from "./SliderFooter";

function Footer() {
  let apple = true;
  return (
    <>
      <div className="footer container">
        <div className={"footer-item"}>
          <div className="footer-reklama ">
            <SliderFooter />
          </div>
          {apple ? (
            <div className="footer-app">
              <div className="footer-app-img">
                <img className="faimg" src={app} alt="" />
              </div>
              <div className="footer-content">
                <Logo />
                <span>Sizning internet do'koningiz</span>
                <div className="footer-button">
                  <button>
                    <AppStore /> App Store
                    <p>Orqali yuklash</p>
                  </button>
                  <button>
                    <GooglePlay /> Google Play
                    <p className={"footer-google"}>Orqali yuklash olign</p>
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className={"footer-content-items "}>
        <div className="container">
          <div className={"footer-content-item"}>
            <div className={"footer-content-text"}>
              <div className={"footer-content_img"}>
                <GooglePlay />
              </div>
              <h6>Endi bozorga borishga hojat yo`q</h6>
              <p> Bizda qulay narxlar va uyga yetkazib berish mavjud </p>
            </div>
            <div className={"footer-content-text"}>
              <div className={"footer-content_igm"}>
                <GooglePlay />
              </div>
              <h6>Tez yetkazib berish</h6>
              <p> Bizning xizmatimiz sizni ajablantiradi </p>
            </div>
            <div className={"footer-content-text"}>
              <div className={"footer-content_img"}>
                <GooglePlay />
              </div>
              <h6>Siz uchun qulayliklar</h6>
              <p>
                Nosozlik yuzaga kelganda tez rasmiylashtirish va qaytarish
                kafolati
              </p>
            </div>
            <div className={"footer-content-text"}>
              <div className={"footer-content_img"}>
                <GooglePlay />
              </div>
              <h6>Bo'lib to'lash</h6>
              <p>12 yoki 18 oy davomida oldindan to'lov yo'q</p>
            </div>
          </div>
          <div className={"footer"}>
            <div className="row">
              <div className={"col-md-8"}>
                <div className={"row"}>
                  <div
                    className="col-md-6
            "
                  >
                    <div className={"footer-content_row"}>
                      <strong>Ma'lumotlar</strong>
                      <a href="#">Ommaviy oferta (Foydalanuvchi bitimi)</a>
                      <a href="#">Условия рассрочки</a>
                      <a href="#">
                        Muddatli toʻlov asosida sotib olishning umumiy qoidalari
                      </a>
                      <a href="#">Tovar yetkazib berish</a>
                      <a href="#">Tovarni qaytarish</a>
                      <a href="#">Biz haqimizda</a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className={"footer-content_row"}>
                      <strong>Biz bilan aloqa</strong>
                      <a href="#">
                        <Phone />
                        +998977777777
                      </a>
                      <a href="#">
                        <Email />
                        info@imsoft.uz
                      </a>
                      <a href="#">
                        <Location /> Farg`ona
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className={"footer-content_row"}>
                  <strong>Bizning Facebook</strong>
                </div>
              </div>
            </div>
            <hr className={"footer-content-hr"} />
            <div className={"footer-content-icon"}>
              <div className={"footer-content-payment"}>
                <span>To'lov turlari :</span>
                click
              </div>
              <div className={"footer-content-icons"}>
                <span>Biz ijtimoiy tarmoqlarda :</span>
                <div className={"icon"}>
                  <Fecebook />
                  <Instagram />
                  <Telegram />
                </div>
              </div>
            </div>
            <hr className={"footer-content-hr"} />
            <p className={"footer-text"}>
              2015 Internet-do’kon: Maishiy texnikalar va boshqalar.Mahsulotni
              yetkazib berish barcha viloyatlarda amalga oshiriladi. Barcha
              huquqlar himoyalangan.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../../assates/icons/Icons";
import app from "../../../assates/images/app.png";
import {
  AppStore,
  Facebook,
  GooglePlay,
  InstagramIcon,
  TelegramIcon,
} from "../../utilities/icons";
import "./Footer.scss";
import SliderFooter from "./SliderFooter";

function Footer() {
  let apple = false;
  return (
    <>
      <div className="footer container">
        <div className={"footer-item"}>
          {/* <div className="footer-reklama ">
            <SliderFooter />
          </div> */}
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
      <div className={"footer-content-items footer-backgorund"}>
        <div className="container">
          {apple ? (
            <div className={"footer-content-item"}>
              <div className={"footer-content-text"}>
                <div className={"footer-content_img"}>
                  <GooglePlay />
                </div>
              </div>
            </div>
          ) : null}
          <div className="footer-bottom  footer-backgorund">
            <div className="row mb-5">
              <div className="col-lg-4">
                <div className="footer-content-item">
                  <div className="footer-content-text_1">
                    <div className="mb-3">
                      <h3>
                        Onlayn <span>savdo</span>
                      </h3>
                      <span style={{ marginTop: "-20px" }}>onlayn do’koni</span>
                    </div>
                    <div className="imsoft-text">
                      <p>Savollar bo’yicha murojat uchun:</p>
                      <span>info@imsoft.uz</span>
                      <div className="footer-icon">
                        <span className="m-lg-1">
                          <Facebook />
                        </span>
                        <span className="m-lg-1">
                          <InstagramIcon />
                        </span>
                        <span className="m-lg-1">
                          <TelegramIcon />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 footer-links">
                <div className="col-md-4 footer-content-text_2">
                  <ul>
                    <span className="fs-5 text-span">Kompaniya</span>
                    <li>
                      <a href="#">Yangiliklar</a>
                    </li>
                    <li>
                      <a href="#">Kompaniya haqida</a>
                    </li>
                    <li>
                      <a href="#">Do’kon manzili</a>
                    </li>
                    <li>
                      <a href="#">Biznes uchun</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 footer-content-ul_1">
                  <ul>
                    <span className="fs-5 text-span">Ma’lumotlar</span>
                    <li>
                      <Link to={"/payment_plan"}>
                        To'lov rejasi (Рассрочка)
                      </Link>
                    </li>
                    <li>
                      <a>Yetkazib berish</a>
                    </li>
                    <li>
                      <Link to="/contact_us">Aloqa</Link>
                    </li>
                    <li>
                      <Link to="/about_us">Biz haqimizda</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 footer-content-ul_2 pl-0">
                  <ul>
                    <span className="fs-5 text-span">Biz bilan bog’lanish</span>
                    <li>
                      <a href="#">Manzil: 100096, Toshkent, Muqumiy, 13</a>
                    </li>
                    <li>
                      <a href="#">Qisqa raqam: 1216</a>
                    </li>
                    <li>
                      <a href="#">Faks: +998 71 150 53 95</a>
                    </li>
                    <li>
                      <a href="#">E-mail: company@imsoft.uz</a>
                    </li>
                  </ul>
                </div>
              </div>
              <p
                className="text-p"
                style={{
                  textAlign: "center",
                  color: "#64697E",
                }}
              >
                2022 © Barcha huquqlar himoyalangan va litsenziyalangan
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

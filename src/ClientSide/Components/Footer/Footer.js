import React from "react";
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
          <div className="footer-bottom">
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
                    <div className="fs-5 ">Help</div>
                    <li href="/">Privacy Policy</li>
                    <li href="/">Shipping & Delivery</li>
                    <li href="/">Refund Policy</li>
                    <li href="/">Track Your Order</li>
                  </ul>
                </div>
                <div className="col-md-4 footer-content-ul_1">
                  <ul>
                    <div className="fs-5 ">Store</div>
                    <li href="/">Furniture</li>
                    <li href="/">Tabble</li>
                    <li href="/">Sofa</li>
                    <li href="/">Other</li>
                  </ul>
                </div>
                <div className="col-md-4 footer-content-ul_2 pl-0">
                  <ul>
                    <div className="fs-5 ">Supports</div>
                    <li href="/">Feedbcak</li>
                    <li href="/">Contact us</li>
                    <li href="/">Download app</li>
                    <li href="/">Terms conditins</li>
                  </ul>
                </div>
              </div>
              <p style={{ textAlign: "center", color: "#64697E" }}>
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

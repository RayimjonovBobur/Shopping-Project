import React from "react";
import { Logo, LogoAdmin } from "../../../assates/icons/Icons";
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
  let apple = false;
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
          {apple ? (
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
          ) : null}
          <div className="row">
            <div className="col-lg-6">
              <div className="footer-content-item d-flex">
                <div className="col-md-6 footer-content-text_1">
                  <Logo />
                  <p>
                    Funking is the a popular Ecommerce site. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  </p>
                </div>
                <div className="col-md-6 footer-content-text_2">
                  <ul>
                    <strong>Help</strong>
                    <li href="/">Privacy Policy</li>
                    <li href="/">Shipping & Delivery</li>
                    <li href="/">Refund Policy</li>
                    <li href="/">Track Your Order</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="col-md-6 footer-content-ul_1">
                <ul>
                  <strong>Store</strong>
                  <li href="/">Furniture</li>
                  <li href="/">Tabble</li>
                  <li href="/">Sofa</li>
                  <li href="/">Other</li>
                </ul>
              </div>
              <div className="col-md-6 footer-content-ul_2">
                <ul>
                  <strong>Supports</strong>
                  <li href="/">Feedbcak</li>
                  <li href="/">Contact us</li>
                  <li href="/">Download app</li>
                  <li href="/">Terms conditins</li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="m-6" />
          <div className="footer-container-bottom-bit d-flex">
            <div className="col-md-6">
              {" "}
              <p className={"footer-text"}>
                © 2021 Funking - All rights reserved.
              </p>
            </div>
            <div className="col-md-6">
              <span>Privacy</span>
              <span>Security</span>
              <span>Terms</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

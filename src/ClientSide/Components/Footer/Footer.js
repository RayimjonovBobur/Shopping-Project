import React from "react";
import { Logo, LogoAdmin } from "../../../assates/icons/Icons";
import app from "../../../assates/images/app.png";
import {
  AppStore,
  Email,
  Facebook,
  Fecebook,
  GooglePlay,
  Instagram,
  InstagramIcon,
  Location,
  Phone,
  Pinterest,
  Telegram,
  Twitter,
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
              </div>
            </div>
          ) : null}
          <div className="footer-bottom">
            <div className="row mb-5">
              <div className="col-lg-4">
                <div className="footer-content-item">
                  <div className="footer-content-text_1">
                    <div className="mb-3">
                      <Logo />
                    </div>
                    {/* <ul> */}
                    <li className="fs-6">
                      Funking is the a popular Ecommerce site. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor
                    </li>
                    <div className="footer-icon">
                      <span className="m-lg-1">
                        <Facebook />
                      </span>
                      <span className="m-lg-1">
                        <Twitter />
                      </span>
                      <span className="m-lg-1">
                        <InstagramIcon />
                      </span>
                      <span className="m-lg-1">
                        <Pinterest />
                      </span>
                    </div>
                    {/* </ul> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-8 footer-links">
                <div className="col-md-4 footer-content-text_2">
                  <ul>
                    <div className="fs-5 mb-3 fw-normal">Help</div>
                    <li href="/">Privacy Policy</li>
                    <li href="/">Shipping & Delivery</li>
                    <li href="/">Refund Policy</li>
                    <li href="/">Track Your Order</li>
                  </ul>
                </div>
                <div className="col-md-4 footer-content-ul_1">
                  <ul>
                    <div className="fs-5 mb-3">Store</div>
                    <li href="/">Furniture</li>
                    <li href="/">Tabble</li>
                    <li href="/">Sofa</li>
                    <li href="/">Other</li>
                  </ul>
                </div>
                <div className="col-md-4 footer-content-ul_2 pl-0">
                  <ul>
                    <div className="fs-5 mb-3">Supports</div>
                    <li href="/">Feedbcak</li>
                    <li href="/">Contact us</li>
                    <li href="/">Download app</li>
                    <li href="/">Terms conditins</li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="m-6" />
            <div className="footer-container-bottom-bit">
              <div className="col-md-6">
                {" "}
                <p className="footer-text">
                  © 2021 Funking - All rights reserved.
                </p>
              </div>
              <div className="col-md-6 footer-bottom-little">
                <span className="m-4">Privacy</span>
                <span className="m-4">Security</span>
                <span className="m-4">Terms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

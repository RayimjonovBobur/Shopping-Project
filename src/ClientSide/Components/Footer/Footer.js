import React from "react";
import { Link } from "react-router-dom";
import { Facebook, InstagramIcon, TelegramIcon } from "../../utilities/icons";
import "./footer.scss";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="site-footer">
            <div>
              <h3>
                Onlayn <span>savdo</span>
              </h3>
              <span style={{ marginTop: "-20px", color: "#AAAAAA" }}>
                onlayn do’koni
              </span>
              <div className="site-footer_icon">
                <p>Savollar bo’yicha murojat uchun:</p>
                <span>info@imsoft.uz</span>
                <div>
                  <Facebook />
                  <InstagramIcon />
                  <TelegramIcon />
                </div>
              </div>
            </div>
            <div className="site-footer_companya">
              <span className="fs-5">Kompaniya</span>
              <ul>
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
            <div className="site-footer_companya">
              <span className="fs-5 ">Ma’lumotlar</span>
              <ul>
                <li>
                  <Link to={"/payment_plan"}>To'lov rejasi (Рассрочка)</Link>
                </li>
                <li>
                  <Link to="/delivery">Yetkazib berish</Link>
                </li>
                <li>
                  <Link to="/contact_us">Aloqa</Link>
                </li>
                <li>
                  <Link to="/about_us">Biz haqimizda</Link>
                </li>
              </ul>
            </div>
            <div className="site-footer_companya">
              <span className="fs-5">Biz bilan bog’lanish</span>
              <ul>
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
          <p className="site-footer_text">
            {" "}
            2022 © Barcha huquqlar himoyalangan va litsenziyalangan
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;

import React from "react";
import { ImgIcon } from "../../utilities/icons";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./payment.scss";

function PaymentPlan() {
  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <>
      <Header />
      <div className="payment">
        <div className="payment-plan">
          <div className="payment-plan-title">
            <h3>To'lov rejasi (Рассрочка)</h3>
            <p>
              Onlayn-savdodan maxsus to'lov rejasi!Orzularingizni ertangi kunga
              qoldirmang!Hozir xarid qiling, keyinroq katta chegirmalar bilan
              to‘lang!
            </p>
            <div className="payment-plan-content">
              <h4>Bo'lib-bo'lib sotib oling </h4>
              <ul>
                <li>3 oy </li>
                <li> 6 oy</li>
                <li>9 oy</li>
                <li>12 oy</li>
              </ul>
              <p>Faqat dastlabki to’lov va pasport talab qilinadi.</p>
            </div>
          </div>
          <div className="payment-plan_form">
            <form>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="F.I.SH"
                onChange={(e) =>
                  handleChange({
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Telefon raqam"
                onChange={(e) =>
                  handleChange({
                    [e.target.name]: e.target.value,
                  })
                }
              />{" "}
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <div className="payment-input_img">
                <div className="payment-input">
                  <label htmlFor="id" className="form-control">
                    <ImgIcon />
                    <p>Pasport rasmi</p>
                    <span>Yuklab olish uchun bosing</span>
                  </label>
                  <input
                    type="file"
                    id="id"
                    style={{ display: "none", visibility: "hidden" }}
                  />
                </div>

                <div className="payment-input">
                  <label htmlFor="id" className="form-control">
                    <ImgIcon />
                    <p>Pasport ro'yxatga olish</p>
                    <span>Yuklab olish uchun bosing</span>
                  </label>
                  <input
                    type="file"
                    id="id"
                    style={{ display: "none", visibility: "hidden" }}
                  />
                </div>
              </div>
              <input
                type="text"
                name="matn"
                className="form-control"
                placeholder="Matn"
                onChange={(e) =>
                  handleChange({
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <button className="btn-submit">Yuborish</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PaymentPlan;

import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./commun.scss";

function Communication() {
  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <>
      <Header />
      <div className="communication">
        <div className="communication-content">
          <h3>Aloqa</h3>
          <p>
            Bizga sharhlaringizni yuborish yoki veb-saytimizda ma'lumot
            qidirishda duch kelgan muammolar haqida xabar berish uchun quyidagi
            shakldan foydalaning. Biz barcha sharhlarni diqqat bilan o'qib
            chiqamiz, lekin siz yuborgan sharhlarga javob bera olmasligimizni
            unutmang.
          </p>
          <div className="communication-content_text">
            <h4>Biz bilan aloqa</h4>
            <p>+998xx xxx-xx-xx</p>
            <p>mail@domain.uz</p>
            <p> Toshkent, Yakkasaroy,</p>
            <p>Alisher.N, 12 Toshkent,</p>
            <p> Yakkasaroy, Alisher.N,</p>
            <p>12 Toshkent, Yakkasaroy,</p>
            <p>Alisher.N, 12 Toshkent,</p>
            <p>Yakkasaroy, Alisher.N, 12</p>
          </div>
        </div>
        <div className="communication-content_form">
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
      <Footer />
    </>
  );
}

export default Communication;

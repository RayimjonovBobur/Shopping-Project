import React from "react";
import Footer from "../../ClientSide/Components/Footer/Footer";
import Header from "../../ClientSide/Components/Header/Header";
import "./Business.scss";

const Business = () => {
  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <>
      <Header />
      <div className="container">
        <div className="business-container">
          <div className="business-content">
            <h3 className="business-title">
              <span className="biznes">Biznes uchun</span> qo’ng’iroq
            </h3>
            <div className="form-container">
              <form>
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="F.I.SH"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Telefon raqam"
                  />
                </div>{" "}
                <select
                  class="form-select mb-3"
                  aria-label="Default select example"
                >
                  <option selected>Region</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <div class="mb-3">
                  <input type="Matn" class="form-control" placeholder="Matn" />
                </div>
                <button type="submit" class="btn btn-primary w-100">
                  Yuborish
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Business;

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
          <div className="business-content d-flex">
            <h3 className="business-title">
              Biznes uchun <br /> qo’ng’iroq
            </h3>
            <div className="">
              <form>
                <div class="mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>{" "}
                <div class="mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>{" "}
                <div class="mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
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

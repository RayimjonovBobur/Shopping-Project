import React, { useEffect } from "react";
import komp from "../../../assates/images/komp.jpg";
import komp1 from "../../../assates/images/komp1.jpeg";
import komp2 from "../../../assates/images/komp2.webp";
import komp3 from "../../../assates/images/komp3.jpg";
import "../../../App.scss";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { getTotals } from "../../../Redux/stored_reducer";

const Card = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getTotals());
  // }, [dispatch]);


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 filer-content mb-3 mt-5">
          <div className="blog-asside-right pr0">
            <div className="panel panel-default sidebar-menu wow fadeInRight animated">
              <div className="panel-heading">
                <h5 className="panel-title text-center ">Smart search</h5>
              </div>
              <div className="panel-body search-widget">
                <form action="" className=" form-inline">
                  <fieldset>
                    <div className="row" style={{ paddingBottom: "1rem" }}>
                      <div className="col-xs-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Key word"
                        />
                      </div>
                    </div>
                  </fieldset>

                  <fieldset>
                    <div className="row">
                      <div className="col-xs-6">
                        <select
                          id="basic"
                          className="selectpicker show-tick form-control"
                        >
                          <option> -Status- </option>
                          <option>Rent </option>
                          <option>Boy</option>
                          <option>used</option>
                        </select>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
            <div className="checkbox-container">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label className="form-check-label" for="flexCheckChecked">
                  Yangiliklar
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Yangi kelganlar
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label className="form-check-label" for="flexCheckChecked">
                  Chegirmalar
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Bo'lib to'lash
                </label>
              </div>{" "}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label className="form-check-label" for="flexCheckChecked">
                  Kitoblar
                </label>
              </div>{" "}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Telefonlar va gadjetlar
                </label>
              </div>{" "}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label className="form-check-label" for="flexCheckChecked">
                  Konditsionerlar
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9 card-container mb-3 mt-4">
          <div className="d-flex">
            <h6 className="card-title m-3">Jaziramadagi xaloskor</h6>
          </div>
          <div className="card-content">
            <div className="card hovereffect">
              <div className="card-body">
                <img className="card-img" src={komp} alt="" />
              </div>
              <ul className="list-group list-group-flush">
                <h6 className="product-item-model">Model - MacBook</h6>
                <h6 className="card-info">
                  Ноутбук Apple MacBook Pro 16 with Retina display and Touch Bar
                  Late Core i7 16/512 GB 2019 (Gray, Silver){" "}
                </h6>
                <div className="product-item-price">
                  <span className="product-item-old-price">26 500 000 сум</span>
                  <span className="product-item-price-new">25 650 000 сум</span>
                </div>
              </ul>
              <div className="card-movement overlay">
                {/* <Link to="/" className="card-link"> */}
                <button className="btn product-item-btn info">
                  Sotib Olish
                </button>
                {/* </Link> */}
                <Link to="/" className="product-item-basket">
                  <i className="fa-solid fa-basket-shopping"></i>
                </Link>
              </div>
            </div>
            <div className="card hovereffect">
              <div className="card-body">
                <img className="card-img" src={komp1} alt="" />
              </div>
              <ul className="list-group list-group-flush">
                <h6 className="product-item-model">Model - Apple</h6>
                <h6 className="card-info">
                  Ноутбук Apple MacBook Air 13 8GB/256GB 2020 (Gold) (процессор
                  M1) (Русская клавиатура){" "}
                </h6>
                <div className="product-item-price">
                  <span className="product-item-old-price">14 500 000 сум</span>
                  <span className="product-item-price-new">13 850 000 сум</span>
                </div>
              </ul>
              <div className="card-movement overlay">
                {/* <Link to="/" className="card-link"> */}
                <button className="btn product-item-btn info">
                  Sotib Olish
                </button>
                {/* </Link> */}
                <Link to="/" className="product-item-basket">
                  <i className="fa-solid fa-basket-shopping"></i>
                </Link>
              </div>
            </div>
            <div className="card hovereffect">
              <div className="card-body">
                <img className="card-img" src={komp2} alt="" />
              </div>
              <ul className="list-group list-group-flush">
                <h6 className="product-item-model">Model - Honor</h6>
                <h6 className="card-info">
                  Ноутбук Honor MagicBook X 15 Core-i3, 8GB/256GB SSD (Space
                  Gray)
                </h6>
                <div className="product-item-price">
                  <span className="product-item-old-price">10 500 000 сум</span>
                  <span className="product-item-price-new">9 760 000 сум</span>
                </div>
              </ul>
              <div className="card-movement overlay">
                {/* <Link to="/" className="card-link"> */}
                <button className="btn product-item-btn info">
                  Sotib Olish
                </button>
                {/* </Link> */}
                <Link to="/" className="product-item-basket">
                  <i className="fa-solid fa-basket-shopping"></i>
                </Link>
              </div>
            </div>
            <div className="card hovereffect">
              <div className="card-body">
                <img className="card-img" src={komp3} alt="" />
              </div>
              <ul className="list-group list-group-flush">
                <h6 className="product-item-model">Model - Honor</h6>
                <h6 className="card-info">
                  Ноутбук Honor MagicBook X 15 Core-i3, 8GB/256GB SSD (Space
                  Gray)
                </h6>
                <div className="product-item-price">
                  <span className="product-item-old-price">7 500 000 сум</span>
                  <span className="product-item-price-new">7 150 000 сум</span>
                </div>
              </ul>
              <div className="card-movement overlay">
                {/* <Link to="/" className="card-link"> */}
                <button className="btn product-item-btn info">
                  Sotib Olish
                </button>
                {/* </Link> */}
                <Link to="/" className="product-item-basket">
                  <i className="fa-solid fa-basket-shopping"></i>
                </Link>
              </div>
            </div>
            <div className="card hovereffect">
              <div className="card-body">
                <img className="card-img" src={komp3} alt="" />
              </div>
              <ul className="list-group list-group-flush">
                <h6 className="product-item-model">Model - Honor</h6>
                <h6 className="card-info">
                  Ноутбук Honor MagicBook X 15 Core-i3, 8GB/256GB SSD (Space
                  Gray)
                </h6>
                <div className="product-item-price">
                  <span className="product-item-old-price">7 500 000 сум</span>
                  <span className="product-item-price-new">7 150 000 сум</span>
                </div>
              </ul>
              <div className="card-movement overlay">
                {/* <Link to="/" className="card-link"> */}
                <button className="btn product-item-btn info">
                  Sotib Olish
                </button>
                {/* </Link> */}
                <Link to="/" className="product-item-basket">
                  <i className="fa-solid fa-basket-shopping"></i>
                </Link>
              </div>
            </div>
            <div className="card hovereffect">
              <div className="card-body">
                <img className="card-img" src={komp3} alt="" />
              </div>
              <ul className="list-group list-group-flush">
                <h6 className="product-item-model">Model - Honor</h6>
                <h6 className="card-info">
                  Ноутбук Honor MagicBook X 15 Core-i3, 8GB/256GB SSD (Space
                  Gray)
                </h6>
                <div className="product-item-price">
                  <span className="product-item-old-price">7 500 000 сум</span>
                  <span className="product-item-price-new">7 150 000 сум</span>
                </div>
              </ul>
              <div className="card-movement overlay">
                {/* <Link to="/" className="card-link"> */}
                <button className="btn product-item-btn info">
                  Sotib Olish
                </button>
                {/* </Link> */}
                <Link to="/" className="product-item-basket">
                  <i className="fa-solid fa-basket-shopping"></i>
                </Link>
              </div>
            </div>
            <div className="card hovereffect">
              <div className="card-body">
                <img className="card-img" src={komp3} alt="" />
              </div>
              <ul className="list-group list-group-flush">
                <h6 className="product-item-model">Model - Honor</h6>
                <h6 className="card-info">
                  Ноутбук Honor MagicBook X 15 Core-i3, 8GB/256GB SSD (Space
                  Gray)
                </h6>
                <div className="product-item-price">
                  <span className="product-item-old-price">7 500 000 сум</span>
                  <span className="product-item-price-new">7 150 000 сум</span>
                </div>
              </ul>
              <div className="card-movement overlay">
                {/* <Link to="/" className="card-link"> */}
                <button className="btn product-item-btn info">
                  Sotib Olish
                </button>
                {/* </Link> */}
                <Link to="/" className="product-item-basket">
                  <i className="fa-solid fa-basket-shopping"></i>
                </Link>
              </div>
            </div>
            <div className="card hovereffect">
              <div className="card-body">
                <img className="card-img" src={komp3} alt="" />
              </div>
              <ul className="list-group list-group-flush ">
                <h6 className="product-item-model">Model - Honor</h6>
                <h6 className="card-info">
                  Ноутбук Honor MagicBook X 15 Core-i3, 8GB/256GB SSD (Space
                  Gray)
                </h6>
                <div className="product-item-price">
                  <span className="product-item-old-price">7 500 000 сум</span>
                  <span className="product-item-price-new">7 150 000 сум</span>
                </div>
              </ul>
              <div className="card-movement overlay ">
                {/* <Link to="/" className="card-link"> */}
                <button className="btn product-item-btn info">
                  Sotib Olish
                </button>
                {/* </Link> */}
                <Link to="/" className="product-item-basket">
                  <i className="fa-solid fa-basket-shopping"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

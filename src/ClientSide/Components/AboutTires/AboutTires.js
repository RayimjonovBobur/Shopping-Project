import React, { useCallback, useState } from "react";
import CardShop from "../Card Shop/CardShop";
import ImageCr from "../Carusel/ImageCr";
import Footer from "../Footer/Footer";
import "react-medium-image-zoom/dist/styles.css";
import "./style.scss";

function AboutTires() {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(100);
  const [activePrice, setActivePrice] = useState(100);

  let incrementCount = () => {
    if (count < 5) {
      setCount(count + 1);
      setActivePrice(activePrice + price);
    }
  };

  let decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
      setActivePrice(activePrice - price);
    }
  };

  // Zoom function
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImgLoad = useCallback(() => {
    setIsZoomed(true);
  }, []);

  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);

  return (
    <>
      <div className="container">
        <div className="site-content_items mt-2">
          <div className="site-tire">
            <div className="site-tire_title">
              {/* <ControlledZoom
                isZoomed={isZoomed}
                onZoomChange={handleZoomChange}
              >
                <img
                  alt="that wanaka tree"
                  onLoad={handleImgLoad}  
                  src={tire}
                  width="500"
                />
              </ControlledZoom> */}
              {/* <img src={tire} alt="" /> */}
              <ImageCr />
              {/* <Zoom img={tire} zoomScale={2} width={406} height={406} /> */}
            </div>
          </div>
          <div className="site-tire_content mt-3">
            <h2>
              FONDMETAL
              <br /> Makhai (new)
            </h2>
            <p className="text">
              Диск FONDMETAL Makhai 9 x 21 5*112 Et: 25 Dia: 66,5 Black Glossy
              Machined
            </p>
            <p>Ранги</p>
            <div className="site-tire_color">
              <div>
                <p className="qora"></p>
                <p>Черная</p>
              </div>
              <div>
                <p className="oq"></p>
                <p>Стальная</p>
              </div>
            </div>
            <div className="site-tire_item">
              <div>
                <button className="site_btn" onClick={decrementCount}>
                  -
                </button>
                <spa>{count}</spa>
                <button className="site_btn" onClick={incrementCount}>
                  +
                </button>
              </div>
            </div>
            <div className="site-price">
              <p>7 450 000 so’m</p>
              <p className="site-text">8 000 000 so’m</p>
            </div>
            <button className="btn_add">Korzinaga qo’shish</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="list">
          <div>
            <button className="btn btn-light ">Tavsif</button>
          </div>
          <div>
            <button className="btn btn-light active">Batafsil</button>
          </div>
        </div>
        <div className="site-read_more">
          <p>Batafsil</p>
          <div className="d-flex">
            <div>
              <p>Ishlab chiqaruvchi:</p>
              <p>Turi:</p>
              <p>Status:</p>
            </div>
            <div>
              <p>Ishlab chiqaruvchi:</p>
              <p>Turi:</p>
              <p>Status:</p>
            </div>
          </div>
        </div>
      </div>
      <CardShop />
      <Footer />
    </>
  );
}

export default AboutTires;

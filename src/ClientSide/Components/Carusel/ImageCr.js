import React, { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Zoom from "react-img-zoom";
import tire from "../../../assates/images/image.png";
import diska2 from "../../../assates/images/diska2.png";
import diska3 from "../../../assates/images/disk3.png";
import diska4 from "../../../assates/images/diska3.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./ImageCr.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import Basket from "../Basket/Basket";
import { FullIcon } from "../../utilities/icons";

const ImageCr = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);


  return (
    <div className="slider-header">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide className="zoom-image">
          <SwiperSlide>
            <img src={tire} />
          </SwiperSlide>{" "}
          {/* <Zoom img={tire} zoomScale={2} width={406} height={406} /> */}
        </SwiperSlide>
        <SwiperSlide className="zoom-image">
          <SwiperSlide>
            <img src={diska3} />
          </SwiperSlide>
          {/* <Zoom img={diska2} zoomScale={2} width={406} height={406} /> */}
        </SwiperSlide>
        <SwiperSlide className="zoom-image">
          <SwiperSlide>
            <img src={diska4} />
          </SwiperSlide>
          {/* <Zoom img={diska3} zoomScale={2} width={406} height={406} /> */}
        </SwiperSlide>
        <SwiperSlide className="zoom-image">
          <SwiperSlide>
            <img src={diska2} />
          </SwiperSlide>
          {/* <Zoom img={diska4} zoomScale={2} width={406} height={406} /> */}
        </SwiperSlide>
      </Swiper>
      <button
        type="button"
        class="basket-btn btnSavatcha"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <span className="slider-icon">
          <FullIcon />
        </span>
      </button>
      <div className="modal_client">
        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" style={{ width: "100%" }}>
            <div class="modal-content">
              <div class="modal-body">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  <SwiperSlide className="zoom-image">
                    <Zoom img={tire} zoomScale={2} width={406} height={406} />
                  </SwiperSlide>
                  <SwiperSlide className="zoom-image">
                    <Zoom img={diska2} zoomScale={2} width={406} height={406} />
                  </SwiperSlide>
                  <SwiperSlide className="zoom-image">
                    <Zoom img={diska3} zoomScale={2} width={406} height={406} />
                  </SwiperSlide>
                  <SwiperSlide className="zoom-image">
                    <Zoom img={diska4} zoomScale={2} width={406} height={406} />
                  </SwiperSlide>
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src={tire} />
                  </SwiperSlide>{" "}
                  <SwiperSlide>
                    <img src={diska2} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={diska3} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={diska4} />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={tire} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={diska2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={diska3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={diska4} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageCr;

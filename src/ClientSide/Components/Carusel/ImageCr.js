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
  const [thumbsSwiperr, setThumbsSwiperr] = useState(null);

  // Zoom function
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImgLoad = useCallback(() => {
    setIsZoomed(true);
  }, []);

  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);
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
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <SwiperSlide className="zoom-image">
          <SwiperSlide>
            <img src={tire} />
          </SwiperSlide>{" "}
        </SwiperSlide>
        <SwiperSlide className="zoom-image">
          <SwiperSlide>
            <img src={diska2} />
          </SwiperSlide>
        </SwiperSlide>
        <SwiperSlide className="zoom-image">
          <SwiperSlide>
            <img src={diska3} />
          </SwiperSlide>
        </SwiperSlide>
        <SwiperSlide className="zoom-image">
          <SwiperSlide>
            <img src={diska4} />
          </SwiperSlide>
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

      {/* modal_Slider */}
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
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div class="modal-body">
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiperr }}
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
                  onSwiper={setThumbsSwiperr}
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
    </div>
  );
};

export default ImageCr;

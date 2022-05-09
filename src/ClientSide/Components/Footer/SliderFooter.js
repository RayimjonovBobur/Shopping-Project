import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Img1, Img2, Img3, Img4, Img5 } from "../../utilities/icons";

const SliderFooter = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}

      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
        <Img1 />
      </SwiperSlide>
      <SwiperSlide>
        <Img2 />
      </SwiperSlide>
      <SwiperSlide>
        <Img3 />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <Img4 />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <Img5 />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <Img5 />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <Img5 />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <Img5 />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <Img5 />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <Img5 />
      </SwiperSlide>{" "}
    </Swiper>
  );
};

export default SliderFooter;

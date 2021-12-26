import React from "react";
import "./section5.css";
// swiper library
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay } from "swiper";

import img1 from "./img1.webp";
import img2 from "./img2.webp";
import img3 from "./img3.webp";
import img4 from "./img4.webp";
import img5 from "./img5.webp";
import img6 from "./img6.webp";
function Section5() {
  SwiperCore.use([Autoplay]);
  return (
    <div className="section5">
      <h4>Friends of Baby Doge</h4>
      <p>Exchanges</p>

      <div className="slider">
        <Swiper
          spaceBetween={20}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 100,
            reverseDirection: false,
            disableOnInteraction: false,
          }}
          slidesPerView="6"
          // loopedSlides={3}
          // centeredSlides={true}
          breakpoints={{
            // when window width is >= 640px
            300: {
              width: 300,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            700: {
              width: 500,
              slidesPerView: 2,
            },
            1000: {
              width: 1000,
              slidesPerView: 3,
            },
            1500: {
              width: 1500,
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <img src={img1} alt="..." />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="..." />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="..." />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="..." />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="..." />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} alt="..." />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Section5;

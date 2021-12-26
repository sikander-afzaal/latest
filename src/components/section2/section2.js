import React from "react";
// css
import "./section2.css";
// swiper library
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay } from "swiper";
// assets
import pic from "./auth.png";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.png";

function Section2() {
  SwiperCore.use([Autoplay]);

  return (
    <>
      <div className="section2">
        <div className="section2_top">
          <img className="auth" src={pic} alt="..." />
          <div className="section2_btn-div">
            <button className="section2_btn">View Chart</button>
            <button className="section2_btn">Check ETH Scan</button>
          </div>
        </div>
        <div className="section2_bottom">
          <p className="seen">As Seen In</p>
          <div className="images-div">
            <Swiper
              spaceBetween={20}
              loop={true}
              speed={4000}
              autoplay={{
                delay: 100,
                reverseDirection: false,
                disableOnInteraction: false,
              }}
              slidesPerView="5"
              // loopedSlides={3}
              breakpoints={{
                // when window width is >= 640px
                1200: {
                  slidesPerView: 5,
                },
                760: {
                  slidesPerView: 3,
                },
                600: {
                  slidesPerView: 2,
                  centeredSlides: true,
                },
                350: {
                  slidesPerView: 1,
                  centeredSlides: true,
                },
                // when window width is >= 768px
              }}
            >
              <SwiperSlide>
                <img src={img1} alt="..." className="section2_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="..." className="section2_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} alt="..." className="section2_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img4} alt="..." className="section2_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img5} alt="..." className="section2_image" />
              </SwiperSlide>
            </Swiper>

            {/* <img src={img2} alt="..." className="section2_image" />
            <img src={img3} alt="..." className="section2_image" />
            <img src={img3} alt="..." className="section2_image" />
            <img src={img4} alt="..." className="section2_image" />
            <img src={img5} alt="..." className="section2_image" /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;

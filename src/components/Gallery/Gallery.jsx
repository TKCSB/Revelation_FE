import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import Navigation CSS
import "./Gallery.css";

// Replace these with your actual images
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";
import img10 from "../../assets/img10.jpg";
import img11 from "../../assets/img11.jpg";
import img12 from "../../assets/img12.jpg";
import img13 from "../../assets/img13.jpg";
import img14 from "../../assets/img14.jpg";
import img15 from "../../assets/img15.jpg";
import img16 from "../../assets/img16.jpg";
import img17 from "../../assets/img17.jpg";
import img18 from "../../assets/img18.jpg";
import img19 from "../../assets/img19.jpg";
import img20 from "../../assets/img20.jpg";

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, 
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20
];

const Gallery = () => {
  return (
    <div className="homepage-gallery-section mt-20">
      <h2 className="homepage-gallery-header">GALLERY</h2>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={50}
        slideToClickedSlide={true} // Ensures selected slide stays in focus
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 500,
          modifier: 1.5,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true} // Enables manual navigation buttons
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="homepage-mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="homepage-gallery-box">
            <div
              className="homepage-gallery-bg"
              style={{ backgroundImage: `url(${src})` }}
            ></div>

            <div className="homepage-gallery-content">
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="homepage-gallery-img"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;

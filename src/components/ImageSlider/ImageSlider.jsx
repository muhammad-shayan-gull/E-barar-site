// components/ImageSlider.jsx
import React from "react";
import Slider from "react-slick";
import "./ImageSlider.css";

// Import local images
import img1 from "../../assets/image/img1.jpeg";
import img2 from "../../assets/image/img2.jpeg";
import img3 from "../../assets/image/img3.jpeg";
import img4 from "../../assets/image/img4.jpeg";


const ImageSlider = () => {
  const images = [img1, img2, img3, img4 ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((src, i) => (
          <div key={i} className="slide text-center">
            <img src={src} alt={`Slide ${i}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;

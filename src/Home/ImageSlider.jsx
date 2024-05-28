/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleImageClick = (image) => {
    // Handle image click event
    console.log(`Image clicked: ${image}`);
  };

  return (
    <Slider {...settings}>
      <div className="px-2" onClick={() => handleImageClick("Image 1")}>
        <div className="bg-white rounded-lg overflow-hidden aspect-[4/3] cursor-pointer">
          <img src="/Cardimage.jpg" alt="Image 1" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="px-2" onClick={() => handleImageClick("Image 2")}>
        <div className="bg-white rounded-lg overflow-hidden aspect-[4/3] cursor-pointer">
          <img src="/slide2.jpg" alt="Image 2" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="px-2" onClick={() => handleImageClick("Image 3")}>
        <div className="bg-white rounded-lg overflow-hidden aspect-[4/3] cursor-pointer">
          <img src="/slide3.jpg" alt="Image 3" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="px-2" onClick={() => handleImageClick("Image 4")}>
        <div className="bg-white rounded-lg overflow-hidden aspect-[4/3] cursor-pointer">
          <img src="/slide4.jpg" alt="Image 4" className="w-full h-full object-cover" />
        </div>
      </div>
    </Slider>
  );
};

export default ImageSlider;

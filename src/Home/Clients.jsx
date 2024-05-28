import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './custom.css';

const Clients = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const images = [
    { src: 'Cardimage.jpg', alt: 'Client 1' },
    { src: 'slide2.jpg', alt: 'Client 2' },
    { src: 'slide3.jpg', alt: 'Client 3' },
    { src: 'slide4.jpg', alt: 'Client 4' },
    { src: 'Cardimage.jpg', alt: 'Client 5' }
  ];

  return (
    <section className="py-12 bg-gray-200">
      <div className="container mx-auto px-10">
        <h2 className="text-3xl font-bold  mb-6">Clients Who Trust Us</h2>
        <p className="text-lg mb-12">We make sure everything we do helps in this cause.</p>
        <div className="relative slider-1">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} >
                <div className="h-48 bg-white flex items-center justify-center  shadow-lg">
                  <img src={image.src} alt={image.alt} className="h-full w-full object-contain rounded-lg" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Clients;

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PhotoGallerySection = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
      }
    ]
  };

  const images = [
    { src: 'Cardimage.jpg', title: 'SewaBharthi Kulana online', info: 'More info ' },
    { src: 'slide2.jpg', title: 'Sewa sangam 2023', info: 'More info ' },
    { src: 'slide3.jpg', title: 'Swachh Guruwar', info: 'More info' },
    { src: 'slide4.jpg', title: 'Ambu Palliwal', info: 'More info ' },
    { src: 'Cardimage.jpg', title: 'SewaBharthi', info: 'More info ' }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-10">
        <h2 className="text-3xl font-bold mb-6">Photo Gallery</h2>
        <p className=" text-lg mb-12">Some memories of life, what we do, how we do it.</p>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="p-2">
              <div className="relative h-96 bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: `url(${image.src})` }}>
                <div className="absolute bottom-0 left-0 right-0  bg-gradient-to-t from-black/30 to-transparent p-4 rounded-b-lg">
                  <h3 className="text-xl text-white font-bold">{image.title}</h3>
                  <div className='flex items-center gap-2'>
                    <p className="text-lg text-white font-semibold cursor-pointer">{image.info}</p>
                    <svg className="w-6 h-6 text-white mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PhotoGallerySection;

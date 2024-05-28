import React from 'react';
import ImageSlider from './ImageSlider';


const Service = () => {
  return (
    <section className=" py-20">
      <div className="container mx-auto px-10">
        <h2 className="text-3xl font-bold mb-4">What We Serve</h2>
        <p className="text-lg font-semibold text-gray-600 mb-12">
          We need your continued support more than ever. Your efforts are not just saving lives, they are helping us get our lives back.
        </p>
        <ImageSlider />
      </div>
    </section>
  );
};

export default Service;

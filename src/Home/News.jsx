/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';

const News = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };



  const accordionData = [
    {
      title: 'Sewa Bharthi Kudulguru Extends?',
      content: 'In publishing and graphic design, Lorem Ipsum is commonly used placeholder text.'
    },
    {
      title: 'Providing Nutrition Breakfast to 136 adivasi student?',
      content: 'In publishing and graphic design, Lorem Ipsum is commonly used placeholder text.'
    },
    {
      title: 'Lalithamma can walk by themselves and enjoy life?',
      content: 'In publishing and graphic design, Lorem Ipsum is commonly used placeholder text.'
    },
    {
      title: 'Adimali government school?',
      content: 'In publishing and graphic design, Lorem Ipsum is commonly used placeholder text.'
    },

  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-10 column  md:flex gap-20">
        <div>
          <h2 className="text-4xl font-bold mb-4">Latest News</h2>
          <p className="text-lg font-semibold text-gray-600">In publishing and graphics design, Lorem Ipsum is commonly used placeholder text.</p>
          <div className="mt-8 space-y-4">
            {accordionData.map((item, index) => (
              <div
                key={index}
                className={`bg-${activeIndex === index ? 'orange-600' : ''} rounded-3xl border-b-4`}
              >
                <button
                  className="flex items-center justify-between w-full p-4 focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className={`font-bold text-xl text-${activeIndex === index ? 'white' : ''}`}>
                    {item.title}
                  </h3>
                  <svg
                    className={`h-6 w-6 transform transition-transform duration-300 ${activeIndex === index ? 'rotate- 0 : text-white' : 'rotate- 45 : text-orange-600'
                      }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {activeIndex === index ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    )}
                  </svg>
                </button>
                {activeIndex === index && (
                  <div className="p-4 border-t">
                    <p className={`font-medium text-lg text-${activeIndex === index ? 'white' : ''}`}>{item.content}</p>
                    <button className="bg-blue-600 flex gap-2 items-center px-6 py-4 rounded-xl text-white mt-3 font-bold">
                      JOIN US <ForwardIcon />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className=' flex mt-4 md:mt-0 flex-col gap-4'>
          <div className="bg-white rounded-xl overflow-hidden">
            <img src="/Cardimage.jpg" alt="Image 1" className="w-full h-72   object-cover" />
          </div>
          <div className="bg-white rounded-lg overflow-hidden">
            <img src="/Cardimage.jpg" alt="Image 2" className="w-full h-64 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;


const ForwardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);


/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
const Resources = () => {
  return (
    <div className="bg-orange-500 h-screen relative flex flex-col justify-center items-center">
      <div className="md:flex flex-wrap justify-between w-full max-w-6xl">
        <div className="text-white text-center">
          <div className="text-3xl sm:text-5xl md:text-6xl font-bold">150+</div>
          <div className="text-xl">Volunteers</div>
        </div>
        <div className="text-white text-center">
          <div className="text-3xl sm:text-5xl md:text-6xl font-bold">120+</div>
          <div className="text-xl">Projects</div>
        </div>
        <div className="text-white text-center">
          <div className="text-3xl sm:text-5xl md:text-6xl font-bold">56K+</div>
          <div className="text-xl">Blood Donors</div>
        </div>
        <div className="text-white text-center">
          <div className="text-3xl sm:text-5xl md:text-6xl font-bold">₹2B+</div>
          <div className="text-xl">Fund Raised</div>
        </div>
      </div>
      <div className="text-white md:mt-44 mt-10 px-10 lg:px-0 flex items-start w-full max-w-6xl">
        <div className="flex items-start w-96">
          <h3 className="text-4xl font-bold">Explore Online Services & Resources</h3>
        </div>
      </div>
      <style>
        {`
    .absolute-bottom {
      bottom: -10rem;
    }
  `}
      </style>
      <div className="absolute bottom-10 right-4 md:right-5 lg:right-5 xl:right-48 hidden lg:flex justify-end items-end p-2 md:p-4 absolute-bottom">
        <div className="flex flex-col lg:flex-row bg-blue-950 rounded-xl w-full lg:w-auto">
          <div className='flex flex-col gap-3 bg-white rounded-tl-xl rounded-bl-xl p-4 md:p-6 lg:p-10  lg:w-70 xl:w-80'>
            {['Find a Blood Donor', 'Another Link', 'Find a Blood Donor', 'Another Link', 'Find a Blood Donor', 'Another Link'].map((text, index) => (
              <div key={index}>
                <div className="flex items-center justify-between cursor-pointer">
                  <a className="text-gray-600 font-semibold">{text}</a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <hr className="border-gray-300 my-2" />
              </div>
            ))}
          </div>
          <div className='flex flex-col gap-3 p-4 md:p-6 lg:p-10  lg:w-70 xl:w-80'>
            {['Find a Blood Donor', 'Another Link', 'Find a Blood Donor', 'Another Link', 'Find a Blood Donor', 'Another Link'].map((text, index) => (
              <div key={index}>
                <div className="flex items-center justify-between cursor-pointer">
                  <a className="text-white font-semibold">{text}</a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <hr className="border-gray-300 my-2" />
              </div>
            ))}
          </div>
        </div>
      </div>





    </div>
  );
};

export default Resources;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <footer className="bg-black text-white py-10 px-10">
      <div className="container mx-auto flex flex-wrap items-start justify-between">
        <div className="flex flex-col items-start">
          <a href='#' onClick={scrollToTop}>
            <img src="/home.svg" alt="Logo" className="w-32 mb-4 cursor-pointer" />
          </a>
          <p className="text-lg" style={{ maxWidth: '400px', margin: '0 auto' }}>The culture thus formed should be passed on from generation to generation</p>
          <div className="flex mt-8 flex-wrap items-start">
            <a href="#" className="rounded-full hover:bg-pink-100 bg-white w-8 h-8 flex items-center justify-center mr-4">
              <img src="/insta.png" alt="Instagram" className="w-4" />
            </a>
            <a href="#" className="rounded-full hover:bg-pink-100 bg-white w-8 h-8 flex items-center justify-center mr-4">
              <img src="/twitter.png" alt="Twitter" className="w-4" />
            </a>
            <a href="#" className="rounded-full hover:bg-pink-100 bg-white w-8 h-8 flex items-center justify-center mr-4">
              <img src="/facebook.png" alt="Facebook" className="w-4" />
            </a>
            <a href="#" className="rounded-full hover:bg-pink-100 bg-white w-8 h-8 flex items-center justify-center mr-4">
              <img src="/linkedin.png" alt="LinkedIn" className="w-4" />
            </a>
            <a href="#" className="rounded-full hover:bg-pink-100 bg-white w-8 h-8 flex items-center justify-center">
              <img src="/youtube.png" alt="YouTube" className="w-4 " />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-xl mb-4">Services</h3>
          <ul className="text-md flex flex-col gap-3">
            <li className='hover:text-gray-400 cursor-pointer'>Find Blood Donor</li>
            <li className='hover:text-gray-400 cursor-pointer'>Find Ambulance</li>
            <li className='hover:text-gray-400 cursor-pointer'>Pain & Palliative</li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-xl mb-4">Company</h3>
          <ul className="text-md flex flex-col gap-3 ">
            <li className='hover:text-gray-400 cursor-pointer'>Find Receipt</li>
            <li className='hover:text-gray-400 cursor-pointer'>Seva Samarpan</li>
            <li className='hover:text-gray-400 cursor-pointer'>Latest News</li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-xl mb-4">Support</h3>
          <ul className="text-md flex flex-col gap-3">
            <li className='hover:text-gray-400 cursor-pointer'>FAQs</li>
            <li className='hover:text-gray-400 cursor-pointer'>Support Center</li>
            <li className='hover:text-gray-400 cursor-pointer'>Contact Us</li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-xl mb-4">Movement</h3>
          <ul className="text-md flex flex-col gap-3">
            <li className='hover:text-gray-400 cursor-pointer'>What We Are</li>
            <li className='hover:text-gray-400 cursor-pointer'>Support Us</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto py-4 border-t border-gray-600 mt-8 flex flex-wrap items-center justify-between">
        <div className="text-sm">&copy; 2023 Desseta Seva Bharthi Keralam. All rights reserved.</div>
        <div className="text-sm flex">
          <a href="#" className="mr-4">Terms & Agreements</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

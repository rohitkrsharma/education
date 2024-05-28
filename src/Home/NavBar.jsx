/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="container mx-auto px-10 py-4 flex justify-between lg:items-center">
        <div>
          <a href='#'>
            <img src="./Home.svg" alt="Logo" className="h-7 lg:h-14" />
          </a>
        </div>
        <div className='flex-col space-y-3'>
          <div className="items-center space-x-4 justify-end hidden lg:flex">
            <div className="flex items-center space-x-1">
              <svg className="h-5 w-5" fill="#ffa600" viewBox="0 0 24 24" stroke="#ffa600">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498c.309.103.684.573.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:18002020081" className="text-gray-800">1800-202-0081</a>
            </div>
            <div className="flex items-center space-x-1">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffa600">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@example.com" className="text-gray-800">info@example.com</a>
            </div>
            <div class="relative group">
              <button class="flex items-center space-x-1 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M2 12h20"></path>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                <span>Select Language</span>
                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div class="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-32 py-2 hidden z-10 group-hover:block">
                <a href="#" class="block px-4 py-2 hover:bg-gray-100">English</a>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100">Español</a>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100">Français</a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end space-x-6 lg:hidden">
            <button className="focus:outline-none" onClick={toggleMenu}>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          <div className={`column space-y-1 lg:space-y-0 items-baseline space-x-0 lg:flex lg:space-x-4 ${isOpen ? 'flex flex-col items-end' : 'hidden'}`}>
            <a href="#" className="hover:text-gray-600">Home</a>
            <div className="relative group">
              <button className="flex items-center space-x-1 focus:outline-none">
                <span>About Us</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 z-50 bg-white shadow-lg rounded-md w-48 py-2 hidden group-hover:block">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Home</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">About Us</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Contact</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Chat</a>
              </div>
            </div>
            <div>
              <a href="#" className="hover:text-gray-600">Development Opportunity</a>
            </div>
            <div>
              <a href="#" className="hover:text-gray-600">Government Scheme</a>
            </div>
            <div>
              <button className="bg-orange-600 text-white px-3 py-2 rounded-xl hover:bg-orange-500">
                Organics Chat
              </button>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

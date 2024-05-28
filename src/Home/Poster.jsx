/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const Poster = () => {
  return (
    <div className="bg-pink-50 px-20 py-20 text-center">
      <h1 className="text-2xl font-bold mb-4">Rashtriya Sew Bharthi</h1>
      <p className="text-xl font-bold text-center text-gray-600 mb-8 leading-normal" style={{ maxWidth: '750px', margin: '0 auto' }}>Don't take our word for it. The world loves us. They have shared a few reviews to show just how much.</p>

      <div className="flex justify-between mb-8">
        <div className="w-24 h-24 mt-20 rounded-full overflow-hidden border-4 border-gray-300">
          <img src="/kohli.jpg" alt="Image" className="w-full h-full object-cover" />
        </div>
        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-gray-300">
          <img src="/Narendra_modi.jpg" alt="Image" className="w-full h-full object-cover" />
        </div>
        <div className="w-24 h-24 mt-20 rounded-full overflow-hidden border-4 border-gray-300">
          <img src="/biden.jpg" alt="Image" className="w-full h-full object-cover" />
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-2">Narendra Modi</h2>
      <p className="text-2xl font-semibold text-gray-500 mb-4">Hon. Prime Minister</p>

      <div className="flex items-center justify-center mb-4">
        <svg className="h-5 w-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 1l2.598 5.463h5.799l-4.426 4.527 1.311 6.01L10 14.937l-5.283 2.063 1.311-6.01L1.603 6.463h5.799L10 1z" clipRule="evenodd" />
        </svg>
        <svg className="h-5 w-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 1l2.598 5.463h5.799l-4.426 4.527 1.311 6.01L10 14.937l-5.283 2.063 1.311-6.01L1.603 6.463h5.799L10 1z" clipRule="evenodd" />
        </svg>
        <svg className="h-5 w-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 1l2.598 5.463h5.799l-4.426 4.527 1.311 6.01L10 14.937l-5.283 2.063 1.311-6.01L1.603 6.463h5.799L10 1z" clipRule="evenodd" />
        </svg>
        <svg className="h-5 w-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 1l2.598 5.463h5.799l-4.426 4.527 1.311 6.01L10 14.937l-5.283 2.063 1.311-6.01L1.603 6.463h5.799L10 1z" clipRule="evenodd" />
        </svg>
        <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 1l2.598 5.463h5.799l-4.426 4.527 1.311 6.01L10 14.937l-5.283 2.063 1.311-6.01L1.603 6.463h5.799L10 1z" clipRule="evenodd" />
        </svg>
      </div>

      <p className="text-2xl font-bold text-gray-500 leading-relaxed" style={{ maxWidth: '500px', margin: '0 auto' }}>Bapu's ideals of selfless service are reflected in the way of Seva Bharthi workers, who are serving the nation tirelessly.</p>
    </div>
  );
};

export default Poster;

import React, { useEffect, useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import { FaRegPlayCircle } from "react-icons/fa";

const Hero = () => {
  const images = [
    'https://printify.com/pfh/assets/animations/images/img_0.png',
    'https://printify.com/pfh/assets/animations/images/img_1.png',
    'https://printify.com/pfh/assets/animations/images/img_2.png',
    'https://printify.com/pfh/assets/animations/images/img_3.png',
    'https://printify.com/pfh/assets/animations/images/img_4.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div
      className="bg-white px-4 py-12 md:py-24"
      style={{
        backgroundImage: "url('https://printify.com/pfh/media/background-IAMAETLT.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto p-20 flex flex-col md:flex-row items-center justify-between">
        
        <div className="flex-1 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Create and sell custom products
          </h1>
          <ul className="list-disc pl-5 mb-6 text-lg">
            <div className='flex items-center gap-2 text-gray-700 font-medium'>
              <FaCheck className='text-green-500' /> 100% Free to use
            </div>
            <div className='flex items-center gap-2 text-gray-700 font-medium'>
              <FaCheck className='text-green-500' /> 900+ High-Quality Products
            </div>
            <div className='flex items-center gap-2 text-gray-700 font-medium'>
              <FaCheck className='text-green-500' /> Largest global print network
            </div>
          </ul>
          <div className="flex gap-4">
            <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">
              Start for free
            </button>
            <button className="px-6 py-2 border border-gray-300 rounded-md flex-row flex items-center gap-2 text-gray-700 font-medium hover:text-green-500">
              <FaRegPlayCircle /> How it works?
            </button>
          </div>
          <h4 className='font-medium text-green-500 py-3'>
            Trusted by over 8M sellers around the world
          </h4>
        </div>

        <div className="flex-1 flex justify-end relative h-full">

          <div
            className="relative w-96 h-96 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://printify.com/pfh/assets/animations/images/img_5.png')",
            }}
          >
          
            <div
              className="absolute inset-0 flex justify-center items-center overflow-hidden"
              style={{ width: '200px', height: '200px', padding:30, margin: 'auto' }}
            >
                
              <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full px-5 object-contain"
                    style={{ Width: '100%' }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from 'react';

const Feature = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-10 sm:px-6 2xl:px-8">
        <div className="mt-10 px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

            <div className="flex flex-col items-start">
              <img
                src="https://printify.com/pfh/assets/legacy/higher-profits.svg"
                alt="Higher Profits"
                className="w-[50%] h-[50%] mb-5"
              />
              <h3 className="text-2xl leading-6 font-bold my-4 text-gray-900">
                Higher Profits
              </h3>
              <p className="mt-2 text-base text-left text-gray-500">
                We offer some of the lowest prices in the industry because print providers continuously compete to win your business.
              </p>
            </div>


            <div className="flex flex-col items-start">
              <img
                src="https://printify.com/pfh/assets/legacy/robust-scaling.svg"
                alt="Robust Scaling"
                className="w-[50%] h-[50%] mb-4"
              />
              <h3 className="text-2xl leading-6 font-bold my-4 text-gray-900">
                Robust Scaling
              </h3>
              <p className="mt-2 text-base text-left text-gray-500">
                Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <img
                src="https://printify.com/pfh/assets/legacy/best-selection.svg"
                alt="Best Selection"
                className="w-[50%] h-[50%] mb-4"
              />
              <h3 className="text-2xl leading-6 font-bold my-4 text-gray-900">
                Best Selection
              </h3>
              <p className="mt-2 text-base text-left text-gray-500">
                With 900+ products and top quality brands, you can choose the best products for your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;

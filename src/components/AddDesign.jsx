import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const AddDesign = () => {
  return (
    <div className='bg-white '>
        <div className='bg-gray-200 flex justify-center items-center '>
        <div className='bg-green-500 overflow-hidden rounded-3xl ml-20 my-20 w-[80%] '>
            <img className='relative' src="https://printify.com/pfh/media/clothes-CMPWJ6JG.webp" alt="" />
        </div>
        <div className='absolute border border-gray-400 rounded-lg bg-white mr-40 mt-20'>
            <div className='flex items-center justify-center p-5'>
            <button className='border border-gray-400 px-4 py-1 rounded-lg text-sm'>Edit</button>
            <button  className='border border-gray-400 px-4 py-1 rounded-lg text-sm'>Preview</button>
            </div>
            <img className='h-40 w-40 mx-auto' src="https://printify.com/pfh/assets/animations/images/img_5.png" alt="" />
        </div>
        <div className='bg-white pl-40 pr-10 py-20 mr-20 rounded-r-3xl'>
            <h2 className='text-3xl font-bold '>Easily add your design to a wide range of products</h2>
            <p className='text-gray-500 py-6'>With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</p>
            <button className='text-green-500 flex items-end font-semibold justify-center gap-3'>All products <FaArrowRight /> </button>
        </div>
    </div>
    <div className="bg-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-10 sm:px-6 2xl:px-8">
        <div className="mt-10 px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-start">
              <img
                src="https://printify.com/pfh/assets/legacy/custom-products.png"
                alt="Higher Profits"
                className="w-[50%] h-[50%] mb-5"
              />
              <h3 className="text-2xl leading-6 font-bold my-4 text-green-500">
                CREATE
              </h3>
              <h3 className="text-2xl leading-6 font-bold text-black">
                custom products
              </h3>
              <p className="mt-2 text-base text-left text-gray-500">
                Easily add your designs to a wide range of products using our free tools
              </p>
            </div>


            <div className="flex flex-col items-start">
              <img
                src="https://printify.com/pfh/assets/legacy/your-products.png"
                alt="Robust Scaling"
                className="w-[50%] h-[50%] mb-4"
              />
              <h3 className="text-2xl leading-6 font-bold my-4 text-green-500">
               SELL
              </h3>
              <h3 className="text-2xl leading-6 font-bold text-black">
               on your terms
              </h3>
              <p className="mt-2 text-base text-left text-gray-500">
                You choose the products, sale price, and where to sell
              </p>
            </div>

            <div className="flex flex-col items-start">
              <img
                src="https://printify.com/pfh/assets/legacy/fullfillment.png"
                alt="Best Selection"
                className="w-[50%] h-[50%] mb-4"
              />
              <h3 className="text-2xl leading-6 font-bold my-4 text-green-500">
                WE HANDLE
              </h3>
              <h3 className="text-2xl leading-6 font-bold  text-black">
                fullfillment
              </h3>
              <p className="mt-2 text-base text-left text-gray-500">
                Once an order is placed, we automtically handle all the printing and delivering logistics
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AddDesign
import React from 'react'

const Connect = () => {
  return (
    <div className='bg-white'>
      <h2 className='text-4xl font-bold text-center text-gray-900 mt-10'>Connect your store</h2>
      <p className='text-gray-500 text-center mt-8 font-medium'>
        Printify easily integrates with major e-commerce platforms and marketplaces
      </p>

      <div className='relative w-[80%] mx-auto mt-16 h-[500px]'>
        <img
          className="p-4 shadow-xl rounded-lg overflow-hidden absolute top-20 left-[10%] w-24 hover:scale-105 transition-all"
          src="https://printify.com/pfh/media/big-commerce-EGSGKPYX.svg"
          alt="BigCommerce"
        />
        <img
          className="p-4 shadow-xl rounded-lg overflow-hidden absolute top-40 left-[30%] w-24 hover:scale-105 transition-all"
          src="https://printify.com/pfh/media/squarespace-FIBF2RIF.svg"
          alt="Squarespace"
        />
        <img
          className="p-4 shadow-xl rounded-lg overflow-hidden absolute top-32 left-[45%] w-28 bg-green-500 hover:scale-105 transition-all"
          src="https://printify.com/pfh/media/printify-E3TBSF5R.svg"
          alt="Printify"
        />
        <img
          className="p-4 shadow-xl rounded-lg overflow-hidden absolute top-48 right-[35%] w-24 hover:scale-105 transition-all"
          src="https://printify.com/pfh/media/woo-PGFAG65X.svg"
          alt="WooCommerce"
        />
        <img
          className="p-4 shadow-xl rounded-lg overflow-hidden absolute top-16 right-[10%] w-24 hover:scale-105 transition-all"
          src="https://printify.com/pfh/media/wix-MWZCZDTE.svg"
          alt="Wix"
        />
        <img
          className="p-4 shadow-xl rounded-lg overflow-hidden absolute bottom-24 right-[20%] w-24 hover:scale-105 transition-all"
          src="https://printify.com/pfh/media/etsy-MXXFYORZ.svg"
          alt="Etsy"
        />
        <img
          className="p-4 shadow-xl rounded-lg overflow-hidden absolute bottom-28 left-[20%] w-24 hover:scale-105 transition-all"
          src="https://printify.com/pfh/media/shopify-3NAPXPBF.svg"
          alt="Shopify"
        />
        <img
          className="p-4 shadow-xl rounded-lg overflow-hidden absolute bottom-16 left-[5%] w-24 hover:scale-105 transition-all"
          src="https://printify.com/pfh/media/presta-54F6AYUU.svg"
          alt="API"
        />
        <img
          className="p-4 shadow-xl rounded-lg overflow-hidden absolute bottom-10 right-[5%] w-24 hover:scale-105 transition-all"
          src="https://printify.com/pfh/media/more-integration-4S3FHLQZ.svg"
          alt="And More"
        />
      </div>

      <div className='flex justify-between items-center bg-green-200 mx-20 mt-20 rounded-3xl overflow-hidden'>
        <h2 className='text-xl font-bold text-green-800 px-40'>
          Are you a large business looking for custom solutions?
        </h2>
        <div className='relative'>
          <img src="https://printify.com/pfh/media/talk-to-sales-N2GDBAGC.svg" alt="Talk to sales" />
          <button className='px-6 py-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-medium text-gray-700 bg-white rounded-sm'>
            Talk to sales
          </button>
        </div>
      </div>
    </div>
  )
}

export default Connect

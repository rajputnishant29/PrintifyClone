import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-100 py-6'>
      <div className='flex justify-center items-center space-x-8 text-gray-500 text-sm'>
        <a href='#' className='hover:text-green-500'>Intellectual Property Policy</a>
        <a href='#' className='hover:text-green-500'>Terms of Service</a>
        <a href='#' className='hover:text-green-500'>Privacy Policy</a>
        <a href='#' className='hover:text-green-500'>Security</a>
      </div>

      <div className='flex justify-center items-center mt-4'>
        <p className='text-black text-sm'>
          © 2024 Printify, Inc. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer

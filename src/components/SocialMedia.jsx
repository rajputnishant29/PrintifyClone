import React from 'react'
import logo from '../assets/Printify_Logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaReddit } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className='flex justify-between items-center px-20 mt-40 mb-10'>
        <div>
            <img className='h-10' src={logo} alt="" />
        </div>
        <div className='flex justify-center items-center text-3xl gap-3 text-green-500'>
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaSquareXTwitter />
            <FaYoutube />
            <FaTiktok />
            <FaReddit />
        </div>
    </div>
  )
}

export default SocialMedia
import React from 'react'
import Image from 'next/image'
import footerImg from "../Components/Images/logo.svg"
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='flex justify-between px-[5rem] py-[4rem] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
      <div className='flex flex-col gap-5 cursor-pointer'>
        <div>
        <Image className='w-36' src={footerImg} alt='logo' width={0} height={0}/>
        </div>
        <ul className='flex flex-col gap-3'>
          <li className='text-neutral-500 font-medium flex items-center gap-2 hover:text-neutral-300'><FaFacebook className='text-blue-500 text-xl' /> Facebook</li>
          <li className='text-neutral-500 font-medium flex items-center gap-2 hover:text-neutral-300'><FaTelegram className='text-blue-400 text-xl' /> Telegram</li>
          <li className='text-neutral-500 font-medium flex items-center gap-2 hover:text-neutral-300'><FaYoutube className='text-red-400 text-xl'/> Youtube</li>
          <li className='text-neutral-500 font-medium flex items-center gap-2 hover:text-neutral-300'><AiFillTwitterCircle className='text-blue-400 text-xl'/> Twitter</li>
        </ul>
      </div>
      
      <ul className='flex flex-col gap-3'>
        <li className='font-bold text-neutral-700'>Getting started</li>
        <li className='text-neutral-500 font-medium cursor-pointer'>Upgrade Guide</li>
        <li className='text-neutral-500 font-medium cursor-pointer'>Release Notes</li>
        <li className='text-neutral-500 font-medium cursor-pointer'>Browser Support</li>
        <li className='text-neutral-500 font-medium cursor-pointer'>Dark Mode</li>
      </ul>

      <ul className='flex flex-col gap-3'>
        <li className='font-bold text-neutral-700'>Explore</li>
        <li className='text-neutral-500 font-medium cursor-pointer'>Prototyping</li>
        <li className='text-neutral-500 font-medium cursor-pointer'>Design systems</li>
        <li className='text-neutral-500 font-medium cursor-pointer'>Pricing</li>
        <li className='text-neutral-500 font-medium cursor-pointer'>Security</li>
      </ul>

      <ul className='flex flex-col gap-3'>
        <li className='font-bold text-neutral-700'>Resources</li>
        <li className='text-neutral-500 font-medium cursor-pointer'>Support</li>
        <li className='text-neutral-500 font-medium cursor-pointer'>Best practices</li>
        <li className='text-neutral-500 font-medium cursor-pointer'>Developers</li>
        <li className='text-neutral-500 font-medium cursor-pointer'>Learn design</li>
      </ul>

      <ul className='flex flex-col gap-3'>
        <li className='font-bold text-neutral-700'>Community</li>
        <li className='text-neutral-500 font-medium cursor-pointer'>Code of Conduct</li>
        <li className='text-neutral-500 font-medium cursor-pointer'>Discussion Forums</li>
        <li className='text-neutral-500 font-medium cursor-pointer'>Contributing</li>
        <li className='text-neutral-500 font-medium cursor-pointer'>API Reference</li>
      </ul>
    </div>
  )
}

export default Footer

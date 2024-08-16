'use client'

import React, { useState } from "react";
import Image from "next/image";
import hero1 from "../Images/hero-one.png"
import hero2 from "../Images/her2.png"
import hero3 from "../Images/hero3.png"
import { FiSearch } from "react-icons/fi";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";


const HomeSectionOne = () => {

  const [secOne, setSecOne] = useState (true)
  const [secTwo, setSecTwo] = useState (false)
  const [secThree, setSecThree] = useState (false)

  const handleSecOne= () => {
    setSecOne(true)
    setSecTwo(false)
    setSecThree(false)
  }

  const handleSecTwo = () => {
    setSecTwo(true)
    setSecOne(false)
    setSecThree(false)
  }

 const handleSecThree = () => {
  setSecThree(true)
  setSecOne(false)
  setSecTwo(false)
 }


  return (
    <div className="pt-[5.1rem] relative">
        <div>
            <p onClick={handleSecOne} className="left-10 top-[50vh] text-4xl bg-white rounded-full cursor-pointer absolute"><FaChevronLeft /></p>
            {secThree === true && 
            <p onClick={handleSecTwo} className="left-10 top-[50vh] text-4xl bg-white rounded-full cursor-pointer absolute"><FaChevronLeft /></p>
          }
            <p onClick={handleSecTwo} className="right-10 top-[50vh] text-4xl bg-white rounded-full cursor-pointer absolute"><FaChevronRight /></p>
            {secTwo === true && 
            <p onClick={handleSecThree} className="right-10 top-[50vh] text-4xl bg-white rounded-full cursor-pointer absolute"><FaChevronRight /></p>
            }
            </div>

        <div className="flex items-center gap-5 justify-center m-auto right-0 left-0 absolute bottom-[20px]">
          <p onClick={handleSecOne} className={`h-2 w-32 cursor-pointer ${secOne === true ? 'bg-black' : 'bg-white' } rounded-full`}></p>
          <p onClick={handleSecTwo} className={`h-2 w-32 cursor-pointer ${secTwo === true ? 'bg-black' : 'bg-white' } rounded-full`}></p>
          <p onClick={handleSecThree} className={`h-2 w-32 cursor-pointer ${secThree === true ?'bg-black': 'bg-white' } rounded-full`}></p>
        </div>

      {/* ==================SECTION ONE ====================== */}
      {secOne === true &&
      <section className="px-[7rem] py-20 flex items-center h-[80vh] bg-green-100">
        <div data-aos="fade-right"
      data-aos-duration="2000" className="w-[100%]">
          <p className="pb-7 text-xl font-semibold">In this season, find the best 🔥</p>
          <h2 className="text-6xl font-bold leading-[60px] pb-7">
             Exclusive collection <br /> for everyone   
          </h2>
          <button className="bg-black text-white text-lg py-4 px-7 rounded-full flex items-center gap-3">Explore Now <FiSearch className="text-xl" /></button>
        </div>

        <div data-aos="fade-left"
      data-aos-duration="2000" className="ml-auto w-[100%]">
            <Image className="w-[90%]" src={hero1} alt='image' width={0} height={0} />
        </div>
      </section>
       }

      {/* ==================SECTION TWO ====================== */}
      {secTwo === true && 
      <section className="px-[7rem] py-20 flex items-center h-[80vh] bg-green-100">
        <div data-aos="fade-right"
      data-aos-duration="2000" className="w-[100%]">
          <p className="pb-7 text-xl font-semibold">In this season, find the best 🔥</p>
          <h2 className="text-6xl font-bold leading-[60px] pb-7">
             Exclusive collection <br /> for everyone   
          </h2>
          <button className="bg-black text-white text-lg py-4 px-7 rounded-full flex items-center gap-3">Explore Now <FiSearch className="text-xl" /></button>
        </div>

        <div data-aos="fade-left"
      data-aos-duration="2000" className="ml-auto w-[90%]">
            <Image className="w-[90%]" src={hero2} alt='image' width={0} height={0} />

        </div>
      </section>
      }

      {/* ==================SECTION THREE ====================== */}
      {secThree === true &&
      <section className="px-[7rem] py-20 flex items-center h-[80vh] bg-green-100">
        <div data-aos="fade-right"
      data-aos-duration="2000" className="w-[100%]">
          <p className="pb-7 text-xl font-semibold">In this season, find the best 🔥</p>
          <h2 className="text-6xl font-bold leading-[60px] pb-7">
             Exclusive collection <br /> for everyone   
          </h2>
          <button className="bg-black text-white text-lg py-4 px-7 rounded-full flex items-center gap-3">Explore Now <FiSearch className="text-xl" /></button>
        </div>

        <div data-aos="fade-left"
      data-aos-duration="2000" className="ml-auto w-[90%]">
            <Image className="w-[90%]" src={hero3} alt='image' width={0} height={0} />
        </div>
      </section>
       }
    </div>
  );
};

export default HomeSectionOne;

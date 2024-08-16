"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

// import required modules
import { Pagination } from "swiper/modules";

import Image from "next/image";
import one from "../Images/4(1).png";
import two from "../Images/5(1).png";
import three from "../Images/6.png";
import four from "../Images/9.png";
import five from "../Images/8.png";
import logo from "../Images/logo.svg";
import six from "../Images/child.webp";
import i from "../Images/i.webp";
import ii from "../Images/ii.webp";
import iii from "../Images/iii.webp";
import iv from "../Images/iv.webp";
import v from "../Images/v.webp";
import vi from "../Images/vi.webp";
import vii from "../Images/vii.webp";
import viii from "../Images/viii.webp";
import vv from "../Images/5.png";
import { BsHeartFill } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { TiLockClosed } from "react-icons/ti";
import { WiStars } from "react-icons/wi";
import { ImArrowUpRight } from "react-icons/im";
import xxi from "../Images/3i.webp";
import xxii from "../Images/3ii.webp";
import xxiii from "../Images/3iii.webp";
import xxiv from "../Images/3iv.webp";

const HomeSecFive = () => {
  return (
    <div className="px-[4rem]">
      {/* // =======================SECTION SEVEN======================== */}
      <section data-aos="fade-up" data-aos-duration="1500">
        <div className="flex items-center gap-3 font-bold text-4xl py-[4rem]">
          <h1>Best Seller.</h1>
          <h1 className="text-neutral-500">Best Sellling Of The Month</h1>
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          modules={[Pagination, Navigation]}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide className="relative">
            <div className="rounded-lg bg-blue-100 p-2 px-8 relative items-center flex-col group cursor-pointer  h-[18rem] w-[100%]">
              <div className="absolute right-3 top-3">
                <p className="bg-white py-2 px-2 rounded-full">
                  <BsHeartFill className="text-2xl text-red-600" />
                </p>
              </div>
              <div className="w-[100%]">
                <Image
                  className="w-full h-full"
                  src={one}
                  alt="image"
                  width={0}
                  height={0}
                />
              </div>

              <div
                className="hidden-content flex items-center gap-4 justify-center
             group-hover:items-center inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:ease-in"
              >
                <p className="px-3.5 py-1 cursor-pointer bg-white text-black rounded-lg hover:bg-black hover:text-white">
                  xs
                </p>
                <p className="px-3 py-1 cursor-pointer bg-white text-black rounded-lg hover:bg-black hover:text-white">
                  s
                </p>
                <p className="px-3 py-1 cursor-pointer bg-white text-black rounded-lg hover:bg-black hover:text-white">
                  m
                </p>
                <p className="px-4 py-1 cursor-pointer bg-white text-black rounded-lg hover:bg-black hover:text-white">
                  l
                </p>
                <p className="px-3 py-1 cursor-pointer bg-white text-black rounded-lg hover:bg-black hover:text-white">
                  xl
                </p>
              </div>
              
            </div>
            <div className="p-3 pt-6 flex flex-col gap-4">
              <div className="flex items-center gap-5">
                <p className="w-9 h-4 bg-blue-500 rounded-full"></p>
                <p className="w-9 h-4 bg-green-500 rounded-full"></p>
                <p className="w-9 h-4 bg-red-500 rounded-full"></p>
                <p className="w-9 h-4 bg-yellow-500 rounded-full"></p>
                <p className="w-9 h-4 bg-purple-500 rounded-full"></p>
              </div>
              <div className="text-left">
                <h2 className="font-bold">leather gloves</h2>
                <p className="text-neutral-500">perfect mint green</p>
              </div>
              <div className="flex items-center gap-10">
                <p className="px-3.5 py-1 cursor-pointer  rounded-lg font-bold text-green-500 border border-green-500 border-solid w-fit">
                  $42
                </p>
                {/* <p className='border border-green-500 rounded-lg bg-white w-5 h-3'>42</p> */}
                <p className="text-neutral-500">⭐ 4.9 (98 reveiws)</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="rounded-lg bg-blue-100 p-2 px-8 relative h-[18rem] items-center flex-col group cursor-pointer w-[100%]">
              <div className="absolute right-3 top-3">
                <p className="bg-white py-2 px-2 rounded-full">
                  <BsHeartFill className="text-2xl text-red-600" />
                </p>
              </div>
              <div className="w-[100%]">
                <Image
                  className="w-full h-full"
                  src={two}
                  alt="image"
                  width={0}
                  height={0}
                />
              </div>

              <div
                className="hidden-content flex items-center gap-4 justify-center
             group-hover:items-center inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:ease-in"
              >
                <p className="rounded-full px-1 bg-black text-white flex items-center gap-1 text-xs">
                  <TiLockClosed className="text-2xl" /> Add to blog
                </p>
                <p className="rounded-full px-1 bg-white text-black flex items-center gap-1 text-xs">
                  <WiStars className="text-2xl" /> Quick view
                </p>
              </div>

            </div>
            <div className="p-3 pt-6 flex flex-col gap-4">
              <div className="flex items-center gap-5">
                <p className="w-5 h-5 bg-blue-500 rounded-full"></p>
                <p className="w-5 h-5 bg-green-500 rounded-full"></p>
                <p className="w-5 h-5 bg-red-500 rounded-full"></p>
                <p className="w-5 h-5 bg-yellow-500 rounded-full"></p>
                <p className="w-5 h-5 bg-purple-500 rounded-full"></p>
              </div>
              <div className="text-left">
                <h2 className="font-bold">manhattan Toy WRT</h2>
                <p className="text-neutral-500">New design 2023</p>
              </div>
              <div className="flex items-center gap-10">
                <p className="px-3.5 py-1 cursor-pointer  rounded-lg font-bold text-green-500 border border-green-500 border-solid w-fit">
                  $30
                </p>

                <p className="text-neutral-500">⭐ 4.9 (98 reveiws)</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="rounded-lg bg-blue-100 p-2 px-8 relative  h-[18rem]  items-center flex-col group cursor-pointer w-[100%]">
              <div className="absolute right-3 top-3">
                <p className="bg-white py-2 px-2 rounded-full">
                  <GoHeart className="text-2xl" />
                </p>
              </div>
              <div className="w-[100%]">
                <Image
                  className=""
                  src={three}
                  alt="image"
                  width={0}
                  height={0}
                />
              </div>
              <div
                className="hidden-content flex items-center gap-4 justify-center
             group-hover:items-center inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:ease-in"
              >
                <p className="px-3.5 py-1 cursor-pointer bg-white text-black rounded-lg hover:bg-black hover:text-white">
                  xs
                </p>
                <p className="px-3 py-1 cursor-pointer bg-white text-black rounded-lg hover:bg-black hover:text-white">
                  s
                </p>
                <p className="px-3 py-1 cursor-pointer bg-white text-black rounded-lg hover:bg-black hover:text-white">
                  m
                </p>
                <p className="px-4 py-1 cursor-pointer bg-white text-black rounded-lg hover:bg-black hover:text-white">
                  l
                </p>
                <p className="px-3 py-1 cursor-pointer bg-white text-black rounded-lg hover:bg-black hover:text-white">
                  xl
                </p>
              </div>
            </div>
            <div className="p-3 pt-6 flex flex-col gap-4">
              <div className="flex items-center gap-5">
                <p className="w-9 h-4 bg-blue-500 rounded-full"></p>
                <p className="w-9 h-4 bg-green-500 rounded-full"></p>
                <p className="w-9 h-4 bg-red-500 rounded-full"></p>
                <p className="w-9 h-4 bg-yellow-500 rounded-full"></p>
                <p className="w-9 h-4 bg-purple-500 rounded-full"></p>
              </div>
              <div className="text-left">
                <h2 className="font-bold">Ella leather Tote</h2>
                <p className="text-neutral-500">Cream pink</p>
              </div>
              <div className="flex items-center gap-10">
                <p className="px-3.5 py-1 cursor-pointer  rounded-lg font-bold text-green-500 border border-green-500 border-solid w-fit">
                  $142
                </p>
                {/* <p className='border border-green-500 rounded-lg bg-white w-5 h-3'>42</p> */}
                <p className="text-neutral-500">⭐ 4.9 (98 reveiws)</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="rounded-lg bg-blue-100 p-2 px-8 relative  h-[18rem]  items-center flex-col group cursor-pointer w-[100%]">
              <div className="absolute right-3 top-3">
                <p className="bg-white py-2 px-2 rounded-full ">
                  <GoHeart className="text-2xl" />
                </p>
              </div>
              <div className="w-[100%]">
                <Image
                  className=""
                  src={four}
                  alt="image"
                  width={0}
                  height={0}
                />
              </div>
              <div
                className="hidden-content flex items-center gap-4 justify-center
             group-hover:items-center inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:ease-in"
              >
                <p className="rounded-full px-1 bg-black text-white flex items-center gap-1 text-xs">
                  <TiLockClosed className="text-2xl" /> Add to blog
                </p>
                <p className="rounded-full px-1 bg-white text-black flex items-center gap-1 text-xs">
                  <WiStars className="text-2xl" /> Quick view
                </p>
              </div>
            </div>
            <div className="p-3 pt-6 flex flex-col gap-4">
              <div className="flex items-center gap-5">
                <p className="w-5 h-5 bg-blue-500 rounded-full"></p>
                <p className="w-5 h-5 bg-green-500 rounded-full"></p>
                <p className="w-5 h-5 bg-red-500 rounded-full"></p>
                <p className="w-5 h-5 bg-yellow-500 rounded-full"></p>
                <p className="w-5 h-5 bg-purple-500 rounded-full"></p>
              </div>
              <div className="text-left">
                <h2 className="font-bold">Jump Rope Kids</h2>
                <p className="text-neutral-500">Classic Green</p>
              </div>
              <div className="flex items-center gap-10">
                <p className="px-3.5 py-1 cursor-pointer  rounded-lg font-bold text-green-500 border border-green-500 border-solid w-fit">
                  $68
                </p>

                <p className="text-neutral-500">⭐ 4.9 (98 reveiws)</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="rounded-lg bg-blue-100 p-2 px-8 relative  h-[18rem] items-center flex-col group cursor-pointer w-[100%]">
              <div className="absolute right-3 top-3">
                <p className="bg-white py-2 px-2 rounded-full ">
                  <BsHeartFill className="text-2xl text-red-500" />
                </p>
              </div>
              <div className="w-[100%]">
                <Image
                  className=""
                  src={five}
                  alt="image"
                  width={0}
                  height={0}
                />
              </div>
              <div
                className="hidden-content flex items-center gap-4 justify-center
             group-hover:items-center inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:ease-in"
              >
                <p className="rounded-full px-1   bg-black text-white flex items-center gap-1 text-xs">
                  <TiLockClosed className="text-2xl" /> Add to blog
                </p>
                <p className="rounded-full px-1  bg-white text-black flex items-center gap-1 text-xs">
                  <WiStars className="text-2xl" /> Quick view
                </p>
              </div>
            </div>
            <div className="p-3 pt-6 flex flex-col gap-4">
              <div className="flex items-center gap-5">
                <p className="w-9 h-4 bg-blue-500 rounded-full"></p>
                <p className="w-9 h-4 bg-green-500 rounded-full"></p>
                <p className="w-9 h-4 bg-red-500 rounded-full"></p>
                <p className="w-9 h-4 bg-yellow-500 rounded-full"></p>
                <p className="w-9 h-4 bg-purple-500 rounded-full"></p>
              </div>
              <div className="text-left">
                <h2 className="font-bold">Wool cashmere jacket</h2>
                <p className="text-neutral-500">matte black</p>
              </div>
              <div className="flex items-center gap-10">
                <p className="px-3.5 py-1 cursor-pointer  rounded-lg font-bold text-green-500 border border-green-500 border-solid w-fit">
                  $12
                </p>
                <p className="text-neutral-500">⭐ 4.9 (98 reveiws)</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <p className="pb-32"></p>

      {/* // =======================SECTION EIGHT======================== */}
      <section className="mx-[1rem] bg-pink-50 rounded-2xl">
        <div className="flex items-center gap-10 w-full">
          <div className="w-full">
            <Image src={six} alt="" width={0} height={0} />
          </div>

          <div className="w-full flex flex-col gap-7 text-left">
            <div>
              <Image className="w-28" src={logo} alt="" width={0} height={0} />
            </div>
            <h2 className="text-5xl font-bold text-black pt-10">
              Special offer
              <br /> in kids products
            </h2>

            <p className="text-lg text-neutral-600 font-medium pb-7">
              Fashion is a form of self-expression and autonomy at a <br />{" "}
              particular period and place.
            </p>

            <button className="rounded-full bg-slate-900 text-white py-3 px-5 w-fit">
              Discover More
            </button>
          </div>
        </div>
      </section>
      {/* // =======================SECTION NINE======================== */}
      <section data-aos="fade-up" data-aos-duration="1500" className="py-16">
        <h1 className="text-left  font-bold text-4xl py-[4rem] ">
          Chosen by our experts
        </h1>

        <Swiper
          slidesPerView={3}
          spaceBetween={28}
          modules={[Pagination, Navigation]}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide className="">
            <div>
              <div className="bg-slate-100 rounded-lg cursor-pointer hover:bg-slate-200">
                <Image src={i} alt="image" width={0} height={0} />
              </div>

              <ul className="flex items-center gap-5 cursor-pointer">
                <li className="bg-slate-300 mt-5 rounded-lg">
                  <Image src={ii} alt="image" width={0} height={0} />
                </li>
                <li className="bg-slate-300 mt-5 rounded-lg">
                  <Image src={iii} alt="image" width={0} height={0} />
                </li>
                <li className="bg-slate-300 mt-5 rounded-lg">
                  <Image src={iv} alt="image" width={0} height={0} />
                </li>
              </ul>

              <div className="flex items-center justify-between font-bold mt-5">
                <h1 className="text-lg">Suede Bomper Jacket</h1>
                <p className="border border-green-600 py-1 px-3 rounded-lg text-sm text-green-500">
                  $52
                </p>
              </div>

              <div className="flex items-center gap-5 font-semibold text-sm text-neutral-500">
                <span>Orange |</span>
                <span>⭐ 4.9 (269 reveiws)</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div>
              <div className="bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer">
                <Image
                  className="px-[7rem] py-14 "
                  src={vv}
                  alt="image"
                  width={0}
                  height={0}
                />
              </div>

              <ul className="flex items-center gap-5 cursor-pointer">
                <li className="bg-slate-100 rounded-lg mt-5 px-3">
                  <Image src={vv} alt="image" width={0} height={0} />
                </li>
                <li className="bg-slate-100 rounded-lg mt-5 px-3">
                  <Image src={vv} alt="image" width={0} height={0} />
                </li>
                <li className="bg-slate-100 rounded-lg mt-5 px-3">
                  <Image src={vv} alt="image" width={0} height={0} />
                </li>
              </ul>

              <div className="flex items-center justify-between font-bold mt-5">
                <h1 className="text-lg">Suede Bomper Jacket</h1>
                <p className="border border-green-600 py-1 px-3 rounded-lg text-sm text-green-500">
                  $52
                </p>
              </div>

              <div className="flex items-center gap-5 font-semibold text-sm text-neutral-500">
                <span>Orange |</span>
                <span>⭐ 4.9 (269 reveiws)</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div>
              <div className="bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer">
                <Image src={v} alt="image" width={0} height={0} />
              </div>

              <ul className="flex items-center gap-5 cursor-pointer">
                <li className="bg-slate-300 rounded-lg mt-5">
                  <Image src={vi} alt="image" width={0} height={0} />
                </li>
                <li className="bg-slate-300 rounded-lg mt-5">
                  <Image src={vii} alt="image" width={0} height={0} />
                </li>
                <li className="bg-slate-300 rounded-lg mt-5">
                  <Image src={viii} alt="image" width={0} height={0} />
                </li>
              </ul>

              <div className="flex items-center justify-between font-bold mt-5">
                <h1 className="text-lg">Suede Bomper Jacket</h1>
                <p className="border border-green-600 py-1 px-3 rounded-lg text-sm text-green-500">
                  $52
                </p>
              </div>

              <div className="flex items-center gap-5 font-semibold text-sm text-neutral-500">
                <span>Orange |</span>
                <span>⭐ 4.9 (269 reveiws)</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div>
              <div className="flex flex-col gap-1 items-center bg-slate-100 hover:bg-slate-200 cursor-pointer rounded-lg px-[7rem] py-[13rem]">
                <h2 className="flex items-center gap-4 font-bold text-xl">
                  More items <ImArrowUpRight />
                </h2>
                <p>Show me more</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* // =======================SECTION TEN======================== */}
      <section data-aos="fade-up" data-aos-duration="1500" className="py-12 pb-20">
        <h1 className="text-left  font-bold text-4xl py-[4rem] ">
          Shop by department
        </h1>

        <Swiper
          slidesPerView={4}
          spaceBetween={28}
          modules={[Pagination, Navigation]}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide className="">
            <div>
              <div className="bg-slate-200 rounded-lg hover:bg-slate-300 cursor-pointer">
                <Image src={xxi} alt="" width={0} height={0} />
              </div>
              <div className=" flex flex-col items-center gap-1  mt-4">
                <h1 className="font-bold">Travel kits</h1>
                <p className="text-sm text-neutral-500 font-semibold">
                  20+ categories
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div>
              <div className="bg-slate-100 rounded-lg hover:bg-slate-200 cursor-pointer">
                <Image src={xxii} alt="" width={0} height={0} />
              </div>
              <div className=" flex flex-col items-center gap-1  mt-4">
                <h1 className="font-bold">Beauty products</h1>
                <p className="text-sm text-neutral-500 font-semibold">
                  10+ categories
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div>
              <div className="bg-slate-300 rounded-lg hover:bg-slate-600 cursor-pointer">
                <Image src={xxiii} alt="" width={0} height={0} />
              </div>
              <div className=" flex flex-col items-center gap-1  mt-4">
                <h1 className="font-bold">Sport kits</h1>
                <p className="text-sm text-neutral-500 font-semibold">
                  34+ categories
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div>
              <div className="bg-pink-200 rounded-lg hover:bg-pink-300 cursor-pointer">
                <Image src={xxiv} alt="" width={0} height={0} />
              </div>
              <div className=" flex flex-col items-center gap-1  mt-4">
                <h1 className="font-bold">Pets foods</h1>
                <p className="text-sm text-neutral-500 font-semibold">
                  12+ categories
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div>
              <div>
                <div className="flex flex-col gap-1 items-center bg-slate-100 hover:bg-slate-200 cursor-pointer rounded-lg px-[4rem] py-[7.7rem]">
                  <h2 className="flex items-center gap-4 font-bold text-xl">
                    More items <ImArrowUpRight />
                  </h2>
                  <p>Show me more</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default HomeSecFive;

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
import one from "../Images/1.png";
import two from "../Images/5.png";
import three from "../Images/4.png";
import four from "../Images/3.png";
import five from "../Images/5(1).png";
import six from "../Images/6(1).png";
import seven from "../Images/8.png";
import eight from "../Images/8(1).png";
import nine from "../Images/9.png";
import { BsHeartFill } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { TiLockClosed } from "react-icons/ti";
import { WiStars } from "react-icons/wi";

const HomeSecTwo = () => {
  return (
    <div className="px-[4rem] py-[2rem]">
      <section data-aos="fade-up" data-aos-duration="1500">
        <div className="flex items-center gap-3 font-bold text-4xl py-[4rem]">
          <h1>Discover More.</h1>
          <h1 className="text-neutral-500">Good things are waiting for you</h1>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex items-center rounded-lg gap-4 bg-neutral-100 p-5 px-10">
              <div className="w-[100%] text-left">
                <p className="text-sm">Explore new arrivals </p>
                <h2 className="text-lg font-bold py-3">
                  Show the latest from top brands
                </h2>
                <button className="bg-white p-3 mt-5 px-5 rounded-full text-sm">
                  show me all
                </button>
              </div>
              <div className="w-[100%]">
                <Image src={one} alt="image" width={0} height={0} />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex items-center rounded-lg gap-4 bg-pink-100 p-5 px-10">
              <div className="w-[100%] text-left">
                <p className="text-sm">Digital Giftcard </p>
                <h2 className="text-lg font-bold py-3">
                  Give the gift of choice
                </h2>
                <button className="bg-white p-3 mt-5 px-5 rounded-full text-sm">
                  show me all
                </button>
              </div>
              <div className="w-[100%]">
                <Image src={two} alt="image" width={0} height={0} />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex items-center rounded-lg gap-4 bg-blue-200 p-5 px-10">
              <div className="w-[100%] text-left">
                <p className="text-sm">Sale collection</p>
                <h2 className="text-lg font-bold py-3">Up to 80% off retail</h2>
                <button className="bg-white p-3 mt-5 px-5 rounded-full text-sm">
                  show me all
                </button>
              </div>
              <div className="w-[100%]">
                <Image src={three} alt="image" width={0} height={0} />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex items-center rounded-lg gap-4 bg-lime-100 p-5 px-10">
              <div className="w-[100%] text-left">
                <p className="text-sm">Sale collections</p>
                <h2 className="text-lg font-bold py-3">Up to 80% off retail</h2>
                <button className="bg-white p-3 mt-5 px-5 rounded-full text-sm">
                  show me all
                </button>
              </div>
              <div className="w-[100%]">
                <Image src={four} alt="image" width={0} height={0} />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section data-aos="fade-up" data-aos-duration="1500">
        <div className="flex items-center gap-3 font-bold text-4xl py-[4rem]">
          <h1>New Arrivals.</h1>
          <h1 className="text-neutral-500">REY backpacks & bags</h1>
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
                  src={six}
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
                  src={seven}
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
                  src={eight}
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
                  src={nine}
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
      <hr />
    </div>
  );
};

export default HomeSecTwo;

"use client";
import { useState } from "react";
import React from "react";
import { IoWomanSharp } from "react-icons/io5";
import { IoIosMan } from "react-icons/io";
import { FaChildren } from "react-icons/fa6";
import { MdSportsBasketball } from "react-icons/md";
import { LuCrown } from "react-icons/lu";
import { MdDiamond } from "react-icons/md";
import Image from "next/image";
import bag from "../Images/BAG.webp";
import shoe from "../Images/SHOE.webp";
import towel from "../Images/TOWEL.webp";
import blazer from "../Images/BLAZER.webp";
import suit from "../Images/SUIT.webp";
import shirt from "../Images/SHIRT.webp";
import svg1 from "../Images/explore1.bafb60cf.svg";
import svg2 from "../Images/explore2.46138c9a.svg";
import svg3 from "../Images/explore3.8526de42.svg";
import svg4 from "../Images/explore4.0d4aa2f6.svg";
import svg5 from "../Images/explore5.4a34ab29.svg";
import svg6 from "../Images/explore6.9182f851.svg";
import { FaArrowRight } from "react-icons/fa";

const HomeSectionFour = () => {
  const [women, setWomen] = useState(false);
  const [men, setMen] = useState(true);
  const [kids, setKids] = useState(false);
  const [sports, setSports] = useState(false);
  const [beauty, setBeauty] = useState(false);
  const [jewery, setJewery] = useState(false);

  const handleWomen = () => {
    setWomen(true);
    setMen(false);
    setKids(false);
    setSports(false);
    setBeauty(false);
    setJewery(false);
  };

  const handleMen = () => {
    setWomen(false);
    setMen(true);
    setKids(false);
    setSports(false);
    setBeauty(false);
    setJewery(false);
  };

  const handleKids = () => {
    setWomen(false);
    setMen(false);
    setKids(true);
    setSports(false);
    setBeauty(false);
    setJewery(false);
  };

  const handleSports = () => {
    setWomen(false);
    setMen(false);
    setKids(false);
    setSports(true);
    setBeauty(false);
    setJewery(false);
  };

  const handleBeauty = () => {
    setWomen(false);
    setMen(false);
    setKids(false);
    setSports(false);
    setBeauty(true);
    setJewery(false);
  };

  const handleJewery = () => {
    setWomen(false);
    setMen(false);
    setKids(false);
    setSports(false);
    setBeauty(false);
    setJewery(true);
  };

  return (
    <div className="">
      <section
        data-aos="fade-up"
        data-aos-duration="1500"
        className="bg-neutral-100 rounded-3xl"
      >
        <h2 className="text-center font-bold text-4xl py-28">
          Start exploring
        </h2>

        <ul className="px-[4rem] flex items-start gap-5 bg-white rounded-full py-2 justify-center m-auto w-fit">
          <li
            onClick={handleWomen}
            className={`${
              women === true && "bg-black text-white"
            }  flex items-center gap-4  rounded-full cursor-pointer  py-2 px-4`}
          >
            {" "}
            <IoWomanSharp /> Womem
          </li>
          <li
            onClick={handleMen}
            className={`${
              men === true && "bg-black text-white"
            }  flex items-center gap-4  rounded-full cursor-pointer  py-2 px-4`}
          >
            {" "}
            <IoIosMan /> Men
          </li>
          <li
            onClick={handleKids}
            className={`${
              kids === true && "bg-black text-white"
            }  flex items-center gap-4  rounded-full cursor-pointer  py-2 px-4`}
          >
            {" "}
            <FaChildren /> Kids
          </li>
          <li
            onClick={handleSports}
            className={`${
              sports === true && "bg-black text-white"
            }  flex items-center gap-4  rounded-full cursor-pointer  py-2 px-4`}
          >
            {" "}
            <MdSportsBasketball /> Sports
          </li>
          <li
            onClick={handleBeauty}
            className={`${
              beauty === true && "bg-black text-white"
            }  flex items-center gap-4  rounded-full cursor-pointer  py-2 px-4`}
          >
            {" "}
            <LuCrown /> Beauty
          </li>
          <li
            onClick={handleJewery}
            className={`${
              jewery === true && "bg-black text-white"
            }  flex items-center gap-4  rounded-full cursor-pointer  py-2 px-4`}
          >
            {" "}
            <MdDiamond /> Jewelries
          </li>
        </ul>

        {women === true || kids === true || beauty === true ? (
          <section className="grid grid-cols-3 gap-4 px-[4rem] pt-12">
            <div className="group w-full p-8 bg-white rounded-xl relative hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] cursor-pointer">
              <div className="flex items-center">
                <div className="bg-neutral-200 rounded-full w-[5rem] h-[5rem] flex items-center justify-center">
                  <Image src={bag} alt="" width={0} height={0} />
                </div>
                <p className="ml-auto">155 Products</p>
              </div>
              <div className="py-16">
                <p>Manufacturar</p>
                <h2 className="font-bold text-2xl">BackPack</h2>
              </div>
              <button className="flex items-center gap-4 font-semibold group-hover:text-blue-500">
                See Collection <FaArrowRight />
              </button>

              <Image
                className="absolute bottom-0 right-0  w-[18rem]"
                src={svg1}
                alt=""
                width={0}
                height={0}
              />
            </div>

            <div className="group relative w-full p-10 bg-white rounded-xl hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] cursor-pointer">
              <div className="flex items-center">
                <div className="bg-neutral-200 rounded-full w-[5rem] h-[5rem] flex items-center justify-center">
                  <Image src={shoe} alt="" width={0} height={0} />
                </div>
                <p className="ml-auto">22 Products</p>
              </div>
              <div className="py-16">
                <p>Manufacturar</p>
                <h2 className="font-bold text-2xl">Shoes</h2>
              </div>
              <button className="flex items-center gap-4 font-semibold group-hover:text-blue-500">
                See Collection <FaArrowRight />
              </button>
              <Image
                className="absolute bottom-0 right-0 w-[18rem]"
                src={svg2}
                alt=""
                width={0}
                height={0}
              />
            </div>

            <div className="group w-full p-8 bg-white rounded-xl relative hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] cursor-pointer">
              <div className="flex items-center">
                <div className="bg-neutral-200 rounded-full w-[5rem] h-[5rem] flex items-center justify-center">
                  <Image src={towel} alt="" width={0} height={0} />
                </div>
                <p className="ml-auto">144 Products</p>
              </div>
              <div className="py-16">
                <p>Manufacturar</p>
                <h2 className="font-bold text-2xl">Recycled Blankets</h2>
              </div>
              <button className="flex items-center gap-4 font-semibold group-hover:text-blue-500">
                See Collection <FaArrowRight />
              </button>
              <Image
                className="absolute bottom-0 right-0 w-[18rem]"
                src={svg3}
                alt=""
                width={0}
                height={0}
              />
            </div>
          </section>
        ) : (
          <section className="grid grid-cols-3 gap-4 px-[4rem] py-12">
            <div className="group w-full p-8 bg-white rounded-xl relative hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] cursor-pointer">
              <div className="flex items-center">
                <div className="bg-neutral-200 rounded-full w-[5rem] h-[5rem] flex items-center justify-center">
                  <Image src={suit} alt="" width={0} height={0} />
                </div>
                <p className="ml-auto">144 Products</p>
              </div>
              <div className="py-16">
                <p>Manufacturar</p>
                <h2 className="font-bold text-2xl">Cycling Shorts</h2>
              </div>
              <button className="flex items-center gap-4 font-semibold group-hover:text-blue-500">
                See Collection <FaArrowRight />
              </button>
              <Image
                className="absolute bottom-0 right-0 w-[18rem]"
                src={svg4}
                alt=""
                width={0}
                height={0}
              />
            </div>

            <div className="group w-full p-8 bg-white rounded-xl relative hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] cursor-pointer">
              <div className="flex items-center">
                <div className="bg-neutral-200 rounded-full w-[5rem] h-[5rem] flex items-center justify-center">
                  <Image src={shirt} alt="" width={0} height={0} />
                </div>
                <p className="ml-auto">144 Products</p>
              </div>
              <div className="py-16">
                <p>Manufacturar</p>
                <h2 className="font-bold text-2xl">Cycling Jeresy</h2>
              </div>
              <button className="flex items-center gap-4 font-semibold group-hover:text-blue-500">
                See Collection <FaArrowRight />
              </button>
              <Image
                className="absolute bottom-0 right-0 w-[18rem]"
                src={svg5}
                alt=""
                width={0}
                height={0}
              />
            </div>

            <div className="group w-full p-8 bg-white rounded-xl relative hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] cursor-pointer">
              <div className="flex items-center">
                <div className="bg-neutral-200 rounded-full w-[5rem] h-[5rem] flex items-center justify-center">
                  <Image src={blazer} alt="" width={0} height={0} />
                </div>
                <p className="ml-auto">144 Products</p>
              </div>
              <div className="py-16">
                <p>Manufacturar</p>
                <h2 className="font-bold text-2xl">Car Coats</h2>
              </div>
              <button className="flex items-center gap-4 font-semibold group-hover:text-blue-500">
                See Collection <FaArrowRight />
              </button>
              <Image
                className="absolute bottom-0 right-0 w-[18rem]"
                src={svg6}
                alt=""
                width={0}
                height={0}
              />
            </div>
          </section>
        )}
      </section>
    </div>
  );
};

export default HomeSectionFour;

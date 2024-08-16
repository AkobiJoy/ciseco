"use client";
import mockData from "../MockData";
import { GoStarFill } from "react-icons/go";
import { FaCircleArrowRight } from "react-icons/fa6";
import { TiLockClosed } from "react-icons/ti";
import { WiStars } from "react-icons/wi";
import React, { useState } from "react";
import Image from "next/image";
import man from "../Images/promo3.webp";
import bg1 from "../Images/promo3.svg";
import bg2 from "../Images/promo2.svg";
import bg3 from "../Images/BackgroundLine.fbaf1dad.svg";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

const HomeSecSix = () => {
  console.log("This is data", mockData);
  const [allItems, setAllItems] = useState(true);
  const [women, setWomen] = useState(false);
  const [kids, setKids] = useState(false);
  const [jewels, setJewel] = useState(false);
  const [filter, setFilter] = useState(false);

  const [favoriteIcon, setFavoriteIcon] = useState([mockData])

  const handleItems = () => {
    setAllItems(true);
    setWomen(false);
    setKids(false);
    setJewel(false);
    setFilter(false);
  };

  const handleWomen = () => {
    setAllItems(false);
    setWomen(true);
    setKids(false);
    setJewel(false);
    setFilter(false);
  };

  const handleKids = () => {
    setAllItems(false);
    setWomen(false);
    setKids(true);
    setJewel(false);
    setFilter(false);
  };

  const handleJewel = () => {
    setAllItems(false);
    setWomen(false);
    setKids(false);
    setJewel(true);
    setFilter(false);
  };

  const handleFilter = () => {
    setAllItems(false);
    setWomen(false);
    setKids(false);
    setJewel(false);
    setFilter(true);
  };

  const toggleFavoriteIcon = (productId) => {
    setFavoriteIcon((prevfav)=> {
      if(prevfav.includes(productId)){
        return prevfav.filter((id) => id !== productId);
      } 
      else{
        return[...prevfav,productId]
      };
    });
  };


  // const toggleFavoriteIcon = (productId) => {
  //   setFavoriteIcon((prefav) => {
  //     (prefav.includes(productId)) ?
  //     prefav.filter((id) => id !== productId)
  //     :[...prefav,productId]
  //   });
  // };


  return (
    <div className="px-[4rem] py-[5rem]">
      <section className="bg-slate-100 relative p-10 h-[93vh] rounded-2xl">
        <div className="flex flex-col gap-8 text-justify">
          <div className="flex flex-col gap-7">
            <h1 className="text-5xl font-bold">
              Don't miss out on <br /> special offers
            </h1>
            <p className="text-neutral-500 font-medium text-lg">
              Register to receive news about the latest, savings combos,
              <br /> discount codes...
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 rounded-full bg-purple-200 text-sm">
                01
              </span>{" "}
              <span className="font-semibold ">Savings Combo</span>
            </div>

            <div className="flex gap-4 items-center">
              <span className="px-3 py-1 rounded-full bg-blue-200 text-sm">
                02
              </span>{" "}
              <span className="font-semibold ">Freeship</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="px-3 py-1 rounded-full bg-pink-200 text-sm">
                03
              </span>{" "}
              <span className="font-semibold ">Premium magazines</span>
            </div>
          </div>

          <form className="relative w-fit flex items-center z-10" action="">
            <input
              className=" text-xl rounded-full p-2 w-[310px] border border-neutral-200"
              type="email"
              placeholder="Enter your email"
              required
            />
            <button className="absolute left-[17rem]">
              <FaCircleArrowRight className="text-2xl" type="submit" />
            </button>
          </form>

          <Image
            className="w-[43.5%] absolute top-[-2rem] right-0 cursor-pointer"
            src={man}
            alt=""
            width={0}
            height={0}
          />
          {/* <Image className="absolute top-[10rem]" src={bg1} alt="" width={0} height={0} /> */}
          <Image
            className="absolute top-[9px]"
            src={bg3}
            alt=""
            width={0}
            height={0}
          />
        </div>
      </section>

      <section className="py-[6rem]">
        <div>
          <div>
            <h1>What's trending now</h1>
            <p>Discover the most trending products in Ciseco.</p>
          </div>

          <ul className="flex items-center gap-10 py-10">
            <li
              onClick={handleItems}
              className={`${
                allItems === true
                  ? "bg-black text-white"
                  : "bg-neutral-100 text-black"
              } py-2 px-6 cursor-pointer rounded-full`}
            >
              All items
            </li>
            <li
              onClick={handleWomen}
              className={`${
                women === true
                  ? "bg-black text-white"
                  : "bg-neutral-100 text-black"
              } py-2 px-6 cursor-pointer rounded-full`}
            >
              Women
            </li>
            <li
              onClick={handleKids}
              className={`${
                kids === true
                  ? "bg-black text-white"
                  : "bg-neutral-100 text-black"
              } py-2 px-6 cursor-pointer rounded-full`}
            >
              Kids
            </li>
            <li
              onClick={handleJewel}
              className={`${
                jewels === true
                  ? "bg-black text-white"
                  : "bg-neutral-100 text-black"
              } py-2 px-6 cursor-pointer rounded-full`}
            >
              Jewels
            </li>
            <li
              onClick={handleFilter}
              className={`${
                filter === true
                  ? "bg-black text-white"
                  : "bg-neutral-100 text-black"
              } py-2 px-6 cursor-pointer rounded-full ml-auto`}
            >
              Filter
            </li>
          </ul>
          <hr />

          <ul className="flex items-center gap-10 py-10">
            <li className="bg-black text-white py-2 px-5 cursor-pointer rounded-full">
              100$ - 500$
            </li>
            <li className="bg-black text-white py-2 px-5 cursor-pointer rounded-full">
              Categories
            </li>
            <li className="bg-black text-white py-2 px-5 cursor-pointer rounded-full">
              Colors
            </li>
            <li className="bg-black text-white py-2 px-5 cursor-pointer rounded-full">
              Sizes
            </li>
            <li className="bg-black text-white py-2 px-5 cursor-pointer rounded-full">
              On Scale
            </li>
            <li className="bg-black text-white py-2 px-5 cursor-pointer rounded-full ml-auto">
              Sort Order
            </li>
          </ul>
        </div>

        <div>
          <div className="grid grid-cols-4 gap-8 items-center">
            {mockData.map((data) => (
              <div className="col-span-1 ">
                <div className="group bg-blue-100 rounded-xl p-10 h-[18rem] cursor-pointer relative">
                  <Image
                    className="w-[175px]"
                    src={data.image}
                    width={0}
                    height={0}
                  />

                  <div onClick={()=> toggleFavoriteIcon(data.id)} className="absolute top-4 right-4 ">
                    {favoriteIcon.includes(data.id) ?
                    <p className="bg-white text-2xl p-3 rounded-full text-red-700"><MdFavorite /></p>
                   : <p className="bg-white text-2xl p-3 rounded-full"><MdFavoriteBorder /></p>}
                  </div>

                  {data?.number === 2 && (
                    <div
                      className="hidden-content flex items-center gap-4 justify-center
             group-hover:items-center inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:ease-in mt-5"
                    >
                      <p className="rounded-full px-1 bg-black text-white flex items-center gap-1 text-xs">
                        <TiLockClosed className="text-xl" /> Add to blog
                      </p>
                      <p className="rounded-full px-1 bg-white text-black flex items-center gap-1 text-xs">
                        <WiStars className="text-xl" /> Quick view
                      </p>
                    </div>
                  )}

            {data?.number===1 && (
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
              )}
                </div>

                {data?.number === 1 && (
                  <div className="flex items-center gap-5 pt-5">
                  <p className="w-9 h-4 bg-blue-500 rounded-full"></p>
                  <p className="w-9 h-4 bg-green-500 rounded-full"></p>
                  <p className="w-9 h-4 bg-red-500 rounded-full"></p>
                  <p className="w-9 h-4 bg-yellow-500 rounded-full"></p>
                  <p className="w-9 h-4 bg-purple-500 rounded-full"></p>
                </div>
                )}

                {data?.number === 2 && (
                  <div className="flex items-center gap-5 pt-5">
                  <p className="w-5 h-5 bg-blue-500 rounded-full"></p>
                  <p className="w-5 h-5 bg-green-500 rounded-full"></p>
                  <p className="w-5 h-5 bg-red-500 rounded-full"></p>
                  <p className="w-5 h-5 bg-yellow-500 rounded-full"></p>
                  <p className="w-5 h-5 bg-purple-500 rounded-full"></p>
                </div>
                )}

                <div className="">
                  <p className="mb-3">{data.id}</p>
                  <h2 className="mb-3">{data.name}</h2>
                  <p className="mb-3">{data.description}</p>
                  <button className="mb-3 py-2 px-3 border border-green-500 rounded-lg">
                    ${data.price}
                  </button>

                  {data?.rating === 5 && (
                    <div className="flex gap-3">
                      <span className="text-yellow-500 text-lg">
                        <GoStarFill />
                      </span>
                      <span className="text-yellow-500 text-lg">
                        <GoStarFill />
                      </span>
                      <span className="text-yellow-500 text-lg">
                        <GoStarFill />
                      </span>
                      <span className="text-yellow-500 text-lg">
                        <GoStarFill />
                      </span>
                      <span className="text-yellow-500 text-lg">
                        <GoStarFill />
                      </span>
                      <span className="ml-auto">(98 reviews)</span>
                    </div>
                  )}

                  {data?.rating === 4 && (
                    <div className="flex gap-3">
                      <span className="text-yellow-500 text-lg">
                        <GoStarFill />
                      </span>
                      <span className="text-yellow-500 text-lg">
                        <GoStarFill />
                      </span>
                      <span className="text-yellow-500 text-lg">
                        <GoStarFill />
                      </span>
                      <span className="text-yellow-500 text-lg">
                        <GoStarFill />
                      </span>
                      <span className="ml-auto">(98 reviews)</span>
                    </div>
                  )}

                  {data?.rating === 3 && (
                    <div className="flex gap-3">
                      <span className="text-yellow-500 text-lg">
                        <GoStarFill />
                      </span>
                      <span className="text-yellow-500 text-lg">
                        <GoStarFill />
                      </span>
                      <span className="text-yellow-500 text-lg">
                        <GoStarFill />
                      </span>
                      <span className="ml-auto">(98 reviews)</span>
                    </div>
                  )}

                  {data?.rating === 2 && (
                    <div className="flex gap-3">
                      <span className="text-yellow-500 text-lg">
                        <GoStarFill />
                      </span>
                      <span className="text-yellow-500 text-lg">
                        <GoStarFill />
                      </span>
                      <span className="ml-auto">(98 reviews)</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSecSix;

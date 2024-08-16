"use client";
import React from "react";
import Image from "next/image";
import one from "../Images/step1.png";
import two from "../Images/step2.png";
import three from "../Images/step3.png";
import four from "../Images/step4.png";
import coin1 from "../Images/coin.webp";
import logo from "../Images/logo.svg";

const HomesecThree = () => {
  return (
    <div className="px-[4rem] ">
      <div data-aos="fade-up"
          data-aos-duration="1500" className="flex items-center gap-5 w-full py-16">
            
        <div className="flex items-center flex-col gap-6 w-full">
          <div className="w-44 h-44">
            <Image
              className="w-36 h-36"
              src={one}
              alt=""
              width={0}
              height={0}
            />
          </div>
          <div className="flex  items-center flex-col gap-5 w-full text-center">
            <button className="bg-pink-300 rounded-full px-2 py-1 text-sm text-pink-900">
              Step 1
            </button>
            <h2 className="font-bold">Filter & Discover</h2>
            <p className="text-sm text-neutral-600">
              Smart filtering and suggestions <br /> make it easy to find
            </p>
          </div>
        </div>

        <div className="flex items-center flex-col gap-6 w-full">
          <div className="w-44 h-44">
            <Image
              className="w-36 h-36"
              src={two}
              alt=""
              width={0}
              height={0}
            />
          </div>
          <div className="flex  items-center flex-col gap-5 w-full text-center">
            <button className="bg-blue-300 rounded-full px-2 py-1 text-sm text-blue-900">
              Step 2
            </button>
            <h2 className="font-bold">Add to bag</h2>
            <p className="text-sm text-neutral-600">
              Easily select the correct items <br /> and add them to the cart
            </p>
          </div>
        </div>

        <div className="flex items-center flex-col gap-6 w-full">
          <div className="w-44 h-44">
            <Image
              className="w-36 h-36"
              src={three}
              alt=""
              width={0}
              height={0}
            />
          </div>
          <div className="flex  items-center flex-col gap-5 w-full text-center">
            <button className="bg-yellow-300 rounded-full px-2 py-1 text-sm text-yellow-900">
              Step 3
            </button>
            <h2 className="font-bold">Fast shipping</h2>
            <p className="text-sm text-neutral-600">
              The carrier will confirm and <br /> ship quickly to you
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <div className="w-44 h-44">
            <Image
              className="w-36 h-36"
              src={four}
              alt=""
              width={0}
              height={0}
            />
          </div>
          <div className="flex  items-center flex-col gap-5 w-full text-center">
            <button className="bg-purple-300 rounded-full px-2 py-1 text-sm text-purple-900">
              Step 4
            </button>
            <h2 className="font-bold">Enjoy the product</h2>
            <p className="text-sm text-neutral-600">
              Have fun and enjoy your 5-star <br /> quality products
            </p>
          </div>
        </div>
      </div>
      <hr />

      <section data-aos="fade-up"
          data-aos-duration="1500" className="flex items-center gap-5 py-16">
        <div className="w-full flex flex-col gap-8">
          <div className="mb-5">
            <Image className="w-28" src={logo} alt="" width={0} height={0} />
          </div>
          <h1 className="text-5xl font-bold">
            Earn free money <br /> with Ciseco
          </h1>
          <p className="text-neutral-500 text-lg">With Ciseco you will get freeship & savings combo...</p>
          <div className="flex items-center gap-5">
            <button className="text-white font-bold text-lg bg-black py-3 px-5 rounded-full hover:bg-slate-950">Savings Combo</button>
            <button className="text-black font-bold text-lg bg-slate-200 border border-neutral-300 py-3 px-5 rounded-full hover:bg-slate-300">Discover More</button>
          </div>
        </div>
        <div className="w-full">
          <div>
            <Image src={coin1} alt="" width={0} height={0} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomesecThree;

"use client";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
import React, { useState } from "react";
import Image from "next/image";
import logo from "../Components/Images/logo.svg";
import dog from "../Components/Images/dog.png";
import login from "../Components/Images/Image-8.webp";
import { FiSearch } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { FaBasketShopping } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdPersonOutline } from "react-icons/md";
import { LuClipboardList } from "react-icons/lu";
import { GoHeart } from "react-icons/go";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { LuBadgeHelp } from "react-icons/lu";
import { RiLogoutCircleLine } from "react-icons/ri";
import Link from "next/link";
import { FaMoon } from "react-icons/fa";
import { BsBrightnessHighFill } from "react-icons/bs";

const Navbar = ({toggleIsDark, isDark}) => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdownInner, setDropdownInner] = useState(false);
  const [dropdownInnerTwo, setDropdownInnerTwo] = useState(false);
  const [dropdownInnerThree, setDropdownInnerThree] = useState(false);
  const [dropdownInnerFour, setDropdownInnerFour] = useState(false);
  const [dropdownOne, setDropdownOne] = useState(false);
  const [dropLogin, setDropLogin] = useState(false);

  const handleDropdownOne = () => {
    setDropdownOne(!dropdownOne);
    setDropdown(false);
    setDropLogin(false);
  };

  const handleDropdown = () => {
    setDropdown(!dropdown);
    setDropdownOne(false);
    setDropLogin(false);
  };

  const handleDropdownInner = () => {
    setDropdownInner(!dropdownInner);
    setDropdownInnerTwo(false);
    setDropdownInnerThree(false);
    setDropdownInnerFour(false);
  };

  const handleDropdownInnerTwo = () => {
    setDropdownInnerTwo(!dropdownInnerTwo);
    setDropdownInner(false);
    setDropdownInnerThree(false);
    setDropdownInnerFour(false);
    setDropLogin(false);
  };

  const handleDropdownInnerThree = () => {
    setDropdownInnerThree(!dropdownInnerThree);
    setDropdownInner(false);
    setDropdownInnerTwo(false);
    setDropdownInnerFour(false);
    setDropLogin(false);
  };

  const handleDropdownInnerFour = () => {
    setDropdownInnerFour(!dropdownInnerFour);
    setDropdownInner(false);
    setDropdownInnerTwo(false);
    setDropdownInnerThree(false);
    setDropLogin(false);
  };

  const handleLogin = () => {
    setDropLogin(!dropLogin);
    setDropdownOne(false);
    setDropdown(false);
  };

  return (
    <div className="dark:bg-black flex shadow-[0_3px_10px_rgb(0,0,0,0.2)] justify-between px-[4rem] py-[1rem]  w-full fixed z-10 bg-white">
        <Link href={'/'}>
      <div>
        <Image className="w-36 dark:bg-white" src={logo} alt="" width={0} height={0} />
      </div>
      </Link>
      <ul className="flex gap-5 items-center cursor-pointer relative text-black from-neutral-700 dark:text-white">
       <Link href={'/product'}>
        <li className=" hover:bg-neutral-300 rounded-full px-3 py-2 hover:transition-all hover:ease-linear">
          Product
        </li>
        </Link>
        <li className=" hover:bg-neutral-300 rounded-full px-3 py-2 hover:transition-all hover:ease-linear">
          Women
        </li>
        <li className=" hover:bg-neutral-300 rounded-full px-3 py-2 hover:transition-all hover:ease-linear">
          Beauty
        </li>
        <li className=" hover:bg-neutral-300 rounded-full px-3 py-2 hover:transition-all hover:ease-linear">
          Sport
        </li>
        <li
          onClick={handleDropdownOne}
          className="relative flex items-center gap-2 hover:bg-neutral-300 rounded-full px-3 py-2 hover:transition-all hover:ease-linear"
        >
          Template <RiArrowDropDownLine className="text-2xl" />
        </li>
        <li
          onClick={handleDropdown}
          className="flex items-center gap-2 hover:bg-neutral-300 rounded-full px-3 py-2 hover:transition-all hover:ease-linear"
        >
          Explore <RiArrowDropDownLine className="text-3xl" />
        </li>
      </ul>

      {dropdownOne === true && (
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="absolute item-center gap-10 top-[5.1rem] py-10 px-24 flex bg-white w-full left-0  shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        >
          <div className="flex flex-row gap-10 mr-14 ">
            <div className="mr-5">
              <p className="pb-5 font-bold">Home Page</p>

              <ul className="flex flex-col gap-3 text-sm cursor-pointer">
                <li>Home 1</li>
                <li>Home 2</li>
                <li>Header 1</li>
                <li>Header 2</li>
                <li>Coming soon</li>
              </ul>
            </div>

            <div className="mr-5">
              <p className="pb-5 font-bold">Shop Page</p>
              <ul className="flex flex-col gap-3 text-sm cursor-pointer">
                <li>Category page 1</li>
                <li>Category page 2</li>
                <li>Product page 1</li>
                <li>Product page 2</li>
                <li>Cart page </li>
                <li>Checkout page </li>
              </ul>
            </div>

            <div className="mr-5">
              <p className="pb-5 font-bold">Other Page</p>
              <ul className="flex flex-col gap-3 text-sm cursor-pointer">
                <li>Checkout page</li>
                <li>Search page 2</li>
                <li>Cart page </li>
                <li>Account page </li>
                <li>Order page </li>
                <li>Subscription </li>
              </ul>
            </div>

            <div className="mr-10">
              <p className="pb-5 font-bold">Blog Page</p>
              <ul className="flex flex-col gap-3 text-sm cursor-pointer">
                <li>Blog page</li>
                <li>Single Blog</li>
                <li>About page </li>
                <li>Contact page </li>
                <li>Signup page </li>
                <li>Forgot Password </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-10 bg-blue-200 py-8 px-12 rounded-md cursor-pointer hover:bg-blue-300">
            <div>
              <h2 className="text-sm pb-3 text-neutral-800">Sale Collection</h2>
              <h1 className="font-bold text-black text-xl pb-5">
                Up to <br /> 80% off retail
              </h1>
              <button className="py-3 px-7 border-none bg-white text-black rounded-full hover:bg-blue-200 mr-5">
                show me all
              </button>
            </div>

            <div className="flex item-center mr-auto">
              <Image
                className="w-36 h-28"
                src={dog}
                alt=""
                width={0}
                height={0}
              />
            </div>
          </div>
        </div>
      )}

      {dropdown === true && (
        <ul
          data-aos="fade-up"
          data-aos-duration="2000"
          className="absolute bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] top-[5.5rem] right-[16rem] px-5 py-4 w-[15rem] rounded-md flex flex-col gap-3 cursor-pointer"
        >
          <li className="hover:bg-gray-100 p-1 hover:rounded-md">
            Home Demo 1
          </li>
          <li className="hover:bg-gray-100 p-1 hover:rounded-md">
            Home Demo 2
          </li>
          <li
            onClick={handleDropdownInner}
            className="relative flex items-center gap-2 hover:bg-gray-100 p-1 hover:rounded-md"
          >
            Catergory Pages <RiArrowDropDownLine className="text-2xl" />
            {dropdownInner === true && (
              <ul
                data-aos="fade-left"
                data-aos-duration="2000"
                className="absolute right-[-14rem] top-1 flex  flex-col bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-2 px-2 w-[12rem] rounded-md gap-1"
              >
                <li className="hover:bg-gray-100 p-1 hover:rounded-md">
                  Category Page 1
                </li>
                <li className="hover:bg-gray-100 p-1 hover:rounded-md">
                  Category Page 2
                </li>
              </ul>
            )}
          </li>
          <li
            onClick={handleDropdownInnerTwo}
            className="flex items-center gap-2 hover:bg-gray-100 p-1 hover:rounded-md relative"
          >
            Product Pages <RiArrowDropDownLine className="text-2xl" />
            {dropdownInnerTwo === true && (
              <ul
                data-aos="fade-left"
                data-aos-duration="2000"
                className="absolute right-[-14rem] top-1 flex flex-col bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-2 px-2 w-[12rem] rounded-md gap-1"
              >
                <li className="hover:bg-gray-100 p-1 hover:rounded-md ">
                  Product Page 1
                </li>
                <li className="hover:bg-gray-100 p-1 hover:rounded-md">
                  Product Page 2
                </li>
              </ul>
            )}
          </li>
          <li className="hover:bg-gray-100 p-1 hover:rounded-md">Cart Page</li>
          <li className="hover:bg-gray-100 p-1 hover:rounded-md">
            Checkout Page
          </li>
          <li className="hover:bg-gray-100 p-1 hover:rounded-md">
            Search Page
          </li>
          <li className="hover:bg-gray-100 p-1 hover:rounded-md">
            Account Page
          </li>
          <li
            onClick={handleDropdownInnerThree}
            className="relative flex items-center gap-2 hover:bg-gray-100 p-1 hover:rounded-md"
          >
            Other Pages <RiArrowDropDownLine className="text-2xl" />
            {dropdownInnerThree === true && (
              <ul
                data-aos="fade-left"
                data-aos-duration="3000"
                className="absolute right-[-14rem] top-1 flex  flex-col bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-2 px-2 w-[12rem] rounded-md gap-1"
              >
                <li className="hover:bg-gray-100 p-1 hover:rounded-md">
                  About
                </li>
                <li className="hover:bg-gray-100 p-1 hover:rounded-md">
                  Contact Us
                </li>
                <li className="hover:bg-gray-100 p-1 hover:rounded-md">
                  Login
                </li>
              </ul>
            )}
          </li>

          <li
            onClick={handleDropdownInnerFour}
            className="relative flex items-center gap-2 hover:bg-gray-100 p-1 hover:rounded-md"
          >
            Blog Page <RiArrowDropDownLine className="text-2xl" />
            {dropdownInnerFour === true && (
              <ul className="absolute right-[-14rem] top-1 flex flex-col bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-2 px-2 w-[12rem] rounded-md gap-1">
                <li className="hover:bg-gray-100 p-1 hover:rounded-md">
                  Blog Page
                </li>
                <li className="hover:bg-gray-100 p-1 hover:rounded-md">
                  Single Blog
                </li>
              </ul>
            )}
          </li>
        </ul>
      )}

      <div className="flex gap-5 text-2xl cursor-pointer">
        <p className="hover:bg-neutral-300 rounded-full px-3 py-3 hover:transition-all hover:ease-linear">
          <FiSearch />
        </p>
        <p
          onClick={handleLogin}
          className="relative hover:bg-neutral-300 rounded-full px-3 py-3 hover:transition-all hover:ease-linear"
        >
          <IoPersonOutline />
        </p>
        <p className="hover:bg-neutral-300 rounded-full px-3 py-3 hover:transition-all hover:ease-linear">
          <FaBasketShopping />
        </p>
      </div>
      {dropLogin === true && (
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="absolute top-[5.2rem] right-[9rem] bg-white px-10 py-5 flex flex-col gap-5 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        >
          <div className="flex items-center gap-5">
            <div>
              <Image
                className="w-12 rounded-full"
                src={login}
                alt=""
                width={0}
                height={0}
              />
            </div>

            <div>
              <h2 className="font-bold">Eden Smith</h2>
              <p className="text-sm">Los Angeles, CA</p>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-4 font-semibold text-neutral-500 text-sm cursor-pointer">
            <p className="flex items-center gap-3 hover:bg-neutral-200 px-1 py-1 rounded-md ">
              <MdPersonOutline className="text-3xl" /> My Account
            </p>
            <p className="flex items-center gap-3 hover:bg-neutral-200 px-1 py-1 rounded-md ">
              <LuClipboardList className="text-2xl" /> My Order
            </p>
            <p className="flex items-center gap-3 hover:bg-neutral-200 px-1 py-1 rounded-md ">
              <GoHeart className="text-2xl" /> Wishlist
            </p>
          </div>
          <hr />
          <div className="flex flex-col gap-4 font-semibold text-neutral-500 text-sm cursor-pointer">
            <p  className="flex items-center gap-3 hover:bg-neutral-200 px-1 py-1 rounded-md ">
              <RiLightbulbFlashLine className="text-3xl" /> Dark Theme
              
              {/* <div onClick={toggleIsDark}>
          {isDark === true ? <p><BsBrightnessHighFill /></p> : <p><FaMoon /></p>}
        </div> */}

<label className="swap swap-rotate">
 
  <input onClick={toggleIsDark} type="checkbox" className="theme-controller" value="synthwave" />


  <svg
    className="swap-off h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

 
  <svg
    className="swap-on h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>

            </p>
            <p className="flex items-center gap-3 hover:bg-neutral-200 px-1 py-1 rounded-md ">
              <LuBadgeHelp className="text-2xl" /> Help
            </p>
            <p className="flex items-center gap-3 hover:bg-neutral-200 px-1 py-1 rounded-md  ">
              <RiLogoutCircleLine className="text-2xl" /> Log out
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

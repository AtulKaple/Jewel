"use client";
import React, { useState } from "react";
import Image from 'next/image';
import { RiMenu5Fill } from "@remixicon/react";


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [catIsOpen, setCatIsOpen] = useState(false);

  return (
    <div  >
      <div
        className={
          isOpen
            ? "full-scr-nav z-50 h-[100vh] w-full bg-[#F2E8C6] absolute  text-[#222] py-[100px] px-[10px] lg:px-[150px] top-0 transition-all ease-linear duration-300 "
            : "full-scr-nav h-full w-full bg-[#F2E8C6] absolute -top-full  text-[#222] py-[100px] z-50 px-[10px] lg:px-[150px] transition-all ease-linear duration-300 rounded-full "
        }
      >
        <h1 className="h1 text-center lg:text-left text-[19vw] lg:text-[11vw] font-play transition-all ease-linear duration-300 leading-none">
          MENU
        </h1>
        <div className="menus transition-all ease-linear duration-300 mt-[30%] lg:mt-auto  flex flex-col justify-center items-center  ">
          <h3 className="hover:scale-[1.1] text-[6vw] lg:text-[3vw] cursor-pointer ">HOME</h3>
          <h3 className="hover:scale-[1.1] text-[6vw] lg:text-[3vw] cursor-pointer ">ABOUT</h3>
          <h3 className="hover:scale-[1.1] text-[6vw] lg:text-[3vw] cursor-pointer ">NEW COLLECTION</h3>
          <h3 className="hover:scale-[1.1] text-[6vw] lg:text-[3vw] cursor-pointer ">DESIGN YOURS</h3>
          <h3 className="hover:scale-[1.1] text-[6vw] lg:text-[3vw] cursor-pointer ">CONTACT</h3>
        </div>
        <div className="connect absolute flex lg:flex-col gap-[4vw] lg:gap-0 right-[35%] lg:right-[10%] top-[80%] lg:top-[50%] transition-all ease-linear duration-300  ">
          <img src="/insta.png" alt=""  className="h-[8vw] lg:h-[3vw] mt-[2vw] lg:mt-auto cursor-pointer hover:scale-[1.1]" />
          <img src="/wp.png" alt="" className="h-[8vw] lg:h-[3vw] mt-[2vw] cursor-pointer hover:scale-[1.1] " />
          <img src="/fb.png" alt="" className="h-[8vw] lg:h-[3vw] mt-[2vw] cursor-pointer hover:scale-[1.1] " />
        </div>
      </div>
      <div
        className={
          catIsOpen
            ? "full-scr-nav h-[100vh] z-50 w-[100vw] bg-[#F2E8C6] absolute  text-[#222] py-[100px] px-[10px] lg:px-[150px] top-0 transition-all ease-linear duration-300 "
            : "full-scr-nav h-full w-[100vw] bg-[#F2E8C6] absolute -top-full  text-[#222] py-[100px] z-50 px-[10px] lg:px-[150px] transition-all ease-linear duration-300 rounded-full " 
        }
      >
        <h1 className="h1 text-[12vw] w-full lg:text-[7vw] font-play transition-all ease-linear duration-300 leading-none text-center">
          Shop By Category
        </h1>
        <div className="menus transition-all ease-linear duration-300 mt-[20%] lg:mt-[1vw] flex relative h-[85vw] lg:h-[28vw] font-medium     ">
          <div className="h-[30vw] w-[30vw] lg:h-[10vw] lg:w-[15vw]  top-0 left-[13.5%] lg:left-[18.5%] absolute text-[3.5vw] lg:text-[2vw] flex items-center justify-center object-cover group cursor-pointer "><h1 className="z-50 opacity-1 lg:opacity-0 lg:invisible  transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:visible" >Necklaces</h1> <img src="Slider/2.2.avif" alt="" className=" overflow-hidden  absolute object-cover h-full w-full group-hover:opacity-[0.7] " /></div>
          <div className="h-[22vw] w-[35vw] lg:h-[12vw] lg:w-[20vw]  left-[48%] lg:left-[40%] top-[2vw] absolute text-[3.5vw] lg:text-[2vw] flex items-center justify-center object-cover group cursor-pointer  "><h1 className="z-50 opacity-1 lg:opacity-0 lg:invisible  transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:visible">Rings</h1> <img src="r.avif" alt="" className=" overflow-hidden absolute object-cover h-full w-full group-hover:opacity-[0.7]  " /></div>
          <div className="h-[30vw] w-[30vw] lg:h-[13vw] lg:w-[25vw]  left-[48%] lg:left-[40%] bottom-[33%] lg:bottom-0 absolute text-[3.5vw] lg:text-[2vw] flex items-center justify-center object-cover group cursor-pointer "><h1 className="z-50 opacity-1 lg:opacity-0 lg:invisible  transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:visible">Earrings</h1> <img src="Slider/7.2.avif" alt="" className=" overflow-hidden absolute object-cover h-full w-full group-hover:opacity-[0.7] " /></div>
          <div className="h-[24vw] w-[35vw] lg:h-[14vw] lg:w-[20vw] top-[33vw] left-[8%] lg:top-[11vw] lg:left-[12%]  absolute text-[3.5vw] lg:text-[2vw] flex items-center justify-center object-cover group cursor-pointer "><h1 className="z-50 opacity-1 lg:opacity-0 lg:invisible  transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:visible">Bracelets</h1> <img src="Slider/19.2.avif" alt="" className=" overflow-hidden absolute object-cover h-full w-full group-hover:opacity-[0.7] " /></div>
          <div className="h-[18vw] w-[28vw] lg:h-[9vw] lg:w-[14vw] left-[32%] top-[70%] lg:left-[68%] lg:top-[5vw]  absolute text-[3.5vw] lg:text-[2vw] flex flex-col items-center justify-center object-cover group cursor-pointer "><h1 className="z-50 opacity-1 lg:opacity-0 lg:invisible  transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:visible group">View All</h1> <img src="Slider/25.2.avif" alt="" className=" overflow-hidden absolute object-cover h-full w-full group-hover:opacity-[0.7] " /></div>
        </div>
      </div>
      <div
        className={
          isOpen
            ? "nav absolute  z-50   h-[100px] w-[100%]  flex items-center justify-between px-[50px] text-[#333] transition-all ease-linear duration-300 "
            : "nav navnav absolute z-50   h-[100px] w-[100%]  flex items-center justify-between px-[50px] transition-all ease-linear duration-300 "
        }
      >
        <div className="flex w-[10vw] h-[4vw] items-center justify-center gap-[0.7vw] relative " >
        <img src="/ro.gif" alt="" className=' absolute left-[-30.5%] lg:left-[6.5%]  h-[1.5vw] lg:h-[1vw] top-[-80%] lg:top-[-20%]' />
          <img src="/Branding.png" alt="" className=" h-[250%] lg:h-[110%]   " />
        <h2 className=" uppercase text-[4vw] lg:text-[2vw] tracking-[1px] font-arch font-extralight  ">
          JEWEL
        </h2>
        </div>
        <div className="nav-prt2 flex items-center ">
          <h3 className="uppercase text-[4vw] lg:text-[2vw] tracking-[1px] font-arch font-extralight cursor-pointer" onClick={() => setCatIsOpen(!catIsOpen)}>CATEGORY</h3>
          <RiMenu5Fill
            size={30}
            className="ml-[20px] lg:ml-[50px] cursor-pointer "
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
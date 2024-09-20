import React from "react";
import { RiMapPinLine } from "@remixicon/react";

const Page12 = () => {
  return (
    <div className="footer w-full h-[70vh] bg-white flex ">
      <div className="Company h-full w-[31%] lg:w-[35%] z-50 flex items-center justify-center flex-col gap-[1.5vw] ">
        <h1 className=" text-[5vw] lg:text-[2.5vw] ">Comapany</h1>
        <h3 className="cursor-pointer text-[3vw] lg:text-base ">About Us</h3>
        <h3 className="cursor-pointer text-[3vw] lg:text-base ">
          All Jewellery
        </h3>
        <h3 className="cursor-pointer text-[3vw] lg:text-base ">
          Design Yours
        </h3>
        <h3 className="cursor-pointer text-[3vw] lg:text-base ">
          Our Boutiques
        </h3>
        <h3 className="cursor-pointer text-[3vw] lg:text-base ">
          Our expertise
        </h3>
        <h3 className="cursor-pointer text-[3vw] lg:text-base ">
          Order Online
        </h3>
      </div>
      <div className="brand h-full w-[30%] flex items-center justify-center flex-col ">
        <div className="flex flex-col w-[20vw] h-[20vw] items-center justify-center gap-[0.7vw] relative ">
          <img
            src="/ro.gif"
            alt=""
            className=" absolute left-[47%] top-[4%]  h-[2vw]"
          />
          <img src="/Branding.png" alt="" className=" h-[70%]  " />
          <h2 className=" uppercase text-[4vw] lg:text-[2vw] tracking-[1px] font-arch font-extralight  ">
            JEWEL
          </h2>
        </div>

        <h1 className="flex gap-[0.3vw] items-center ">
          {" "}
          <RiMapPinLine size={15} /> London
        </h1>
        <div className="social flex transition-all ease-linear duration-300  w-[80%] mt-[2vw] gap-[2vw] justify-center ">
          <img
            src="/insta.png"
            alt=""
            className="h-[5vw] lg:h-[3vw] cursor-pointer hover:scale-[1.1]"
          />
          <img
            src="/wp.png"
            alt=""
            className="h-[5vw] lg:h-[3vw] cursor-pointer hover:scale-[1.1] "
          />
          <img
            src="/fb.png"
            alt=""
            className="h-[5vw] lg:h-[3vw]  cursor-pointer hover:scale-[1.1] "
          />
        </div>
      </div>

      <div className="contact h-full w-[35%] flex items-center justify-center flex-col gap-[1.5vw] ">
        <h1 className=" text-[5vw] lg:text-[2.5vw] ">Help</h1>
        <h3 className="cursor-pointer text-[3vw] lg:text-base "> FAQs</h3>
        <h3 className="cursor-pointer text-[3vw] lg:text-base ">
          Delivery & Returns
        </h3>
        <h3 className="cursor-pointer text-[3vw] lg:text-base ">Site Map</h3>
        <h1 className=" text-[5vw] lg:text-[2.5vw] ">Contact Us</h1>
        <h3 className="text-[3vw] lg:text-base">support.client@jewel.in</h3>
        <h3 className="text-[3vw] lg:text-base">Tel : +33 3 69 31 46 84</h3>
      </div>
    </div>
  );
};

export default Page12;

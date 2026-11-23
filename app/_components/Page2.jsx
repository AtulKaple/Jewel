"use client";
import React from "react";
import { Dancing_Script } from "next/font/google";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const dance = Dancing_Script({
  subsets: ["latin"],
  style: "normal",
  weight: ["400"],
});

const Page2 = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".page2",
      start: "top 50%",
      end: "bottom 50%",
      onEnter: () => {
        gsap.to(".page2", { backgroundColor: "#F4BF96", duration: 1.4, ease: "power2.inOut", overwrite: "auto" });
        gsap.to(".page2-gradient", { opacity: 0, duration: 1.4, ease: "power2.inOut", overwrite: "auto" });
      },
      onLeave: () => {
        gsap.to(".page2", { backgroundColor: "#ffffff", duration: 1.4, ease: "power2.inOut", overwrite: "auto" });
      },
      onLeaveBack: () => {
        gsap.to(".page2", { backgroundColor: "#fbcbc9", duration: 1.4, ease: "power2.inOut", overwrite: "auto" });
        gsap.to(".page2-gradient", { opacity: 1, duration: 1.4, ease: "power2.inOut", overwrite: "auto" });
      },
      onEnterBack: () => {
        gsap.to(".page2", { backgroundColor: "#F4BF96", duration: 1.4, ease: "power2.inOut", overwrite: "auto" });
        gsap.to(".page2-gradient", { opacity: 0, duration: 1.4, ease: "power2.inOut", overwrite: "auto" });
      },
    });

    gsap.to(".pg2img", {
      scale: 0.99,
      scrollTrigger: {
        trigger: ".pg2img",
        start: "top 70%",
        end: "bottom 80%",
        scrub: 3,
      },
    });

    gsap.from(".pg2h1", {
      rotationX: "90deg",
      opacity: 0,
      scrollTrigger: {
        trigger: ".pg2h1",
        start: "top 70%",
        end: "top 50%",
        scrub: 3,
      },
    });
  });
  return (
    <div className="page2 relative min-h-[100vh] pb-[25vh] text-[#52322B] bg-[#fbcbc9] overflow-hidden ">
        <div className="page2-gradient absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,_#fbcbc9,_#f6c5c4,_#f0bfbf,_#ebb9ba,_#e5b3b6,_#e0adb1,_#daa7ac,_#d5a2a8,_#cf9ca3,_#ca969f,_#c4919a,_#bf8b96)] z-0" />
        <div className="back absolute w-full h-[39vw] bottom-[60vw] lg:bottom-[4vw] flex items-center justify-center  ">
          <h1 className="font-g text-[#f3b37c] text-[55vw] lg:text-[40vw] ">
            Jewel
          </h1>
        </div>
        <img
          src="/Pink.jpg"
          alt=""
          className="pg2img w-full h-[60vw] object-cover lg:h-full relative top-0 scale-[0.9]  "
        />
        <h1 className="pg2h1 text-[8vw] lg:text-[3vw] w-[80%] lg:w-[60%] text-center mr-auto ml-auto mt-[20vh] origin-bottom  ">
          At <span className="font-play">JEWEL </span>,{" "}
        </h1>
        <h1 className="pg2h1 text-[8vw] lg:text-[3vw] w-[90%] lg:w-[70%] text-center mr-auto ml-auto   origin-bottom ">
          {" "}
          jewelry is more than just an accessory —
        </h1>
        <h1 className="pg2h1 text-[8vw] lg:text-[3vw] w-[90%]  lg:w-[50%] text-center mr-auto ml-auto   origin-bottom ">
          it's a symbol of
        </h1>
        <h1 className="pg2h1 text-[8vw] lg:text-[3vw] w-[90%] lg:w-[50%] text-center mr-auto ml-auto   origin-bottom">
          <span className="font-g text-[15vw] lg:text-[6vw] leading-[2vw] ">
            love&nbsp;
          </span>{" "}
          and{" "}
          <span className="font-g text-[15vw] lg:text-[6vw] leading-[2vw] ">
            {" "}
            &nbsp;individuality.
          </span>
        </h1>
      </div>
  );
};

export default Page2;

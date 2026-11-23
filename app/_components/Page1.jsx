"use client";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const StartingRing = dynamic(() => import("./StartingRing/StartingRing"), {
  ssr: false,
});
gsap.registerPlugin(ScrollTrigger);

const Page1 = () => {
  const tl = useRef();

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".page1",
      start: "top top",
      end: "bottom 50%",
      onLeave: () => {
        gsap.to(".page1", { backgroundColor: "#F4BF96", duration: 1.4, ease: "power2.inOut", overwrite: "auto" });
        gsap.to(".page1-gradient", { opacity: 0, duration: 1.4, ease: "power2.inOut", overwrite: "auto" });
      },
      onEnterBack: () => {
        gsap.to(".page1", { backgroundColor: "#fbcbc9", duration: 1.4, ease: "power2.inOut", overwrite: "auto" });
        gsap.to(".page1-gradient", { opacity: 1, duration: 1.4, ease: "power2.inOut", overwrite: "auto" });
      },
    });

    tl.current = gsap
      .timeline()
      .from(".ring1", {
        x: 60,
        duration: 2,
        opacity: 0,
      })
      .from(".navh1", {
        y: 60,
        duration: 0.6,
        opacity: 0,
      })
      .from(".navh2", {
        y: 60,
        duration: 0.5,
        opacity: 0,
        delay: "-0.2",
      })
      .from(".navh3", {
        y: 60,
        duration: 0.5,
        opacity: 0,
        delay: "-0.2",
      });
  });

  return (
    <div className="page1 text-[#52322B] bg-[#fbcbc9] min-h-[100vh] w-full relative z-0 overflow-hidden ">
      <div className="page1-gradient absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,_#fbcbc9,_#f6c5c4,_#f0bfbf,_#ebb9ba,_#e5b3b6,_#e0adb1,_#daa7ac,_#d5a2a8,_#cf9ca3,_#ca969f,_#c4919a,_#bf8b96)] z-0" />
      <h1 className=" navh1 z-50 text-[24vw] lg:text-[16vw] absolute left-[10%] top-[15%] font-play tracking-[8px] cursor-pp   ">
        JEWEL
      </h1>
      <h2 className="navh2 text-[7vw] lg:text-[3vw] absolute left-[8%] lg:left-[28%] top-[76%] lg:top-[66%] w-[80%] lg:w-[30%] font-light leading-10 ">
        {" "}
        &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Experience the luxury
        of fine jewellry.
      </h2>
      <h3 className="navh3 text-[7vw] lg:text-[3vw] absolute left-[49%] lg:left-[77%] top-[53%] lg:top-[50%] w-[55%] lg:w-[25%] text-white font-semibold z-50 font-g cursor-pp ">
        Unveil the sparkle within..
      </h3>
      <div className="ring1 absolute bg-transparent right-6 lg:right-0 h-[80vw] w-[80vw] lg:h-[40vw] lg:w-[40vw] top-[35%] lg:top-[5vw]  ">
        <StartingRing />
      </div>
    </div>
  );
};

export default Page1;

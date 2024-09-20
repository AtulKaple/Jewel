"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cover from "./Cover/Cover";
import FinalRing from "./FinalRing/FinalRing";
gsap.registerPlugin(ScrollTrigger);

const Page9 = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".stop",
      start: "top 60%",
      end: "bottom 50%",
      onEnter: () => gsap.to(".stop", { background: "#E49BFF", duration: 1 }),
      onLeaveBack: () =>
        gsap.to(".stop", { background: "#ED9B7C", duration: 1 }),
      onEnterBack: () =>
        gsap.to(".stop", { background: "#E49BFF", duration: 1 }),
    });

    ScrollTrigger.create({
      trigger: ".sbottom",
      start: "top 60%",
      end: "bottom -220%",
      onEnter: () => gsap.to(".sbottom", { background: "#fff", duration: 1 }),
      onLeave: () =>
        gsap.to(".sbottom", {
          background: "#A67B5B",
          duration: 1,
          color: "#fff",
        }),
      onLeaveBack: () =>
        gsap.to(".sbottom", { background: "#fff", duration: 1 }),
      onEnterBack: () =>
        gsap.to(".sbottom", {
          background: "#fff",
          duration: 1,
          color: "#52322B",
        }),
    });

    let mm = gsap.matchMedia();

    mm.add(
      {
        // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
        isDesktop: "(min-width: 769px)",
        isMobile: "(max-width: 768px)",
        // reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
        let { isDesktop, isMobile } = context.conditions;

        var tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: ".second",
            start: "top top",
            scrub: 1,
            pin: true,
            end: "bottom -150%",
          },
        });
        tl2
          .to(".circ", {
            top: isDesktop ? "30%" : "40%",
            duration: 1,
            stagger: 0.2,
            rotate: 0,
            ease: "none",
          })
          .to(
            ".cl1",
            {
              right: isDesktop ? "42.9%" : "30%",
              ease: "none",
            },
            "same"
          )
          .to(
            ".cl2",
            {
              left: isDesktop ? "42.9%" : "35%",
              stagger: 0.1,
              ease: "none",
            },
            "same"
          )
          .to(
            ".cl2",
            {
              scale: 10,
              top: isDesktop ? "90%" : "70%",
              stagger: 0.1,
              ease: "none",
            },
            "a"
          )

          .to(
            ".cl1",
            {
              scale: 0,
              ease: "none",
            },
            "a"
          )
          .to(
            ".sh1",
            {
              left: isDesktop ? "17.5%" : "-200%",
              ease: "none",
              delay: isDesktop ? 0 : 1,
              duration: isDesktop ? 3 : 3,
              ease: "none",
            },
            "a"
          )
          .to(
            ".final",
            {
              left: isDesktop ? "25%" : "0%",
              duration: 1,
              ease: "none",
            },
            "a"
          )
          .to(
            ".sbottom2",
            {
              opacity: 0,
              duration: isDesktop ? 2 : 1,
              ease: "none",
            },
            "a"
          )
          .to(
            ".sbottom1",
            {
              opacity: 1,
              duration: isDesktop ? 2 : 1,
              delay: isDesktop ? 2 : 1,
              ease: "none",
            },
            "a"
          );
      }
    );
  });

  return (
    <div>
      <div className="second relative w-full h-[100vh] bg-white text-black ">
        <div className="navb  absolute z-50  text-black flex justify-between w-full lg:py-[30px] lg:px-[50px] p-[20px] ">
          <h1>Innovative Design</h1>
          <h1>Sophisticated Styles</h1>
        </div>
        <div className="stop overflow-hidden w-full h-[70%] relative flex items-center justify-center text-[#52322B] bg-[#ED9B7C] ">
          <h1 className=" sh1 z-50 absolute bottom-0 text-white lg:text-[17vw] text-[55vw] leading-none left-[100%] font-play ">
            DESIGN
          </h1>
          <div className="final absolute left-[100%] z-50 h-full w-[100vw] lg:w-[50vw] top-[2vw] pb-[4vh]  ">
            <FinalRing />
          </div>
          <div className="circ p-0 -rotate-90 cl1 top-[150%] lg:h-[15vw] lg:w-[15vw] h-[34vw] w-[34vw]   rounded-full absolute right-[48.5%] ">
            <Cover />
          </div>
          <div className="flex -rotate-90 items-center justify-center circ cl2 top-[150%] lg:h-[15vw] lg:w-[15vw] h-[34vw] w-[34vw]    rounded-full absolute left-[48.5%] ">
            <img
              src="/Diamond.png"
              alt=""
              className=" absolute h-[8vh] lg:h-[13vh] mt-[5vh] lg:mt-0 md:top-[14vh] lg:top-[12vh]  "
            />
          </div>
        </div>
        <div className="sbottom w-full relative h-[30%] border border-solid border-black flex items-center justify-center  ">
          <p className=" sbottom1 absolute top-[16vw] lg:top-auto lg:text-[3vw] w-[55%] lg:w-[55%] text-[5.5vw] text-center leading-none opacity-0 ">
            Unleash your inner{" "}
            <span className=" font-g text-[12vw] lg:text-[6vw] text-[#E49BFF] ">
              {" "}
              Designer
            </span>{" "}
            ..
          </p>
          <p className=" sbottom2 absolute top-[12vw] lg:top-auto lg:text-[3vw] w-[75%] lg:w-[55%] text-[5.5vw] text-center leading-none ">
            Custom creations tailored to your specifications, ensuring your
            jewelry is as individual as you are.
          </p>
        </div>
        <div className="btnavb bottom-0 z-50  absolute text-black  justify-between  flex w-full lg:py-[30px] lg:px-[50px] p-[20px] ">
          <h1>Tailored Aesthetics</h1>
          <h1>Ethically Sourced</h1>
        </div>
      </div>
    </div>
  );
};

export default Page9;

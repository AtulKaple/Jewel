"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Page8 = () => {
  useGSAP(() => {
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

        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".home",
            start: "top 0%",
            markers: true,
            scrub: 1,
            pin: true,
            end: "bottom -250%",
          },
        });

        tl.to(
          ".bimg",
          {
            rotate: "-180deg",
            scale: 0.5,
            duration: 1,
            stagger: 0.1,
            ease: "none",
          },
          "sath"
        )
          .to(
            ".timg",
            {
              scale: 0.5,
              duration: 1,
              stagger: 0.1,
              ease: "none",
            },
            "sath"
          )
          .to(
            ".ccimg",
            {
              scale: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "none",
            },
            "sath"
          )
          .to(
            ".h5",
            {
              opacity: 0,
              ease: "none",
            },
            "sath"
          )
          .to(
            ".circle",
            {
              scale: 0.6,
              ease: "none",
            },
            "sath"
          )
          .to(
            ".title",
            {
              y: "390%",
              ease: "none",
            },
            "sath"
          )

          .to(
            ".gola",
            {
              top: isDesktop ? "46.5%" : "48%",
              scale: 2,
              ease: "none",
            },
            "sath"
          )
          .to(
            ".gola",
            {
              opacity: 0,
              duration: 0.2,
              ease: "none",
            },
            "crl"
          )
          .to(
            ".smcircle",
            {
              scale: 0,
              ease: "none",
            },
            "crl"
          )
          .to(
            ".circle",
            {
              scale: 0,
              ease: "none",
            },
            "crl"
          )
          .to(
            ".title2",
            {
              rotate: 0,
              bottom: "-8px",
              duration: 1,
              ease: "none",
            },
            "crl"
          )
          .to(
            ".sidediv",
            {
              top: isDesktop ? 100 : 100,
              ease: "none",
            },
            "crl"
          )
          .to(".sidediv", {
            top: "-50%",
            ease: "none",
          });
      }
    );
  });

  return (
    <div>
      <div className="home h-[100vh] w-[100vw] overflow-hidden justify-center flex items-center relative text-[#52322B] bg-[radial-gradient(circle_at_50%_50%,_#fbcbc9,_#f6c5c4,_#f0bfbf,_#ebb9ba,_#e5b3b6,_#e0adb1,_#daa7ac,_#d5a2a8,_#cf9ca3,_#ca969f,_#c4919a,_#bf8b96)]  ">
        <div className="overlay w-full h-full absolute overflow-hidden justify-center flex items-center top-0 left-0   ">
          <div className="centerimg relative z-50 lg:w-[36vw] w-[80vw] lg:top-[1.5vh]  ">
            <h5 className="h5">Timeless Treasures,</h5>
            <h5 className="mb-2 h5 ">Crafted for You.</h5>
            <div className="cimage justify-center flex items-center w-full lg:h-[260px] h-[180px] relative overflow-hidden ">
              <img
                src="/White2.webp"
                alt=""
                className="ccimg w-full h-full object-cover absolute justify-center flex items-center  "
              />
            </div>
            <div className=" flex justify-center items-center ">
              <h1 className=" title  z-50  -bottom-2 lg:text-[3vw] font-play uppercase text-[9vw] text-center  ">
                From <br />
                Classic beauty
              </h1>
              <h1 className="title2 absolute lg:w-[43vw] w-[90vw] -bottom-[98%] uppercase font-play text-white text-center  z-50 lg:text-[3vw] text-[9vw] rotate-[30deg] origin-top-left ">
                To <br />
                modern elegance
              </h1>
            </div>
          </div>
          <div className="sidediv overflow-hidden flex flex-col p-[2vw] items-center justify-start absolute h-[60vw] gap-3 lg:h-[23vw] w-[70vw] lg:w-[23vw] text-[#52322B] bg-[radial-gradient(circle_at_50%_50%,_#ffffff,_#f6f6f5,_#ececec,_#e3e3e3,_#dadad9,_#d1d1d0,_#c8c8c7,_#bfbfbe,_#b6b6b5,_#adadac,_#a5a5a3,_#9c9c9a)] z-50 left-0 -bottom-[110%] ">
            <h1 className=" text-[6vw] lg:text-[2vw] font-medium  ">
              FINE NECKLACES
            </h1>
            <p className=" text-center text-[3.6vw] lg:text-[1.2vw] ">
              Complete your look with a Jewel fine necklace, handcrafted by the
              London atelier. Adorned in a selection of precious metals and
              lavish gemstones.
            </p>
            <img
              src="Slider/1.1.avif"
              alt=""
              className=" absolute  z-50 bottom-0 scale-[2.2]  "
            />
          </div>
          <div className="navb absolute z-50 top-0 left-0 text-white text-[3.5vw] lg:text-[1.3vw] flex justify-between w-full lg:py-[30px] lg:px-[50px] p-[20px]   ">
            <h1>Luxurious Finishes</h1>
            <h1>Exceptional Quality</h1>
          </div>

          <div className="btnavb z-50 bottom-0 left-0 absolute text-white text-[3.5vw] lg:text-[1.3vw] flex justify-between w-full lg:py-[30px] lg:px-[50px] p-[20px] ">
            <h1>Premium Gemstones</h1>
            <h1>High-End Elegance</h1>
          </div>
          <div className="gola absolute lg:w-[6vw] lg:h-[6vw] w-[12vw] h-[12vw] z-50 rounded-full top-[150%] ">
            <img src="/Pendant.png" alt="" className="h-full w-full" />
          </div>

          <div className="smcircle lg:h-[31vw] lg:w-[31vw] h-[75vw] w-[75vw] absolute rounded-full bg-white justify-center flex items-center "></div>
          <div className="circle lg:h-[49vw] lg:w-[49vw] h-[120vw] w-[120vw] justify-center flex items-center absolute rounded-full ">
            <div className="top w-full h-full  absolute ">
              <img
                className="timg  absolute justify-center flex items-center rotate-180 scale-[2.3]"
                src="https://d2kq0urxkarztv.cloudfront.net/59ee0858278cca00855b0b53/2496214/upload-01e6ea76-8d77-4749-aae3-79ad8e406893.png?w=1339&e=webp&nll=true"
                alt=""
              />
              <img
                className="timg  absolute justify-center flex items-center rotate-180 scale-[1.5]"
                src="https://d2kq0urxkarztv.cloudfront.net/59ee0858278cca00855b0b53/2496214/upload-01e6ea76-8d77-4749-aae3-79ad8e406893.png?w=1339&e=webp&nll=true"
                alt=""
              />
              <img
                className="timg absolute justify-center flex items-center rotate-180 scale-[1]"
                src="https://d2kq0urxkarztv.cloudfront.net/59ee0858278cca00855b0b53/2496214/upload-01e6ea76-8d77-4749-aae3-79ad8e406893.png?w=1339&e=webp&nll=true"
                alt=""
              />
            </div>
            <div className="bottom w-full h-full absolute">
              <img
                className="bimg w-full  absolute justify-center flex items-center scale-[2.3] "
                src="https://d2kq0urxkarztv.cloudfront.net/59ee0858278cca00855b0b53/2496214/upload-01e6ea76-8d77-4749-aae3-79ad8e406893.png?w=1339&e=webp&nll=true"
                alt=""
              />
              <img
                className="bimg w-full  absolute justify-center flex items-center scale-[1.5] "
                src="https://d2kq0urxkarztv.cloudfront.net/59ee0858278cca00855b0b53/2496214/upload-01e6ea76-8d77-4749-aae3-79ad8e406893.png?w=1339&e=webp&nll=true"
                alt=""
              />
              <img
                className="bimg w-full absolute justify-center flex items-center scale-[1]"
                src="https://d2kq0urxkarztv.cloudfront.net/59ee0858278cca00855b0b53/2496214/upload-01e6ea76-8d77-4749-aae3-79ad8e406893.png?w=1339&e=webp&nll=true"
                alt=""
              />
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <img
          src="/White.jpg"
          alt=""
          className="w-full justify-center flex items-center h-full object-cover "
        />
      </div>
    </div>
  );
};

export default Page8;

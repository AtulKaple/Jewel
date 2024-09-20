import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Dancing_Script } from "next/font/google";
gsap.registerPlugin(ScrollTrigger);

const dance = Dancing_Script({
  subsets: ["latin"],
  style: "normal",
  weight: ["400"],
});

const Page4 = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".page4",
      start: "top 50%",
      end: "bottom 50%",
      onLeave: () =>
        gsap.to(".page4", {
          background: "#CBCDCE",
          duration: 1,
          color: "#52322B",
        }),
      onLeaveBack: () =>
        gsap.to(".page4", { background: "#9E9E9C", duration: 1 }),
      onEnterBack: () =>
        gsap.to(".page4", {
          background: "#9E9E9C",
          duration: 1,
          color: "white",
        }),
    });

    gsap.from(
      ".pg4h1",
      {
        x: "-50%",
        duration: 0.3,
        opacity: 0,
        scrollTrigger: {
          trigger: ".pg4h1",
          scroller: "body",
          start: "top 90%",
          end: "top 40%",
          scrub: 3,
        },
      },
      "ab"
    );
    gsap.from(
      ".imm",
      {
        y: "-100%",
        duration: 0.3,
        opacity: 0,
        scrollTrigger: {
          trigger: ".pg4h1",
          scroller: "body",
          start: "top 90%",
          end: "top 40%",
          scrub: 3,
        },
      },
      "ab"
    );
  });

  return (
    <div className="page4 relative h-[60vh] w-[100%] text-center items-center gap-[5vw] flex lg:p-[5vw] lg:pl-[8vw] text-[white] bg-[#9E9E9C] overflow-hidden ">
      <h1 className="pg4h1 z-50 text-[9vw] lg:text-[4vw] font-light">
        Explore our collections to find <br />
        the{" "}
        <span className="font-g  text-[14vw] lg:text-[7vw] leading-10 relative text-red-700 ">
          &nbsp; perfect piece&nbsp;{" "}
        </span>{" "}
        for <br />
        life’s{" "}
        <span className="font-g text-[14vw] lg:text-[7vw] leading-10 text-red-700 relative ">
          &nbsp; precious..&nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1729 149"
            fill="#fff"
            className="absolute w-[32vw] lg:w-[18vw] left-0 "
          >
            <path d="M1689.89 26.59a4479.17 4479.17 0 0 0-89.64-7.41C1354.1.45 1106.56-5.76 859.92 5.93c-227.31-4.25-454.79 8.96-681.36 27.95C121.94 38.9 65.1 40.2 8.38 42.12c-16.57 2.86-5.23 26.39 5.6 14.46 160.76-1.27 331.82-27.38 620.54-34.8A4574.9 4574.9 0 0 0 498.9 36.57C376.43 52.24 253.01 65.21 132.88 94.51c-36.16 8.94-71.67 20.31-106.69 32.95-7.14 4.4-27.74 3.63-24.98 15.62 1.99 7.19 13.63 7.05 18.04 2.59 143.67-54.58 297.49-70.64 448.88-90.24 129.01-16.82 258.61-28.01 388.46-34.27 285.02 6.07 570.13 38.15 848.22 100.65 3.84 1.09 8.24-1.32 9.23-5.24 1.98-7.31-5.66-9.96-11.42-10.6-48.05-10.76-96.18-21.26-144.56-30.43-160.68-28.2-322.86-46.78-485.4-60.19l-2.34-.16c161.55-1.33 323.21 4.35 484.31 15.71 37.11 2.65 125.06 8.85 164.97 13.96a7.58 7.58 0 0 0 8.45-6.41c.94-13.18-23.48-8.77-38.14-11.86Z"></path>
          </svg>{" "}
        </span>{" "}
        moments
      </h1>
      <img
        src="/file.png"
        alt=""
        className="imm h-full absolute lg:right-8 right-[45%] "
      />
    </div>
  );
};

export default Page4;

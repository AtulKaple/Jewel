"use client";
import { projects } from "../../data";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Card from "./Card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".page3",
      start: "top 50%",
      end: "bottom 50%",
      onEnter: () => gsap.to(".page3", { background: "#CBCDCE", duration: 1 }),
      onLeave: () => gsap.to(".page3", { background: "#ED9B7C", duration: 1 }),
      onLeaveBack: () =>
        gsap.to(".page3", { background: "#9E9E9C", duration: 1 }),
      onEnterBack: () =>
        gsap.to(".page3", { background: "#CBCDCE", duration: 1 }),
    });
  });

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <div
      ref={container}
      className=" page3  py-[3vw] px-[3vw] text-[#52322B] bg-[#9E9E9C] "
    >
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

export default Page3;

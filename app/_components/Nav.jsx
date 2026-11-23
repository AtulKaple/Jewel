"use client";
import React, { useState, useRef } from "react";
import { RiMenu5Fill, RiCloseLine } from "@remixicon/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [catIsOpen, setCatIsOpen] = useState(false);

  const containerRef = useRef(null);
  const menuOverlayRef = useRef(null);
  const menuTitleRef = useRef(null);
  const catOverlayRef = useRef(null);
  const catTitleRef = useRef(null);

  const menuMounted = useRef(false);
  const catMounted = useRef(false);

  // Initial setup: ensure overlays start hidden off-screen
  useGSAP(
    () => {
      gsap.set(menuOverlayRef.current, { yPercent: -100, autoAlpha: 0 });
      gsap.set(catOverlayRef.current, { yPercent: -100, autoAlpha: 0 });
    },
    { scope: containerRef }
  );

  // Menu Animation: curtain opens first, THEN content enters smoothly
  useGSAP(
    () => {
      if (!menuMounted.current) {
        menuMounted.current = true;
        return;
      }

      if (isOpen) {
        const tl = gsap.timeline();
        tl.set(menuOverlayRef.current, { autoAlpha: 1 })
          .set(menuTitleRef.current, { y: 40, opacity: 0 })
          .set(".menu-item", { y: 30, opacity: 0 })
          .set(".menu-social-wrap", { y: 25, opacity: 0 })
          // 1. Slide curtain down
          .fromTo(
            menuOverlayRef.current,
            { yPercent: -100 },
            { yPercent: 0, duration: 0.75, ease: "power4.inOut" }
          )
          // 2. AFTER curtain opens, content enters with smooth GSAP animations
          .to(
            menuTitleRef.current,
            { y: 0, opacity: 1, duration: 0.55, ease: "power3.out" }
          )
          .to(
            ".menu-item",
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              stagger: 0.08,
              ease: "power3.out",
            },
            "-=0.25"
          )
          .to(
            ".menu-social-wrap",
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              stagger: 0.08,
              ease: "power3.out",
            },
            "-=0.2"
          );
      } else {
        const tl = gsap.timeline();
        tl.to([menuTitleRef.current, ".menu-item", ".menu-social-wrap"], {
          y: -15,
          opacity: 0,
          duration: 0.2,
          ease: "power2.in",
        }).to(menuOverlayRef.current, {
          yPercent: -100,
          duration: 0.6,
          ease: "power4.inOut",
          onComplete: () => {
            gsap.set(menuOverlayRef.current, { autoAlpha: 0 });
          },
        });
      }
    },
    { dependencies: [isOpen], scope: containerRef }
  );

  // Category Animation: curtain opens first, THEN content enters smoothly
  useGSAP(
    () => {
      if (!catMounted.current) {
        catMounted.current = true;
        return;
      }

      if (catIsOpen) {
        const tl = gsap.timeline();
        tl.set(catOverlayRef.current, { autoAlpha: 1 })
          .set(catTitleRef.current, { y: 40, opacity: 0 })
          .set(".cat-card", { y: 40, opacity: 0, scale: 0.95 })
          // 1. Slide curtain down
          .fromTo(
            catOverlayRef.current,
            { yPercent: -100 },
            { yPercent: 0, duration: 0.75, ease: "power4.inOut" }
          )
          // 2. AFTER curtain opens, content enters with smooth GSAP animations
          .to(
            catTitleRef.current,
            { y: 0, opacity: 1, duration: 0.55, ease: "power3.out" }
          )
          .to(
            ".cat-card",
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.6,
              stagger: 0.08,
              ease: "power3.out",
            },
            "-=0.25"
          );
      } else {
        const tl = gsap.timeline();
        tl.to([catTitleRef.current, ".cat-card"], {
          y: -15,
          opacity: 0,
          duration: 0.2,
          ease: "power2.in",
        }).to(catOverlayRef.current, {
          yPercent: -100,
          duration: 0.6,
          ease: "power4.inOut",
          onComplete: () => {
            gsap.set(catOverlayRef.current, { autoAlpha: 0 });
          },
        });
      }
    },
    { dependencies: [catIsOpen], scope: containerRef }
  );

  const toggleMenu = () => {
    if (!isOpen && catIsOpen) {
      setCatIsOpen(false);
    }
    setIsOpen((prev) => !prev);
  };

  const toggleCat = () => {
    if (!catIsOpen && isOpen) {
      setIsOpen(false);
    }
    setCatIsOpen((prev) => !prev);
  };

  return (
    <div ref={containerRef}>
      {/* MENU FULL SCREEN OVERLAY */}
      <div
        ref={menuOverlayRef}
        className="full-scr-nav fixed inset-0 z-50 h-[100vh] w-full bg-[#F2E8C6] text-[#222] py-[100px] px-[20px] lg:px-[150px] overflow-hidden"
      >
        <h1
          ref={menuTitleRef}
          className="h1 text-center lg:text-left text-[19vw] lg:text-[11vw] font-play leading-none"
        >
          MENU
        </h1>
        <div className="menus mt-[15%] lg:mt-auto flex flex-col justify-center items-center gap-[2vw] lg:gap-[1.2vw]">
          {[
            "HOME",
            "ABOUT",
            "NEW COLLECTION",
            "DESIGN YOURS",
            "CONTACT",
          ].map((item, index) => (
            <h3
              key={index}
              className="menu-item text-[6vw] lg:text-[3vw] cursor-pointer font-light hover:tracking-wider transition-[letter-spacing] duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </h3>
          ))}
        </div>
        <div className="connect absolute flex lg:flex-col gap-[4vw] lg:gap-[1.5vw] right-[35%] lg:right-[10%] top-[80%] lg:top-[50%]">
          <div className="menu-social-wrap flex items-center justify-center">
            <img
              src="/insta.png"
              alt="Instagram"
              className="h-[8vw] lg:h-[3vw] cursor-pointer hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="menu-social-wrap flex items-center justify-center">
            <img
              src="/wp.png"
              alt="WhatsApp"
              className="h-[8vw] lg:h-[3vw] cursor-pointer hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="menu-social-wrap flex items-center justify-center">
            <img
              src="/fb.png"
              alt="Facebook"
              className="h-[8vw] lg:h-[3vw] cursor-pointer hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* CATEGORY FULL SCREEN OVERLAY */}
      <div
        ref={catOverlayRef}
        className="full-scr-nav fixed inset-0 z-50 h-[100vh] w-full bg-[#F2E8C6] text-[#222] py-[100px] px-[20px] lg:px-[150px] overflow-hidden"
      >
        <h1
          ref={catTitleRef}
          className="h1 text-[12vw] w-full lg:text-[7vw] font-play leading-none text-center"
        >
          Shop By Category
        </h1>
        <div className="menus mt-[15%] lg:mt-[2vw] flex relative h-[85vw] lg:h-[28vw] font-medium">
          <div className="cat-card h-[30vw] w-[30vw] lg:h-[10vw] lg:w-[15vw] top-0 left-[13.5%] lg:left-[18.5%] absolute text-[3.5vw] lg:text-[2vw] flex items-center justify-center object-cover group cursor-pointer overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h1 className="z-50 opacity-1 lg:opacity-0 lg:invisible transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:visible font-play tracking-wide text-white drop-shadow-md">
              Necklaces
            </h1>
            <img
              src="Slider/2.2.avif"
              alt="Necklaces"
              className="overflow-hidden absolute object-cover h-full w-full group-hover:scale-105 group-hover:opacity-75 transition-all duration-500"
            />
          </div>
          <div className="cat-card h-[22vw] w-[35vw] lg:h-[12vw] lg:w-[20vw] left-[48%] lg:left-[40%] top-[2vw] absolute text-[3.5vw] lg:text-[2vw] flex items-center justify-center object-cover group cursor-pointer overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h1 className="z-50 opacity-1 lg:opacity-0 lg:invisible transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:visible font-play tracking-wide text-white drop-shadow-md">
              Rings
            </h1>
            <img
              src="r.avif"
              alt="Rings"
              className="overflow-hidden absolute object-cover h-full w-full group-hover:scale-105 group-hover:opacity-75 transition-all duration-500"
            />
          </div>
          <div className="cat-card h-[30vw] w-[30vw] lg:h-[13vw] lg:w-[25vw] left-[48%] lg:left-[40%] bottom-[33%] lg:bottom-0 absolute text-[3.5vw] lg:text-[2vw] flex items-center justify-center object-cover group cursor-pointer overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h1 className="z-50 opacity-1 lg:opacity-0 lg:invisible transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:visible font-play tracking-wide text-white drop-shadow-md">
              Earrings
            </h1>
            <img
              src="Slider/7.2.avif"
              alt="Earrings"
              className="overflow-hidden absolute object-cover h-full w-full group-hover:scale-105 group-hover:opacity-75 transition-all duration-500"
            />
          </div>
          <div className="cat-card h-[24vw] w-[35vw] lg:h-[14vw] lg:w-[20vw] top-[33vw] left-[8%] lg:top-[11vw] lg:left-[12%] absolute text-[3.5vw] lg:text-[2vw] flex items-center justify-center object-cover group cursor-pointer overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h1 className="z-50 opacity-1 lg:opacity-0 lg:invisible transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:visible font-play tracking-wide text-white drop-shadow-md">
              Bracelets
            </h1>
            <img
              src="Slider/19.2.avif"
              alt="Bracelets"
              className="overflow-hidden absolute object-cover h-full w-full group-hover:scale-105 group-hover:opacity-75 transition-all duration-500"
            />
          </div>
          <div className="cat-card h-[18vw] w-[28vw] lg:h-[9vw] lg:w-[14vw] left-[32%] top-[70%] lg:left-[68%] lg:top-[5vw] absolute text-[3.5vw] lg:text-[2vw] flex flex-col items-center justify-center object-cover group cursor-pointer overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h1 className="z-50 opacity-1 lg:opacity-0 lg:invisible transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:visible font-play tracking-wide text-white drop-shadow-md">
              View All
            </h1>
            <img
              src="Slider/25.2.avif"
              alt="View All"
              className="overflow-hidden absolute object-cover h-full w-full group-hover:scale-105 group-hover:opacity-75 transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* TOP NAVIGATION BAR */}
      <div
        className={`nav ${
          isOpen || catIsOpen ? "fixed text-[#222]" : "absolute text-[#333]"
        } top-0 left-0 z-[60] h-[100px] w-full flex items-center justify-between px-[30px] lg:px-[50px] transition-colors duration-300`}
      >
        <div
          className="flex w-[10vw] h-[4vw] items-center justify-center gap-[0.7vw] relative cursor-pointer"
          onClick={() => {
            setIsOpen(false);
            setCatIsOpen(false);
          }}
        >
          <img
            src="/ro.gif"
            alt=""
            className="absolute left-[-30.5%] lg:left-[6.5%] h-[1.5vw] lg:h-[1vw] top-[-80%] lg:top-[-20%]"
          />
          <img src="/Branding.png" alt="" className="h-[250%] lg:h-[110%]" />
          <h2 className="uppercase text-[4vw] lg:text-[2vw] tracking-[1px] font-arch font-extralight">
            JEWEL
          </h2>
        </div>
        <div className="nav-prt2 flex items-center">
          <h3
            className="uppercase text-[4vw] lg:text-[2vw] tracking-[1px] font-arch font-extralight cursor-pointer"
            onClick={toggleCat}
          >
            {catIsOpen ? "CLOSE" : "CATEGORY"}
          </h3>
          <div
            onClick={toggleMenu}
            className="ml-[20px] lg:ml-[50px] cursor-pointer relative w-[30px] h-[30px] flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            <RiMenu5Fill
              size={30}
              className={`absolute cursor-pointer transition-all duration-300 ease-in-out ${
                isOpen
                  ? "opacity-0 rotate-90 scale-50 pointer-events-none"
                  : "opacity-100 rotate-0 scale-100"
              }`}
            />
            <RiCloseLine
              size={30}
              className={`absolute cursor-pointer transition-all duration-300 ease-in-out ${
                isOpen
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 -rotate-90 scale-50 pointer-events-none"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
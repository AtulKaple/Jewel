"use client";
import Page1 from "./_components/Page1";
import Nav from "./_components/Nav";
import Page2 from "./_components/Page2";
import Page3 from "./_components/Page3";
import Page4 from "./_components/Page4";
import Page5 from "./_components/Page5";
import Page6 from "./_components/Page6/Page6";
import { ReactLenis } from "@studio-freight/react-lenis";
import Page8 from "./_components/Page8";
import Page9 from "./_components/Page9";
import Page10 from "./_components/Page10";
import Page11 from "./_components/Page11";
import Page12 from "./_components/Page12";
import Final from "./_components/Final";
import { useEffect, useState } from "react";
import LoadingPage from "./_components/LoadingPage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      ScrollTrigger.refresh();
    }, 7500);
    // Cleanup the timeout on component unmount
    return () => 
      clearTimeout(timer);

  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 5, smoothTouch: true }}>
      {loading ? (
        <div>
          <LoadingPage />
          <div className=" text-[#52322B] bg-[radial-gradient(circle_at_50%_50%,_#fbcbc9,_#f6c5c4,_#f0bfbf,_#ebb9ba,_#e5b3b6,_#e0adb1,_#daa7ac,_#d5a2a8,_#cf9ca3,_#ca969f,_#c4919a,_#bf8b96)] min-h-[100vh] w-full relative z-0 "></div>
        </div>
      ) : (
        <main className=" main relative text-[#52322B] w-full ">
          <Nav />
          <Page1 />
          <Page2 />
          <Page8 />
          <Page4 />
          <Page3 />
          <Page5 />
          <Page6 />
          <Page9 />
          <Page11 />
          <Page10 />
          <Page12 />
          <Final />
        </main>
      )}
    </ReactLenis>
  );
}

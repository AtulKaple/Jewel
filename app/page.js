"use client";
import Page1 from "./_components/Page1";
import Nav from "./_components/Nav";
import Page2 from "./_components/Page2";
import Page3 from "./_components/Page3";
import Page4 from "./_components/Page4";
import Page5 from "./_components/Page5";
import Page6 from "./_components/Page6/Page6";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
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

function LenisManager({ loading }) {
  const lenis = useLenis(() => {
    ScrollTrigger.update();
  });

  useEffect(() => {
    if (!loading && lenis) {
      const refreshAll = () => {
        lenis.resize();
        ScrollTrigger.refresh();
      };

      const t1 = setTimeout(refreshAll, 100);
      const t2 = setTimeout(refreshAll, 500);
      const t3 = setTimeout(refreshAll, 1500);
      const t4 = setTimeout(refreshAll, 3000);

      window.addEventListener("load", refreshAll);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
        window.removeEventListener("load", refreshAll);
      };
    }
  }, [loading, lenis]);

  return null;
}

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Prevent browser restoring scroll position mid-page on reload
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }
  }, []);

  // Timer for initial loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      <LenisManager loading={loading} />
      {loading ? (
        <div>
          <LoadingPage />
          <div className=" text-[#52322B] bg-[radial-gradient(circle_at_50%_50%,_#fbcbc9,_#f6c5c4,_#f0bfbf,_#ebb9ba,_#e5b3b6,_#e0adb1,_#daa7ac,_#d5a2a8,_#cf9ca3,_#ca969f,_#c4919a,_#bf8b96)] min-h-[100vh] w-full relative z-0 "></div>
        </div>
      ) : (
        <main className=" main relative text-[#52322B] w-full  ">
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

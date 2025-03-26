"use client";

import Image from "next/image";
import gsap from "gsap";
import { useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/all";

const Hero = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const direction = useRef(-1);
  let xPercent = 0;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction.current = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  });

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction.current;
  };
  return (
    <div className="relative overflow-hidden">
      <div className="h-screen relative w-full">
        <Image
          fill
          src="/lava/lavabg.png"
          quality={100}
          className=" object-cover"
          alt="Hero bg"
        />
        <div
          data-scroll
          data-scroll-speed={0.1}
          className=" absolute top-[33%] left-[15%] text-primary-foreground text-3xl font-medium opacity-70"
        >
          <svg
            className=" mb-10 scale-[2.2]"
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="#D5CEC7"
            />
          </svg>
          <p>Desarrollo</p>
          <p>y diseño web</p>
        </div>
        <div className="absolute  top-[calc(100vh-350px)]">
          <div ref={slider} className="relative whitespace-nowrap">
            <p
              ref={firstText}
              className="relative m-0 text-primary-foreground text-[230px] font-medium pr-[50px] opacity-70"
            >
              MAGMA STUDIO —
            </p>
            <p
              ref={secondText}
              className="absolute left-full top-0 m-0 text-primary-foreground text-[230px] font-medium pr-[50px] opacity-70"
            >
              MAGMA STUDIO —
            </p>
          </div>
        </div>

        {/* <div className=" absolute left-0 top-[33%]">
          <div className=" bg-[#2B2B2B] rounded-r-full flex gap-6 pl-[4.8rem] items-center pr-4 py-4">
            <p className=" text-2xl text-primary-foreground leading-tight">
              Ubicados en <br /> Guadalajara
            </p>
            <div className=" aspect-square rounded-full bg-primary h-16 flex items-center justify-center">
              <Globe size={32} />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;

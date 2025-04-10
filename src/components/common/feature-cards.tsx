"use client";

import { MotionValue, motion } from "framer-motion";
import { useRef } from "react";
import Image from 'next/image';

interface FeatureCardProps {
  textColor: string;
  title: string;
  description: string;
  descriptionMobile: string;
  src: string;
  color: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  descriptionMobile,
  src,
  color,
  textColor,
}) => {
  const container = useRef<HTMLDivElement>(null);

  return (
    <div ref={container} className="cardContainer">
      <motion.div
        style={{
          backgroundColor: '#333333',
          top: `0px`,
        }}
        className="card w-full overflow-y-clip"
      >
        <div className={`body -pt-5 md:pl-12 md:pt-4 lg:pl-10 text-${textColor}`}>
          <div className="flex flex-col items-start pt-10 w-full md:w-[80%] lg:[70%] 2xl:w-[65%] 3xl:w-[50%] 4xl:w-[75%] justify-center md:-mt-[5rem] pl-5 pr-5 md:pl-20 md:pr-0 pt-10 md:pt-0">
            <h2 className="text-4xl md:text-6xl uppercase tracking-tighter font-semibold font-cabinetGrotesk">
              {title}
            </h2>
            <p
              className={`mt-6 text-xl font-archivo font-normal opacity-80 md:max-w-xl hidden md:block`}
            >
              {description}
            </p>
            <p
              className={`mt-1 text-2xl font-archivo font-normal opacity-80 w-full  md:hidden`}
            >
              {descriptionMobile}
            </p>
          </div>

          <div className="imageContainer mt-8 mb-2 md:mt-8">
            <motion.div className="inner">
              <Image
                className="scale-100 md:scale-75"
                src={`/lava/${src}`}
                alt="Imagen animada"
                width={650}
                height={300}
                style={{ width: "auto", height: "auto" }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeatureCard;

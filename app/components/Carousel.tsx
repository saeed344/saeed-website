"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const images = ["/BMC_BGG.jpg", "/lund_univ_12.jpg", "/umt_img_12.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= images.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full">
      <div className="relative h-[30rem] sm:h-[28rem] md:h-[26rem] overflow-hidden dark:text-black">
        <div className="duration-700 ease-in-out">
          {images.map((imagePath, index) => {
            return (
              <Image
                src={imagePath}
                key={imagePath}
                className={`inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
                fill
                alt={`Slide ${currentSlide + 1}`}
              />
            );
          })}
        </div>

        {/* Above Image */}
        <div className="absolute top-0 flex justify-center items-center flex-col w-full h-full bg-black gap-4 bg-opacity-45 text-white">
          <Image
            src={"/Saeed_pic.png"}
            className="rounded-2xl"
            width={150}
            height={150}
            alt={`Saeed Profile Picture`}
          />

          <h1 className="font-extrabold text-2xl">Saeed Ahmed</h1>
          <div className="w-full flex justify-center">
            <h4>PhD Computer Science and Technology (Bioinformatics)</h4>
          </div>

          <div className="flex gap-4">
            <a href="https://twitter.com/AhmadNawagai" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size={"2x"} />
            </a>
            <a href="https://www.facebook.com/saeed344" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size={"2x"} />
            </a>
            <a href="https://github.com/saeed344" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size={"2x"} />
            </a>
          </div>

          <div className="flex gap-5">
            <a
              href="/Saeed_CV.pdf"
              download
              className="p-3 border-2 border-white rounded-lg hover:bg-slate-950"
            >
              Download CV
            </a>
            <a
              href="mailto:saeed.ahmad075@gmail.com"
              className="p-3 border-2 bg-blue-800 border-white rounded-lg hover:bg-blue-700"
            >
              Contact ME
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
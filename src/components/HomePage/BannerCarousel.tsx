"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Banner1 from "@/assets/Banner1.jpg";
import Banner2 from "@/assets/Banner2.jpg";
import Banner3 from "@/assets/Banner3.jpg";

const slides = [
  {
    image: Banner1,
    title: "Innovate with Us",
    subtitle: "We turn ideas into digital solutions.",
  },
  {
    image: Banner2,
    title: "Build Your Brand",
    subtitle: "Professional digital marketing services.",
  },
  {
    image: Banner3,
    title: "Scale Confidently",
    subtitle: "Modern web development strategies.",
  },
];

export default function BannerCarousel() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged() {},
    created() {
      // optional: auto-play
      setInterval(() => {
        instanceRef.current?.next();
      }, 5000);
    },
  });

  return (
    <div
      ref={sliderRef}
      className="keen-slider h-[700px] overflow-hidden relative"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className="keen-slider__slide relative h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              {slide.title}
            </h2>
            <p className="text-lg sm:text-xl mb-6">{slide.subtitle}</p>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap justify-center">
              <button className="cursor-pointer px-6 py-2 rounded-full bg-green-600 hover:bg-green-700 transition text-white font-semibold shadow-md shadow-green-500/20">
                Learn More
              </button>
              <button className="cursor-pointer px-6 py-2 rounded-full border border-white hover:bg-white hover:text-black transition font-semibold">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

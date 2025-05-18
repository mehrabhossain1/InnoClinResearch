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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    slideChanged(slider) {},
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
      className="keen-slider h-[600px] overflow-hidden relative"
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
            <p className="text-lg sm:text-xl">{slide.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

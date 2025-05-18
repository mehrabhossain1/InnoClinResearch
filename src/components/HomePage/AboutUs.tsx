"use client";

import { useEffect, useState } from "react";
import AboutUsImage from "@/assets/AboutUs.jpg";
export default function AboutUs() {
  const [clients, setClients] = useState(0);
  const [products, setProducts] = useState(0);
  const [years, setYears] = useState(0);

  useEffect(() => {
    const animate = (
      setter: React.Dispatch<React.SetStateAction<number>>,
      target: number
    ) => {
      let count = 0;
      const step = Math.ceil(target / 60);
      const interval = setInterval(() => {
        count += step;
        if (count >= target) {
          setter(target);
          clearInterval(interval);
        } else {
          setter(count);
        }
      }, 20);
    };

    animate(setClients, 5000);
    animate(setProducts, 150);
    animate(setYears, 10);
  }, []);

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 space-y-20">
      {/* Intro */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
        <p className="mt-4 text-lg text-gray-600">
          Committed to quality healthcare — delivering trusted pharmaceutical
          solutions across the nation.
        </p>
      </div>

      {/* Who We Are */}
      <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
        <div className="space-y-5 text-gray-700">
          <h3 className="text-2xl font-semibold text-gray-900">Who We Are</h3>
          <p>
            At InnoClinresearch, we specialize in providing high-quality,
            affordable, and accessible pharmaceutical products. With over a
            decade of experience, our mission is to improve community health
            through innovation and care.
          </p>
          <p>
            We supply pharmacies, hospitals, and healthcare providers with
            trusted medications, supplements, and wellness products manufactured
            under strict quality control.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg h-80">
          <img
            src={AboutUsImage}
            alt="Pharmaceutical production"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Mission / Vision */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto text-gray-700">
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h4 className="text-xl font-semibold text-green-600 mb-2">
            Our Mission
          </h4>
          <p>
            To enhance lives by offering safe, effective, and affordable
            medications through innovation, reliability, and service excellence.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h4 className="text-xl font-semibold text-green-600 mb-2">
            Our Vision
          </h4>
          <p>
            To become a trusted leader in the pharmaceutical industry — known
            for quality, integrity, and positive impact on public health.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-10 text-gray-900">
          Meet Our Team
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Dr. Shakil Ahmed",
              role: "Managing Director",
              img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
            },
            {
              name: "Dr. Lamiya Khatun",
              role: "Head of R&D",
              img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
            },
            {
              name: "Md. Rafiq Islam",
              role: "Production Manager",
              img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
            },
          ].map((member) => (
            <div
              key={member.name}
              className="text-center bg-white rounded-lg shadow p-4"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h4>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-green-50 py-12 mt-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 text-center gap-8">
          <div>
            <h4 className="text-4xl font-bold text-green-600">{clients}+</h4>
            <p className="mt-2 text-sm text-gray-600">Satisfied Clients</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-green-600">{products}+</h4>
            <p className="mt-2 text-sm text-gray-600">Pharma Products</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-green-600">{years}+</h4>
            <p className="mt-2 text-sm text-gray-600">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}

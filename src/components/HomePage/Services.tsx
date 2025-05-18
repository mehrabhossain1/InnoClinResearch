"use client";

import {
  FaCapsules,
  FaTruckMoving,
  FaMicroscope,
  FaUsers,
} from "react-icons/fa";
import { MdOutlineApproval } from "react-icons/md";
import { BiPackage } from "react-icons/bi";

export default function Services() {
  const services = [
    {
      title: "Pharmaceutical Manufacturing",
      description:
        "High-quality production of tablets, capsules, syrups, and more in GMP-certified facilities.",
      icon: <FaCapsules className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Distribution & Supply Chain",
      description:
        "Nationwide distribution network ensuring timely delivery to pharmacies and healthcare centers.",
      icon: <FaTruckMoving className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Regulatory Affairs",
      description:
        "Expert support in drug registration, licensing, and compliance with national drug authorities.",
      icon: <MdOutlineApproval className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Third-Party Manufacturing",
      description:
        "Reliable contract manufacturing services for pharma startups and established brands.",
      icon: <BiPackage className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Research & Development",
      description:
        "Innovative formulations and continuous product improvement driven by R&D expertise.",
      icon: <FaMicroscope className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Healthcare Support",
      description:
        "Responsive customer care and dedicated medical representatives to support client needs.",
      icon: <FaUsers className="h-8 w-8 text-green-600" />,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Our Services</h2>
        <p className="mt-4 text-lg text-emerald-200">
          Empowering better health with quality-driven pharmaceutical solutions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-emerald-400/30 transition duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-white">
              {service.title}
            </h3>
            <p className="mt-2 text-emerald-100 text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

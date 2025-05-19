"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-colors duration-300",
        isScrolled ? "bg-white shadow-md text-black" : "text-white"
      )}
    >
      <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-green-600">
          InnoClinresearch
        </a>

        {/* Navigation */}
        <nav className="flex items-center space-x-6 text-sm font-medium ">
          <a href="/" className="hover:text-green-600 transition">
            Home
          </a>

          {/* About Us with dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Button
              variant="ghost"
              className="px-0 hover:text-green-600 hover:bg-transparent hover:cursor-pointer"
            >
              About Us
            </Button>
            {isHovered && (
              <div className="text-xs font-normal absolute top-full left-0 bg-white text-black border rounded shadow-md w-40 z-50">
                <a
                  href="/our-mission"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Our Mission
                </a>
                <a href="/team" className="block px-4 py-2 hover:bg-gray-100">
                  Team
                </a>
              </div>
            )}
          </div>

          {/* Services with multi-level dropdown */}
          <div className="relative group">
            <Button
              variant="ghost"
              className="px-0 hover:text-green-600 hover:bg-transparent hover:cursor-pointer"
            >
              Services
            </Button>
            <div className="text-xs font-normal absolute right-0 top-full mt-2 bg-white text-black border rounded shadow-md z-50 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 w-42">
              {/* Early Phase Clinical Trial Services */}
              <div className="relative group/item">
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Early Phase Clinical Trial Services
                </div>
              </div>

              {/* Phase 1,2,3 To 4 Clinical Trials */}
              <div className="relative group/item">
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center">
                  Phase 1,2,3 To 4 Clinical Trials
                  <FiArrowRight className="ml-2 inline-block" />
                </div>
                <div className="absolute left-full top-0 mt-0 bg-white border rounded shadow-md opacity-0 group-hover/item:opacity-100 group-hover/item:visible invisible transition-all duration-200 w-48 z-50">
                  <a
                    href="/services/seo"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Project Management
                  </a>
                  <a
                    href="/services/smm"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Site Feasibility And Site Selection
                  </a>
                  <a
                    href="/services/smm"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Regulatory Affairs
                  </a>
                  <a
                    href="/services/smm"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Clinical Operations
                  </a>
                  <a
                    href="/services/smm"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Site Management
                  </a>
                  <a
                    href="/services/smm"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Vendor Management
                  </a>
                  <a
                    href="/services/smm"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Patient Recruitment & Retention
                  </a>
                </div>
              </div>

              <div className="relative group/item">
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Medical Writing
                </div>
              </div>

              <div className="relative group/item">
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Clinical Data Management & Medical Coding
                </div>
              </div>

              <div className="relative group/item">
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Biostatistics Services
                </div>
              </div>

              <div className="relative group/item">
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Medical Monitoring & Clinical Safety Services
                </div>
              </div>

              <div className="relative group/item">
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Trial Master File Management
                </div>
              </div>
            </div>
          </div>

          <a href="/portfolio" className="hover:text-green-600 transition">
            Our Portfolio
          </a>
          <a href="/contact" className="hover:text-green-600 transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

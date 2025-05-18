"use client";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            InnoClinresearch
          </h2>
          <p className="text-sm text-gray-400">
            InnoClinresearch is dedicated to producing high-quality, affordable
            healthcare products that improve lives.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Our Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-500" />
              123 Health Street, Dhaka, Bangladesh
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-green-500" />
              +880 1234-567890
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-green-500" />
              info@InnoClinresearch.com
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 bg-white/10 hover:bg-green-600 rounded-full transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 bg-white/10 hover:bg-green-600 rounded-full transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="p-2 bg-white/10 hover:bg-green-600 rounded-full transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-500 border-t border-gray-800 pt-6">
        &copy; {new Date().getFullYear()} InnoClinresearch. All rights reserved.
      </div>
    </footer>
  );
}

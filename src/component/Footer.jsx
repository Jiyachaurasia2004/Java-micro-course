"use client";

import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-20 pb-8">

      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-12">

        {/* CONTACT */}
        <div>
          <h2 className="text-blue-700 font-bold text-xl mb-6">CONTACT</h2>

          <div className="space-y-4 text-base leading-relaxed">

            <p className="flex items-start gap-4">
              <FaPhoneAlt className="text-blue-600 mt-1 text-lg" />
              9752740090, 7471112020
            </p>

            <p className="flex items-start gap-4">
              <FaEnvelope className="text-blue-600 mt-1 text-lg" />
              beangate.official@gmail.com
            </p>

            <p className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-blue-600 mt-1 text-lg" />
              Flat No. A-4/501, Kokta Transport Nagar,
              Bhopal (M.P.) -- 462022
            </p>

            <p className="flex items-start gap-4">
              <FaGlobe className="text-blue-600 mt-1 text-lg" />
              <a
                href="https://beangates.com"
                target="_blank"
                className="hover:underline"
              >
                https://beangates.com
              </a>
            </p>

          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h2 className="text-blue-700 font-bold text-xl mb-6">
            QUICK LINKS
          </h2>

          <ul className="space-y-4 text-base">
            <li className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
              <span className="text-blue-600 text-lg">•</span> Home
            </li>
            <li className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
              <span className="text-blue-600 text-lg">•</span> Courses
            </li>
          </ul>
        </div>

        {/* ABOUT */}
        <div>
          <h2 className="text-blue-700 font-bold text-xl mb-6 underline">
            BeanGate IT Solutions Pvt. Ltd.
          </h2>

          <p className="text-base leading-relaxed">
            BeanGate IT Solutions Pvt. Ltd. is a technology-driven company
            delivering innovative software solutions and professional IT
            services worldwide. We also provide industry-oriented IT training
            with hands-on project experience, empowering students and
            professionals with real-world skills for successful careers.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-6">
            <div className="w-15 h-15 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 cursor-pointer hover:scale-110 transition text-lg">
              <FaFacebookF />
            </div>
            <div className="w-15 h-15 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 cursor-pointer hover:scale-110 transition text-lg">
              <FaLinkedinIn />
            </div>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mt-12 pt-6 text-center text-base">

        <p>© 2026 BeanGate IT Solutions Pvt. Ltd. All rights reserved.</p>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          <span className="w-2.5 h-2.5 bg-blue-400 rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-blue-300 rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-blue-200 rounded-full"></span>
        </div>

      </div>

    </footer>
  );
}

export default Footer;
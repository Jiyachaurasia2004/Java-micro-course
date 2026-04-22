"use client";

import React from "react";
import { motion } from "framer-motion";

import hcl from "../assets/HCL.png";
import google from "../assets/google.png";
import intell from "../assets/Intellect-text-logo.png";
import deloitte from "../assets/png-clipart-deloitte-logo-brand-management-consulting-product-lg-logo-text-logo.png";
import wns from "../assets/wns-global-services9845.jpg";
import tata from "../assets/tata.jfif";
import mixlife from "../assets/mixlife.png";
import reebook from "../assets/reebook.jpg";

function Companies() {
  const companies = [
    { name: "HCL", logo: hcl },
    { name: "Intellect", logo: intell },
    { name: "Google", logo: google },
    { name: "WNS", logo: wns },
    { name: "Max Life Insurance", logo: mixlife },
    { name: "Reebok", logo: reebook },
    { name: "Tata", logo: tata },
    { name: "Deloitte", logo: deloitte },
  ];

  const loopData = [...companies, ...companies];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 text-center overflow-hidden" id="placement">

      {/* Badge */}
      <div className="mb-6">
        <span className="px-4 py-2 rounded-full text-sm font-semibold text-green-700 bg-green-100">
          🏢 OUR PLACEMENT PARTNERS
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
        Companies That Hire Our{" "}
        <span className="text-green-600">Graduates</span>
      </h2>

      {/* Box */}
      <div className="mt-12 max-w-6xl mx-auto px-4">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-8 relative overflow-hidden">

          {/* Gradient fade sides */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Scroll */}
          <motion.div
            className="flex gap-12 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 22,
              ease: "linear",
            }}
          >
            {loopData.map((company, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.12 }}
                className="flex flex-col items-center min-w-[130px]"
              >
                {/* Logo Circle */}
                <div className="w-20 h-20 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center p-3 transition">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Name */}
                <p className="mt-3 text-sm text-gray-600 font-medium">
                  {company.name}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

    </section>
  );
}

export default Companies;
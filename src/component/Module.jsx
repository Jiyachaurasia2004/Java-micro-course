"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaProjectDiagram,
  FaClipboardCheck,
  FaBriefcase,
} from "react-icons/fa";

function Module() {
  const stats = [
    { value: "15", label: "Weeks Program", color: "text-blue-600" },
    { value: "50+", label: "Coding Exercises", color: "text-cyan-600" },
    { value: "24/7", label: "Support", color: "text-green-600" },
    { value: "100%", label: "Practical Learning", color: "text-purple-600" },
  ];

  const features = [
    {
      title: "Live Q&A Sessions",
      desc: "Weekly live sessions with industry experts",
      icon: <FaLaptopCode />,
      color: "border-purple-300 bg-purple-50 text-purple-600",
    },
    {
      title: "5 Real Projects",
      desc: "Hands-on projects for your portfolio",
      icon: <FaProjectDiagram />,
      color: "border-orange-300 bg-orange-50 text-orange-600",
    },
    {
      title: "Project Reviews",
      desc: "Detailed feedback on your projects",
      icon: <FaClipboardCheck />,
      color: "border-teal-300 bg-teal-50 text-teal-600",
    },
    {
      title: "100% placement support",
      desc: "Job referrals and interview preparation",
      icon: <FaBriefcase />,
      color: "border-red-300 bg-red-50 text-red-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-100 text-center" id="modules">
      
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mb-6"
      >
        <span className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow">
          🚀 COURSE HIGHLIGHTS
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-gray-900"
      >
        Why Choose{" "}
        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
          Our Course
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-4 text-gray-600 max-w-2xl mx-auto"
      >
        Everything you need to succeed in your full stack development journey
      </motion.p>

      {/* 🔥 Feature Cards */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`p-6 rounded-2xl border shadow-sm hover:shadow-lg text-left ${item.color}`}
          >
            <div className="text-3xl mb-4">{item.icon}</div>

            <h3 className="font-bold text-lg text-gray-800">
              {item.title}
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 🔥 Stats Box (Cards ke baad) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 mt-16"
      >
        <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
            >
              <h2 className={`text-3xl font-extrabold ${item.color}`}>
                {item.value}
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}

export default Module;
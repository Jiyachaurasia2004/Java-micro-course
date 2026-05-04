"use client";

import React from "react";
import { FaUtensils, FaSchool, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Supply Chain Analytics System",
      subtitle: "AI-Powered Supply Chain Optimization Platform",
      color: "from-orange-500 to-red-500",
      icon: <FaUtensils />,
      points: [
        "Web-based data analytics platform for supply chain management",
        "Analyzes inventory, orders, shipments, and supplier performance",
        "Demand forecasting using Machine Learning algorithms",
        "Real-time monitoring of stock availability and delivery status",
        "Predicts delays and identifies supply chain bottlenecks",
        "Interactive dashboards for sales and operational insights",
        "Automated reporting for inventory and logistics performance",
        "Helps reduce operational cost and improve delivery efficiency"
      ],
    },
    {
      title: "Coupon Acceptance Prediction System",
      subtitle: "Machine Learning Based Customer Behavior Analysis",
      color: "from-blue-500 to-indigo-500",
      icon: <FaSchool />,
      points: [
        "Data-driven application to predict coupon acceptance behavior",
        "Customer segmentation based on demographic and behavioral data",
        "Uses Machine Learning models for classification and prediction",
        "Analyzes factors like income, age, coupon type, and visit frequency",
        "Identifies customer purchasing patterns and preferences",
        "Improves marketing campaign targeting and conversion rates",
        "Visualization dashboards for customer analytics and trends",
        "Helps businesses increase coupon engagement and sales performance",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">

      {/* ===== HEADING ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="px-5 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold shadow-sm">
          🚀 HANDS-ON PROJECTS
        </span>

        <h1 className="text-4xl md:text-5xl font-extrabold mt-6 text-gray-900">
          Build Real-World{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Applications
          </span>
        </h1>
      </motion.div>

      {/* ===== PROJECT CARDS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-4">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -8 }}
            className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
          >

            {/* Top Gradient */}
            <div className={`relative p-6 text-white bg-gradient-to-r ${project.color} flex items-center gap-4`}>

              <div className="bg-white/20 backdrop-blur-md p-3 rounded-xl text-xl group-hover:scale-110 transition">
                {project.icon}
              </div>

              <div>
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="text-sm opacity-90">{project.subtitle}</p>
              </div>

              {/* Glow */}
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/20 rounded-full blur-2xl opacity-30"></div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-semibold mb-4 text-gray-800">
                Key Features:
              </h3>

              <ul className="space-y-3 text-gray-600 text-sm">
                {project.points.map((point, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs shadow">
                      ✓
                    </span>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>

          </motion.div>
        ))}

      </div>

      {/* ===== READY SECTION ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 mt-20"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-10 flex flex-col md:flex-row items-center justify-between shadow-xl">

          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Ready to Build Real Projects?
            </h2>
            <p className="mt-2 text-white/90">
              Apply your skills in hands-on projects with expert guidance
            </p>
          </div>

          <div className="flex gap-4 mt-5 md:mt-0">
            <button className="px-6 py-2 rounded-full bg-white/20 backdrop-blur border border-white/30 hover:scale-105 transition">
              5 Major Projects
            </button>
            <button className="px-6 py-2 rounded-full bg-white/20 backdrop-blur border border-white/30 hover:scale-105 transition">
              Portfolio Ready
            </button>
          </div>

          <div className="absolute -right-16 -top-16 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </motion.div>

      {/* ===== ACHIEVEMENTS ===== */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  className="max-w-6xl mx-auto px-4 mt-12"
>
  {/* 🔵 BIG BOX */}
  <div className="bg-blue-50 border border-blue-200 rounded-3xl shadow-lg p-10">

    {/* Title */}
    <h3 className="text-2xl font-bold text-blue-600 text-center mb-10">
      What You'll Achieve
    </h3>

    {/* Items inside big box */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      {[
       "Work with real-world data for analysis",
"Build machine learning models",
"Perform data cleaning and preprocessing",
"Create dashboards and visualizations",
      ].map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -6 }}
          className="group relative flex items-center gap-3 
          bg-white border border-blue-200 rounded-xl px-4 py-4 
          shadow-sm hover:shadow-md overflow-hidden transition-all duration-300"
        >

          {/* 🔥 Bottom → Top Fill */}
          <div className="absolute bottom-0 left-0 w-full h-0 bg-blue-100 
            group-hover:h-full transition-all duration-300 z-0"></div>

          {/* Icon */}
          <FaCheckCircle className="text-blue-600 text-3xl relative z-10" />

          {/* Text */}
          <p className="text-sm text-gray-700 relative z-10">
            {item}
          </p>

        </motion.div>
      ))}

    </div>

  </div>
</motion.div>

    </section>
  );
}

export default Projects;
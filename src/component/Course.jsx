"use client";

import React, { useState } from "react";
import { FaJava } from "react-icons/fa";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Core Java",
    desc: "Learn Java fundamentals including OOP concepts, loops, and collections.",
    img: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
  },
  {
    title: "Core Java + JDBC + MySQL",
    desc: "Java with database connectivity and MySQL integration.",
    img: "https://cdn-icons-png.flaticon.com/512/919/919836.png",
  },
  {
    title: "Core Java + Advanced Java",
    desc: "Servlets, JSP, and backend integration.",
    img: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
  },
  {
    title: "Spring Boot + Hibernate",
    desc: "Modern backend development using Java frameworks.",
    img: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
  },
];

function Course() {
  const [active, setActive] = useState("java");

  // ✅ NEW STATES (for props-like behavior)
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-100 text-center"    id="course">

      {/* Badge */}
      <div className="mb-6">
        <span className="px-6 py-2 rounded-full text-white text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 shadow-md">
          {"</>"} JAVA MICRO COURSES {"</>"}
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
          Master
        </span>{" "}
        Java Development
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
        Learn Java from basics to advanced with real-world projects and industry-level backend skills
      </p>

      {/* Button */}
      <div className="mt-10 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActive("java")}
          className={`flex items-center gap-2 px-8 py-3 rounded-full font-medium shadow-lg transition ${
            active === "java"
              ? "text-white bg-gradient-to-r from-blue-600 to-cyan-500"
              : "bg-white text-gray-600 border"
          }`}
        >
          <FaJava />
          Java Courses
        </motion.button>
      </div>

      {/* Cards */}
      <motion.div
        className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {courses.map((course, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -8 }}
            className="relative group bg-white border border-gray-100 rounded-3xl p-7 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition"></div>

            {/* Image */}
            <div className="relative z-10 flex justify-center mb-5">
              <div className="w-20 h-20 flex items-center justify-center rounded-2xl 
                bg-gradient-to-br from-blue-50 to-cyan-50 
                border border-blue-100 
                shadow-sm group-hover:shadow-md transition-all duration-300">

                <motion.img
                  src={course.img}
                  alt="course"
                  className="w-10 h-10 object-contain"
                  whileHover={{ scale: 1.15 }}
                />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              {course.title}
            </h2>

            {/* Desc */}
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              {course.desc}
            </p>

            {/* Buttons */}
            <div className="flex justify-between items-center">
              {/* View Details */}
              <button
                onClick={() => {
                  setSelectedCourse(course);
                  setShowDetails(true);
                }}
                className="text-sm text-gray-600 hover:text-blue-600 transition"
              >
                View Details →
              </button>

              {/* Enroll */}
              <button
                onClick={() => {
                  setSelectedCourse(course);
                  setShowForm(true);
                }}
                className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md hover:scale-105 transition"
              >
                Enroll
              </button>
            </div>

            {/* Bottom Line */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 group-hover:w-full transition-all duration-500"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* ================= DETAILS MODAL ================= */}
      {showDetails && selectedCourse && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-lg">
            <h2 className="text-xl font-bold mb-2">
              {selectedCourse.title}
            </h2>
            <p className="text-gray-600 text-sm">
              {selectedCourse.desc}
            </p>

            <button
              onClick={() => setShowDetails(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ================= ENROLL FORM ================= */}
      {showForm && selectedCourse && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-lg">
            <h2 className="text-lg font-bold mb-4">
              Enroll in {selectedCourse.title}
            </h2>

            <form className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border p-2 rounded"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full border p-2 rounded"
              />

              <button className="w-full bg-blue-600 text-white py-2 rounded">
                Submit
              </button>
            </form>

            <button
              onClick={() => setShowForm(false)}
              className="mt-3 text-red-500"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Course;
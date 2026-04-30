"use client";
import { FaQrcode } from "react-icons/fa";
import React, { useState } from "react";
import { FaJava } from "react-icons/fa";
import { motion } from "framer-motion";
import java from "../assets/java-image.jpeg";
import { FaMoneyBill } from "react-icons/fa";
import qr from "../assets/qr-beangate.png";
import { FaShieldAlt } from "react-icons/fa";
const courses = [
  {
    title: "Core Java",
    desc: "Learn Java fundamentals including OOP concepts, loops, and collections.",
    img: java,
    topics: [
      "Basics of Java (syntax, variables, data types)",
      "Operators & Control Statements (if-else, switch, loops)",
      "OOP concepts → Encapsulation, Inheritance, Polymorphism, Abstraction",
      "Classes & Objects",
      "Constructors & Method Overloading",
      "Exception Handling (try-catch, finally, throw, throws)",
      "Collections Framework (List, Set, Map)",
      "Multithreading & Synchronization",
      "String handling (String, StringBuilder, StringBuffer)",
      "File Handling (FileReader, FileWriter)",
      "Wrapper Classes & Autoboxing",
      "JVM, JRE, JDK architecture",
      "Garbage Collection",
      "Java Memory Management (Heap, Stack)",
    ],
  },

  {
    title: "Core Java + JDBC + MySQL",
    desc: "Java with database connectivity and MySQL integration.",
    img: java,
    topics: [
      "JDBC Architecture",
      "Load Driver & Establish Connection",
      "Statement vs PreparedStatement vs CallableStatement",
      "Execute Query & Update",
      "CRUD operations (Create, Read, Update, Delete)",
      "PreparedStatement (SQL injection prevention)",
      "ResultSet for data fetching",
      "Batch Processing in JDBC",
      "Transaction Management (commit, rollback)",
      "MySQL database integration",
      "Joins (Inner, Left, Right)",
      "Indexes & Performance basics",
      "Connection Pooling",
      "DAO Design Pattern",
    ],
  },

  {
    title: "Core Java + JDBC + Advanced Java",
    desc: "Servlets, JSP, and backend integration.",
    img: java,
    topics: [
      "Servlet lifecycle (init, service, destroy)",
      "JSP (Java Server Pages)",
      "JSP directives, scripting elements",
      "Session Management (Cookies, HttpSession, URL rewriting)",
      "Filters & Listeners",
      "MVC architecture",
      "Form handling & validation",
      "Web application structure (WAR)",
      "Deployment on server (Apache Tomcat)",
      "Servlet API & HTTP methods (GET, POST)",
      "JSTL (JSP Standard Tag Library)",
      "Error Handling in Web Apps",
    ],
  },

  {
    title: "Spring Boot + Hibernate",
    desc: "Modern backend development using Java frameworks.",
    img: java,
    topics: [
      "Spring Boot fundamentals",
      "Project setup using Spring Initializr",
      "Hibernate ORM (Object Relational Mapping)",
      "Annotations-based configuration",
      "REST API development",
      "Dependency Injection (IoC)",
      "Spring Data JPA",
      "Entity mapping with database",
      "CRUD APIs (Controller, Service, Repository)",
      "Application.properties & YAML config",
      "Validation (Hibernate Validator)",
      "Exception Handling (Global Exception)",
      "Pagination & Sorting",
      "JWT Authentication & Security basics",
      "Spring Security (authentication & authorization)",
      "Microservices basics",
    ],
  },
];

const coursePlans = {
  "Core Java": [
    {
      title: "Registration Only",
      price: "₹2,000",
      total: "₹2,360",
      icon: <FaShieldAlt />,
      btn: "Register Now",
      color: "from-pink-500 to-purple-500",
      features: [
        "Course Registration",
        "Learning Material Access",
        "Community Access",
        "Basic Resources",
        "30 Days Access",
      ],
    },
    {
      title: "One-Time Payment",
      price: "₹15,000",
      total: "₹17,700",
      icon: <FaMoneyBill />,
      highlight: true,
      btn: "Buy Now",
      features: [
        "Complete Course Access",
        "All Projects & Assignments",
        "Live Sessions",
        "Certificate",
        "Lifetime Updates",
      ],
    },
  ],

  "Core Java + JDBC + MySQL": [
    {
      title: "Registration Only",
      price: "₹2,000",
      total: "₹2,360",
      icon: <FaShieldAlt />,
      btn: "Register Now",
      color: "from-pink-500 to-purple-500",
      features: [
        "Course Registration",
        "Learning Material Access",
        "Community Access",
        "Basic Resources",
        "30 Days Access",
      ],
    },
    {
      title: "One-Time Payment",
      price: "₹15,000",
      total: "₹17,700",
      icon: <FaMoneyBill />,
      highlight: true,
      btn: "Buy Now",
      features: [
        "Complete Course Access",
        "All Projects & Assignments",
        "Live Sessions",
        "Certificate",
        "Lifetime Updates",
      ],
    },
  ],

  "Core Java + JDBC + Advanced Java": [
    {
      title: "Registration Only",
      price: "₹2,000",
      total: "₹2,360",
      icon: <FaShieldAlt />,
      btn: "Register Now",
      color: "from-pink-500 to-purple-500",
      features: [
        "Course Registration",
        "Learning Material Access",
        "Community Access",
        "Basic Resources",
        "30 Days Access",
      ],
    },
    {
      title: "One-Time Payment",
      price: "₹15,000",
      total: "₹17,700",
      icon: <FaMoneyBill />,
      highlight: true,
      btn: "Buy Now",
      features: [
        "Complete Course Access",
        "All Projects & Assignments",
        "Live Sessions",
        "Certificate",
        "Lifetime Updates",
      ],
    },
  ],

  "Statistics + Machine Learning": [
    {
      title: "Registration Only",
      price: "₹2,000",
      total: "₹2,360",
      icon: <FaShieldAlt />,
      btn: "Register Now",
      color: "from-pink-500 to-purple-500",
      features: [
        "Course Registration",
        "Learning Material Access",
        "Community Access",
        "Basic Resources",
        "30 Days Access",
      ],
    },
    {
      title: "One-Time Payment",
      price: "₹15,000",
      total: "₹17,700",
      icon: <FaMoneyBill />,
      highlight: true,
      btn: "Buy Now",
      features: [
        "Complete Course Access",
        "All Projects & Assignments",
        "Live Sessions",
        "Certificate",
        "Lifetime Updates",
      ],
    },
  ],
};
function Course() {
  const [active, setActive] = useState("java");
  const [showForm, setShowForm] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showQR, setShowQR] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  return (
    <section
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-100 text-center"
      id="course"
    >
      {/* Badge */}
      <div className="mb-4 sm:mb-6 flex justify-center">
        <span
          className="
    px-3 py-1 text-xs 
    sm:px-4 sm:py-2 sm:text-sm 
    md:px-6 md:py-2 md:text-base 
    lg:text-lg
    rounded-full text-white font-semibold 
    bg-gradient-to-r from-blue-600 to-cyan-500 
    shadow-md text-center
  "
        >
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
        Learn Java from basics to advanced with
        real-world projects and industry-level backend skills
      </p>

      {/* Button */}
      <div className="mt-6 sm:mt-10 flex justify-center px-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActive("java")}
          className={`
      flex items-center justify-center gap-2 
      w-full sm:w-auto
      px-4 py-2 text-xs
      sm:px-6 sm:py-2 sm:text-sm
      md:px-8 md:py-3 md:text-base
      lg:text-lg
      rounded-full font-medium shadow-lg transition text-center
      ${
        active === "java"
          ? "text-white bg-gradient-to-r from-blue-600 to-cyan-500"
          : "bg-white text-gray-600 border"
      }
    `}
        >
          <FaJava className="text-sm sm:text-base md:text-lg" />
          <span className="leading-tight">
            Java Courses
          </span>
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

            {/* Title */}
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              {course.title}
            </h2>

            {/* Desc */}
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              {course.desc}
            </p>
            {/* Image */}
            <div
              className="relative w-full h-40 mb-5 rounded-xl overflow-hidden cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setPreviewImage(course.img);
              }}
            >
              <motion.img
                src={course.img}
                alt="course"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
              />
            </div>

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
                Syllabus →
              </button>

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
      {/* ================= IMAGE PREVIEW ================= */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setPreviewImage(null)}
        >
          {/* Image */}
          <img
            src={previewImage}
            alt="preview"
            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Close */}
          <button
            onClick={() => setPreviewImage(null)}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            ✕
          </button>
        </div>
      )}

      {/* ================= DETAILS MODAL ================= */}
      {showDetails && selectedCourse && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-5 sm:p-6 w-full max-w-md md:max-w-lg shadow-lg max-h-[85vh] overflow-y-auto relative">
            {/* ❌ CROSS BUTTON */}
            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            {/* Heading */}
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
              {selectedCourse.title}
            </h2>

            {/* Topics */}
            <ul className="text-gray-700 text-sm sm:text-base space-y-2 list-disc pl-5 text-left">
              {selectedCourse.topics.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {showForm && selectedCourse && (
        <section className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-6xl">
              {/* Header */}
              <div className="relative mb-10 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {selectedCourse.title} Plans
                </h2>

                <button
                  onClick={() => setShowForm(false)}
                  className="absolute right-2 top-0 text-white text-xl sm:text-2xl"
                >
                  ✕
                </button>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8 px-2 sm:px-4">
                {coursePlans[selectedCourse.title]?.length ? (
                  coursePlans[selectedCourse.title].map((plan, i) => (
                    <div
                      key={i}
                      className={`relative w-full rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 backdrop-blur-xl border text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl ${
                        plan.highlight
                          ? "bg-gradient-to-br from-yellow-400/20 to-orange-500/20 border-yellow-400"
                          : "bg-white/10 border-white/20"
                      }`}
                    >
                      {/* Highlight */}
                      {plan.highlight && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-yellow-400 text-black px-3 py-1 rounded-full text-[10px] sm:text-xs">
                          ⭐ MOST POPULAR
                        </div>
                      )}

                      {/* Icon */}
                      {plan.icon && (
                        <div className="text-2xl sm:text-3xl md:text-4xl text-white mb-3 flex justify-center">
                          {plan.icon}
                        </div>
                      )}

                      {/* Title */}
                      <h2 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2">
                        {plan.title}
                      </h2>

                      {/* Price */}
                      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                        {plan.price}
                      </h1>

                      <p className="text-green-400 mb-4 text-xs sm:text-sm">
                        Total: {plan.total}
                      </p>

                      {/* Divider */}
                      <div className="h-[1px] bg-white/20 mb-4"></div>

                      {/* Features */}
                      <ul className="space-y-2 text-xs sm:text-sm text-gray-200">
                        {plan.features.map((f, idx) => (
                          <li key={idx} className="flex justify-center gap-2">
                            <span className="text-green-400">✔</span>
                            <span className="text-center">{f}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Button */}
                      <button
                        onClick={() => {
                          setSelectedPlan(plan);
                          setShowQR(true);
                          // setShow(true);
                        }}
                        className={`mt-5 sm:mt-6 w-full py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base ${
                          plan.highlight
                            ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black"
                            : plan.color
                              ? `bg-gradient-to-r ${plan.color} text-white`
                              : "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                        }`}
                      >
                        {plan.btn}
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-white text-center col-span-full">
                    No plans available
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
      {show && selectedPlan && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gradient-to-br from-[#0b0233] to-[#0f2a44] p-6 md:p-8 rounded-2xl w-[90%] max-w-md text-white relative max-h-[90vh] overflow-y-auto"
          >
            {/* CLOSE */}
            <button
              onClick={() => setShow(false)}
              className="absolute top-3 right-3 text-xl"
            >
              ✕
            </button>

            {/* HEADER */}
            <div className="text-center mb-4">
              <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                ✔
              </div>
              <h2 className="text-xl font-bold">Confirm Your Payment</h2>
            </div>

            {/* PLAN INFO */}
            <div className="bg-white/10 p-4 rounded-xl text-sm mb-4">
              <p className="flex justify-between">
                <span>Plan:</span>
                <span>{selectedPlan.title}</span>
              </p>
              <p className="flex justify-between mt-2">
                <span>Amount Paid:</span>
                <span className="text-green-400 font-bold">
                  {selectedPlan.total}
                </span>
              </p>
            </div>

            {/* FORM */}
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg bg-white/10 outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-white/10 outline-none"
              />

              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 rounded-lg bg-white/10 outline-none"
              />

              <input
                type="text"
                placeholder="Transaction ID"
                className="w-full p-3 rounded-lg bg-white/10 outline-none"
              />

              <input
                type="text"
                placeholder="UPI ID (Optional)"
                className="w-full p-3 rounded-lg bg-white/10 outline-none"
              />

              <button className="w-full py-3 bg-green-500 rounded-lg font-semibold hover:bg-green-600">
                Submit Payment Details
              </button>
            </div>
          </motion.div>
        </div>
      )}
      {/* 🔥 QR MODAL */}
      {showQR && selectedPlan && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-3">
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gradient-to-br from-[#0b0233] to-[#0f2a44] p-4 sm:p-6 rounded-2xl w-full max-w-md text-white relative"
          >
            {/* Close */}
            <button
              onClick={() => setShowQR(false)}
              className="absolute top-3 right-3 text-white text-xl"
            >
              ✕
            </button>

            {/* QR ICON + TITLE */}
            <div className="flex flex-col items-center text-center mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 flex items-center justify-center mb-2">
                <FaQrcode className="text-xl sm:text-2xl text-white" />
              </div>

              <h2 className="font-bold text-base sm:text-lg">
                Scan QR Code to Pay
              </h2>
            </div>

            {/* QR IMAGE */}
            <div className="bg-white w-full max-w-[220px] sm:max-w-[250px] mx-auto rounded-xl flex justify-center">
              <img
                src={qr}
                alt="qr"
                className="w-40 h-40 sm:w-48 sm:h-48 object-contain"
              />
            </div>

            {/* DETAILS */}
            <div className="mt-5 bg-white/10 p-3 sm:p-4 rounded-xl text-xs sm:text-sm">
              <p className="flex justify-between">
                <span>Plan:</span>
                <span className="font-semibold">{selectedPlan.title}</span>
              </p>

              <p className="flex justify-between mt-2">
                <span>Amount:</span>
                <span className="text-green-400 font-bold">
                  {selectedPlan.total}
                </span>
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 mt-5">
              <button
                onClick={() => setShowQR(false)}
                className="w-full py-2 rounded-lg bg-gray-600 hover:bg-gray-700 transition"
              >
                Close
              </button>

              <button
                onClick={() => {
                  setShowQR(false);
                  setShow(true);
                }}
                className="w-full py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition"
              >
                I've Paid
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

export default Course;

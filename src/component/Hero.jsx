import React from "react";
import { FaJava } from "react-icons/fa";
// ✅ Updated tech stack with image paths

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-[#f8faff] pt-32 pb-20 min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-blue-300/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-indigo-300/30 blur-[120px] rounded-full"></div>

      {/* Badge */}
      <div className="mb-6">
        <span className="px-6 py-2 rounded-full text-white text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-500 shadow-md animate-pulse">
          🚀 LIMITED TIME OFFER • ENROLLMENT OPEN
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
      Data Science 
{" "}
        <span className="bg-gradient-to-r from-yellow-400 to-blue-600 bg-clip-text text-transparent">
       & Data Analysis
        </span>
      </h1>
      <h2 className="text-3xl md:text-5xl font-bold text-blue-600 mt-3">
        Micro Courses
      </h2>

      {/* Subtitle */}
      <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed">
       Start small, achieve big — complete your journey to becoming a Data Science & Data Analysis with our short courses.
      </p>

     {/* Stats Section */}
<div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl px-4">
  
  {/* Students */}
  <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 text-center border border-blue-200">
    <div className="text-blue-600 text-3xl mb-2">👥</div>
    <h3 className="text-2xl font-bold text-gray-900">2,500+</h3>
    <p className="text-gray-600 text-sm font-semibold">Students</p>
  </div>

  {/* Rating */}
  <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 text-center border border-blue-200">
    <div className="text-yellow-500 text-3xl mb-2">⭐</div>
    <h3 className="text-2xl font-bold text-gray-900">4.9★</h3>
    <p className="text-gray-600 text-sm font-semibold">Rating</p>
  </div>

  {/* Placement */}
  <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 text-center border border-blue-200">
    <div className="text-green-500 text-3xl mb-2">✳️</div>
    <h3 className="text-2xl font-bold text-gray-900">100%</h3>
    <p className="text-gray-600 text-sm font-semibold">Placement Rate</p>
  </div>

</div>

{/* Bottom Info */}
<div className="mt-10 text-center text-sm text-gray-500">
  <p className="mb-2">Scroll to explore</p>
  <div className="flex justify-center gap-6 text-xs">
    <span className="flex items-center gap-1">
      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
      Project Reviews
    </span>
    <span className="flex items-center gap-1">
      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
      100% placement support
    </span>
    <span className="flex items-center gap-1">
      <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
      1:1 Mentorship
    </span>
  </div>

  {/* Scroll Icon */}
  <div className="mt-4 flex justify-center">
    <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex items-start justify-center p-1">
      <div className="w-1 h-2 bg-blue-400 rounded-full animate-bounce"></div>
    </div>
  </div>
</div>

      {/* Tech Stack Cards with Images */}
    

      {/* Floating Elements */}
      <div className="absolute left-10 top-1/3 text-blue-700 text-6xl animate-bounce">
         <FaJava />
      </div>
      <div className="absolute right-10 top-1/4 text-indigo-400 opacity-30 text-5xl animate-pulse">
        ⚙️
      </div>
    </section>
  );
};

export default Hero;
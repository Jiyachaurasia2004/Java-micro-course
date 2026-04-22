import React, { useState, useEffect } from "react";
import logo from "../assets/logo-bean.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Inline SVG Icons (No library)
  const icons = {
    Home: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 10l9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      </svg>
    ),
    Course: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
      </svg>
    ),
    Modules: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 20V10M18 20V4M6 20v-4"/>
      </svg>
    ),
   
    Placement: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 3H8v4h8V3z"/>
      </svg>
    ),
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Course", id: "course" },
    { name: "Modules", id: "modules" },
   
    { name: "Placement", id: "placement" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 transition-all duration-300 ${
        isScrolled ? "py-3 shadow-sm" : "py-5"
      }`} 
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* 🔥 Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
         <img
  src={logo}
  alt="BeanGate"
  className="h-12 md:h-14 object-contain"
/>
       
        </div>

        {/* 🔥 Center Menu */}
        <div className="hidden md:flex items-center gap-10 ">
          {navLinks.map((item, i) => (
            <a
              key={i}
              href={`#${item.id}`}
              className="flex items-center gap-2 text-gray-700 font-medium hover:text-blue-600  transition"
            >
              <span className="text-blue-500">{icons[item.name]}</span>
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#plans"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-lg font-semibold shadow hover:shadow-md hover:scale-105 transition inline-block text-center"
          >
           Enroll Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 text-2xl"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 gap-4">
          {navLinks.map((item, i) => (
            <a
              key={i}
              href={`#${item.id}`}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 text-gray-700 font-medium hover:text-blue-600"
            >
              <span className="text-blue-500">{icons[item.name]}</span>
              {item.name}
            </a>
          ))}

          <a
            href="#plans"
            onClick={() => setIsMenuOpen(false)}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-2 rounded-lg font-semibold text-center"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
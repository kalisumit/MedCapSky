import React, { useState } from 'react';

// Main App component
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Navbar />
      <div className="p-8 text-center text-gray-700">
        <h1 className="text-3xl font-bold">Welcome to MedGapSky</h1>
        <p className="mt-4 text-lg">Your journey to a better future starts here.</p>
      </div>
    </div>
  );
}

// Navbar component
function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-2">
          {/* SVG for the umbrella/people icon */}
          <svg
            className="w-8 h-8 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18 10c0 4.142-6 9-6 9s-6-4.858-6-9a6 6 0 1112 0z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 12a2 2 0 100-4 2 2 0 000 4z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14h4m-2 4v-4m-7-3v-2a3 3 0 016 0v2m-3 0h.01M17 14v-2a3 3 0 016 0v2m-3 0h.01"
            ></path>
          </svg>
          <span className="text-2xl font-bold text-indigo-700">MedGapSky</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About Us</NavLink>
          <NavLink href="#job-search">Job Search</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-2 px-4">
            <NavLink href="#home" mobile>Home</NavLink>
            <NavLink href="#about" mobile>About Us</NavLink>
            <NavLink href="#job-search" mobile>Job Search</NavLink>
            <NavLink href="#contact" mobile>Contact</NavLink>
            <button className="w-full px-6 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 mt-4">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

// Helper component for navigation links
function NavLink({ href, children, mobile }) {
  const baseClasses = "text-gray-600 hover:text-blue-600 transition duration-300";
  const mobileClasses = "block py-2 text-lg font-medium";
  return (
    <a href={href} className={`${baseClasses} ${mobile ? mobileClasses : ''}`}>
      {children}
    </a>
  );
}

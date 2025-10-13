import React, { useState, useEffect, useRef } from "react";
import '../css/index.css';
import logo from '../assets/logo/logo.png';
// in App.js or main entry file
import '@fortawesome/fontawesome-free/css/all.min.css';
export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Services data
  const services = [
    {
      title: "Web Development",
      features: ["Basic Landing Pages", "Custom Web Applications", "Responsive Design", "SEO Optimized"],
    },
    {
      title: "UI/UX Design",
      features: ["Wireframes & Prototypes", "User Flow Design", "High-Fidelity Mockups", "Brand Consistency"],
    },
    {
      title: "Digital Marketing",
      features: ["SEO", "Social Media", "Content Marketing", "Email Campaigns"],
    },
    {
      title: "Solutions",
      features: ["Bug Fixes", "Website Updates", "Performance Optimization", "24/7 Support"],
},

  ];

  // Projects data
  const projects = [
    { title: "Project 1", description: "Landing Page for Client A" },
    { title: "Project 2", description: "E-commerce Website" },
    { title: "Project 3", description: "Web Application" },
    { title: "Project 4", description: "Portfolio Site" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Brainlink Software" />
            <span className="self-center text-1xl font-outfit font-semibold whitespace-nowrap dark:text-white">
              Brainlink Softwares
            </span>
          </a>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>

          {/* Menu */}
          <div className={`${menuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="font-outfit block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="font-outfit block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
              </li>
              <li>
                <a href="#" className="font-outfit block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center bg-gray-50 dark:bg-gray-900 py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-outfit font-bold text-gray-900 dark:text-white mb-4">
          Welcome to Brainlink Softwares
        </h1>
        <p className="font-outfit text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-8 max-w-xl">
          We create innovative software solutions that help you and your business to grow and succeed.
        </p>
        <div className="flex space-x-4">
          <button className="hover:scale-105 transform transition bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 cursor-pointer">
            Contact Us
          </button>
          <button className="hover:scale-105 transform transition bg-gray-200 text-gray-900 font-semibold py-2 px-6 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 cursor-pointer">
            About Us
          </button>
        </div>
      </div>

      {/* Services Section */}
      <section className="flex flex-col items-center bg-gray-50 dark:bg-gray-900 py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-outfit font-bold text-gray-900 dark:text-white mb-8">
          Our Services
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col hover:scale-105 transform transition items-center bg-slate-900 px-6 py-6 rounded-xl w-60">
              <h2 className="text-lg font-outfit font-bold text-white mb-4">{service.title}</h2>
              <ul className="text-white font-outfit dark:text-gray-300 text-sm md:text-base space-y-2 text-center">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
<section className="flex flex-col items-center bg-gray-50 dark:bg-gray-900 py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-outfit font-bold text-gray-900 dark:text-white mb-8">
          Our Projects
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
    {projects.map((project, index) => (
      <div key={index} className="font-outfit min-w-[250px] flex-shrink-0 bg-slate-900 text-white p-6 rounded-xl hover:scale-105 transform transition cursor-pointer">
        <img src={logo} className=" w-8"></img>
        <h3 className="font-outfit font-bold text-lg mb-2">{project.title}</h3>
        <p className="text-sm">{project.description}</p>
      </div>
    ))}
  </div>
</section>

{/* Footer */}
<footer className="bg-gray-900 text-gray-200 dark:bg-gray-800 mt-12">
  <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
      
      {/* Logo & Description */}
      <div className="flex flex-col space-y-4">
        <img src={logo} alt="Brainlink Softwares" className="w-10" />
        <p className="text-gray-400 max-w-xs font-outfit">
          Brainlink Softwares creates innovative software solutions to help your business grow and succeed.
        </p>
      </div>

      {/* Quick Links */}
      <div className="flex flex-col space-y-2">
        <h3 className="font-semibold text-white mb-2 font-outfit">Quick Links</h3>
        <a href="#" className="hover:text-blue-500 font-outfit transition">Home</a>
        <a href="#" className="hover:text-blue-500 font-outfit transition">Services</a>
        <a href="#" className="hover:text-blue-500 font-outfit transition">Pricing</a>
        <a href="#" className="hover:text-blue-500 font-outfit transition">Contact</a>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col space-y-2">
        <h3 className="font-semibold text-white mb-2 font-outfit">Contact Us</h3>
        <p>Email: <a href="mailto:info@brainlink.com" className="font-outfit hover:text-blue-500 transition">info@brainlink.com</a></p>
        <div className="flex space-x-4 mt-2">
          <a href="#" className="hover:text-blue-500 font-outfit transition"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-blue-500 font-outfit transition"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-blue-500 font-outfit transition"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="hover:text-blue-500 font-outfit transition"><i className="fab fa-instagram"></i></a>
        </div>
      </div>

    </div>

    <div className="border-t font-outfit border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} Brainlink Softwares. All rights reserved.
    </div>
  </div>
</footer>

    </>
  );
}

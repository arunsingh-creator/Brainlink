import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "../css/index.css";
import logo from "../assets/logo/logo.png";

export default function Index() {
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

  const projects = [
    { title: "Project 1", description: "Landing Page for Client A" },
    { title: "Project 2", description: "E-commerce Website" },
    { title: "Project 3", description: "Web Application" },
    { title: "Project 4", description: "Portfolio Site" },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center bg-gray-50 dark:bg-gray-900 py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-outfit font-bold text-gray-900 dark:text-white mb-4">
          Welcome to Brainlink Softwares
        </h1>
        <p className="font-outfit text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-8 max-w-xl">
          We create innovative software solutions that help you and your business grow.
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition">Contact Us</button>
          <button className="bg-gray-200 text-gray-900 font-semibold py-2 px-6 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition">About Us</button>
        </div>
      </div>

      {/* Services Section */}
      <section className="flex flex-col items-center bg-gray-50 dark:bg-gray-900 py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-outfit font-bold text-gray-900 dark:text-white mb-8">Our Services</h1>
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center bg-slate-900 px-6 py-6 rounded-xl w-60 hover:scale-105 transition">
              <h2 className="text-lg font-outfit font-bold text-white mb-4">{service.title}</h2>
              <ul className="text-white text-sm space-y-2 text-center">
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
        <h1 className="text-4xl md:text-5xl font-outfit font-bold text-gray-900 dark:text-white mb-8">Our Projects</h1>
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, index) => (
            <div key={index} className="min-w-[250px] bg-slate-900 text-white p-6 rounded-xl hover:scale-105 transition cursor-pointer">
              <img src={logo} alt="project logo" className="w-8 mb-2" />
              <h3 className="font-outfit font-bold text-lg mb-2">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

import React from "react";
import "../css/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "../common/Header";
import Footer from "../common/Footer";

export default function Pricing() {
  const plans = [
    {
       title: "Sites@999*",
      subtitle: "Get your landing page live today",
      price: "₹999",
      color: "from-blue-900 to-gray-800",
        features: [
        "Single Landing Page Design",
        "Basic SEO Setup"
      ],
    },
    {
      title: "Ignite*",
      subtitle: "Spark your business growth with a full website and essential tools.",
      price: "₹1,999",
      color: "from-blue-600 to-blue-800",
      features: [
        "1–5 Page Responsive Website",
        "Advanced SEO Setup",
        "Google Business Profile Setup",
        "1-Month Maintenance",
        "Social Media Setup (1 Platform)",
      ],
    },
    {
      title: "Momentum*",
      subtitle: "Fuel your brand’s growth with custom designs and marketing power.",
      price: "₹2,999",
      color: "from-green-600 to-green-800",
      features: [
        "Custom Website (up to 10 Pages)",
        "On-Page SEO Optimization",
        "Blog Setup",
        "2 Social Media Platforms (Weekly Posts)",
        "1 Ad Campaign (Facebook / Google)",
      ],
    },
    {
      title: "Velocity*",
      subtitle: "Accelerate your established business with advanced strategy and analytics.",
      price: "₹4,999",
      color: "from-purple-600 to-purple-800",
      features: [
        "Advanced Website",
        "SEO + Content Strategy",
        "3–4 Social Media Platforms",
        "Paid Ads Setup & Management",
        "Performance Analytics Dashboard",
      ],
    },
   {
  title: "Custom Plan — TailorMade*",
  subtitle: "Get a plan built just for your unique needs.",
  price: "Custom Pricing",
  color: "from-pink-600 to-pink-800",
  features: [
    "Custom Website Development & Design",
    "Flexible Feature Integration Based on Your Requirements",
    "SEO & Performance Optimization",
    "Marketing Automation & Campaign Setup",
    "Scalable Solutions Tailored to Your Business",
  ]
},
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="flex flex-col items-center bg-gray-50 ">
        <h1 className="text-4xl md:text-5xl font-outfit font-bold text-gray-900 ">
          Pricing Plans
        </h1>
        <p className="text-gray-500 mb-12 text-center max-w-2xl">
          Flexible pricing plans built for every business stage — from startups to enterprises.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col bg-gradient-to-b ${plan.color} text-white p-8 rounded-2xl w-80 shadow-lg hover:scale-105 transition transform`}
            >
              <h2 className="text-2xl font-outfit font-bold mb-1">{plan.title}</h2>
              <p className="text-sm text-gray-200 mb-3 font-outfit">{plan.subtitle}</p>
              <p className="text-3xl font-outfit mb-6 text-yellow-300">{plan.price}</p>

              <ul className="space-y-2 font-outfit mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <i className="fas fa-check text-green-300 mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button fixed at bottom */}
              <div className="mt-auto">
                <button className="bg-white text-gray-900 font-semibold w-full py-2 rounded-lg hover:bg-gray-200 transition font-outfit">
                  Proceed
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

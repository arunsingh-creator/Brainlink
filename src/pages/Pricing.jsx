import React from "react";
import "../css/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "../common/Header";
import Footer from "../common/Footer";

export default function Pricing() {
  const plans = [
    {
       title: "Sites@299",
      subtitle: "Get your landing page live today",
      price: "₹299",
      color: "from-blue-900 to-gray-800",
        features: [
        "Single Landing Page Design",
        "Basic SEO Setup",
        "1-Month Technical Support",
      ],
    },
    {
      title: "Launch Plan",
      subtitle: "Perfect for startups & small businesses",
      price: "₹499 – ₹999",
      color: "from-blue-600 to-blue-800",
      features: [
        "1–5 Page Responsive Website",
        "Basic SEO Setup",
        "Google Business Profile Setup",
        "1-Month Maintenance",
        "Social Media Setup (1 Platform)",
      ],
    },
    {
      title: "Boost Plan",
      subtitle: "Ideal for growing brands",
      price: "₹1,499 – ₹2,499",
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
      title: "Scale Plan",
      subtitle: "For established companies ready to expand",
      price: "₹2,999 – ₹4,999",
      color: "from-purple-600 to-purple-800",
      features: [
        "Advanced Website with CMS",
        "SEO + Content Strategy",
        "3–4 Social Media Platforms",
        "Paid Ads Setup & Management",
        "Performance Analytics Dashboard",
      ],
    },
    {
      title: "ShopPro Plan",
      subtitle: "E-commerce websites made simple",
      price: "₹5,999 – ₹9,999",
      color: "from-pink-600 to-pink-800",
      features: [
        "Full E-commerce Website (Shopify / WordPress / Custom)",
        "Payment Gateway & Shipping Integration",
        "Product SEO Optimization",
        "Email Marketing Automation",
        "Monthly Performance Reports",
      ],
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-900 py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-outfit font-bold text-gray-900 dark:text-white mb-6">
          Pricing Plans
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-12 text-center max-w-2xl">
          Flexible pricing plans built for every business stage — from startups to enterprises.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col bg-gradient-to-b ${plan.color} text-white p-8 rounded-2xl w-80 shadow-lg hover:scale-105 transition transform`}
            >
              <h2 className="text-2xl font-outfit font-bold mb-1">{plan.title}</h2>
              <p className="text-sm text-gray-200 mb-3">{plan.subtitle}</p>
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
                  Choose Plan
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

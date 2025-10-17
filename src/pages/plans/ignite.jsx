import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import "../../css/index.css";

export default function Ignite() {
  const plan = {
    title: "Ignite*",
    subtitle:
      "Spark your business growth with a full website and essential tools.",
    price: "₹1,999",
    features: [
      "1–5 Page Responsive Website",
      "Advanced SEO Setup",
      "Google Business Profile Setup",
      "1-Month Maintenance",
      "Social Media Setup (1 Platform)",
    ],
    description: `The Ignite plan is designed for small businesses or startups who want a full online presence. 
    We create a professional 1–5 page website tailored to your brand, optimized for SEO, and fully responsive on all devices.
    This plan also includes Google Business Profile setup, 1 month of maintenance, and social media integration to boost visibility.`,
    extra: [
      "1 free round of revisions",
      "Optional blog setup",
      "Integration with analytics tools",
    ],
    color: "from-blue-600 to-blue-800",
  };

  return (
    <>
      <Header />

      <div className="min-h-screen flex flex-col items-center p-8 bg-gray-50 font-outfit">
        {/* Plan Header */}
        <div
          className={`flex flex-col bg-gradient-to-b ${plan.color} text-white p-8 rounded-2xl w-full max-w-3xl shadow-lg`}
        >
          <h1 className="text-5xl font-bold mb-2 font-outfit">{plan.title}</h1>
          <p className="text-gray-200 mb-4 text-lg font-outfit">{plan.subtitle}</p>
          <p className="text-4xl text-yellow-300 mb-6 font-outfit">{plan.price}</p>

          {/* Detailed Description */}
          <p className="mb-6 text-gray-100 font-outfit">{plan.description}</p>

          {/* Features */}
          <h2 className="text-2xl font-semibold mb-3 font-outfit">Features:</h2>
          <ul className="space-y-2 mb-6 font-outfit">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center">
                <i className="fas fa-check text-green-300 mr-2"></i>
                {feature}
              </li>
            ))}
          </ul>

          {/* Extra Add-ons */}
          {plan.extra.length > 0 && (
            <>
              <h2 className="text-2xl font-semibold mb-3 font-outfit">Extras:</h2>
              <ul className="space-y-2 mb-6 font-outfit">
                {plan.extra.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <i className="fas fa-star text-yellow-300 mr-2"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Back button */}
          <Link
            to="/pricing"
            className="bg-white text-gray-900 font-semibold font-outfit py-3 px-6 rounded-lg text-center hover:bg-gray-200 transition"
          >
            Back to Pricing
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import "../../css/index.css";

export default function Custom() {
  const plan = {
    title: "Custom Plan — TailorMade*",
    subtitle: "Get a plan built just for your unique needs.",
    price: "Custom Pricing",
    features: [
      "Custom Website Development & Design",
      "Flexible Feature Integration Based on Your Requirements",
      "SEO & Performance Optimization",
      "Marketing Automation & Campaign Setup",
      "Scalable Solutions Tailored to Your Business",
    ],
    description: `The Custom Plan is ideal for businesses with unique needs that require a completely tailored solution. 
    Get a custom website, personalized features, SEO and performance optimization, marketing automation, and scalable solutions that grow with your business.`,
    extra: [
      "Unlimited revisions",
      "Dedicated developer and support team",
      "Advanced marketing strategy consultation",
    ],
    color: "from-pink-600 to-pink-800",
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center p-8 bg-gray-50 font-outfit">
        <div
          className={`flex flex-col bg-gradient-to-b ${plan.color} text-white p-8 rounded-2xl w-full max-w-3xl shadow-lg`}
        >
          <h1 className="text-5xl font-bold mb-2 font-outfit">{plan.title}</h1>
          <p className="text-gray-200 mb-4 text-lg font-outfit">{plan.subtitle}</p>
          <p className="text-4xl text-yellow-300 mb-6 font-outfit">{plan.price}</p>
          <p className="mb-6 text-gray-100 font-outfit">{plan.description}</p>

          <h2 className="text-2xl font-semibold mb-3 font-outfit">Features:</h2>
          <ul className="space-y-2 mb-6 font-outfit">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center">
                <i className="fas fa-check text-green-300 mr-2"></i>
                {feature}
              </li>
            ))}
          </ul>

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

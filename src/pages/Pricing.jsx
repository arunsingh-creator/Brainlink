import React, { useRef, useState } from "react";
import "../css/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "../common/Header";
import Footer from "../common/Footer";

export default function Pricing() {
  const contactFormRef = useRef(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      title: "Sites@999",
      subtitle: "Get your landing page live today",
      price: "₹999",
      color: "from-blue-900 to-gray-800",
      features: [
        "Single Landing Page Design",
        "Basic SEO Setup"
      ],
    },
    {
      title: "Ignite",
      subtitle: "Spark your business growth with a full website and essential tools.",
      price: "₹1,499 - ₹1,999",
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
      title: "Momentum",
      subtitle: "Fuel your brand's growth with custom designs and marketing power.",
      price: "₹2,499 – ₹2,999",
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
      title: "Velocity",
      subtitle: "Accelerate your established business with advanced strategy and analytics.",
      price: "₹3,499 – ₹5,999",
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
      title: "Custom Plan — TailorMade",
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

  const handleProceedClick = (plan) => {
    setSelectedPlan(plan);
    // Smooth scroll to contact form
    contactFormRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-900 py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-outfit font-bold text-gray-900 dark:text-white mb-6">
          Pricing Plans
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-4 text-center max-w-2xl">
          Flexible pricing plans built for every business stage — from startups to enterprises.
        </p>
        <p className="text-gray-400 dark:text-gray-500 mb-12 text-center max-w-2xl text-sm">
          * All prices are base rates and may vary based on project requirements. Contact us for a detailed quote.
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

              <div className="mt-auto">
                <button 
                  onClick={() => handleProceedClick(plan)}
                  className="bg-white text-gray-900 font-semibold w-full py-2 rounded-lg hover:bg-gray-200 transition font-outfit"
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div ref={contactFormRef} className="bg-gray-100 dark:bg-gray-800 py-16 px-4">
        <ContactFormInline selectedPlan={selectedPlan} />
      </div>

      <Footer />
    </>
  );
}

// Inline Contact Form Component
function ContactFormInline({ selectedPlan }) {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setResult("Sending your inquiry...");
    
    const formDataObj = new FormData(event.target);
    if (selectedPlan) {
      formDataObj.append("plan", `${selectedPlan.title} - ${selectedPlan.price}`);
    }
    formDataObj.append("access_key", "795dd06f-a4f1-42cf-b7e9-e534375b53dc");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj
      });

      const data = await response.json();

      if (data.success) {
        setResult("✓ Thank you! We'll contact you within 24 hours.");
        event.target.reset();
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        setTimeout(() => setResult(""), 5000);
      } else {
        setResult("✗ Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("✗ Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-outfit font-bold text-gray-900 dark:text-white mb-2">
          Ready to Get Started?
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Fill out the form below and we'll get back to you within 24 hours
        </p>
        {selectedPlan && (
          <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg mt-4">
            <p className="text-sm font-medium">Selected: {selectedPlan.title} - {selectedPlan.price}</p>
          </div>
        )}
      </div>

      <form onSubmit={onSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition dark:bg-gray-800 dark:text-white ${
                errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
              } ${isSubmitting ? 'opacity-50' : ''}`}
              placeholder="John Doe"
              required
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition dark:bg-gray-800 dark:text-white ${
                errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
              } ${isSubmitting ? 'opacity-50' : ''}`}
              placeholder="john@example.com"
              required
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition dark:bg-gray-800 dark:text-white ${
                errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
              } ${isSubmitting ? 'opacity-50' : ''}`}
              placeholder="+91 98765 43210"
              required
            />
            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
          </div>

          {/* Company Field */}
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Company Name <span className="text-gray-400 text-xs">(Optional)</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition dark:bg-gray-800 dark:text-white ${
                isSubmitting ? 'opacity-50' : ''
              }`}
              placeholder="Your Company"
            />
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Project Details <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
            rows="5"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition resize-none dark:bg-gray-800 dark:text-white ${
              errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
            } ${isSubmitting ? 'opacity-50' : ''}`}
            placeholder="Tell us about your project requirements..."
            required
          ></textarea>
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
            isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            'Submit Inquiry'
          )}
        </button>

        {/* Result Message */}
        {result && (
          <div
            role="alert"
            className={`mt-4 p-4 rounded-lg text-center font-medium ${
              result.includes('✓') 
                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                : result.includes('✗')
                ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
            }`}
          >
            {result}
          </div>
        )}
      </form>

      <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-6">
        By submitting this form, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  );
}
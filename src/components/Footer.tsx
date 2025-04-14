
import React from "react";
import { Zap, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-brand-blue text-white">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Zap className="h-8 w-8 text-brand-orange" />
            <div>
              <h3 className="text-lg font-bold">Power Systems Reliability Evaluators</h3>
              <p className="text-sm text-gray-300">Expert Electrical Engineering Services</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#home" className="hover:text-brand-orange transition-colors">Home</a>
            <a href="#services" className="hover:text-brand-orange transition-colors">Services</a>
            <a href="#about" className="hover:text-brand-orange transition-colors">About</a>
            <a href="#contact" className="hover:text-brand-orange transition-colors">Contact</a>
            <Link to="/sitemap" className="hover:text-brand-orange transition-colors">Sitemap</Link>
          </div>
        </div>
        
        <div className="border-t border-brand-blue-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300 mb-4 md:mb-0">
            © {new Date().getFullYear()} Power Systems Reliability Evaluators, Ahmedabad. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-brand-orange hover:text-white transition-colors"
          >
            Back to top <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React, { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-8 w-8 text-brand-orange" />
            <div>
              <h1 className="text-lg md:text-xl font-bold text-brand-blue">
                Power Systems Reliability Evaluators
              </h1>
              <p className="text-xs md:text-sm text-brand-lightBlue">Ahmedabad, Gujarat</p>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-brand-blue hover:text-brand-orange focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-brand-blue hover:text-brand-orange font-medium">
              Home
            </a>
            <a href="#services" className="text-brand-blue hover:text-brand-orange font-medium">
              Services
            </a>
            <a href="#about" className="text-brand-blue hover:text-brand-orange font-medium">
              About
            </a>
            <a href="#contact" className="text-brand-blue hover:text-brand-orange font-medium">
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 animate-fade-in">
            <div className="flex flex-col space-y-4 bg-white py-4">
              <a 
                href="#home" 
                className="text-brand-blue hover:text-brand-orange px-4 py-2 font-medium"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a 
                href="#services" 
                className="text-brand-blue hover:text-brand-orange px-4 py-2 font-medium"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="text-brand-blue hover:text-brand-orange px-4 py-2 font-medium"
                onClick={toggleMenu}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-brand-blue hover:text-brand-orange px-4 py-2 font-medium"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

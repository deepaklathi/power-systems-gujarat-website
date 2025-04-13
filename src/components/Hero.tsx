
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-brand-blue to-brand-lightBlue overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            Expert Electrical Engineering Services in Gujarat
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Specialized in earthing impedance measurements, maintenance of electrical and electronic machines, 
            and comprehensive power system reliability solutions.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              className="bg-brand-orange hover:bg-brand-orange/90 text-white"
              size="lg"
              asChild
            >
              <a href="#contact">Contact Us</a>
            </Button>
            <Button 
              className="bg-transparent border border-white hover:bg-white/10 text-white"
              size="lg"
              asChild
            >
              <a href="#services">Our Services</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Service Areas */}
      <div className="bg-brand-lightGray py-4 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 text-center">
            <div className="text-brand-blue font-medium">Serving: </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              <span className="text-brand-blue font-medium">Ahmedabad</span>
              <span className="text-brand-blue font-medium">Gandhinagar</span>
              <span className="text-brand-blue font-medium">Baroda</span>
              <span className="text-brand-blue font-medium">All of Gujarat, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

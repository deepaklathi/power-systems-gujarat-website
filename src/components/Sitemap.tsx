
import React from "react";
import { Link } from "react-router-dom";
import { Home, Briefcase, User, PhoneCall, Map } from "lucide-react";

const Sitemap = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Site Map</h2>
        
        <div className="max-w-3xl mx-auto bg-brand-lightGray rounded-lg p-8 shadow-md">
          <ul className="space-y-6">
            <li>
              <div className="flex items-center gap-3 text-brand-blue hover:text-brand-orange transition-colors">
                <Home className="h-5 w-5" />
                <a href="#home" className="text-lg font-medium">Home</a>
              </div>
              <p className="mt-1 pl-8 text-brand-darkGray text-sm">Our main landing page with an overview of our services</p>
            </li>
            
            <li>
              <div className="flex items-center gap-3 text-brand-blue hover:text-brand-orange transition-colors">
                <Briefcase className="h-5 w-5" />
                <a href="#services" className="text-lg font-medium">Services</a>
              </div>
              <p className="mt-1 pl-8 text-brand-darkGray text-sm">Comprehensive list of electrical engineering services we offer</p>
            </li>
            
            <li>
              <div className="flex items-center gap-3 text-brand-blue hover:text-brand-orange transition-colors">
                <User className="h-5 w-5" />
                <a href="#about" className="text-lg font-medium">About</a>
              </div>
              <p className="mt-1 pl-8 text-brand-darkGray text-sm">Information about Dr. Deepak Lathi's expertise and background</p>
            </li>
            
            <li>
              <div className="flex items-center gap-3 text-brand-blue hover:text-brand-orange transition-colors">
                <PhoneCall className="h-5 w-5" />
                <a href="#contact" className="text-lg font-medium">Contact</a>
              </div>
              <p className="mt-1 pl-8 text-brand-darkGray text-sm">Contact information and inquiry form</p>
            </li>
            
            <li>
              <div className="flex items-center gap-3 text-brand-blue hover:text-brand-orange transition-colors">
                <Map className="h-5 w-5" />
                <Link to="/sitemap" className="text-lg font-medium">Sitemap</Link>
              </div>
              <p className="mt-1 pl-8 text-brand-darkGray text-sm">Overview of site structure and navigation</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sitemap;

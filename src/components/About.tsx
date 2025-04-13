
import React from "react";
import { ExternalLink, Award, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-brand-lightGray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-brand-blue mb-6">About Dr. Deepak Lathi</h2>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-brand-orange mr-2" />
                <h3 className="text-xl font-semibold text-brand-blue">Research Electrical Engineer</h3>
              </div>
              <p className="text-brand-darkGray mb-4">
                With over 30 years of experience in Industrial Electrical and Power Electronics Systems, 
                Dr. Deepak Lathi brings extensive expertise to every project.
              </p>
              
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-brand-orange mr-2" />
                <h3 className="text-xl font-semibold text-brand-blue">PhD Research</h3>
              </div>
              <p className="text-brand-darkGray mb-4">
                Specialized research in "Impulse Measurements in Earthing Systems"
              </p>
              <a 
                href="http://orca.cf.ac.uk/44776/2/Final%20Thesis%20copy.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-brand-lightBlue hover:text-brand-blue"
              >
                View Research Paper <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-brand-blue mb-4">Areas of Expertise</h3>
              <ul className="space-y-2 text-brand-darkGray">
                <li>• Design and Development of High Voltage Power Supplies</li>
                <li>• Analysis of Earthing Systems</li>
                <li>• Power System Modeling</li>
                <li>• Industrial Automation using PLC and SCADA</li>
                <li>• Substation Design and Fault Current Calculations</li>
                <li>• Electrical Machine Design</li>
                <li>• Predictive and Preventive Maintenance</li>
                <li>• Power Factor Improvement Services</li>
                <li>• Troubleshooting of CNC and Plastic Processing Machines</li>
              </ul>
            </div>
          </div>
          
          <div>
            <div className="grid grid-cols-2 gap-6 h-full">
              <div className="space-y-6">
                <img 
                  src="https://web.archive.org/web/20230426045211im_/https://lh3.googleusercontent.com/p/AF1QipO5qjvC_9tb4WXaANtHOHAkBipR6MIw4Ytxzuca=w960-h960-n-o-v1" 
                  alt="Electrical equipment" 
                  className="rounded-lg shadow-md object-cover w-full h-[200px]"
                />
                <img 
                  src="https://web.archive.org/web/20230426045211im_/https://lh3.googleusercontent.com/p/AF1QipPFXeFzcbdwTySAATbtCkg2cn9hN7PytCT1bpre=w960-h960-n-o-v1" 
                  alt="Electrical testing" 
                  className="rounded-lg shadow-md object-cover w-full h-[200px]"
                />
              </div>
              <div className="space-y-6 mt-12">
                <img 
                  src="https://web.archive.org/web/20230426045211im_/https://lh3.googleusercontent.com/p/AF1QipO7IUezsIyb2-P_9gF1-vnNnJky6qG6uPbQ8eWK=w960-h960-n-o-v1" 
                  alt="Electrical equipment" 
                  className="rounded-lg shadow-md object-cover w-full h-[200px]"
                />
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4D16AQFMHAV0-FzATw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1678007035334?e=1750291200&v=beta&t=sYYPUosS75-qlf8aEalLeblzuI4pEPlCWAY7aDlZPU0" 
                  alt="Electrical substation" 
                  className="rounded-lg shadow-md object-cover w-full h-[200px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

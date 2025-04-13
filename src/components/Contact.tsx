
import React from "react";
import { Phone, Mail, MapPin, Clock, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const openingHours = [
    { day: "Monday", hours: "10:00 am – 7:00 pm" },
    { day: "Tuesday", hours: "10:00 am – 7:00 pm" },
    { day: "Wednesday", hours: "10:00 am – 7:00 pm" },
    { day: "Thursday", hours: "10:00 am – 7:00 pm" },
    { day: "Friday", hours: "10:00 am – 7:00 pm" },
    { day: "Saturday", hours: "10:00 am – 7:00 pm" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-brand-blue mb-4">Contact Us</h2>
          <p className="text-lg text-brand-darkGray max-w-3xl mx-auto">
            Reach out to us for consultations, service inquiries, or to discuss your electrical engineering needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-brand-lightGray p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-brand-blue mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-brand-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-brand-blue">Phone</h4>
                  <a href="tel:+919408481592" className="text-brand-darkGray hover:text-brand-blue">
                    +91 9408481592
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-brand-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-brand-blue">Email</h4>
                  <a href="mailto:deepaklathi@gmail.com" className="text-brand-darkGray hover:text-brand-blue">
                    deepaklathi@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-brand-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-brand-blue">Address</h4>
                  <p className="text-brand-darkGray">
                    B23, Sharnam 8, Opp Shyam Tirth Apartment<br />
                    Near Prernatirth Jain Derasar, Jodhpur, Satellite<br />
                    Ahmedabad, Gujarat 380015, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Linkedin className="h-5 w-5 text-brand-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-brand-blue">LinkedIn Profile</h4>
                  <a 
                    href="https://www.linkedin.com/in/deepak-lathi-1136262/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-darkGray hover:text-brand-blue"
                  >
                    https://www.linkedin.com/in/deepak-lathi-1136262/
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-brand-blue mb-4">Business Hours</h3>
              <div className="space-y-2">
                {openingHours.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="font-medium">{item.day}:</span>
                    <span className={item.day === "Sunday" ? "text-brand-orange" : ""}>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <div className="rounded-lg overflow-hidden h-[400px] shadow-md">
              <iframe 
                src="https://maps.app.goo.gl/FUqabFTLiaQV8Mix9" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy"
                title="Power Systems Reliability Evaluators map location"
              ></iframe>
            </div>
            
            <div className="mt-8 bg-brand-blue p-6 rounded-lg text-white">
              <h3 className="text-xl font-semibold mb-4">Request Service</h3>
              <p className="mb-6">
                Contact us directly for inquiries about our electrical engineering services, consultations, 
                or to schedule a maintenance visit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-brand-orange hover:bg-brand-orange/90 text-white w-full sm:w-auto"
                  asChild
                >
                  <a href="tel:+919408481592">Call Now</a>
                </Button>
                <Button 
                  className="bg-transparent border border-white hover:bg-white/10 text-white w-full sm:w-auto"
                  asChild
                >
                  <a href="mailto:deepaklathi@gmail.com">Email Us</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

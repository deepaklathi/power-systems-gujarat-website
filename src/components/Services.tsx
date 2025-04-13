
import React from "react";
import { Check, Zap, Settings, Activity, Shield, Cpu } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Zap className="h-10 w-10 text-brand-orange" />,
      title: "Earthing Impedance Measurements",
      description: "Expert assessment and measurements of earthing systems to ensure safety and compliance with standards."
    },
    {
      icon: <Settings className="h-10 w-10 text-brand-orange" />,
      title: "Equipment Maintenance",
      description: "Breakdown and preventive maintenance of transformers, motors, drives and industrial machinery."
    },
    {
      icon: <Activity className="h-10 w-10 text-brand-orange" />,
      title: "Power System Modeling",
      description: "Advanced power system simulations using MATLAB/Simulink, ETAP, CDEGS, and PSPICE."
    },
    {
      icon: <Shield className="h-10 w-10 text-brand-orange" />,
      title: "Industrial Automation",
      description: "PLC, SCADA, and control system implementation for industrial automation needs."
    },
    {
      icon: <Cpu className="h-10 w-10 text-brand-orange" />,
      title: "Design & Development",
      description: "Custom design of power supplies and electrical systems for specialized applications."
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-brand-blue mb-4">Our Engineering Services</h2>
          <p className="text-lg text-brand-darkGray max-w-3xl mx-auto">
            Comprehensive electrical engineering solutions for industrial and commercial clients throughout Gujarat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div>{service.icon}</div>
                <CardTitle className="text-xl text-brand-blue">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-brand-darkGray">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-brand-lightGray rounded-lg p-6 md:p-10">
          <h3 className="text-xl md:text-2xl font-semibold text-brand-blue mb-6">Specialized Engineering Capabilities</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
            {[
              "Transformer Design & Maintenance",
              "AC & DC Drive Systems",
              "Electrical Machine Design",
              "Substation Design",
              "Fault Current Calculations",
              "Power Factor Improvement",
              "CNC Machine Troubleshooting",
              "Plastic Processing Machine Maintenance",
              "Power System Protection",
              "Numerical Control Relays",
              "Circuit Breaker Maintenance",
              "CT/PT Sets"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-brand-orange flex-shrink-0" />
                <span className="text-brand-darkGray">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

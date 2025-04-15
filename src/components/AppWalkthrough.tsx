
import React, { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

const AppWalkthrough = () => {
  const [activeStep, setActiveStep] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const steps = [
    {
      number: 1,
      title: "Find Doctors",
      description:
        "Search for doctors in your wilaya or anywhere in Algeria using filters for specialty, availability, and ratings.",
      image: "/placeholder.svg",
    },
    {
      number: 2,
      title: "Contact & Consult",
      description:
        "Connect directly with doctors or their assistants through our easy-to-use messaging system to discuss your needs.",
      image: "/placeholder.svg",
    },
    {
      number: 3,
      title: "Book Appointments",
      description:
        "Select a convenient time slot and book your appointment with just a few taps. Receive instant confirmation.",
      image: "/placeholder.svg",
    },
    {
      number: 4,
      title: "Activate Free Trial",
      description:
        "Add services to your 'golding cart' to automatically unlock your first week free trial period.",
      image: "/placeholder.svg",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.7 && rect.bottom >= window.innerHeight * 0.3) {
          // Start auto-advancing through steps if not already started
          if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
              setActiveStep((prev) => (prev % 4) + 1);
            }, 3000);
          }
        } else {
          // Clear interval when section is not in view
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initially
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section id="walkthrough" className="py-20 bg-gradient-to-br from-medical-light/50 to-white overflow-hidden">
      <div className="section-container" ref={sectionRef}>
        <h2 className="section-title">
          How <span className="text-medical-primary">It Works</span>
        </h2>
        
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Follow these simple steps to connect with healthcare professionals and
          manage your appointments with ease.
        </p>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 h-[400px] flex items-center justify-center relative overflow-hidden">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className={`absolute inset-0 p-8 flex flex-col justify-center transition-all duration-500 ${
                    activeStep === step.number
                      ? "opacity-100 transform translate-y-0 z-10"
                      : "opacity-0 transform translate-y-8 z-0"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-3 text-medical-primary">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="rounded-lg max-h-40 mx-auto"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="space-y-6">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className={`flex items-start gap-4 p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                    activeStep === step.number
                      ? "bg-medical-primary text-white shadow-md"
                      : "bg-white hover:bg-medical-light"
                  }`}
                  onClick={() => setActiveStep(step.number)}
                >
                  <div
                    className={`rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                      activeStep === step.number
                        ? "bg-white text-medical-primary"
                        : "bg-medical-light text-medical-primary"
                    }`}
                  >
                    {activeStep === step.number ? <Check className="h-5 w-5" /> : step.number}
                  </div>
                  <div>
                    <h4 className="font-semibold">{step.title}</h4>
                    <p className={activeStep === step.number ? "text-white/90" : "text-gray-500"}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppWalkthrough;

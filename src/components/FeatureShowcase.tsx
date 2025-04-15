
import React from "react";
import { MapPin, MessageCircle, Calendar, Gift } from "lucide-react";
import AnimatedIllustration from "./AnimatedIllustration";

const FeatureShowcase = () => {
  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-medical-primary mb-4" />,
      title: "Doctor Finder",
      description: "Locate doctors in your wilaya or any other region in Algeria with ease.",
      illustration: "doctor",
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-medical-primary mb-4" />,
      title: "Direct Communication",
      description: "Chat directly with doctors or their assistants to get quick responses.",
      illustration: "communication",
    },
    {
      icon: <Calendar className="h-8 w-8 text-medical-primary mb-4" />,
      title: "Easy Booking",
      description: "Book appointments with a few taps and manage your schedule effortlessly.",
      illustration: "appointment",
    },
    {
      icon: <Gift className="h-8 w-8 text-medical-primary mb-4" />,
      title: "Free Trial Week",
      description: "Add services to your 'golding cart' to enjoy a free week trial.",
      illustration: "promotion",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">
          Powerful Features at Your <span className="text-medical-primary">Fingertips</span>
        </h2>
        
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Our medical service app provides seamless access to healthcare
          professionals with tools designed to make your experience smooth and
          efficient.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`feature-card flex flex-col lg:flex-row items-center lg:items-start gap-6 ${
                index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right"
              }`}
            >
              <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="rounded-full bg-medical-light p-4 mb-4 inline-flex">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
              <div className="lg:w-1/2">
                <AnimatedIllustration
                  type={feature.illustration as any}
                  className="w-60 h-60 mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;

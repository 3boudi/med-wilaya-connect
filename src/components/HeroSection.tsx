
import React, { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import AnimatedIllustration from "./AnimatedIllustration";

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple animation on load
    const title = titleRef.current;
    const description = descriptionRef.current;
    const cta = ctaRef.current;
    const illustration = illustrationRef.current;

    if (title && description && cta && illustration) {
      title.classList.add("animate-fade-in");
      
      // Add a small delay for staggered animation
      setTimeout(() => {
        description.classList.add("animate-fade-in");
      }, 200);
      
      setTimeout(() => {
        cta.classList.add("animate-fade-in");
      }, 400);
      
      setTimeout(() => {
        illustration.classList.add("animate-fade-in");
      }, 600);
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white via-medical-light to-white opacity-70 z-0"></div>
      <div className="section-container relative z-10 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
          <h1
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 opacity-0"
          >
            Find Doctors Near You in{" "}
            <span className="text-medical-primary">Any Wilaya</span>
          </h1>
          
          <p
            ref={descriptionRef}
            className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl opacity-0"
          >
            Connect with local doctors or those in other regions, communicate directly
            with them or their assistants, and book appointments easily through our
            intuitive platform.
          </p>
          
          <div
            ref={ctaRef}
            className="mt-8 flex flex-col sm:flex-row gap-4 opacity-0"
          >
            <a href="#features" className="btn-primary">
              Explore Features
            </a>
            <a href="#walkthrough" className="btn-secondary">
              How It Works
            </a>
          </div>
        </div>
        
        <div
          ref={illustrationRef}
          className="w-full lg:w-1/2 flex justify-center opacity-0"
        >
          <AnimatedIllustration type="doctor" className="w-full max-w-md" />
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-indicator-dot"></div>
        <ChevronDown className="h-4 w-4 animate-bounce" />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default HeroSection;

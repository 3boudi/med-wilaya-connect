
import React from "react";
import { Clock, CheckCircle, ShoppingCart } from "lucide-react";

const PromotionSection = () => {
  return (
    <section
      id="promotion"
      className="py-20 bg-medical-primary relative overflow-hidden"
    >
      <div className="section-container text-white relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 animate-float">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                First Week <span className="text-yellow-300">FREE</span>
              </h2>
              
              <p className="text-lg mb-8 text-white/90">
                Add any services to your "golding cart" and automatically get your first
                week completely free. Try our premium features without any
                commitment.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-yellow-300" />
                  <span>Unlimited doctor searches</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-yellow-300" />
                  <span>Direct messaging with healthcare providers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-yellow-300" />
                  <span>Priority appointment booking</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-yellow-300" />
                  <span>No credit card required</span>
                </div>
              </div>
              
              <div className="mt-10">
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 bg-white text-medical-primary font-bold py-3 px-6 rounded-full hover:shadow-lg hover:bg-yellow-50 transition-all"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Golding Cart</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute top-0 right-0 -mt-4 -mr-4">
                <div className="bg-yellow-300 text-medical-primary font-bold py-2 px-4 rounded-full animate-pulse-light">
                  Limited Time Offer!
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center justify-center mb-8">
                  <Clock className="h-16 w-16 text-yellow-300" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-center">
                  How the Free Trial Works
                </h3>
                
                <ol className="space-y-6">
                  <li className="flex gap-4">
                    <span className="bg-white/20 h-8 w-8 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                      1
                    </span>
                    <div>
                      <h4 className="font-semibold">Browse Services</h4>
                      <p className="text-white/80">
                        Explore our comprehensive range of medical services
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex gap-4">
                    <span className="bg-white/20 h-8 w-8 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                      2
                    </span>
                    <div>
                      <h4 className="font-semibold">Add to Your Golding Cart</h4>
                      <p className="text-white/80">
                        Select the services you're interested in
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex gap-4">
                    <span className="bg-white/20 h-8 w-8 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                      3
                    </span>
                    <div>
                      <h4 className="font-semibold">Enjoy 7 Days Free</h4>
                      <p className="text-white/80">
                        Your free trial automatically begins, no payment needed
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-medical-secondary rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-medical-accent rounded-full blur-3xl opacity-20"></div>
    </section>
  );
};

export default PromotionSection;

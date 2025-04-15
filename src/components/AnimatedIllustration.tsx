
import React from "react";

type AnimatedIllustrationProps = {
  type: "doctor" | "communication" | "appointment" | "promotion";
  className?: string;
};

const AnimatedIllustration: React.FC<AnimatedIllustrationProps> = ({
  type,
  className = "",
}) => {
  // Based on the type, render different SVG illustrations
  // These are simplified placeholder SVGs - in a real app, you would use more detailed SVGs
  
  const renderIllustration = () => {
    switch (type) {
      case "doctor":
        return (
          <div className={`relative animate-float ${className}`}>
            {/* Doctor finder illustration */}
            <svg
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <circle cx="100" cy="100" r="80" fill="#D3E4FD" />
              <circle
                cx="100"
                cy="70"
                r="30"
                fill="#9b87f5"
                className="animate-pulse-light"
              />
              <rect x="70" y="100" width="60" height="80" rx="10" fill="#33C3F0" />
              <circle cx="85" cy="120" r="5" fill="white" />
              <circle cx="115" cy="120" r="5" fill="white" />
              <path
                d="M85 140C85 140 95 150 115 140"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="150" cy="60" r="15" fill="#D6BCFA" />
              <circle cx="150" cy="60" r="10" fill="#1EAEDB" />
              <circle cx="150" cy="60" r="5" fill="white" />
            </svg>
          </div>
        );

      case "communication":
        return (
          <div className={`relative animate-float ${className}`}>
            {/* Communication illustration */}
            <svg
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <rect x="20" y="60" width="70" height="100" rx="10" fill="#D3E4FD" />
              <rect x="110" y="40" width="70" height="100" rx="10" fill="#9b87f5" />
              <path
                d="M50 100L60 110L80 90"
                stroke="#33C3F0"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M145 80C145 80 125 100 145 120"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-pulse-light"
              />
              <circle cx="40" cy="150" r="10" fill="#1EAEDB" />
              <circle cx="60" cy="150" r="10" fill="#D6BCFA" />
            </svg>
          </div>
        );

      case "appointment":
        return (
          <div className={`relative animate-float ${className}`}>
            {/* Appointment booking illustration */}
            <svg
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <rect x="40" y="40" width="120" height="120" rx="10" fill="#D3E4FD" />
              <rect x="50" y="60" width="100" height="90" rx="5" fill="white" />
              <rect x="60" y="50" width="80" height="10" rx="5" fill="#33C3F0" />
              <rect
                x="60"
                y="80"
                width="30"
                height="20"
                rx="3"
                fill="#9b87f5"
                className="animate-pulse-light"
              />
              <rect x="60" y="110" width="30" height="20" rx="3" fill="#D6BCFA" />
              <rect x="100" y="80" width="30" height="20" rx="3" fill="#D6BCFA" />
              <rect x="100" y="110" width="30" height="20" rx="3" fill="#9b87f5" />
              <circle cx="150" cy="50" r="15" fill="#1EAEDB" />
              <path
                d="M145 50L150 55L160 45"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        );

      case "promotion":
        return (
          <div className={`relative animate-float ${className}`}>
            {/* Promotion illustration */}
            <svg
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <circle cx="100" cy="100" r="60" fill="#D3E4FD" />
              <circle cx="100" cy="100" r="50" fill="#9b87f5" />
              <circle cx="100" cy="100" r="40" fill="white" />
              <path
                d="M90 80L110 80"
                stroke="#33C3F0"
                strokeWidth="6"
                strokeLinecap="round"
                className="animate-pulse-light"
              />
              <path
                d="M90 100L110 100"
                stroke="#33C3F0"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M90 120L110 120"
                stroke="#33C3F0"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <circle cx="140" cy="50" r="20" fill="#D6BCFA" />
              <text
                x="140"
                y="55"
                textAnchor="middle"
                fontSize="20"
                fontWeight="bold"
                fill="#1EAEDB"
              >
                7
              </text>
              <path
                d="M130 40L150 40"
                stroke="#1EAEDB"
                strokeWidth="2"
              />
            </svg>
          </div>
        );

      default:
        return <div className={className}>Illustration not found</div>;
    }
  };

  return renderIllustration();
};

export default AnimatedIllustration;

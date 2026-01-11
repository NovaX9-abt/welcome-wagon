import screenshotStep1 from "@/assets/screenshot_section1_step1.png";

export const ScreenshotSection1Step1 = () => {
  return (
    <div className="relative">
      <img
        src={screenshotStep1}
        alt="n8n homepage showing Get started for free button"
        className="w-full h-auto"
      />
      
      {/* Left arrow pointing to button */}
      <svg
        className="absolute w-16 h-16 md:w-20 md:h-20 drop-shadow-lg"
        style={{ 
          top: '38%', 
          left: '8%',
          filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
        }}
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M10 50 L70 50 L55 35 M70 50 L55 65"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      
      {/* Bottom arrow pointing up to button */}
      <svg
        className="absolute w-16 h-16 md:w-20 md:h-20 drop-shadow-lg"
        style={{ 
          top: '52%', 
          left: '18%',
          filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
        }}
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M50 90 L50 30 L35 45 M50 30 L65 45"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
